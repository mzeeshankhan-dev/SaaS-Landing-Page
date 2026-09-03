import { motion } from 'framer-motion'
import { ScanSearch, Gauge, Search, Layers, Target, BrainCircuit, Activity, FileBarChart } from 'lucide-react'
import { Section, Reveal, SectionHeading, MetricBar } from './ui/Primitives'

export default function FeaturesBento() {
  return (
    <Section id="features" className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading align="center" title="Everything you need to build a better website." />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[220px]">
        {/* 1 — large, spans 2 cols */}
        <Reveal className="lg:col-span-2 lg:row-span-1" delay={0.02}>
          <Card className="h-full">
            <IconBadge icon={ScanSearch} />
            <h3 className="mt-4 text-[19px] font-medium text-mist-100">AI Website Audit</h3>
            <p className="mt-1.5 max-w-md text-[14.5px] leading-relaxed text-mist-400">
              Analyze the entire website automatically — every page, every layer, in one pass.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Performance', 'SEO', 'UX', 'Accessibility', 'Conversion'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-mist-400">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* 2 — performance intelligence */}
        <Reveal delay={0.06}>
          <Card className="h-full">
            <IconBadge icon={Gauge} color="cyan" />
            <h3 className="mt-4 text-[17px] font-medium text-mist-100">Performance Intelligence</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-mist-400">
              Track speed, Core Web Vitals, and loading behavior.
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <MetricBar label="LCP" value={91} color="#22D3EE" />
            </div>
          </Card>
        </Reveal>

        {/* 3 — SEO */}
        <Reveal delay={0.1}>
          <Card className="h-full">
            <IconBadge icon={Search} />
            <h3 className="mt-4 text-[17px] font-medium text-mist-100">SEO Intelligence</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-mist-400">
              Metadata, heading structure, and technical SEO gaps — surfaced automatically.
            </p>
          </Card>
        </Reveal>

        {/* 4 — UX */}
        <Reveal delay={0.14}>
          <Card className="h-full">
            <IconBadge icon={Layers} color="cyan" />
            <h3 className="mt-4 text-[17px] font-medium text-mist-100">UX Analysis</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-mist-400">
              Navigation, readability, and mobile experience, evaluated page by page.
            </p>
          </Card>
        </Reveal>

        {/* 5 — Conversion, spans 2 */}
        <Reveal className="lg:col-span-2" delay={0.18}>
          <Card className="h-full">
            <IconBadge icon={Target} />
            <h3 className="mt-4 text-[19px] font-medium text-mist-100">Conversion Optimization</h3>
            <p className="mt-1.5 max-w-md text-[14.5px] leading-relaxed text-mist-400">
              CTA placement, form friction, and landing page hierarchy — mapped against what actually converts.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[86, 89, 94].map((v, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                  <p className="text-[20px] font-semibold text-mist-100">{v}</p>
                  <p className="text-[11px] text-mist-500">{['CTA', 'Forms', 'Trust'][i]}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* 6 — AI Recommendations */}
        <Reveal delay={0.22}>
          <Card className="h-full">
            <IconBadge icon={BrainCircuit} color="cyan" />
            <h3 className="mt-4 text-[17px] font-medium text-mist-100">AI Recommendations</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-mist-400">
              Complex audit results, turned into simple, actionable steps.
            </p>
          </Card>
        </Reveal>

        {/* 7 — Continuous Monitoring */}
        <Reveal delay={0.26}>
          <Card className="h-full">
            <IconBadge icon={Activity} />
            <h3 className="mt-4 text-[17px] font-medium text-mist-100">Continuous Monitoring</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-mist-400">
              Website health tracked over time, with alerts when something regresses.
            </p>
          </Card>
        </Reveal>

        {/* 8 — Reports, spans 2 */}
        <Reveal className="lg:col-span-2" delay={0.3}>
          <Card className="h-full">
            <IconBadge icon={FileBarChart} color="cyan" />
            <h3 className="mt-4 text-[19px] font-medium text-mist-100">Reports</h3>
            <p className="mt-1.5 max-w-md text-[14.5px] leading-relaxed text-mist-400">
              Beautiful, understandable website reports — ready to share with your team or clients.
            </p>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}

function Card({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.035] ${className}`}
    >
      {children}
    </motion.div>
  )
}

function IconBadge({ icon: Icon, color = 'violet' }) {
  const map = {
    violet: 'from-violet-500/20 to-violet-500/5 text-violet-300',
    cyan: 'from-cyan-400/20 to-cyan-400/5 text-cyan-300',
  }
  return (
    <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${map[color]}`}>
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  )
}
