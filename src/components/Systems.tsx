import { useCarousel } from '../hooks/useCarousel'
import { mediaUrl } from '../lib/cms'
import type { TransportMode } from '../lib/cms'

interface SystemsProps {
  title: string
  subtitle: string
  modes: TransportMode[]
}

/* Below this width the grid becomes a carousel — two cards per view
   on tablet, one on phones. Must match the carousel breakpoint in
   App.css, which sets how many cards are visible. */
const CAROUSEL_QUERY = '(max-width: 1024px)'

export default function Systems({ title, subtitle, modes }: SystemsProps) {
  const { ref, active, slides, goTo } = useCarousel<HTMLUListElement>({
    query: CAROUSEL_QUERY,
  })

  return (
    <section className="systems" id="services">
      <div className="systems__inner">
        <div className="systems__head">
          <h2 className="systems__title">{title}</h2>
          <p className="systems__subtitle">{subtitle}</p>
        </div>

        <ul className="systems__grid" ref={ref}>
          {modes.map((mode) => (
            <li className="systems__card" key={mode.id}>
              <img
                className="systems__img"
                src={mediaUrl(mode.image.url)}
                alt={mode.alt}
                loading="lazy"
              />
            </li>
          ))}
        </ul>

        {/* Shown only at carousel widths — one dot per scroll
            position, which is fewer than one per card when more
            than one card is visible at a time. */}
        <div className="systems__dots">
          {Array.from({ length: slides }, (_, index) => (
            <button
              type="button"
              key={index}
              className={
                index === active
                  ? 'systems__dot systems__dot--active'
                  : 'systems__dot'
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
