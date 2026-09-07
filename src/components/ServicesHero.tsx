import type { PageHero } from '../lib/cms'
import { mediaUrl } from '../lib/cms'
import { renderMultiline } from '../lib/multiline'

export default function ServicesHero({ title, text, ctaText, ctaLink, backgroundImage }: PageHero) {
  return (
    <section className="abouthero abouthero--services" id="services-hero">
      {backgroundImage && (
        <div
          className="abouthero__custom-bg"
          style={{ backgroundImage: `url(${mediaUrl(backgroundImage.url)})` }}
          aria-hidden="true"
        />
      )}
      <div className="abouthero__inner">
        <div className="abouthero__card">
          <h1 className="abouthero__title">{renderMultiline(title)}</h1>
          <p className="abouthero__text">{text}</p>
          <a href={ctaLink} className="abouthero__cta">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}
