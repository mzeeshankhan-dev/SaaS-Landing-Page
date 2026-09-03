import { ArrowRight } from 'lucide-react'
import { Section, Reveal } from './ui/Primitives'
import AINodeField from './three/AINodeField'

export default function FinalCTA() {
  return (
    <Section className="py-24 lg:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-void-850/70 px-8 py-20 text-center shadow-card sm:px-16">
          <div className="pointer-events-none absolute inset-0">
            <AINodeField className="h-full w-full opacity-60" />
          </div>
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[130px]" />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.02em] text-mist-100 sm:text-[44px]">
              Your next website improvement starts with one URL.
            </h2>
            <p className="text-[17px] leading-relaxed text-mist-400">
              Discover what's holding your website back — and get a clear plan to improve it.
            </p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <a
                href="#scanner"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_10px_28px_-8px_rgba(139,92,246,0.65)] transition-transform hover:scale-[1.02]"
              >
                Analyze My Website <ArrowRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[15px] font-medium text-mist-100 backdrop-blur transition-colors hover:bg-white/[0.07]">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
