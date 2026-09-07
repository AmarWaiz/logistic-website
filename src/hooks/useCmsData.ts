import { useEffect, useRef, useState } from 'react'

type State<T> = { data: T | null; loading: boolean }

/**
 * Fetches CMS content once on mount. `fetcher` runs in an effect keyed
 * only by `deps`, so pass a stable function (defined outside the
 * component, or wrapped in useCallback) rather than an inline closure.
 */
export function useCmsData<T>(fetcher: () => Promise<T>, deps: unknown[] = []): State<T> {
  const [state, setState] = useState<State<T>>({ data: null, loading: true })
  const fetcherRef = useRef(fetcher)
  fetcherRef.current = fetcher

  useEffect(() => {
    let cancelled = false
    setState((s) => ({ data: s.data, loading: true }))
    fetcherRef.current().then((data) => {
      if (!cancelled) setState({ data, loading: false })
    })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
