import { useCallback, useEffect, useRef, useState } from 'react'

type Options = {
  /** Widths at which the carousel is active; elsewhere it's a plain grid */
  query: string
  /** Autoplay interval in ms */
  intervalMs?: number
  /** How long autoplay stays out of the way after a manual swipe */
  resumeMs?: number
}

/**
 * Drives a CSS scroll-snap track: autoplay, looping, and a slide count
 * that follows however many cards the CSS shows per view.
 *
 * The track is the scroller and the cards are its children; how many are
 * visible is entirely a CSS concern (`grid-auto-columns`), which is why
 * the count here is derived from the scrollable distance rather than from
 * the number of cards.
 */
export function useCarousel<T extends HTMLElement>({
  query,
  intervalMs = 3500,
  resumeMs = 6000,
}: Options) {
  const ref = useRef<T>(null)
  const resumeAt = useRef(0)
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(0)
  const [slides, setSlides] = useState(1)

  /* Distance from one card's left edge to the next, gap included */
  const stepWidth = useCallback((track: HTMLElement) => {
    const first = track.firstElementChild as HTMLElement | null
    if (!first) return track.clientWidth
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return first.getBoundingClientRect().width + gap
  }, [])

  /* How many distinct scroll positions the track has. Showing three
     cards out of six leaves four, not six — deriving it from the
     scrollable distance keeps the dots and the loop honest instead of
     running off the end and stalling. */
  const slideCount = useCallback(
    (track: HTMLElement) => {
      const overflow = track.scrollWidth - track.clientWidth
      if (overflow <= 1) return 1
      return Math.round(overflow / stepWidth(track)) + 1
    },
    [stepWidth]
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const sync = () => setEnabled(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [query])

  /* Recount whenever the layout could have changed */
  useEffect(() => {
    const track = ref.current
    if (!track || !enabled) {
      setSlides(1)
      return
    }
    const measure = () => setSlides(slideCount(track))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [enabled, slideCount])

  /* Keep the active index in step with wherever the track is scrolled,
     whether by autoplay or by the reader swiping */
  useEffect(() => {
    const track = ref.current
    if (!track || !enabled) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / stepWidth(track))
        setActive(Math.max(0, Math.min(slideCount(track) - 1, index)))
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [enabled, stepWidth, slideCount])

  /* Autoplay — pauses on interaction, while the tab is hidden, and
     entirely for readers who prefer reduced motion */
  useEffect(() => {
    const track = ref.current
    if (!track || !enabled || intervalMs <= 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const hold = () => {
      resumeAt.current = Date.now() + resumeMs
    }
    track.addEventListener('pointerdown', hold)
    track.addEventListener('touchstart', hold, { passive: true })
    track.addEventListener('wheel', hold, { passive: true })

    const timer = window.setInterval(() => {
      if (document.hidden || Date.now() < resumeAt.current) return
      const step = stepWidth(track)
      const next = (Math.round(track.scrollLeft / step) + 1) % slideCount(track)
      track.scrollTo({ left: next * step, behavior: 'smooth' })
    }, intervalMs)

    return () => {
      window.clearInterval(timer)
      track.removeEventListener('pointerdown', hold)
      track.removeEventListener('touchstart', hold)
      track.removeEventListener('wheel', hold)
    }
  }, [enabled, intervalMs, resumeMs, stepWidth, slideCount])

  const goTo = useCallback(
    (index: number) => {
      const track = ref.current
      if (!track) return
      resumeAt.current = Date.now() + resumeMs
      track.scrollTo({ left: index * stepWidth(track), behavior: 'smooth' })
    },
    [resumeMs, stepWidth]
  )

  return { ref, active, slides, enabled, goTo }
}
