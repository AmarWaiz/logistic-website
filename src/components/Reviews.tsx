import { useCarousel } from '../hooks/useCarousel'
import avatarFallback from '../assets/images/Avatar.png'
import { mediaUrl } from '../lib/cms'
import type { Testimonial } from '../lib/cms'

interface ReviewsProps {
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

/* Always a carousel — App.css decides how many cards are in view at
   each width (3 on desktop, 2 on tablet, 1 on phones). */
const CAROUSEL_QUERY = '(min-width: 0px)'

export default function Reviews({ title, subtitle, testimonials }: ReviewsProps) {
  const { ref, active, slides, goTo } = useCarousel<HTMLUListElement>({
    query: CAROUSEL_QUERY,
  })

  return (
    <section className="reviews" id="reviews">
      <div className="reviews__inner">
        <h2 className="reviews__title">{title}</h2>
        <p className="reviews__subtitle">{subtitle}</p>

        <ul className="reviews__track" ref={ref}>
          {testimonials.map((review) => (
            <li className="reviews__card" key={review.id}>
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

                <div className="reviews__stars" aria-label={`Rated ${review.rating} out of 5`}>
                  {Array.from({ length: review.rating }, (_, i) => (
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
                  src={review.avatar ? mediaUrl(review.avatar.url) : avatarFallback}
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
