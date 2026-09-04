import { useState } from 'react'

const CARDS = [
  {
    number: '01',
    title: 'Predictive Risk Mitigation',
    text: 'Operational certainty is built into our architecture. Our monitoring systems identify & flag potential transit issues internally before they escalate.',
  },
  {
    number: '02',
    title: 'Real-Time Visibility',
    text: 'Track every shipment leg by leg with live status updates, so you always know exactly where your freight is and when it will arrive.',
  },
  {
    number: '03',
    title: 'Adaptive Route Optimization',
    text: 'Our platform continuously recalculates the fastest, most cost-effective routes as conditions change, keeping deliveries on schedule.',
  },
  {
    number: '04',
    title: 'Dedicated Support Teams',
    text: 'A named account team stays with your shipments end to end, ready to step in the moment something needs attention.',
  },
]

const DEFAULT_ACTIVE = 1

export default function Capabilities() {
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities__inner">
        <h2 className="faq__title">Powering Smarter Supply Chains</h2>
        <p className="faq__subtitle">
          Whether you're shipping hundreds or hundreds of thousands of
          orders, our intelligent 3PL platform helps you move faster,
          reduce costs.
        </p>

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
