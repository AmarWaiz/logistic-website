import { useId, useState } from 'react'

const FAQS = [
  {
    q: 'How is pricing structured for warehousing?',
    a: 'Pricing is based on storage volume, pallet turnover, and any value-added services (kitting, labeling, returns processing). You only pay for the space and handling you actually use.',
  },
  {
    q: 'Can I split inventory across multiple warehouse nodes?',
    a: 'Yes. Inventory can be distributed across our network based on customer geography, so orders ship from the node closest to the buyer.',
  },
  {
    q: 'How quickly can new inventory go live after arrival?',
    a: 'Standard inbound is checked in, quality-verified, and available to sell within 24–48 hours of arrival at the warehouse.',
  },
  {
    q: 'Do you handle specialized storage like cold chain or hazmat?',
    a: 'Yes. Select nodes are equipped for temperature-controlled and regulated storage, with compliance handling configured per vertical.',
  },
  {
    q: 'What visibility do I get into my stock?',
    a: 'A live dashboard shows stock levels, aging inventory, and reorder points across every node, updated in real time.',
  },
]

export default function WarehousingFaq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="faq" id="warehousing-faq">
      <div className="faq__inner">
        <h2 className="faq__title">Warehousing Questions, Answered</h2>
        <p className="faq__subtitle">
          Everything you need to know before moving inventory into the
          ardle warehousing network.
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
