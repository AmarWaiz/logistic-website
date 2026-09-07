import logoFallback from '../assets/images/logo.png'
import watermarkFallback from '../assets/images/footerlogo.png'
import { useGlobal } from '../lib/cms/GlobalContext'
import { mediaUrl } from '../lib/cms'
import { renderMultiline } from '../lib/multiline'
import { SOCIAL_ICON_PATHS, SOCIAL_LABELS } from './socialIcons'

const FALLBACK_NAV = [
  { label: 'Service', href: '#/services' },
  { label: 'About us', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
  { label: 'FAQs', href: '#/' },
]

export default function Footer() {
  const { data: global } = useGlobal()

  const nav = global?.footerNavigation.length ? global.footerNavigation : FALLBACK_NAV
  const logo = global?.logo ? mediaUrl(global.logo.url) : logoFallback
  const watermark = global?.footerWatermark ? mediaUrl(global.footerWatermark.url) : watermarkFallback
  const siteName = global?.siteName ?? 'ardle'
  const tagline = global?.footerTagline ?? "Let's move your\nbusiness forward"
  const phone = global?.contactPhone
  const email = global?.contactEmail
  const address = global?.address
  const social = global?.socialLinks ?? []
  const copyright = global?.copyrightText ?? 'All rights reserved.'

  return (
    <footer className="footer">
      <img className="footer__watermark" src={watermark} alt="" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <img className="footer__logo" src={logo} alt={siteName} />
            <p className="footer__tagline">{renderMultiline(tagline)}</p>
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
              {nav.map((item) => (
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
              {phone && (
                <li>
                  <a className="footer__link" href={`tel:${phone.replace(/\s+/g, '')}`}>
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a className="footer__link" href={`mailto:${email}`}>
                    {email}
                  </a>
                </li>
              )}
              {address && (
                <li>
                  <address className="footer__address">{address}</address>
                </li>
              )}
            </ul>
          </div>

          <div className="footer__col footer__col--social">
            <h2 className="footer__col-title">Our social</h2>
            <ul className="footer__social">
              {social.map((item) => (
                <li key={item.id}>
                  <a
                    className="footer__social-link"
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

        <p className="footer__copyright">{copyright}</p>
      </div>
    </footer>
  )
}
