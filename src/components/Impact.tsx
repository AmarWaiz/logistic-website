import portraitFallback from '../assets/images/service2.jpg'
import { splitParagraphs } from '../lib/multiline'
import type { Stat } from '../lib/cms'

interface ImpactProps {
  title: string
  text: string
  image?: string
  imageAlt: string
  ctaText: string
  ctaLink: string
  stats: Stat[]
}

export default function Impact({ title, text, image, imageAlt, ctaText, ctaLink, stats }: ImpactProps) {
  return (
    <section className="impact">
      <div className="impact__card">
        <div className="impact__top">
          <div className="impact__copy">
            <h2 className="impact__title">{title}</h2>
            {splitParagraphs(text).map((paragraph) => (
              <p className="impact__text" key={paragraph}>
                {paragraph}
              </p>
            ))}

            <a href={ctaLink} className="impact__cta">
              {ctaText}
            </a>
          </div>

          <img
            className="impact__img"
            src={image || portraitFallback}
            alt={imageAlt}
            loading="lazy"
          />
        </div>

        <ul className="impact__stats">
          {stats.map((stat) => (
            <li className={`impact__stat impact__stat--${stat.tone ?? 'white'}`} key={stat.id}>
              <span className="impact__stat-value">{stat.value}</span>
              <span className="impact__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
