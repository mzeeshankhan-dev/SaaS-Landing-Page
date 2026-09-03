import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const ROWS = [
  { label: 'Performance', before: 58, after: 94 },
  { label: 'SEO', before: 61, after: 87 },
  { label: 'UX', before: 49, after: 78 },
  { label: 'Accessibility', before: 55, after: 89 },
  { label: 'Conversion', before: 47, after: 91 },
]

export default function BeforeAfter() {
  const trackRef = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const rect = trackRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  return (
    <Section className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading align="center" title="See the transformation, side by side." subtitle="Drag the divider to compare a site before and after SitePilot's recommendations." />
      </Reveal>

      <Reveal delay={0.1}>
        <div
          ref={trackRef}
          className="relative mx-auto mt-12 aspect-[16/10] max-w-3xl select-none overflow-hidden rounded-3xl border border-white/10 shadow-card"
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
        >
          {/* After layer (base) */}
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-violet-950/40 via-void-850 to-void-900 p-8">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[12px] font-medium text-cyan-300">After</span>
              <span className="text-[26px] font-semibold text-mist-100">94/100</span>
            </div>
            <div className="flex flex-col gap-2">
              {ROWS.map((r) => (
                <div key={r.label} className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" style={{ width: `${r.after}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Before layer (clipped) */}
          <div
            className="absolute inset-0 flex flex-col justify-between bg-void-900 p-8"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-red-400/10 px-3 py-1 text-[12px] font-medium text-red-300">Before</span>
              <span className="text-[26px] font-semibold text-mist-300">64/100</span>
            </div>
            <div className="flex flex-col gap-2">
              {ROWS.map((r) => (
                <div key={r.label} className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full bg-mist-500/50" style={{ width: `${r.before}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Handle */}
          <div className="absolute inset-y-0 z-10 w-0.5 bg-white/40" style={{ left: `${pos}%` }}>
            <button
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
              className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/20 bg-void-850 shadow-card"
              aria-label="Drag to compare"
            >
              <span className="text-[13px] text-mist-300">↔</span>
            </button>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-5 gap-3 text-center">
        {ROWS.map((r) => (
          <div key={r.label} className="text-[12px] text-mist-500">
            {r.label}
          </div>
        ))}
      </div>
    </Section>
  )
}
