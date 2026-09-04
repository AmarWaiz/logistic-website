import roadImg from '../assets/images/LogisticsDoes.webp'

export default function RoadBanner() {
  return (
    <section className="road-banner" aria-label="On the road">
      <div className="road-banner__inner">
        <div className="road-banner__media">
          <img
            className="road-banner__img"
            src={roadImg}
            alt="Truck, ship and aircraft moving freight through the logistics network"
            loading="lazy"
          />
          <button type="button" className="road-banner__play" aria-label="Play video">
            <span className="road-banner__play-ring" aria-hidden="true" />
            <span className="road-banner__play-ring" aria-hidden="true" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
