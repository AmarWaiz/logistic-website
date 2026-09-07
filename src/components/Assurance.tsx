import shipFallback from '../assets/images/ship.jpg'
import type { TitleText } from '../lib/cms'

interface AssuranceProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  cards: TitleText[]
}

export default function Assurance({ title, subtitle, image, imageAlt, cards }: AssuranceProps) {
  return (
    <section className="assurance" id="assurance">
      <div className="assurance__inner">
        <h2 className="assurance__title">{title}</h2>
        <p className="assurance__subtitle">{subtitle}</p>

        <div className="assurance__grid">
          <article className="assurance__card">
            <h3 className="assurance__card-title">{cards[0]?.title}</h3>
            <p className="assurance__card-text">{cards[0]?.text}</p>
          </article>

          <div className="assurance__media">
            <img className="assurance__img" src={image || shipFallback} alt={imageAlt} loading="lazy" />
          </div>

          <article className="assurance__card">
            <h3 className="assurance__card-title">{cards[1]?.title}</h3>
            <p className="assurance__card-text">{cards[1]?.text}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
