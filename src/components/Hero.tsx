import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import heroBg from '../assets/images/5.webp'
import heroWordmark from '../assets/images/3.webp'
import heroPlane from '../assets/images/2.webp'
import heroTruck from '../assets/images/4.webp'

gsap.registerPlugin(ScrollTrigger)

const WORDMARK_OPACITY = 0.55
/* Fraction of the timeline spent on the wordmark's intro settle —
   everything else (background, plane, truck) runs as one continuous
   tween across the full 0–1 span. */
const INTRO = 0.15

/* Pin distance is derived from the viewport, not a fixed magic
   number — "1.1–1.3 viewport heights" reads as one deliberate scroll
   gesture, not several screens of dead pinned scrolling. Truck
   xPercent is symmetric around 0 so the linear, single-tween travel
   crosses the reference composition (1.png) almost exactly at the
   50% mark without needing separate phase segments. */
const heroConfig = {
  desktop: {
    scrollMultiplier: 1.3,
    scrollFloor: 1100,
    scrub: 0.6,
    truckStartXPercent: 55,
    truckEndXPercent: -55,
    truckStartScale: 0.97,
    truckEndScale: 1.01,
    wordmarkStartScale: 0.86,
    wordmarkMidScale: 1,
    wordmarkEndScale: 1.1,
    plane: { startX: 60, startY: -15, startScale: 0.92, endX: -170, endY: 40, endScale: 1 },
    bgEndScale: 1.06,
  },
  tablet: {
    scrollMultiplier: 1.15,
    scrollFloor: 900,
    scrub: 0.6,
    truckStartXPercent: 48,
    truckEndXPercent: -48,
    truckStartScale: 0.975,
    truckEndScale: 1.008,
    wordmarkStartScale: 0.9,
    wordmarkMidScale: 1,
    wordmarkEndScale: 1.06,
    plane: { startX: 40, startY: -10, startScale: 0.94, endX: -115, endY: 26, endScale: 1 },
    bgEndScale: 1.045,
  },
  mobile: {
    scrollMultiplier: 0.95,
    scrollFloor: 700,
    scrub: 0.6,
    truckStartXPercent: 42,
    truckEndXPercent: -42,
    truckStartScale: 0.985,
    truckEndScale: 1.005,
    wordmarkStartScale: 0.94,
    wordmarkMidScale: 1,
    wordmarkEndScale: 1.03,
    plane: { startX: 22, startY: -6, startScale: 0.96, endX: -60, endY: 14, endScale: 1 },
    bgEndScale: 1.03,
  },
} as const

const getScrollDistance = (cfg: { scrollMultiplier: number; scrollFloor: number }) =>
  Math.max(window.innerHeight * cfg.scrollMultiplier, cfg.scrollFloor)

type Vec = { x: number; y: number; scale: number; opacity: number }

/* Animated state GSAP tweens directly (no DOM) — the canvas repaints
   from these plain numbers on every timeline/tween update, so a
   scrub reversal (scrolling back up) redraws exactly as smoothly as
   scrolling down, since it's the same numbers read in reverse. */
type HeroState = {
  bg: Pick<Vec, 'scale'>
  logo: Pick<Vec, 'opacity' | 'scale' | 'y'>
  plane: Pick<Vec, 'x' | 'y' | 'scale'>
  truck: { xPercent: number; scale: number; suspensionY: number }
  objectPositionY: number
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let cssWidth = 0
    let cssHeight = 0

    const images = {
      bg: new Image(),
      logo: new Image(),
      plane: new Image(),
      truck: new Image(),
    }
    images.bg.src = heroBg
    images.logo.src = heroWordmark
    images.plane.src = heroPlane
    images.truck.src = heroTruck

    const state: HeroState = {
      bg: { scale: 1 },
      logo: { opacity: 0, scale: 1, y: 0 },
      plane: { x: 0, y: 0, scale: 1 },
      truck: { xPercent: 0, scale: 1, suspensionY: 0 },
      objectPositionY: 0.5,
    }

    /* Replicates CSS object-fit: cover + object-position, plus a
       GSAP-driven translate/scale — all layers share one source
       canvas size, so this keeps every layer pixel-registered with
       the others no matter how it's individually transformed. */
    const drawLayer = (
      img: HTMLImageElement,
      opts: { x?: number; y?: number; xPercent?: number; scale?: number; opacity?: number },
    ) => {
      if (!img.complete || img.naturalWidth === 0) return
      const coverScale = Math.max(cssWidth / img.naturalWidth, cssHeight / img.naturalHeight)
      const totalScale = coverScale * (opts.scale ?? 1)
      const drawW = img.naturalWidth * totalScale
      const drawH = img.naturalHeight * totalScale

      let dx = (cssWidth - drawW) / 2
      let dy = (cssHeight - drawH) * state.objectPositionY
      dx += ((opts.xPercent ?? 0) / 100) * cssWidth
      dx += opts.x ?? 0
      dy += opts.y ?? 0

      ctx.save()
      ctx.globalAlpha = opts.opacity ?? 1
      ctx.drawImage(img, dx, dy, drawW, drawH)
      ctx.restore()
    }

    const draw = () => {
      if (cssWidth === 0 || cssHeight === 0) return
      ctx.clearRect(0, 0, cssWidth, cssHeight)
      drawLayer(images.bg, { scale: state.bg.scale })
      drawLayer(images.logo, {
        opacity: state.logo.opacity,
        scale: state.logo.scale,
        y: state.logo.y,
      })
      drawLayer(images.plane, { x: state.plane.x, y: state.plane.y, scale: state.plane.scale })
      drawLayer(images.truck, {
        xPercent: state.truck.xPercent,
        scale: state.truck.scale,
        y: state.truck.suspensionY,
      })
    }

    const resize = () => {
      const rect = section.getBoundingClientRect()
      cssWidth = rect.width
      cssHeight = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(cssWidth * dpr)
      canvas.height = Math.round(cssHeight * dpr)
      canvas.style.width = `${cssWidth}px`
      canvas.style.height = `${cssHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(section)

    let gsapCtx: gsap.Context | null = null
    let loadedCount = 0
    const imageList = Object.values(images)

    const start = () => {
      resize()

      gsapCtx = gsap.context(() => {
        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches

        if (reduceMotion) {
          state.bg.scale = 1.02
          state.logo.opacity = WORDMARK_OPACITY
          state.logo.scale = 1
          state.logo.y = 0
          state.plane.x = -50
          state.plane.y = 12
          state.plane.scale = 1
          state.truck.xPercent = 0
          state.truck.scale = 1
          draw()
          return
        }

        const mm = gsap.matchMedia()

        mm.add(
          {
            isDesktop: '(min-width: 1025px)',
            isTablet: '(min-width: 641px) and (max-width: 1024px)',
            isMobile: '(max-width: 640px)',
          },
          (context) => {
            const { isDesktop, isTablet } = context.conditions as {
              isDesktop: boolean
              isTablet: boolean
              isMobile: boolean
            }
            const cfg = isDesktop
              ? heroConfig.desktop
              : isTablet
                ? heroConfig.tablet
                : heroConfig.mobile

            state.objectPositionY = isDesktop ? 0.5 : 0.78

            /* Suspension bounce — an independent loop tweening its own
               plain value, so it never fights the scroll-scrubbed
               timeline; it just draws on top of whatever x the truck
               is currently at. */
            const suspensionTween = gsap.to(state.truck, {
              suspensionY: 3,
              duration: 1.1,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              onUpdate: draw,
            })

            state.bg.scale = 1
            state.logo.opacity = 0
            state.logo.scale = cfg.wordmarkStartScale
            state.logo.y = 60
            state.plane.x = cfg.plane.startX
            state.plane.y = cfg.plane.startY
            state.plane.scale = cfg.plane.startScale
            state.truck.xPercent = cfg.truckStartXPercent
            state.truck.scale = cfg.truckStartScale
            draw()

            const tl = gsap.timeline({
              defaults: { ease: 'none' },
              onUpdate: draw,
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                // Derived from the viewport (~1–1.3 screens), not a
                // fixed large number — the pin lasts exactly as long
                // as the truck's travel and nothing more.
                end: () => `+=${getScrollDistance(cfg)}`,
                pin: true,
                scrub: cfg.scrub,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })

            tl
              // The static marketing copy is only the resting/intro
              // state — once the cinematic story takes over it
              // dissolves out of the way.
              .to(
                contentRef.current,
                { opacity: 0, y: -16, duration: INTRO * 0.8, ease: 'power1.out' },
                0,
              )
              // Wordmark: settle in fast, then one slow continuous
              // grow, drifting up right at the very end as the truck
              // clears the frame.
              .fromTo(
                state.logo,
                { opacity: 0, scale: cfg.wordmarkStartScale, y: 60 },
                {
                  opacity: WORDMARK_OPACITY,
                  scale: cfg.wordmarkMidScale,
                  y: 0,
                  duration: INTRO,
                  ease: 'power2.out',
                },
                0,
              )
              .to(
                state.logo,
                { scale: cfg.wordmarkEndScale, y: -30, duration: 1 - INTRO },
                INTRO,
              )
              // Background — one slow, continuous push across the
              // entire sequence.
              .fromTo(state.bg, { scale: 1 }, { scale: cfg.bgEndScale, duration: 1 }, 0)
              // Plane — one slow, continuous drift across the entire
              // sequence, independent of the truck.
              .fromTo(
                state.plane,
                { x: cfg.plane.startX, y: cfg.plane.startY, scale: cfg.plane.startScale },
                {
                  x: cfg.plane.endX,
                  y: cfg.plane.endY,
                  scale: cfg.plane.endScale,
                  duration: 1,
                },
                0,
              )
              // TRUCK — the one property this whole rebuild is about:
              // a single, uninterrupted, non-repeating tween spanning
              // virtually the entire timeline. It starts off one
              // edge, crosses the reference composition (1.png) at
              // the midpoint, and clears the opposite edge right as
              // the timeline — and the pin — end. No dead pinned area
              // after it exits, no separate segments to fight each
              // other, and scrolling up simply reverses this one
              // tween since it's driven purely by scrub progress.
              .fromTo(
                state.truck,
                { xPercent: cfg.truckStartXPercent, scale: cfg.truckStartScale },
                { xPercent: cfg.truckEndXPercent, scale: cfg.truckEndScale, duration: 1 },
                0,
              )

            return () => {
              suspensionTween.kill()
            }
          },
        )
      }, section)
    }

    imageList.forEach((img) => {
      img.onload = () => {
        loadedCount += 1
        if (loadedCount === imageList.length) start()
      }
    })

    return () => {
      resizeObserver.disconnect()
      gsapCtx?.revert()
      imageList.forEach((img) => {
        img.onload = null
      })
    }
  }, [])

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* Content layer — unchanged from the previous hero */}
      <div className="hero__content" ref={contentRef}>
        <h1 className="hero__headline">
          Tailored solutions for your business
        </h1>
        <p className="hero__subtitle">
          From air freight to last-mile delivery, we power global
          supply chains with reliable, data-driven logistics solutions.
        </p>
        <div className="hero__cta-group">
          <a href="#/services" className="hero__cta hero__cta--primary">
            View Services
            {/* Arrow right */}
            <svg
              className="hero__cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
          <a href="#/contact" className="hero__cta hero__cta--outline">
            {/* Envelope */}
            <svg
              className="hero__cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
