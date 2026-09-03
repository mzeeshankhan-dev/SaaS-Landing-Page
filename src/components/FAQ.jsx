import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const FAQS = [
  { q: 'How does SitePilot analyze my website?', a: 'SitePilot crawls your site and runs it through five analysis layers — performance, SEO, UX, accessibility, and conversion — then compiles the findings into a single health score with prioritized recommendations.' },
  { q: 'Do I need technical knowledge?', a: 'No. Every finding is translated into plain-language recommendations, so you can act on them without a development or SEO background.' },
  { q: 'Can I analyze multiple websites?', a: 'Yes. Free includes one website; Pro supports up to 10, and Business supports unlimited websites.' },
  { q: 'How often can I run an audit?', a: 'Pro and Business plans include continuous monitoring, so audits run automatically. You can also trigger a manual scan anytime.' },
  { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel anytime from your billing settings — there are no long-term contracts.' },
  { q: 'Does SitePilot work with WordPress and Shopify?', a: 'Yes. SitePilot integrates directly with WordPress and Shopify, along with Webflow, Google Analytics, and more.' },
  { q: 'Can I export reports?', a: 'Yes. Pro and Business plans can export polished, shareable reports — Business plans can also white-label them.' },
  { q: 'How is my website data handled?', a: 'Your data is processed in access-controlled environments and encrypted in transit. You control what is stored, shared, or deleted.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Section className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading align="center" title="Frequently asked questions." />
      </Reveal>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={item.q} delay={i * 0.03}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-medium text-mist-100">{item.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <Plus className="h-4 w-4 shrink-0 text-mist-400" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-4 text-[14px] leading-relaxed text-mist-400">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
