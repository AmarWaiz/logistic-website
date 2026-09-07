import { useState } from 'react'
import { submitContactForm } from '../lib/cms'
import { renderMultiline } from '../lib/multiline'
import { SOCIAL_ICON_PATHS, SOCIAL_LABELS } from './socialIcons'
import type { SocialLink } from '../lib/cms'

interface ContactFormProps {
  eyebrow: string
  title: string
  infoEyebrow: string
  infoTitle: string
  assistanceHours: string
  phone?: string | null
  email?: string | null
  socialLinks: SocialLink[]
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm({
  eyebrow,
  title,
  infoEyebrow,
  infoTitle,
  assistanceHours,
  phone,
  email,
  socialLinks,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const contactEmail = String(data.get('email') ?? '').trim()
    const phoneValue = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    setStatus('submitting')
    const result = await submitContactForm({
      name,
      email: contactEmail,
      phone: phoneValue || undefined,
      message,
    })

    if (result.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setErrorMessage(result.message)
    }
  }

  return (
    <section className="contact-form" id="contact-form">
      <div className="contact-form__inner">
        <div className="contact-form__head">
          <div>
            <p className="contact-form__eyebrow">{eyebrow}</p>
            <h2 className="contact-form__title">{renderMultiline(title)}</h2>
          </div>

          <ul className="contact-form__social">
            {socialLinks.map((item) => (
              <li key={item.id}>
                <a
                  className="contact-form__social-link"
                  href={item.url}
                  aria-label={SOCIAL_LABELS[item.platform]}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {SOCIAL_ICON_PATHS[item.platform]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {status === 'success' ? (
          <p className="contact-form__success" role="status">
            Thanks for reaching out — we've received your message and will get back to you shortly.
          </p>
        ) : (
          <form className="contact-form__form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" type="text" name="name" required />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" type="email" name="email" required />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-phone">Phone Number (optional)</label>
                <input id="contact-phone" type="tel" name="phone" />
              </div>
            </div>

            <div className="contact-form__field contact-form__field--message">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={3} required />
            </div>

            {status === 'error' && (
              <p className="contact-form__error" role="alert">
                {errorMessage}
              </p>
            )}

            <button type="submit" className="contact-form__submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Leave us a Message'}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </form>
        )}
      </div>

      <div className="contact-form__info">
        <div className="contact-form__info-inner">
          <div className="contact-form__info-intro">
            <p className="contact-form__eyebrow">{infoEyebrow}</p>
            <h3 className="contact-form__info-title">{renderMultiline(infoTitle)}</h3>
          </div>

          {email && (
            <div className="contact-form__info-col">
              <span className="contact-form__info-label">Email Address</span>
              <span className="contact-form__info-rule">—</span>
              <a href={`mailto:${email}`}>{email}</a>
              <p className="contact-form__info-hours">{assistanceHours}</p>
            </div>
          )}

          {phone && (
            <div className="contact-form__info-col">
              <span className="contact-form__info-label">Number</span>
              <span className="contact-form__info-rule">—</span>
              <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
              <p className="contact-form__info-hours">{assistanceHours}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
