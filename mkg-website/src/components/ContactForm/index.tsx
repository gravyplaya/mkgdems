'use client'

import { useEffect, useRef } from 'react'

export function ContactForm() {
  const timestampRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Set the timestamp when the form mounts — used server-side to reject
    // submissions that happen too fast (bots typically POST within 1-2 seconds)
    if (timestampRef.current) {
      timestampRef.current.value = String(Date.now())
    }
  }, [])

  return (
    <form action="/api/contact" method="post" className="php-email-form">
      {/* Honeypot field — hidden from real users, bots fill it automatically */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
        <label htmlFor="website-check">
          Leave this field empty
          <input
            type="text"
            id="website-check"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* Timestamp — set on mount, verified server-side */}
      <input type="hidden" name="_t" ref={timestampRef} value="" />

      <div className="row gy-4">
        <div className="col-md-6">
          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
        </div>

        <div className="col-md-6">
          <input type="email" className="form-control" name="email" placeholder="Your Email" required />
        </div>

        <div className="col-md-12">
          <input type="text" className="form-control" name="subject" placeholder="Subject" required />
        </div>

        <div className="col-md-12">
          <textarea className="form-control" name="message" rows={6} placeholder="Your Message" required></textarea>
        </div>

        <div className="col-md-12 text-center">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>

          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  )
}
