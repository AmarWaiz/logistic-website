import { useState } from 'react'

const CARDS = [
  {
    number: '01',
    title: 'Multi-Node Storage Architecture',
    text: 'Facilities positioned near key transit hubs and ports, minimizing last-leg transportation time.',
  },
  {
    number: '02',
    title: 'Real-Time Inventory Visibility',
    text: 'Track stock levels, movement, and turnover across every warehouse from a single dashboard.',
  },
  {
    number: '03',
    title: 'Scalable Storage Capacity',
    text: 'Flex up during peak season and down during slow periods, without long-term lease commitments.',
  },
  {
    number: '04',
    title: 'Rapid Pickup & Turnaround',
    text: 'Optimized dock scheduling and pallet turnover engineered for speed, not queues.',
  },
]

const DEFAULT_ACTIVE = 1

export default function WarehousingCapabilities() {
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <section className="capabilities" id="warehousing-capabilities">
      <div className="capabilities__inner">
        <h2 className="faq__title">
          Why Choose Our Warehousing &amp;
          <br />
          Distribution Network
        </h2>

        <ul
          className="capabilities__list"
          onMouseLeave={() => setActive(DEFAULT_ACTIVE)}
        >
          {CARDS.map((card, index) => (
            <li
              className={
                index === active
                  ? 'capabilities__card capabilities__card--active'
                  : 'capabilities__card'
              }
              key={card.number}
              tabIndex={0}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="capabilities__number">{card.number}</span>
              <h3 className="capabilities__title">{card.title}</h3>
              <p className="capabilities__text">{card.text}</p>
              <a
                href="#/contact"
                className="capabilities__link"
                onClick={(event) => event.stopPropagation()}
              >
                Learn more
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
