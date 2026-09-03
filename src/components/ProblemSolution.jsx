import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const BEFORE = ['Slow loading', 'Poor mobile experience', 'Weak CTA hierarchy', 'SEO issues', 'Broken user flows', 'Hidden accessibility problems']
const AFTER = ['Optimized performance', 'Better UX', 'Clear conversion paths', 'Stronger SEO', 'Actionable AI recommendations', 'Continuous monitoring']

export default function ProblemSolution() {
  return (
    <Section id="product" className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          align="center"
          title="Your website is telling you something. Are you listening?"
          subtitle="Most sites are quietly leaking revenue — slow pages, confusing flows, and SEO gaps that never surface until someone goes looking. SitePilot finds them first."
        />
      </Reveal>

      <div className="relative mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-void-850 text-[11px] font-medium text-mist-400 shadow-card sm:flex">
          scan
        </div>

        <Reveal delay={0.05}>
          <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7">
            <p className="mb-5 text-[13px] font-medium text-red-300/80">Before</p>
            <ul className="flex flex-col gap-3.5">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-mist-400">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="h-full rounded-3xl border border-violet-400/20 bg-gradient-to-b from-violet-500/[0.06] to-transparent p-7 shadow-glow">
            <p className="mb-5 text-[13px] font-medium text-cyan-300/90">After</p>
            <ul className="flex flex-col gap-3.5">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-mist-200">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
