import { useId, useState } from 'react'

/* Placeholder Q&A carried over from the reference design */
const FAQS = [
  {
    q: 'How does an AI Receptionist benefit healthcare and logistics businesses?',
    a: 'Yes. A core strength of our custom software development with AI integration is bridging the gap between modern automation and legacy infrastructure. We have extensive experience connecting AI layers to traditional ERPs and CRMs used in the CA, TX, and FL markets.',
  },
  {
    q: 'How does an AI Receptionist benefit healthcare and logistics businesses?',
    a: 'Yes. A core strength of our custom software development with AI integration is bridging the gap between modern automation and legacy infrastructure. We have extensive experience connecting AI layers to traditional ERPs and CRMs used in the CA, TX, and FL markets.',
  },
  {
    q: 'Can your AI solutions integrate with our existing legacy systems?',
    a: 'Yes. A core strength of our custom software development with AI integration is bridging the gap between modern automation and legacy infrastructure. We have extensive experience connecting AI layers to traditional ERPs and CRMs used in the CA, TX, and FL markets.',
  },
  {
    q: 'What is the typical ROI for AI business process automation?',
    a: 'Yes. A core strength of our custom software development with AI integration is bridging the gap between modern automation and legacy infrastructure. We have extensive experience connecting AI layers to traditional ERPs and CRMs used in the CA, TX, and FL markets.',
  },
  {
    q: 'Is your AI automation for healthcare HIPAA compliant?',
    a: 'Yes. A core strength of our custom software development with AI integration is bridging the gap between modern automation and legacy infrastructure. We have extensive experience connecting AI layers to traditional ERPs and CRMs used in the CA, TX, and FL markets.',
  },
]

export default function Faq() {
  /* Third item open on load, as in the design */
  const [open, setOpen] = useState<number | null>(2)
  const baseId = useId()

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <h2 className="faq__title">Powering Smarter Supply Chains</h2>
        <p className="faq__subtitle">
          Whether you're shipping hundreds or hundreds of thousands of orders,
          our intelligent 3PL platform helps you move faster, reduce costs.
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
