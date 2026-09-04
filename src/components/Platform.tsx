import { useId, useState } from 'react'
import warehouseImg from '../assets/images/aboutbg.webp'

const FEATURES = [
  {
    q: 'Real-Time Shipment Tracking',
    a: 'Follow every shipment live from pickup to final-mile delivery, with status updates pushed straight to your dashboard.',
  },
  {
    q: 'Multi-Layered Security Checks & Audits',
    a: 'Every shipment passes through layered verification and routine audits, keeping your cargo accounted for at each handoff.',
  },
  {
    q: 'Dedicated Account Management',
    a: 'A dedicated account manager stays on your shipments end to end, so you always have a direct line when it matters.',
  },
]

export default function Platform() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="platform" id="platform">
      <div className="platform__inner">
        <h2 className="faq__title">Choose Our Logistics Network</h2>
        <p className="faq__subtitle">
          Whether you're shipping hundreds or hundreds of thousands of
          orders, our intelligent 3PL platform helps you move faster, reduce
          costs.
        </p>

        <div className="platform__grid">
          <img
            className="platform__img"
            src={warehouseImg}
            alt="Warehouse dock where shipments are staged for delivery"
            loading="lazy"
          />

          <div className="platform__content">
            <h3 className="platform__heading">Shipping Platform &amp; Technology</h3>
            <p className="platform__text">
              From booking to delivery, our technology keeps you informed and
              in control, giving you real-time visibility and built-in
              security at every step of your shipment's journey.
            </p>

            <ul className="faq__list">
              {FEATURES.map((item, index) => {
                const isOpen = open === index
                const panelId = `${baseId}-panel-${index}`
                const buttonId = `${baseId}-button-${index}`

                return (
                  <li
                    className={isOpen ? 'faq__item faq__item--open' : 'faq__item'}
                    key={item.q}
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
                    </h4>

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
        </div>
      </div>
    </section>
  )
}
