import { mediaUrl } from '../lib/cms'
import type { ImageCard } from '../lib/cms'
import serviceFallback from '../assets/images/service2.jpg'

interface WhyChooseProps {
  title: string
  subtitle: string
  cards: ImageCard[]
}

export default function WhyChoose({ title, subtitle, cards }: WhyChooseProps) {
  const cardList = cards ?? []

  return (
    <section className="why-choose">
      <div className="why-choose__inner">
        <div className="why-choose__grid">
          <div className="why-choose__intro">
            <h2 className="why-choose__title">{title}</h2>
            <p className="why-choose__subtitle">{subtitle}</p>
          </div>

          {cardList.map((card) => (
            <article className="why-choose__card" key={card.id}>
              <img
                className="why-choose__img"
                src={card.image?.url ? mediaUrl(card.image.url) : serviceFallback}
                alt={card.alt || card.title}
                loading="lazy"
              />
              <div className="why-choose__scrim" />
              <div className="why-choose__copy">
                <h3 className="why-choose__label">{card.title}</h3>
                <p className="why-choose__text">{card.text}</p>
              </div>
              <span className="why-choose__arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
