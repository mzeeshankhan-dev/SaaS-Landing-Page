import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Section } from './ui/Primitives'

const LOGOS = ['Northwind', 'Fieldstone', 'Havenly', 'Loop & Co.', 'Marlow', 'Verdant']

const METRICS = [
  { value: 10, suffix: 'K+', label: 'Websites analyzed' },
  { value: 1.2, suffix: 'M+', label: 'Issues discovered' },
  { value: 98, suffix: '%', label: 'Report accuracy' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {value % 1 === 0 ? Math.round(display) : display.toFixed(1)}
      {suffix}
    </span>
  )
}

export default function TrustBand() {
  return (
    <Section className="py-16 lg:py-20">
      <p className="text-center text-[13px] font-medium uppercase tracking-wide text-mist-500">
        Powering better digital experiences for modern teams
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {LOGOS.map((name) => (
          <span key={name} className="text-[17px] font-semibold tracking-tight text-mist-500/80 grayscale">
            {name}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] py-8">
        {METRICS.map((m) => (
          <div key={m.label} className="flex flex-col items-center gap-1 px-4 text-center">
            <span className="text-[28px] font-semibold text-mist-100 sm:text-[32px]">
              <Counter value={m.value} suffix={m.suffix} />
            </span>
            <span className="text-[12.5px] text-mist-500">{m.label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
