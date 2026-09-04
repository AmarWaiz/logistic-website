import ship from '../assets/images/ship.jpg'
import trucks from '../assets/images/service2.jpg'
import containers from '../assets/images/service1.jpg'
import air from '../assets/images/herobg.webp'
import lastMile from '../assets/images/LogisticsDoes.webp'

const SERVICES = [
  {
    label: 'Ocean Freight',
    text: 'Full and less-than-container load across 100+ ports.',
    src: ship,
    alt: 'Container ship under way at sea',
  },
  {
    label: 'Road Freight',
    text: 'Dedicated and shared truckload capacity, coast to coast.',
    src: trucks,
    alt: 'Freight trucks at a container yard',
  },
  {
    label: 'Warehousing',
    text: 'Bonded and general storage with real-time inventory.',
    src: containers,
    alt: 'Stacked containers at a port terminal',
  },
  {
    label: 'Air Freight',
    text: 'Time-critical airfreight with priority handling.',
    src: air,
    alt: 'Freight truck on the move at dusk',
  },
  {
    label: 'Last-Mile Delivery',
    text: "Reliable final-mile delivery to your customer's door.",
    src: lastMile,
    alt: 'Truck, ship and aircraft moving freight through the network',
  },
]

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose__inner">
        <div className="why-choose__grid">
          <div className="why-choose__intro">
            <h2 className="why-choose__title">
              Why Businesses Choose Our Logistics Network
            </h2>
            <p className="why-choose__subtitle">
              Whether you're shipping hundreds or hundreds of thousands of
              orders, our intelligent 3PL platform helps you move faster,
              reduce costs.
            </p>
          </div>

          {SERVICES.map((service) => (
            <article className="why-choose__card" key={service.label}>
              <img
                className="why-choose__img"
                src={service.src}
                alt={service.alt}
                loading="lazy"
              />
              <div className="why-choose__scrim" />
              <div className="why-choose__copy">
                <h3 className="why-choose__label">{service.label}</h3>
                <p className="why-choose__text">{service.text}</p>
              </div>
              <span className="why-choose__arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
