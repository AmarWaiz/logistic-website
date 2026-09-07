import type { DistributionCard } from '../lib/cms'

/* Icon artwork stays in code, matched to each card by its position. */
const ICONS = [
  <>
    <path d="M3 21V9l9-5 9 5v12" />
    <path d="M9 21v-6h6v6" />
  </>,
  <>
    <rect x="3.5" y="3.5" width="8" height="8" rx="1.5" />
    <rect x="12.5" y="3.5" width="8" height="8" rx="1.5" />
    <rect x="3.5" y="12.5" width="8" height="8" rx="1.5" />
    <rect x="12.5" y="12.5" width="8" height="8" rx="1.5" />
  </>,
  <>
    <path d="M12 3 4 6v6c0 4.6 3.2 8.3 8 9 4.8-.7 8-4.4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
  <>
    <path d="M3 12a9 9 0 1 1 3 6.7" />
    <path d="M3 21v-5h5" />
  </>,
  <>
    <rect x="2.5" y="8" width="12" height="9" rx="1.2" />
    <path d="M14.5 11h3.3L21 14.5V17h-6.5" />
    <circle cx="7" cy="18.5" r="1.6" />
    <circle cx="17" cy="18.5" r="1.6" />
  </>,
  <>
    <path d="M3 8h13" />
    <path d="m12 4 4 4-4 4" />
    <path d="M21 16H8" />
    <path d="m12 12-4 4 4 4" />
  </>,
]

interface DistributionProps {
  title: string
  subtitle: string
  cards: DistributionCard[]
}

export default function Distribution({ title, subtitle, cards }: DistributionProps) {
  return (
    <section className="distribution">
      <div className="distribution__inner">
        <div className="distribution__head">
          <h2 className="distribution__title">{title}</h2>
          <p className="distribution__subtitle">{subtitle}</p>
        </div>

        <ul className="distribution__grid">
          {cards.map((card, index) => {
            const active = index === 0 || index === cards.length - 1
            const content = (
              <>
                <span className="distribution__mark" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[index % ICONS.length]}
                  </svg>
                </span>
                <h3 className="distribution__card-title">{card.title}</h3>
                <p className="distribution__card-text">{card.text}</p>
              </>
            )

            return (
              <li
                className={
                  active
                    ? 'distribution__card distribution__card--active'
                    : 'distribution__card'
                }
                key={card.id}
              >
                {card.link ? (
                  <a href={card.link} className="distribution__card-link">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
