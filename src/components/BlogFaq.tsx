import { useId, useState } from 'react'
import type { FaqBlock } from '../lib/cms'

export default function BlogFaq({ title, subtitle, items }: FaqBlock) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="faq" id="blog-faq">
      <div className="faq__inner">
        <h2 className="faq__title">{title}</h2>
        <p className="faq__subtitle">{subtitle}</p>

        <ul className="faq__list">
          {items.map((item, index) => {
            const isOpen = open === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`

            return (
              <li
                className={isOpen ? 'faq__item faq__item--open' : 'faq__item'}
                key={item.id}
              >
                <h3 className="faq__question">
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
                </h3>

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
    </section>
  )
}
