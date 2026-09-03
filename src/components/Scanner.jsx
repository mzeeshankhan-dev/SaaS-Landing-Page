import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { Section, Reveal, SectionHeading, ScoreRing } from './ui/Primitives'

const STEPS = [
  'Crawling website',
  'Analyzing performance',
  'Checking SEO',
  'Evaluating UX',
  'Testing accessibility',
  'Generating AI recommendations',
]

export default function Scanner() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState('idle') // idle | scanning | done
  const [stepIndex, setStepIndex] = useState(-1)
  const timeouts = useRef([])

  const startScan = (e) => {
    e.preventDefault()
    if (status === 'scanning') return
    timeouts.current.forEach(clearTimeout)
    setStatus('scanning')
    setStepIndex(-1)
    STEPS.forEach((_, i) => {
      timeouts.current.push(
        setTimeout(() => setStepIndex(i), 500 + i * 620)
      )
    })
    timeouts.current.push(setTimeout(() => setStatus('done'), 500 + STEPS.length * 620 + 400))
  }

  useEffect(() => () => timeouts.current.forEach(clearTimeout), [])

  return (
    <Section id="scanner" className="py-24 lg:py-32">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-void-850/70 p-8 shadow-card backdrop-blur-xl sm:p-12">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <Reveal>
          <SectionHeading
            align="center"
            title="See it analyze a website in real time."
            subtitle="Enter any URL and watch SitePilot's engine work through five layers of analysis."
          />
        </Reveal>

        <form onSubmit={startScan} className="relative z-10 mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-mist-100 placeholder:text-mist-500 outline-none focus:border-violet-400/50"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_8px_24px_-8px_rgba(139,92,246,0.65)] transition-transform hover:scale-[1.02] disabled:opacity-60"
            disabled={status === 'scanning'}
          >
            {status === 'scanning' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Start AI Analysis'}
            {status !== 'scanning' && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>

        <AnimatePresence mode="wait">
          {status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 mx-auto mt-8 max-w-xl overflow-hidden"
            >
              {status === 'scanning' && (
                <ul className="flex flex-col gap-2.5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  {STEPS.map((step, i) => {
                    const done = i < stepIndex || (i === stepIndex && i === STEPS.length - 1 && false)
                    const complete = i < stepIndex
                    const active = i === stepIndex
                    return (
                      <li key={step} className="flex items-center gap-3 text-[14px]">
                        {complete ? (
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                            <Check className="h-3 w-3" />
                          </span>
                        ) : active ? (
                          <span className="grid h-5 w-5 shrink-0 place-items-center">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                          </span>
                        ) : (
                          <span className="h-5 w-5 shrink-0 rounded-full border border-white/10" />
                        )}
                        <span className={complete || active ? 'text-mist-200' : 'text-mist-500'}>{step}</span>
                      </li>
                    )
                  })}
                </ul>
              )}

              {status === 'done' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-8"
                >
                  <ScoreRing value={92} label="/ 100" size={140} />
                  <p className="text-[15px] font-medium text-mist-100">Website Health Score: 92/100</p>
                  <p className="text-center text-[13.5px] text-mist-500">
                    We found 14 opportunities across performance, SEO, and conversion.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}
