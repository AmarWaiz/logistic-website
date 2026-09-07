import { useId, useState } from 'react'
import warehouseImgFallback from '../assets/images/aboutbg.webp'
import type { FaqItem } from '../lib/cms'

interface PlatformProps {
  title: string
  subtitle: string
  image?: string
  imageAlt: string
  heading: string
  text: string
  features: FaqItem[]
}

export default function Platform({ title, subtitle, image, imageAlt, heading, text, features }: PlatformProps) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="platform" id="platform">
      <div className="platform__inner">
        <h2 className="faq__title">{title}</h2>
        <p className="faq__subtitle">{subtitle}</p>

        <div className="platform__grid">
          <img
            className="platform__img"
            src={image || warehouseImgFallback}
            alt={imageAlt}
            loading="lazy"
          />

          <div className="platform__content">
            <h3 className="platform__heading">{heading}</h3>
            <p className="platform__text">{text}</p>

            <ul className="faq__list">
              {features.map((item, index) => {
                const isOpen = open === index
                const panelId = `${baseId}-panel-${index}`
                const buttonId = `${baseId}-button-${index}`

                return (
                  <li
                    className={isOpen ? 'faq__item faq__item--open' : 'faq__item'}
                    key={item.id}
                  >
                    <h4 className="faq__question">
                      <button
                        type="button"
                        className="faq__trigger"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq__toggle" aria-hidden="true">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </span>
                      </button>
                    </h4>

                    <div
                      className="faq__panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                    >
                      <div className="faq__panel-inner">
                        <p className="faq__answer">{item.answer}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
