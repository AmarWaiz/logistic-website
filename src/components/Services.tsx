import { useEffect, useRef, useState } from 'react'
import { mediaUrl } from '../lib/cms'
import type { ServiceDetail } from '../lib/cms'

/* The section pins and swaps on scroll at every width; App.css
   handles how the panel lays out on narrow screens. */
const PIN_QUERY = '(min-width: 0px)'

interface ServicesProps {
  title: string
  subtitle: string
  items: ServiceDetail[]
}

export default function Services({ title, subtitle, items }: ServicesProps) {
  const SERVICES = items.map((item) => ({
    num: item.number,
    title: item.title,
    body: item.body.split('\n\n'),
    image: mediaUrl(item.image.url),
  }))

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
              <h2 className="services__title">{title}</h2>
              <p className="services__subtitle">{subtitle}</p>
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
