const CARDS = [
  {
    title: 'Warehousing & Distribution',
    text: 'Multi-node storage architecture located adjacent to critical transit nodes, engineered for rapid pallet turnover.',
    active: true,
    href: '#/services/warehousing',
    icon: (
      <>
        <path d="M3 21V9l9-5 9 5v12" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: 'Inventory Management',
    text: 'Real-time stock visibility across every node, so you always know what you have and where it sits.',
    active: false,
    icon: (
      <>
        <rect x="3.5" y="3.5" width="8" height="8" rx="1.5" />
        <rect x="12.5" y="3.5" width="8" height="8" rx="1.5" />
        <rect x="3.5" y="12.5" width="8" height="8" rx="1.5" />
        <rect x="12.5" y="12.5" width="8" height="8" rx="1.5" />
      </>
    ),
  },
  {
    title: 'Customs Brokerage',
    text: 'Documentation and clearance handled in-house, keeping cross-border shipments moving without delay.',
    active: false,
    icon: (
      <>
        <path d="M12 3 4 6v6c0 4.6 3.2 8.3 8 9 4.8-.7 8-4.4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Reverse Logistics & Returns',
    text: 'Streamlined return processing that gets inventory back into circulation faster.',
    active: false,
    icon: (
      <>
        <path d="M3 12a9 9 0 1 1 3 6.7" />
        <path d="M3 21v-5h5" />
      </>
    ),
  },
  {
    title: 'Freight Consolidation',
    text: 'Shared truckload capacity that lowers per-unit shipping cost without slowing transit time.',
    active: false,
    icon: (
      <>
        <rect x="2.5" y="8" width="12" height="9" rx="1.2" />
        <path d="M14.5 11h3.3L21 14.5V17h-6.5" />
        <circle cx="7" cy="18.5" r="1.6" />
        <circle cx="17" cy="18.5" r="1.6" />
      </>
    ),
  },
  {
    title: 'Cross-Docking Operations',
    text: 'Freight transferred straight from inbound to outbound, cutting storage time and handling cost.',
    active: true,
    icon: (
      <>
        <path d="M3 8h13" />
        <path d="m12 4 4 4-4 4" />
        <path d="M21 16H8" />
        <path d="m12 12-4 4 4 4" />
      </>
    ),
  },
]

export default function Distribution() {
  return (
    <section className="distribution">
      <div className="distribution__inner">
        <div className="distribution__head">
          <h2 className="distribution__title">
            Why Businesses Choose Our Logistics Network
          </h2>
          <p className="distribution__subtitle">
            Whether you're shipping hundreds or hundreds of thousands of
            orders, our intelligent 3PL platform helps you move faster,
            reduce costs.
          </p>
        </div>

        <ul className="distribution__grid">
          {CARDS.map((card) => {
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
                    {card.icon}
                  </svg>
                </span>
                <h3 className="distribution__card-title">{card.title}</h3>
                <p className="distribution__card-text">{card.text}</p>
              </>
            )

            return (
              <li
                className={
                  card.active
                    ? 'distribution__card distribution__card--active'
                    : 'distribution__card'
                }
                key={card.title}
              >
                {card.href ? (
                  <a href={card.href} className="distribution__card-link">
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
