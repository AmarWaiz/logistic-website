import ship from '../assets/images/ship.jpg'

const CARDS = [
  {
    title: 'Verified at Every Handoff',
    text: 'Every shipment is checked in and photographed at each transfer point — port, warehouse, and final mile — so condition and custody are never in question.',
  },
  {
    title: 'Insured From Pickup to Delivery',
    text: 'Cargo is covered under our standing insurance the moment it leaves your dock, with claims handled directly by your account team, not a call center.',
  },
]

export default function Assurance() {
  return (
    <section className="assurance" id="assurance">
      <div className="assurance__inner">
        <h2 className="assurance__title">Built on Accountability</h2>
        <p className="assurance__subtitle">
          From air freight to last-mile delivery, we power global
          supply chains with reliable, data-driven logistics solutions.
        </p>

        <div className="assurance__grid">
          <article className="assurance__card">
            <h3 className="assurance__card-title">{CARDS[0].title}</h3>
            <p className="assurance__card-text">{CARDS[0].text}</p>
          </article>

          <div className="assurance__media">
            <img
              className="assurance__img"
              src={ship}
              alt="Aerial view of a fully loaded container ship under way at sea"
              loading="lazy"
            />
          </div>

          <article className="assurance__card">
            <h3 className="assurance__card-title">{CARDS[1].title}</h3>
            <p className="assurance__card-text">{CARDS[1].text}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
