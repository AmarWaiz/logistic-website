import { mediaUrl } from '../lib/cms'
import { splitParagraphs } from '../lib/multiline'
import type { ImageTile } from '../lib/cms'

interface SeamlessProps {
  title: string
  text: string
  ctaText: string
  ctaLink: string
  tiles: ImageTile[]
}

export default function Seamless({ title, text, ctaText, ctaLink, tiles }: SeamlessProps) {
  return (
    <section className="seamless" id="airtransport">
      <div className="seamless__inner">
        <div className="seamless__copy">
          <h2 className="seamless__title">{title}</h2>
          {splitParagraphs(text).map((paragraph) => (
            <p className="seamless__text" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <a href={ctaLink} className="seamless__cta">
            {ctaText}
          </a>
        </div>

        <ul className="seamless__grid">
          {tiles.map((tile) => (
            <li
              className={`seamless__tile${tile.large ? ' seamless__tile--large' : ''}`}
              key={tile.id}
            >
              <img
                className="seamless__img"
                src={mediaUrl(tile.image.url)}
                alt={tile.alt}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
