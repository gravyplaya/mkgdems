import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config: configPromise })
    const formData = await req.formData()
    
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // 1. Ensure a "Contact Form" exists in the forms collection
    // We search for it or create it if missing so we can link submissions to it
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

    // 2. Create the form submission
    // This will trigger the afterChange hook we added to send the email
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        submissionData: [
          { field: 'name', value: name as string },
          { field: 'email', value: email as string },
          { field: 'subject', value: subject as string },
          { field: 'message', value: message as string },
        ],
      },
    })

    // 3. Return "OK" for the php-email-form script
    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response('Error: ' + (error instanceof Error ? error.message : 'Unknown error'), { status: 500 })
  }
}
