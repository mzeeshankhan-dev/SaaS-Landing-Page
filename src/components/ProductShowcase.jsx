import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gauge, Search, MousePointerClick, Eye, Target } from 'lucide-react'
import { Section, Reveal, SectionHeading, ScoreRing, MetricBar } from './ui/Primitives'

const TABS = [
  {
    key: 'Overview',
    icon: Eye,
    ring: 92,
    ringLabel: 'Health score',
    bars: [
      { label: 'Performance', value: 94 },
      { label: 'SEO', value: 87 },
      { label: 'UX', value: 78 },
      { label: 'Accessibility', value: 89 },
      { label: 'Conversion', value: 91 },
    ],
    note: 'Overall, your site outperforms 82% of sites in your category.',
  },
  {
    key: 'Performance',
    icon: Gauge,
    ring: 94,
    ringLabel: 'Speed score',
    bars: [
      { label: 'LCP — Largest Contentful Paint', value: 91 },
      { label: 'CLS — Layout Stability', value: 96 },
      { label: 'INP — Interaction Delay', value: 88 },
      { label: 'Time to First Byte', value: 93 },
    ],
    note: 'Core Web Vitals pass on 4 of 5 tracked pages.',
  },
  {
    key: 'SEO',
    icon: Search,
    ring: 87,
    ringLabel: 'SEO score',
    bars: [
      { label: 'Metadata coverage', value: 82 },
      { label: 'Heading structure', value: 90 },
      { label: 'Crawlability', value: 95 },
      { label: 'Internal linking', value: 76 },
    ],
    note: '6 pages are missing meta descriptions.',
  },
  {
    key: 'UX',
    icon: MousePointerClick,
    ring: 78,
    ringLabel: 'UX score',
    bars: [
      { label: 'Navigation clarity', value: 80 },
      { label: 'Mobile experience', value: 71 },
      { label: 'Readability', value: 85 },
      { label: 'Flow completion', value: 74 },
    ],
    note: 'Mobile checkout flow has a 3-step drop-off point.',
  },
  {
    key: 'Accessibility',
    icon: Eye,
    ring: 89,
    ringLabel: 'A11y score',
    bars: [
      { label: 'Color contrast', value: 84 },
      { label: 'ARIA labeling', value: 88 },
      { label: 'Keyboard navigation', value: 92 },
      { label: 'Alt text coverage', value: 90 },
    ],
    note: '12 images are missing descriptive alt text.',
  },
  {
    key: 'Conversion',
    icon: Target,
    ring: 91,
    ringLabel: 'CRO score',
    bars: [
      { label: 'CTA visibility', value: 86 },
      { label: 'Form friction', value: 89 },
      { label: 'Trust signals', value: 94 },
      { label: 'Page hierarchy', value: 92 },
    ],
    note: 'Primary CTA converts 2.3× higher than secondary.',
  },
]

export default function ProductShowcase() {
  const [active, setActive] = useState('Overview')
  const tab = TABS.find((t) => t.key === active)

  return (
    <Section className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Product"
          title="One URL. Complete website intelligence."
          subtitle="Get a complete picture of your website in minutes."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 flex max-w-full justify-start gap-1.5 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02] p-1.5 sm:justify-center">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`relative whitespace-nowrap rounded-lg px-4 py-2.5 text-[14px] font-medium transition-colors ${
                active === t.key ? 'text-white' : 'text-mist-400 hover:text-mist-200'
              }`}
            >
              {active === t.key && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-lg bg-gradient-to-b from-violet-500 to-violet-600"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{t.key}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-8 max-w-5xl rounded-[28px] border border-white/10 bg-void-850/70 p-6 shadow-card backdrop-blur-xl sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:items-center"
          >
            <div className="glass flex flex-col items-center gap-3 rounded-2xl p-6">
              <ScoreRing value={tab.ring} label={tab.ringLabel} size={128} />
              <div className="flex items-center gap-2 text-[13px] text-mist-400">
                <tab.icon className="h-3.5 w-3.5 text-violet-300" />
                {tab.key}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {tab.bars.map((b, i) => (
                <MetricBar key={b.label} label={b.label} value={b.value} delay={i * 0.05} />
              ))}
              <p className="mt-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[13.5px] text-mist-400">
                {tab.note}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
