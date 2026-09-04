import brand from '../assets/images/Shippable logo.png'

/* One placeholder mark stands in for every brand for now */
const BRANDS = ['shippo', 'ShipBob', 'hackerone', 'shippable', 'transport logistics', 'kaggle']

export default function Brands() {
  return (
    <section className="brands" aria-label="Trusted by">
      <div className="brands__inner">
        <div className="brands__marquee">
          <div className="brands__track">
            <ul className="brands__group">
              {BRANDS.map((name) => (
                <li className="brands__item" key={name}>
                  <img className="brands__logo" src={brand} alt={name} loading="lazy" />
                </li>
              ))}
            </ul>
            {/* Duplicate, hidden from assistive tech: fills the second
                half of the track so the loop has no visible seam. */}
            <ul className="brands__group" aria-hidden="true">
              {BRANDS.map((name) => (
                <li className="brands__item" key={name}>
                  <img className="brands__logo" src={brand} alt="" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
