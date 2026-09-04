import trucks from '../assets/images/service2.jpg'
import ship from '../assets/images/ship.jpg'
import containers from '../assets/images/service1.jpg'

/* Imagery reused from elsewhere on the site */
const TILES = [
  { src: ship, alt: 'Container ship under way at sea', large: true },
  { src: trucks, alt: 'Freight trucks at a container yard' },
  { src: containers, alt: 'Stacked containers at a port terminal' },
]

export default function Seamless() {
  return (
    <section className="seamless" id="airtransport">
      <div className="seamless__inner">
        <div className="seamless__copy">
          <h2 className="seamless__title">
            Seamless airtransport for every need
          </h2>
          <p className="seamless__text">
            From air freight to last-mile delivery, we power global supply
            chains with reliable, data-driven logistics solutions. From air
            freight to last-mile delivery, we power global supply chains
            with reliable, data-driven logistics solutions.
          </p>
          <p className="seamless__text">
            We power global supply chains with reliable, data-driven
            logistics solutions, from air freight to last-mile delivery
            across logistics solutions.
          </p>
          <a href="#/contact" className="seamless__cta">
            Get in touch
          </a>
        </div>

        <ul className="seamless__grid">
          {TILES.map((tile) => (
            <li
              className={`seamless__tile${tile.large ? ' seamless__tile--large' : ''}`}
              key={tile.alt}
            >
              <img
                className="seamless__img"
                src={tile.src}
                alt={tile.alt}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
