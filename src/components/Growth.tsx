import type { ReactNode } from 'react'
import media from '../assets/images/LogisticsDoes.webp'

type Feature = {
  title: string
  desc: string
  icon: ReactNode
}

const FEATURES: Feature[] = [
  {
    title: 'Smart Warehouse Management',
    desc: 'Real-time inventory visibility with optimized storage.',
    icon: (
      <>
        <path d="M3 21V9l9-5 9 5v12" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: 'Fast Order Fulfillment',
    desc: 'Same-day processing for faster customer delivery.',
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  },
  {
    title: 'Global Freight Network',
    desc: 'Air, sea, road, and rail transportation worldwide.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
      </>
    ),
  },
  {
    title: 'Live Shipment Tracking',
    desc: 'Know where every shipment is in real time.',
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
]

export default function Growth() {
  return (
    <section className="growth" id="growth">
      <div className="growth__inner">
        <div className="growth__media">
          <img
            className="growth__img"
            src={media}
            alt="Forklift loading pallets at a port warehouse, with a container ship and cargo plane at sunset"
            loading="lazy"
          />
        </div>

        <div className="growth__panel">
          <h2 className="growth__title">
            Warehouses Don't Create Growth. Smart Logistics Does.
          </h2>

          <a href="#/contact" className="growth__cta">
            <span>Get Started</span>
            <span className="growth__cta-badge" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          </a>

          <ul className="growth__features">
            {FEATURES.map((feature) => (
              <li className="growth__feature" key={feature.title}>
                <span className="growth__feature-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {feature.icon}
                  </svg>
                </span>
                <h3 className="growth__feature-title">{feature.title}</h3>
                <p className="growth__feature-desc">{feature.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
