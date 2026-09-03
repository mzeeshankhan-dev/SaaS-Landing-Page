import { motion } from 'framer-motion'
import { BarChart3, Search, Globe, ShoppingBag, Layers3, Slack, Users, Zap } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const INTEGRATIONS = [
  { name: 'Google Analytics', icon: BarChart3 },
  { name: 'Search Console', icon: Search },
  { name: 'WordPress', icon: Globe },
  { name: 'Shopify', icon: ShoppingBag },
  { name: 'Webflow', icon: Layers3 },
  { name: 'Slack', icon: Slack },
  { name: 'HubSpot', icon: Users },
  { name: 'Zapier', icon: Zap },
]

export default function Integrations() {
  return (
    <Section id="integrations" className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading align="center" title="Works with the tools you already use." />
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {INTEGRATIONS.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.04}>
            <motion.div
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-7 text-center transition-colors hover:border-violet-400/25 hover:bg-white/[0.04]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-mist-100">
                <it.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-[13.5px] text-mist-300">{it.name}</span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
