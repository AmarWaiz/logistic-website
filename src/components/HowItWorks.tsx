import { useState } from 'react'
import { mediaUrl } from '../lib/cms'
import type { HowItWorksStep } from '../lib/cms'

const DEFAULT_ACTIVE = 1

interface HowItWorksProps {
  title: string
  steps: HowItWorksStep[]
}

export default function HowItWorks({ title, steps }: HowItWorksProps) {
  const [active, setActive] = useState(DEFAULT_ACTIVE)
  const activeStep = steps[active] ?? steps[0]

  return (
    <section className="how-it-works">
      <div className="how-it-works__card">
        <h2 className="how-it-works__title">{title}</h2>

        <ul className="how-it-works__list">
          {steps.slice(0, 2).map((step, index) => (
            <li
              className={
                index === active
                  ? 'how-it-works__row how-it-works__row--active'
                  : 'how-it-works__row'
              }
              key={step.id}
            >
              <button
                type="button"
                className="how-it-works__trigger"
                onClick={() => setActive(index)}
              >
                <span className="how-it-works__number">{step.number}</span>
                <span className="how-it-works__row-title">{step.title}</span>
                <span className="how-it-works__dot" aria-hidden="true" />
              </button>
              <p className="how-it-works__row-text">{step.text}</p>
            </li>
          ))}
        </ul>

        {activeStep && (
          <img
            className="how-it-works__img"
            src={mediaUrl(activeStep.image.url)}
            alt={activeStep.alt}
            loading="lazy"
          />
        )}

        <ul className="how-it-works__list">
          {steps.slice(2, 4).map((step, i) => {
            const index = i + 2
            return (
              <li
                className={
                  index === active
                    ? 'how-it-works__row how-it-works__row--active'
                    : 'how-it-works__row'
                }
                key={step.id}
              >
                <button
                  type="button"
                  className="how-it-works__trigger"
                  onClick={() => setActive(index)}
                >
                  <span className="how-it-works__number">{step.number}</span>
                  <span className="how-it-works__row-title">{step.title}</span>
                  <span className="how-it-works__dot" aria-hidden="true" />
                </button>
                <p className="how-it-works__row-text">{step.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
