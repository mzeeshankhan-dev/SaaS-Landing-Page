import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const FILTERS = ['7D', '30D', '90D', '1Y']

const TRENDS = [
  { label: 'Website Health', value: 92, delta: '8.4%', points: '0,40 20,36 40,38 60,28 80,24 100,18 120,20 140,10 160,12 180,4' },
  { label: 'Performance', value: 94, delta: '5.1%', points: '0,34 20,30 40,32 60,24 80,26 100,16 120,18 140,10 160,8 180,4' },
  { label: 'SEO', value: 87, delta: '3.7%', points: '0,30 20,32 40,26 60,28 80,20 100,22 120,14 140,16 160,10 180,8' },
  { label: 'Conversion', value: 91, delta: '11.2%', points: '0,44 20,38 40,36 60,30 80,26 100,20 120,16 140,14 160,8 180,4' },
]

export default function Analytics() {
  const [filter, setFilter] = useState('30D')

  return (
    <Section className="py-24 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <SectionHeading
            eyebrow="Analytics"
            title="Watch every score improve over time."
            subtitle="Track health, performance, SEO, UX, and conversion trends as changes ship."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  filter === f ? 'bg-violet-500/20 text-violet-200' : 'text-mist-500 hover:text-mist-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TRENDS.map((t, i) => (
          <Reveal key={t.label} delay={i * 0.06}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center justify-between">
                <p className="text-[14px] text-mist-400">{t.label}</p>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-400/10 px-2 py-0.5 text-[12px] font-medium text-emerald-300">
                  <ArrowUp className="h-3 w-3" /> {t.delta}
                </span>
              </div>
              <p className="mt-1 text-[30px] font-semibold text-mist-100">{t.value}</p>
              <svg viewBox="0 0 180 48" className="mt-3 h-14 w-full">
                <defs>
                  <linearGradient id={`grad-${i}`} x1="0" x2="1">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                <motion.polyline
                  points={t.points}
                  fill="none"
                  stroke={`url(#grad-${i})`}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </svg>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
