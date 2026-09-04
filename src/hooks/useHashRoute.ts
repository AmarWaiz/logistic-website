import { useEffect, useState } from 'react'

/**
 * Minimal hash router: `#/about` -> "about", anything else -> "".
 *
 * Page routes are written as `#/name` so they can't be confused with
 * the plain `#section` anchors used for in-page links.
 */
function currentRoute() {
  const hash = window.location.hash
  return hash.startsWith('#/') ? hash.slice(2).split(/[?#]/)[0] : ''
}

export function useHashRoute() {
  const [route, setRoute] = useState(currentRoute)

  useEffect(() => {
    const onChange = () => {
      const next = currentRoute()
      setRoute((prev) => {
        /* Land at the top when moving between pages, not mid-scroll */
        if (prev !== next) window.scrollTo({ top: 0 })
        return next
      })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
