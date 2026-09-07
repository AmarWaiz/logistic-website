import { useEffect, useState } from 'react'

export default function TruckPreloader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'active' | 'exiting' | 'hidden'>('active')

  useEffect(() => {
    // Lock scroll during 2s loader
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const startTime = performance.now()
    const DURATION = 1800 // 1.8s progress + 0.35s fade = ~2.1s total

    let frameId: number
    let timeout1: ReturnType<typeof setTimeout>
    let timeout2: ReturnType<typeof setTimeout>

    const tick = (now: number) => {
      const elapsed = now - startTime
      const pct = Math.min(elapsed / DURATION, 1)
      setProgress(Math.round(pct * 100))

      if (pct < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        timeout1 = setTimeout(() => {
          setPhase('exiting')
          timeout2 = setTimeout(() => {
            setPhase('hidden')
            document.body.style.overflow = prevOverflow
          }, 380)
        }, 100)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      document.body.style.overflow = prevOverflow
    }
  }, [])

  if (phase === 'hidden') return null

  return (
    <div
      className={`simple-loader-overlay ${phase === 'exiting' ? 'simple-loader-overlay--exit' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="simple-loader-box">
        {/* Simple Animated Truck */}
        <div className="simple-truck-wrap">
          <svg
            className="simple-truck-svg"
            viewBox="0 0 160 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Truck Body (Suspension Bounce) */}
            <g className="simple-truck-body">
              {/* Trailer Container */}
              <rect x="12" y="18" width="82" height="42" rx="3" fill="#0768C1" />
              {/* Orange stripe on container */}
              <rect x="12" y="44" width="82" height="4" fill="#F59E0B" />
              {/* "ardle" on container */}
              <text
                x="53"
                y="35"
                fill="#FFFFFF"
                fontSize="12"
                fontWeight="700"
                fontFamily="'Clash Display', 'Poppins', sans-serif"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                ardle
              </text>

              {/* Cab */}
              <path
                d="M96 26 H122 Q130 26 134 35 L142 46 Q145 50 145 56 V60 H96 Z"
                fill="#055BA5"
              />
              {/* Windshield */}
              <path
                d="M118 30 H106 V44 H134 L127 34 Q124 30 118 30 Z"
                fill="#BAE6FD"
                opacity="0.85"
              />
              {/* Headlight dot */}
              <circle cx="143" cy="54" r="2.5" fill="#FEF08A" />
            </g>

            {/* Wheels (Spinning) */}
            <g className="simple-wheel" style={{ transformOrigin: '34px 62px' }}>
              <circle cx="34" cy="62" r="9" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
              <circle cx="34" cy="62" r="4" fill="#94A3B8" />
              <line x1="34" y1="55" x2="34" y2="69" stroke="#0F172A" strokeWidth="1" />
              <line x1="27" y1="62" x2="41" y2="62" stroke="#0F172A" strokeWidth="1" />
            </g>

            <g className="simple-wheel" style={{ transformOrigin: '72px 62px' }}>
              <circle cx="72" cy="62" r="9" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
              <circle cx="72" cy="62" r="4" fill="#94A3B8" />
              <line x1="72" y1="55" x2="72" y2="69" stroke="#0F172A" strokeWidth="1" />
              <line x1="65" y1="62" x2="79" y2="62" stroke="#0F172A" strokeWidth="1" />
            </g>

            <g className="simple-wheel" style={{ transformOrigin: '124px 62px' }}>
              <circle cx="124" cy="62" r="9" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
              <circle cx="124" cy="62" r="4" fill="#94A3B8" />
              <line x1="124" y1="55" x2="124" y2="69" stroke="#0F172A" strokeWidth="1" />
              <line x1="117" y1="62" x2="131" y2="62" stroke="#0F172A" strokeWidth="1" />
            </g>
          </svg>

          {/* Simple Animated Road Line */}
          <div className="simple-road-track">
            <div className="simple-road-line" />
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="simple-progress-track">
          <div className="simple-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
