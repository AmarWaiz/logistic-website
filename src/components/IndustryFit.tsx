import truckImgFallback from '../assets/images/service2.jpg'
import { renderMultiline, splitParagraphs } from '../lib/multiline'
import type { Stat } from '../lib/cms'

interface IndustryFitProps {
  title: string
  text: string
  image?: string
  imageAlt: string
  stats: Stat[]
}

export default function IndustryFit({ title, text, image, imageAlt, stats }: IndustryFitProps) {
  return (
    <section className="industry-fit">
      <div className="industry-fit__inner">
        <ul className="industry-fit__stats">
          {stats.map((stat) => (
            <li className="industry-fit__stat" key={stat.id}>
              <span className="industry-fit__stat-label">{stat.label}</span>
              <span className="industry-fit__stat-value">{stat.value}</span>
            </li>
          ))}
        </ul>

        <div className="industry-fit__content">
          <div className="industry-fit__copy">
            <h2 className="industry-fit__title">{renderMultiline(title)}</h2>
            {splitParagraphs(text).map((paragraph) => (
              <p className="industry-fit__text" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <img
            className="industry-fit__img"
            src={image || truckImgFallback}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
