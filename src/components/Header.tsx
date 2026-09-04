import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import logoWhite from '../assets/images/logo.png'
import { useHashRoute } from '../hooks/useHashRoute'

interface NavItem {
  label: string
  href: string
  /* Route this link marks as current, for `#/name` page links */
  route?: string
}

/* `#/name` are page routes; plain `#name` are in-page anchors */
const NAV: NavItem[] = [
  { label: 'Home', href: '#/', route: '' },
  { label: 'About Us', href: '#/about', route: 'about' },
  { label: 'Services', href: '#/services', route: 'services' },
  { label: 'Blogs', href: '#/blog', route: 'blog' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const route = useHashRoute()

  const isCurrent = (item: NavItem) =>
    item.route !== undefined &&
    (item.route === route || (item.route !== '' && route.startsWith(`${item.route}/`)))

  /* Lock background scroll while the mobile menu is open. */
  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  return (
    <header className="header" id="header">
      <nav className="header__nav">
        <a href="#/" className="header__logo" aria-label="ardle home">
          <img src={logoWhite} alt="ardle" className="header__logo-img" />
        </a>

        <ul className="header__links">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={
                  isCurrent(item)
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
                aria-current={isCurrent(item) ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#/contact"
          className="header__contact"
          aria-current={route === 'contact' ? 'page' : undefined}
        >
          Contact Us
        </a>

        {/* Mobile hamburger */}
        <button
          className="header__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          type="button"
        >
          <span className={`header__hamburger-line ${mobileOpen ? 'header__hamburger-line--open' : ''}`} />
          <span className={`header__hamburger-line ${mobileOpen ? 'header__hamburger-line--open' : ''}`} />
          <span className={`header__hamburger-line ${mobileOpen ? 'header__hamburger-line--open' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay — rendered via portal so it isn't confined
          to .header's own box (backdrop-filter on an ancestor turns it
          into the containing block for position:fixed descendants). */}
      {createPortal(
        <div className={`header__mobile-menu ${mobileOpen ? 'header__mobile-menu--open' : ''}`}>
          <div className="header__mobile-top">
            <a
              href="#/"
              className="header__logo"
              aria-label="ardle home"
              onClick={() => setMobileOpen(false)}
            >
              <img src={logoWhite} alt="ardle" className="header__logo-img" />
            </a>

            <button
              type="button"
              className="header__mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <ul className="header__mobile-list">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    isCurrent(item)
                      ? 'header__mobile-link header__mobile-link--active'
                      : 'header__mobile-link'
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#/contact"
                className="header__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>,
        document.body,
      )}
    </header>
  )
}
