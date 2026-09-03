import { Link2, BrainCircuit, ListChecks, LineChart } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const STEPS = [
  { n: '01', icon: Link2, title: 'Enter your URL', body: 'Tell SitePilot which website you want to analyze.' },
  { n: '02', icon: BrainCircuit, title: 'AI analyzes your website', body: 'Our analysis engine evaluates multiple dimensions of your website.' },
  { n: '03', icon: ListChecks, title: 'Discover opportunities', body: 'Get prioritized issues and recommendations.' },
  { n: '04', icon: LineChart, title: 'Improve and monitor', body: 'Make improvements and track your progress over time.' },
]

export default function HowItWorks() {
  return (
    <Section className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading align="center" title="From URL to action plan in four steps." />
      </Reveal>

      <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="relative flex flex-col items-start gap-4">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-void-850 text-[13px] font-semibold text-violet-300 shadow-card">
                {s.n}
              </span>
              <s.icon className="h-5 w-5 text-cyan-300" strokeWidth={1.75} />
              <h3 className="text-[16.5px] font-medium text-mist-100">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-mist-400">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
