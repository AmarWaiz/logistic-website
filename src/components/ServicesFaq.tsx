import { useId, useState } from 'react'

const FAQS = [
  {
    q: 'Which freight modes can you handle for a single shipment?',
    a: 'Air, ocean, road, and rail — often combined on one shipment. Our platform routes each leg automatically and hands off tracking between modes without any gaps.',
  },
  {
    q: 'How fast can you get a quote back to me?',
    a: 'Standard lanes are quoted within a few hours. Complex, multi-leg or cross-border routes may take up to a business day while our team confirms capacity and customs requirements.',
  },
  {
    q: "What happens if a shipment is delayed in transit?",
    a: 'Your account manager is notified automatically and reaches out with a revised ETA and next steps, so you hear about a delay from us before you have to ask.',
  },
  {
    q: 'Do you handle customs clearance for international shipments?',
    a: 'Yes. Documentation, duties, and clearance are handled in-house across our network, so cross-border freight moves without waiting on a third-party broker.',
  },
  {
    q: 'Can I track a shipment once it leaves the warehouse?',
    a: 'Every shipment gets a live tracking link the moment it ships, with status updates at each handoff from pickup through final delivery.',
  },
]

export default function ServicesFaq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="faq" id="services-faq">
      <div className="faq__inner">
        <h2 className="faq__title">Questions About Our Services</h2>
        <p className="faq__subtitle">
          Everything you need to know before booking a shipment through the
          ardle network.
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
