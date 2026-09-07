interface PromoProps {
  title: string
  text: string
  ctaText: string
  ctaLink: string
}

export default function Promo({ title, text, ctaText, ctaLink }: PromoProps) {
  return (
    <section className="promo" id="promo">
      <div className="promo__inner">
        <div className="promo__card">
          <div className="promo__content">
            <h2 className="promo__title">{title}</h2>
            <p className="promo__text">{text}</p>
            <a href={ctaLink} className="promo__cta">
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
