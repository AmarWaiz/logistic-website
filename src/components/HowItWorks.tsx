import { useState } from 'react'
import onboarding from '../assets/images/ship.jpg'
import inbound from '../assets/images/LogisticsDoes.webp'
import inventory from '../assets/images/service1.jpg'
import distribution from '../assets/images/service2.jpg'

const STEPS = [
  {
    number: '01',
    title: 'Onboarding & Network Mapping',
    text: 'We assess your shipping volume, customer geography and SKU mix to recommend the optimal warehouse node(s) for your business.',
    src: onboarding,
    alt: 'Aerial view of a container ship at sea',
  },
  {
    number: '02',
    title: 'Inbound & Storage',
    text: 'Goods are received, quality-checked, and stored using logic designed to minimize pick time and damage risk.',
    src: inbound,
    alt: 'Forklift loading pallets at a port warehouse',
  },
  {
    number: '03',
    title: 'Inventory Management',
    text: 'Live dashboards give you full visibility into stock levels, aging inventory, and reorder points — so you never overstock or stock out.',
    src: inventory,
    alt: 'Stacked containers at a port terminal',
  },
  {
    number: '04',
    title: 'Distribution & Handoff',
    text: 'Orders are routed to fulfillment or freight for onward shipping, with optimized transit routes that reduce cost and emissions.',
    src: distribution,
    alt: 'Freight trucks at a container yard',
  },
]

const DEFAULT_ACTIVE = 1

export default function HowItWorks() {
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <section className="how-it-works">
      <div className="how-it-works__card">
        <h2 className="how-it-works__title">How It Works</h2>

        <ul className="how-it-works__list">
          {STEPS.slice(0, 2).map((step, index) => (
            <li
              className={
                index === active
                  ? 'how-it-works__row how-it-works__row--active'
                  : 'how-it-works__row'
              }
              key={step.number}
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

        <img
          className="how-it-works__img"
          src={STEPS[active].src}
          alt={STEPS[active].alt}
          loading="lazy"
        />

        <ul className="how-it-works__list">
          {STEPS.slice(2, 4).map((step, i) => {
            const index = i + 2
            return (
              <li
                className={
                  index === active
                    ? 'how-it-works__row how-it-works__row--active'
                    : 'how-it-works__row'
                }
                key={step.number}
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
