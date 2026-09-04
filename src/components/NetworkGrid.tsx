import ship from '../assets/images/ship.jpg'
import trucks from '../assets/images/service2.jpg'
import port from '../assets/images/service1.jpg'
import air from '../assets/images/LogisticsDoes.webp'
import hub from '../assets/images/aboutbg.webp'

const CARDS = [
  {
    title: 'Ocean Freight',
    text: 'Multi-node storage architecture located adjacent to critical transit nodes, engineered for rapid pallet turnover.',
    src: ship,
    alt: 'Container ship under way at sea',
  },
  {
    title: 'Road Freight',
    text: 'Multi-node storage architecture located adjacent to critical transit nodes, engineered for rapid pallet turnover.',
    src: trucks,
    alt: 'Freight trucks at a container yard',
  },
  {
    title: 'Port Operations',
    text: 'Multi-node storage architecture located adjacent to critical transit nodes, engineered for rapid pallet turnover.',
    src: port,
    alt: 'Stacked containers at a port terminal',
  },
  {
    title: 'Air Freight',
    text: 'Multi-node storage architecture located adjacent to critical transit nodes, engineered for rapid pallet turnover.',
    src: air,
    alt: 'Cargo aircraft departing over a container terminal',
  },
  {
    title: 'Distribution Hubs',
    text: 'Multi-node storage architecture located adjacent to critical transit nodes, engineered for rapid pallet turnover.',
    src: hub,
    alt: 'Trucks staged at a distribution hub at dusk',
  },
  {
    title: 'Terminal Handling',
    text: 'Multi-node storage architecture located adjacent to critical transit nodes, engineered for rapid pallet turnover.',
    src: port,
    alt: 'Cranes loading containers at a port terminal',
  },
]

export default function NetworkGrid() {
  return (
    <section className="network-grid">
      <div className="network-grid__inner">
        <div className="network-grid__head">
          <h2 className="network-grid__title">
            Why Businesses Choose Our Logistics Network
          </h2>
          <p className="network-grid__subtitle">
            Whether you're shipping hundreds or hundreds of thousands of
            orders, our intelligent 3PL platform helps you move faster,
            reduce costs.
          </p>
        </div>

        <ul className="network-grid__list">
          {CARDS.map((card, index) => (
            <li className="network-grid__card" key={`${card.title}-${index}`}>
              <img
                className="network-grid__img"
                src={card.src}
                alt={card.alt}
                loading="lazy"
              />
              <div className="network-grid__body">
                <h3 className="network-grid__card-title">{card.title}</h3>
                <p className="network-grid__card-text">{card.text}</p>
                <a href="#/services" className="network-grid__explore">
                  Explore
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
