import logo from '../assets/images/logo.png'
import watermark from '../assets/images/footerlogo.png'

const NAV = [
  { label: 'Service', href: '#/services' },
  { label: 'About us', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
  { label: 'FAQs', href: '#/' },
]

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
    label: 'YouTube',
    href: '#',
    path: (
      <>
        <rect
          x="2.4"
          y="5.4"
          width="19.2"
          height="13.2"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M10.4 15.2V8.8L15.8 12l-5.4 3.2Z" />
      </>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    path: (
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.81-2.47v-3.2a5.79 5.79 0 1 0 5 5.73V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3a4.28 4.28 0 0 1-3.33-1.48Z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__watermark" src={watermark} alt="" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <img className="footer__logo" src={logo} alt="ardle" />
            <p className="footer__tagline">
              Let's move your
              <br />
              business forward
            </p>
            <a href="#/contact" className="footer__cta">
              Contact Us
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
            </a>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__col-title">Navigation</h2>
            <ul className="footer__list">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a className="footer__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__col-title">Our address</h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href="tel:+84965657893">
                  +84 965 657 893
                </a>
              </li>
              <li>
                <a className="footer__link" href="mailto:contact@capiproduct.com">
                  contact@capiproduct.com
                </a>
              </li>
              <li>
                <address className="footer__address">
                  35 To Vinh Dien str, Thanh Xuan, Hanoi, Vietnam
                </address>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__col--social">
            <h2 className="footer__col-title">Our social</h2>
            <ul className="footer__social">
              {SOCIAL.map((item) => (
                <li key={item.label}>
                  <a
                    className="footer__social-link"
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

            <button
              type="button"
              className="footer__top"
              aria-label="Back to top"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        <p className="footer__copyright">
          Copyrights 2025 Logistic. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
