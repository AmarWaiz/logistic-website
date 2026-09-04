type Step = {
  num: string
  title: string
  desc: string
  /* Highlighted (filled) step — move this flag to change which one is accented */
  accent?: boolean
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Request a quote',
    desc: 'Tell us your freight or storage needs and get a rate back the same day.',
  },
  {
    num: '02',
    title: 'We build your plan',
    desc: 'Our team maps the right mode, route, and warehouse node for your shipment.',
    accent: true,
  },
  {
    num: '03',
    title: 'Ship & track in real time',
    desc: 'Your freight moves under live tracking, with a dedicated contact at every leg.',
  },
  {
    num: '04',
    title: 'Delivered & reconciled',
    desc: 'Goods arrive on schedule, with documentation and reporting ready for you.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process__inner">
        <h2 className="process__title">How Shipping With Us Works</h2>
        <p className="process__subtitle">
          From air freight to last-mile delivery, we power global
          supply chains with reliable, data-driven logistics solutions.
        </p>

        <ol className="process__steps">
          {STEPS.map((step) => (
            <li className="process__step" key={step.num}>
              <div
                className={
                  step.accent
                    ? 'process__badge process__badge--accent'
                    : 'process__badge'
                }
              >
                {step.num}
              </div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
