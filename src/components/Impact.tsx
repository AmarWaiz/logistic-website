import portrait from '../assets/images/service2.jpg'

const STATS = [
  { value: '20+', label: 'Years Experience', tone: 'gold' },
  { value: '20+', label: 'Years Experience', tone: 'white' },
  { value: '20+', label: 'Years Experience', tone: 'teal' },
] as const

export default function Impact() {
  return (
    <section className="impact">
      <div className="impact__card">
        <div className="impact__top">
          <div className="impact__copy">
            <h2 className="impact__title">
              Seamless airtransport for every need
            </h2>
            <p className="impact__text">
              From air freight to last-mile delivery, we power global supply
              chains with reliable, data-driven logistics solutions. From air
              freight to last-mile delivery.
            </p>
            <p className="impact__text">
              We power global supply chains with reliable, data-driven
              logistics solutions, from air freight to last-mile delivery
              across logistics solutions.
            </p>
            
            <a href="#/contact" className="impact__cta">
              Contact Us
            </a>
          </div>

          <img
            className="impact__img"
            src={portrait}
            alt="Freight moving through the ardle logistics network"
            loading="lazy"
          />
        </div>

        <ul className="impact__stats">
          {STATS.map((stat, index) => (
            <li className={`impact__stat impact__stat--${stat.tone}`} key={index}>
              <span className="impact__stat-value">{stat.value}</span>
              <span className="impact__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
