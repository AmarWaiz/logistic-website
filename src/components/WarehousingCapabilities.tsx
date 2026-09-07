import { useState } from 'react'
import { renderMultiline } from '../lib/multiline'
import type { NumberedFeature } from '../lib/cms'

const DEFAULT_ACTIVE = 1

interface WarehousingCapabilitiesProps {
  title: string
  cards: NumberedFeature[]
}

export default function WarehousingCapabilities({ title, cards }: WarehousingCapabilitiesProps) {
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <section className="capabilities" id="warehousing-capabilities">
      <div className="capabilities__inner">
        <h2 className="faq__title">{renderMultiline(title)}</h2>

        <ul
          className="capabilities__list"
          onMouseLeave={() => setActive(DEFAULT_ACTIVE)}
        >
          {cards.map((card, index) => (
            <li
              className={
                index === active
                  ? 'capabilities__card capabilities__card--active'
                  : 'capabilities__card'
              }
              key={card.id}
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
