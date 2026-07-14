import { getPayload } from 'payload'
import configPromise from '@/payload.config'

// --- Bot protection configuration ---
const MIN_SUBMISSION_TIME_MS = 3000 // 3 seconds — humans need longer to fill a form
const MAX_FIELD_LENGTH = 5000 // reject absurdly long fields
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple in-memory rate limiting (per IP, 1 submission per 60 seconds)
const RATE_LIMIT_WINDOW_MS = 60_000
const submissionTimestamps = new Map<string, number>()

function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const realIP = req.headers.get('x-real-ip')
  if (realIP) return realIP
  return 'unknown'
}

export async function POST(req: Request) {
  try {
    // --- 1. Rate limiting ---
    const clientIP = getClientIP(req)
    const now = Date.now()
    const lastSubmission = submissionTimestamps.get(clientIP)
    if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW_MS) {
      return new Response('Too many submissions. Please wait a minute and try again.', { status: 429 })
    }

    const formData = await req.formData()

    // --- 2. Honeypot check ---
    // Real users never fill this hidden field. If it has a value, it's a bot.
    const honeypot = formData.get('website')
    if (honeypot && String(honeypot).trim() !== '') {
      // Pretend success so the bot doesn't learn it was caught
      return new Response('OK', { status: 200 })
    }

    // --- 3. Time-based check ---
    // Bots submit forms within milliseconds. Real humans take at least a few seconds.
    const timestampStr = formData.get('_t')
    if (!timestampStr) {
      return new Response('Invalid submission. Please refresh the page and try again.', { status: 400 })
    }
    const submittedAt = Number(timestampStr)
    if (Number.isNaN(submittedAt)) {
      return new Response('Invalid submission. Please refresh the page and try again.', { status: 400 })
    }
    const elapsed = Date.now() - submittedAt
    if (elapsed < MIN_SUBMISSION_TIME_MS) {
      // Pretend success so the bot doesn't learn it was caught
      return new Response('OK', { status: 200 })
    }

    // --- 4. Extract and validate fields ---
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const subject = String(formData.get('subject') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !subject || !message) {
      return new Response('All fields are required.', { status: 400 })
    }

    if (!EMAIL_REGEX.test(email)) {
      return new Response('Please provide a valid email address.', { status: 400 })
    }

    if (name.length > MAX_FIELD_LENGTH || subject.length > MAX_FIELD_LENGTH || message.length > MAX_FIELD_LENGTH) {
      return new Response('Message too long. Please shorten your submission.', { status: 400 })
    }

    // --- 5. Record this submission for rate limiting ---
    submissionTimestamps.set(clientIP, now)
    // Clean up old entries periodically (keep map from growing unbounded)
    if (submissionTimestamps.size > 1000) {
      for (const [ip, ts] of submissionTimestamps.entries()) {
        if (now - ts > RATE_LIMIT_WINDOW_MS) {
          submissionTimestamps.delete(ip)
        }
      }
    }

    const payload = await getPayload({ config: configPromise })

    // 6. Ensure a "Contact Form" exists in the forms collection
    const contactForm = await payload.find({
      collection: 'forms',
      where: {
        title: {
          equals: 'Contact Form',
        },
      },
    })

    let formId
    if (contactForm.totalDocs > 0) {
      formId = contactForm.docs[0].id
    } else {
      const newForm = await payload.create({
        collection: 'forms',
        data: {
          title: 'Contact Form',
          confirmationType: 'message',
          confirmationMessage: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  tag: 'h2',
                  version: 1,
                  children: [{ type: 'text', text: 'Thank you!', version: 1 }],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
        },
      })
      formId = newForm.id
    }

    // 7. Create the form submission
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        submissionData: [
          { field: 'name', value: name },
          { field: 'email', value: email },
          { field: 'subject', value: subject },
          { field: 'message', value: message },
        ],
      },
    })

    // 8. Return "OK" for the php-email-form script
    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response('Error: ' + (error instanceof Error ? error.message : 'Unknown error'), { status: 500 })
  }
}
