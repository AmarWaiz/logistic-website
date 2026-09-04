import { useId, useState } from 'react'

const FAQS = [
  {
    q: 'How often is new content published?',
    a: 'We publish a new guide roughly every two weeks, covering freight, warehousing, and day-to-day operations questions we hear from customers.',
  },
  {
    q: 'Can I suggest a topic for the blog?',
    a: "Yes — send it to our team through the contact page and we'll consider it for an upcoming post.",
  },
  {
    q: 'Are these guides specific to ardle customers?',
    a: 'Most of the advice applies broadly to freight and warehousing operations, whether or not you ship with us.',
  },
  {
    q: 'Is there a newsletter I can subscribe to?',
    a: "Not yet — for now, check back on this page or follow our social channels for new posts as they go live.",
  },
]

export default function BlogFaq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="faq" id="blog-faq">
      <div className="faq__inner">
        <h2 className="faq__title">Blog Questions</h2>
        <p className="faq__subtitle">
          A few things readers ask us about this blog and how we cover
          logistics topics.
        </p>

        <ul className="faq__list">
          {FAQS.map((item, index) => {
            const isOpen = open === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`

            return (
              <li
                className={isOpen ? 'faq__item faq__item--open' : 'faq__item'}
                key={index}
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
                    <span>{item.q}</span>
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
                    <p className="faq__answer">{item.a}</p>
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
