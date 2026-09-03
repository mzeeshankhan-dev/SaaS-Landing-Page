import { Smartphone, Type, Link2, Image as ImageIcon } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const RECS = [
  {
    priority: '01',
    icon: Smartphone,
    impact: 'High',
    effort: 'Low',
    title: 'Improve your mobile CTA',
    body: 'Your primary CTA has low visibility on smaller screens. Move the CTA closer to the hero headline and increase visual contrast.',
  },
  {
    priority: '02',
    icon: ImageIcon,
    impact: 'High',
    effort: 'Medium',
    title: 'Compress hero images',
    body: 'Unoptimized hero images are adding 1.4s to your Largest Contentful Paint. Serve modern formats at the right size.',
  },
  {
    priority: '03',
    icon: Type,
    impact: 'Medium',
    effort: 'Low',
    title: 'Fix heading hierarchy',
    body: 'Three pages skip from H1 directly to H3, which confuses both screen readers and search crawlers.',
  },
  {
    priority: '04',
    icon: Link2,
    impact: 'Medium',
    effort: 'Low',
    title: 'Repair broken internal links',
    body: '6 internal links return a 404. Redirect or update them to preserve link equity and user trust.',
  },
]

const impactColor = { High: 'text-cyan-300 bg-cyan-400/10', Medium: 'text-violet-300 bg-violet-500/10' }
const effortColor = { Low: 'text-emerald-300 bg-emerald-400/10', Medium: 'text-amber-300 bg-amber-400/10' }

export default function Recommendations() {
  return (
    <Section className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="AI Recommendations"
          title="Don't just find problems. Know what to fix next."
          subtitle="Every issue comes with a prioritized, plain-language recommendation — ranked by impact and effort."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {RECS.map((r, i) => (
          <Reveal key={r.priority} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-violet-400/25">
              <div className="flex items-start justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 text-violet-300">
                  <r.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-[13px] font-medium text-mist-500">Priority {r.priority}</span>
              </div>

              <h3 className="mt-4 text-[17px] font-medium text-mist-100">{r.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-mist-400">{r.body}</p>

              <div className="mt-5 flex items-center gap-2">
                <span className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${impactColor[r.impact]}`}>
                  Impact: {r.impact}
                </span>
                <span className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${effortColor[r.effort]}`}>
                  Effort: {r.effort}
                </span>
              </div>

              <button className="mt-5 self-start text-[13.5px] font-medium text-violet-300 transition-colors hover:text-violet-200">
                View recommendation →
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
