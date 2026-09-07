import { mediaUrl } from '../lib/cms'
import type { LogoItem } from '../lib/cms'

interface BrandsProps {
  logos: LogoItem[]
}

export default function Brands({ logos }: BrandsProps) {
  const brandList = logos ?? []
  if (brandList.length === 0) return null

  return (
    <section className="brands" aria-label="Trusted by">
      <div className="brands__inner">
        <div className="brands__marquee">
          <div className="brands__track">
            <ul className="brands__group">
              {brandList.map((brand) => (
                <li className="brands__item" key={brand.id}>
                  <img
                    className="brands__logo"
                    src={brand.image?.url ? mediaUrl(brand.image.url) : ''}
                    alt={brand.name || 'Brand partner'}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
            {/* Duplicate, hidden from assistive tech: fills the second
                half of the track so the loop has no visible seam. */}
            <ul className="brands__group" aria-hidden="true">
              {brandList.map((brand) => (
                <li className="brands__item" key={`dup-${brand.id}`}>
                  <img
                    className="brands__logo"
                    src={brand.image?.url ? mediaUrl(brand.image.url) : ''}
                    alt=""
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
