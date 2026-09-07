import { mediaUrl } from '../lib/cms'
import type { LogoItem } from '../lib/cms'

interface BrandsProps {
  logos: LogoItem[]
}

export default function Brands({ logos }: BrandsProps) {
  return (
    <section className="brands" aria-label="Trusted by">
      <div className="brands__inner">
        <div className="brands__marquee">
          <div className="brands__track">
            <ul className="brands__group">
              {logos.map((brand) => (
                <li className="brands__item" key={brand.id}>
                  <img className="brands__logo" src={mediaUrl(brand.image.url)} alt={brand.name} loading="lazy" />
                </li>
              ))}
            </ul>
            {/* Duplicate, hidden from assistive tech: fills the second
                half of the track so the loop has no visible seam. */}
            <ul className="brands__group" aria-hidden="true">
              {logos.map((brand) => (
                <li className="brands__item" key={brand.id}>
                  <img className="brands__logo" src={mediaUrl(brand.image.url)} alt="" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
