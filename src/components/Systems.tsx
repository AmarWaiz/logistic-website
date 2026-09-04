import { useCarousel } from '../hooks/useCarousel'
import air from '../assets/images/logic1.webp'
import road from '../assets/images/logic2.webp'
import sea from '../assets/images/logic3.webp'
import logistics from '../assets/images/logic4.webp'

/* The grey card, rounded corners and caption are baked into each
   image, so the card is the image — no overlaid label needed. */
const MODES = [
  { label: 'Air', src: air, alt: 'Air — ardle air cargo aircraft' },
  { label: 'Road', src: road, alt: 'Road — ardle freight truck' },
  { label: 'Sea', src: sea, alt: 'Sea — ardle container ship' },
  { label: 'Logistics', src: logistics, alt: 'Logistics — ardle distribution warehouse' },
]

/* Below this width the grid becomes a carousel — two cards per view
   on tablet, one on phones. Must match the carousel breakpoint in
   App.css, which sets how many cards are visible. */
const CAROUSEL_QUERY = '(max-width: 1024px)'

export default function Systems() {
  const { ref, active, slides, goTo } = useCarousel<HTMLUListElement>({
    query: CAROUSEL_QUERY,
  })

  return (
    <section className="systems" id="services">
      <div className="systems__inner">
        <div className="systems__head">
          <h2 className="systems__title">We Build Logistics Systems,</h2>
          <p className="systems__subtitle">
            From air freight to last-mile delivery, we power global
            supply chains with reliable, data-driven logistics solutions.
          </p>
        </div>

        <ul className="systems__grid" ref={ref}>
          {MODES.map((mode) => (
            <li className="systems__card" key={mode.label}>
              <img
                className="systems__img"
                src={mode.src}
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
