import type { CtaBanner } from '../lib/cms'

export default function Network({ title, subtitle, buttonText, buttonLink }: CtaBanner) {
  return (
    <section className="network" id="network">
      <div className="network__inner">
        <h2 className="network__title">{title}</h2>
        <p className="network__subtitle">{subtitle}</p>
        <a href={buttonLink} className="network__cta">
          {buttonText}
        </a>
      </div>
    </section>
  )
}
