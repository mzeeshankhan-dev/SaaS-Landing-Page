import { ShieldCheck, KeyRound, Lock, SlidersHorizontal, Activity } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const POINTS = [
  { icon: Lock, title: 'Secure data handling', body: 'Website data is processed in isolated, access-controlled environments.' },
  { icon: KeyRound, title: 'Role-based access', body: 'Control exactly who on your team can view or edit each audit.' },
  { icon: ShieldCheck, title: 'Encrypted connections', body: 'All data in transit is protected with modern TLS encryption.' },
  { icon: SlidersHorizontal, title: 'Privacy controls', body: 'Decide what gets stored, shared, or deleted at any time.' },
  { icon: Activity, title: 'Activity monitoring', body: 'Every scan and export is logged for full team visibility.' },
]

export default function Security() {
  return (
    <Section className="py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Security"
            title="Built with privacy and security in mind."
            subtitle="Your website data — and your customers' — is handled with the same care you'd expect from any tool in your stack."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p.icon className="h-4.5 w-4.5 text-cyan-300" strokeWidth={1.75} />
                <h3 className="text-[14.5px] font-medium text-mist-100">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-mist-500">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
