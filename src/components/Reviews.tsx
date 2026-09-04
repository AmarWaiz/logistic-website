import { useCarousel } from '../hooks/useCarousel'
import avatar from '../assets/images/Avatar.png'

const REVIEWS = [
  {
    name: 'Devon Ashby',
    role: 'Operations Lead',
    quote:
      'Switching our ocean freight over cut our transit-time surprises to almost zero. The tracking dashboard alone paid for the switch.',
  },
  {
    name: 'Yusuf Karim',
    role: 'Freight Manager',
    quote:
      'Our account team catches customs issues before they become delays. That kind of proactive communication is rare in this industry.',
  },
  {
    name: 'Lena Ortiz',
    role: 'Supply Analyst',
    quote:
      'We split inventory across two of their warehouse nodes and cut our average delivery time by two days without adding headcount.',
  },
  {
    name: 'Tomas Vogel',
    role: 'Warehouse Lead',
    quote:
      'Inbound to available-to-sell in under 48 hours, every time. Our previous 3PL took the better part of a week.',
  },
  {
    name: 'Aiko Tanaka',
    role: 'Customs Broker',
    quote:
      'Documentation is clean and complete before the vessel even arrives. It has made cross-border clearance genuinely boring — in a good way.',
  },
  {
    name: 'Mirana Marci',
    role: 'Retail Operations',
    quote:
      "Peak season used to mean panic. Their team flexed our storage capacity up in a week and we never missed a ship date.",
  },
]

/* Always a carousel — App.css decides how many cards are in view at
   each width (3 on desktop, 2 on tablet, 1 on phones). */
const CAROUSEL_QUERY = '(min-width: 0px)'

export default function Reviews() {
  const { ref, active, slides, goTo } = useCarousel<HTMLUListElement>({
    query: CAROUSEL_QUERY,
  })

  return (
    <section className="reviews" id="reviews">
      <div className="reviews__inner">
        <h2 className="reviews__title">Trusted by Teams Like Yours</h2>
        <p className="reviews__subtitle">
          From air freight to last-mile delivery, we power global
          supply chains with reliable, data-driven logistics solutions.
        </p>

        <ul className="reviews__track" ref={ref}>
          {REVIEWS.map((review) => (
            <li className="reviews__card" key={review.name}>
              <div className="reviews__card-head">
                {/* Opening quote mark */}
                <svg
                  className="reviews__quote"
                  viewBox="0 0 40 30"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 30V17.4C0 7.8 5.9 1.6 16.8 0l1.6 4.9c-5.9 1.3-9 4.5-9.2 8.9H17V30H0Z" />
                  <path d="M21.6 30V17.4C21.6 7.8 27.5 1.6 38.4 0L40 4.9c-5.9 1.3-9 4.5-9.2 8.9h8.8V30H21.6Z" />
                </svg>

                <div className="reviews__stars" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="reviews__quote-text">{review.quote}</p>

              <footer className="reviews__person">
                <img
                  className="reviews__avatar"
                  src={avatar}
                  alt=""
                  loading="lazy"
                />
                <span className="reviews__meta">
                  <span className="reviews__name">{review.name}</span>
                  <span className="reviews__role">{review.role}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>

        <div className="reviews__dots">
          {Array.from({ length: slides }, (_, index) => (
            <button
              type="button"
              key={index}
              className={
                index === active
                  ? 'reviews__dot reviews__dot--active'
                  : 'reviews__dot'
              }
              aria-label={`Go to slide ${index + 1} of ${slides}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
