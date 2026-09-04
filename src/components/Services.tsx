import { useEffect, useRef, useState } from 'react'
import service1 from '../assets/images/service1.jpg'
import service2 from '../assets/images/service2.jpg'

const SERVICES = [
  {
    num: '01',
    title: 'Ocean & Air Freight',
    body: [
      'Full and less-than-container ocean freight alongside time-critical air freight, booked through the same team on the same platform.',
      "We select the mode based on what your shipment actually needs — cost, speed, or a blend of both — not a default carrier relationship.",
      'Every booking comes with a rate breakdown and a realistic transit estimate before you commit.',
    ],
    image: service1,
  },
  {
    num: '02',
    title: 'Warehousing & Distribution',
    body: [
      'Storage nodes positioned near major ports and transit hubs, sized to flex with your seasonal volume.',
      'Inbound is checked in, quality-verified, and available to sell within 24–48 hours of arrival.',
      'Custom racking, security protocols, and compliance handling are configured per vertical, not one-size-fits-all.',
    ],
    image: service2,
  },
  {
    num: '03',
    title: 'Customs & Compliance',
    body: [
      'Documentation is pre-cleared before the vessel or aircraft arrives, so cargo is never held for paperwork.',
      'Duties, classifications, and regulatory filings are handled in-house across our network.',
      'Cross-border shipments move on the same schedule as domestic ones — no separate queue, no surprises.',
    ],
    image: service1,
  },
  {
    num: '04',
    title: 'Real-Time Tracking',
    body: [
      'Every shipment gets a live tracking link from pickup through final delivery, updated at each handoff.',
      'A dashboard view shows stock levels, aging inventory, and reorder points across every warehouse node.',
      "If something needs attention, your account manager reaches out before you have to ask.",
    ],
    image: service2,
  },
]

/* The section pins and swaps on scroll at every width; App.css
   handles how the panel lays out on narrow screens. */
const PIN_QUERY = '(min-width: 0px)'

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(PIN_QUERY)
    const sync = () => setIsPinned(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  /* Map scroll progress through the tall track onto a service index */
  useEffect(() => {
    const track = trackRef.current
    if (!track || !isPinned) {
      setActive(0)
      return
    }

    let frame = 0
    const update = () => {
      const rect = track.getBoundingClientRect()
      const distance = rect.height - window.innerHeight
      if (distance <= 0) return
      const scrolled = Math.min(Math.max(-rect.top, 0), distance)
      const index = Math.floor((scrolled / distance) * SERVICES.length)
      setActive(Math.min(SERVICES.length - 1, Math.max(0, index)))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [isPinned])

  return (
    <section className="services" id="service-detail">
      <div
        className="services__track"
        ref={trackRef}
        style={{ '--service-count': SERVICES.length } as React.CSSProperties}
      >
        <div className="services__sticky">
          <div className="services__inner">
            <div className="services__head">
              <h2 className="services__title">We Build Logistics Systems,</h2>
              <p className="services__subtitle">
                From air freight to last-mile delivery, we power global
                supply chains with reliable, data-driven logistics solutions.
              </p>
            </div>

            <div className="services__stage">
              {SERVICES.map((service, index) => (
                <article
                  className={
                    index === active
                      ? 'services__item services__item--active'
                      : 'services__item'
                  }
                  key={service.num}
                  aria-hidden={isPinned && index !== active}
                >
                  <div className="services__copy">
                    <h3 className="services__item-title">
                      <span className="services__num">{service.num}</span>
                      {service.title}
                    </h3>
                    {service.body.map((paragraph) => (
                      <p className="services__text" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <img
                    className="services__img"
                    src={service.image}
                    alt=""
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
