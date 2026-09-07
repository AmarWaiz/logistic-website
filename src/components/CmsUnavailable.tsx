/* Shown when a page's required CMS content failed to load (Strapi is
   down, the entry doesn't exist yet, etc). Kept minimal and unstyled
   beyond basic spacing so it never fights the page's own design. */
export default function CmsUnavailable() {
  return (
    <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        This page's content couldn't be loaded right now.
      </p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        style={{
          padding: '0.6rem 1.4rem',
          borderRadius: '999px',
          border: '1px solid currentColor',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </section>
  )
}
