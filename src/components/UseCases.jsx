import { Briefcase, Rocket, Megaphone, Code2 } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const CASES = [
  { icon: Briefcase, title: 'For Agencies', body: 'Audit client websites and create professional reports.' },
  { icon: Rocket, title: 'For Startups', body: 'Identify website growth opportunities quickly.' },
  { icon: Megaphone, title: 'For Marketing Teams', body: 'Improve SEO, UX, and conversion performance.' },
  { icon: Code2, title: 'For Developers', body: 'Find technical website issues and performance opportunities.' },
]

export default function UseCases() {
  return (
    <Section id="solutions" className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading align="center" title="Built for every team that owns a website." />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CASES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/15">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 text-violet-300">
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-[16.5px] font-medium text-mist-100">{c.title}</h3>
              <p className="text-[14px] leading-relaxed text-mist-400">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
