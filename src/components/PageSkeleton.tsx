export function HeroSkeleton() {
  return (
    <section className="hero hero--skeleton" aria-busy="true" aria-label="Loading content">
      <div className="hero__content">
        <div className="skeleton-line skeleton-headline" />
        <div className="skeleton-line skeleton-subtitle" />
        <div className="skeleton-line skeleton-subtitle-short" />
        <div className="hero__cta-group" style={{ marginTop: '1.25rem' }}>
          <div className="skeleton-btn" />
          <div className="skeleton-btn skeleton-btn--outline" />
        </div>
      </div>
    </section>
  )
}

export function PageHeroSkeleton({ variant }: { variant?: 'services' | 'contact' }) {
  const variantClass = variant ? `abouthero--${variant}` : ''
  return (
    <section
      className={`abouthero ${variantClass} abouthero--skeleton`}
      aria-busy="true"
      aria-label="Loading content"
    >
      <div className="abouthero__inner">
        <div className="abouthero__card">
          <div className="skeleton-line skeleton-page-title" />
          <div className="skeleton-line skeleton-page-text" />
          <div className="skeleton-line skeleton-page-text-short" />
          <div className="skeleton-btn" style={{ marginTop: '1.25rem' }} />
        </div>
      </div>
    </section>
  )
}
