import type { ProcessStep } from '../lib/cms'

interface ProcessProps {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export default function Process({ title, subtitle, steps }: ProcessProps) {
  return (
    <section className="process" id="process">
      <div className="process__inner">
        <h2 className="process__title">{title}</h2>
        <p className="process__subtitle">{subtitle}</p>

        <ol className="process__steps">
          {steps.map((step) => (
            <li className="process__step" key={step.id}>
              <div
                className={
                  step.accent
                    ? 'process__badge process__badge--accent'
                    : 'process__badge'
                }
              >
                {step.number}
              </div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
