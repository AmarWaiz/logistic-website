import truckImg from '../assets/images/service2.jpg'

const STATS = [
  { label: 'Years of Industry Experience', value: '20+' },
  { label: 'Global Business Clients', value: '500+' },
  { label: 'Order Accuracy', value: '99.1%' },
  { label: 'Countries Connected', value: '120+' },
]

export default function IndustryFit() {
  return (
    <section className="industry-fit">
      <div className="industry-fit__inner">
        <ul className="industry-fit__stats">
          {STATS.map((stat) => (
            <li className="industry-fit__stat" key={stat.label}>
              <span className="industry-fit__stat-label">{stat.label}</span>
              <span className="industry-fit__stat-value">{stat.value}</span>
            </li>
          ))}
        </ul>

        <div className="industry-fit__content">
          <div className="industry-fit__copy">
            <h2 className="industry-fit__title">
              Built for Every
              <br />
              Industry
            </h2>
            <p className="industry-fit__text">
              Our warehousing solutions flex to fit your category — from
              e-commerce and retail to healthcare, industrial goods, and
              cold chain logistics. Custom racking, security protocols,
              and compliance handling are configured per vertical.
            </p>
            <p className="industry-fit__text">
              Every node runs on the same platform, so no matter which
              vertical you're in, your team gets the same real-time
              visibility and reporting across the whole network.
            </p>
          </div>

          <img
            className="industry-fit__img"
            src={truckImg}
            alt="Freight truck on the road, ready for delivery"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
