const SOCIAL = [
  {
    label: 'Facebook',
    href: '#',
    path: (
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.4-.12-2.4 0-4 1.45-4 4.13V9.9H7.6V13h2.7v8h3.2Z" />
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    path: (
      <>
        <rect
          x="3.2"
          y="3.2"
          width="17.6"
          height="17.6"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="17.1" cy="6.9" r="1.2" />
      </>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    path: <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />,
  },
]

export default function ContactForm() {
  return (
    <section className="contact-form" id="contact-form">
      <div className="contact-form__inner">
        <div className="contact-form__head">
          <div>
            <p className="contact-form__eyebrow">Get Started</p>
            <h2 className="contact-form__title">
              Get in touch with us.
              <br />
              We're here to assist you.
            </h2>
          </div>

          <ul className="contact-form__social">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  className="contact-form__social-link"
                  href={item.href}
                  aria-label={item.label}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {item.path}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="contact-form__form"
          onSubmit={(event) => event.preventDefault()}
        >
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

          <button type="submit" className="contact-form__submit">
            Leave us a Message
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
      </div>

      <div className="contact-form__info">
        <div className="contact-form__info-inner">
          <div className="contact-form__info-intro">
            <p className="contact-form__eyebrow">Contact Info</p>
            <h3 className="contact-form__info-title">
              We are always
              <br />
              happy to assist you
            </h3>
          </div>

          <div className="contact-form__info-col">
            <span className="contact-form__info-label">Email Address</span>
            <span className="contact-form__info-rule">—</span>
            <a href="mailto:contact@capiproduct.com">contact@capiproduct.com</a>
            <p className="contact-form__info-hours">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>

          <div className="contact-form__info-col">
            <span className="contact-form__info-label">Number</span>
            <span className="contact-form__info-rule">—</span>
            <a href="tel:+84965657893">+84 965 657 893</a>
            <p className="contact-form__info-hours">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
