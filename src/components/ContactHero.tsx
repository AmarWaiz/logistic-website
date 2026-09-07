import type { PageHero } from '../lib/cms'
import { renderMultiline } from '../lib/multiline'

export default function ContactHero({ title, text, ctaText, ctaLink }: PageHero) {
  return (
    <section className="abouthero abouthero--contact" id="contact-hero">
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
