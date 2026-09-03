import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const TESTIMONIALS = [
  {
    name: 'Priya Anand',
    role: 'Head of Growth',
    company: 'Northwind Studio',
    quote:
      "We finally understand why some of our landing pages were underperforming. The recommendations are incredibly easy to act on.",
  },
  {
    name: 'Marcus Feld',
    role: 'Founder',
    company: 'Fieldstone',
    quote:
      'SitePilot caught accessibility issues our team had missed for months. Fixing them lifted our conversion rate within weeks.',
  },
  {
    name: 'Elena Cho',
    role: 'Digital Director',
    company: 'Havenly Agency',
    quote:
      'We use it on every client audit now. It cuts our reporting time in half and clients actually understand the output.',
  },
]

export default function Testimonials() {
  const scrollerRef = useRef(null)
  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <Section className="py-24 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <SectionHeading title="Teams trust SitePilot to find what matters." />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist-300 hover:bg-white/[0.05]"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist-300 hover:bg-white/[0.05]"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      <div ref={scrollerRef} className="mt-10 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08} className="w-[320px] shrink-0 sm:w-[380px]">
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <Quote className="h-6 w-6 text-violet-400/60" />
              <p className="text-[15.5px] leading-relaxed text-mist-200">"{t.quote}"</p>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-[13px] font-semibold text-white">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="text-[14px] font-medium text-mist-100">{t.name}</p>
                  <p className="text-[12.5px] text-mist-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
