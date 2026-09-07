import { mediaUrl } from '../lib/cms'
import type { ImageCard } from '../lib/cms'
import shipFallback from '../assets/images/ship.jpg'

interface NetworkGridProps {
  title: string
  subtitle: string
  cards: ImageCard[]
}

export default function NetworkGrid({ title, subtitle, cards }: NetworkGridProps) {
  const cardList = cards ?? []

  return (
    <section className="network-grid">
      <div className="network-grid__inner">
        <div className="network-grid__head">
          <h2 className="network-grid__title">{title}</h2>
          <p className="network-grid__subtitle">{subtitle}</p>
        </div>

        <ul className="network-grid__list">
          {cardList.map((card) => (
            <li className="network-grid__card" key={card.id}>
              <img
                className="network-grid__img"
                src={card.image?.url ? mediaUrl(card.image.url) : shipFallback}
                alt={card.alt || card.title}
                loading="lazy"
              />
              <div className="network-grid__body">
                <h3 className="network-grid__card-title">{card.title}</h3>
                <p className="network-grid__card-text">{card.text}</p>
                <a href={card.link || '#/services'} className="network-grid__explore">
                  Explore
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
