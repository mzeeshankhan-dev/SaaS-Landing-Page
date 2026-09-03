import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Section, Reveal, SectionHeading } from './ui/Primitives'

const PLANS = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    tagline: 'Try SitePilot on a single site',
    cta: 'Start Free',
    features: ['1 website', 'Basic website audit', 'Basic health score', 'Limited recommendations'],
  },
  {
    name: 'Pro',
    price: { monthly: 29, yearly: 24 },
    tagline: 'For teams shipping improvements weekly',
    cta: 'Start Pro Trial',
    popular: true,
    features: [
      '10 websites',
      'Full AI analysis',
      'Advanced recommendations',
      'Performance monitoring',
      'SEO analysis',
      'UX analysis',
      'Reports',
    ],
  },
  {
    name: 'Business',
    price: { monthly: 99, yearly: 84 },
    tagline: 'For agencies and larger portfolios',
    cta: 'Get Started',
    features: [
      'Unlimited websites',
      'Advanced analytics',
      'Team members',
      'White-label reports',
      'Priority support',
      'Advanced monitoring',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <Section id="pricing" className="py-24 lg:py-32">
      <Reveal>
        <SectionHeading align="center" title="Simple pricing that scales with you." />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-1">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-lg px-4 py-2 text-[13.5px] font-medium transition-colors ${!yearly ? 'bg-violet-500/20 text-violet-200' : 'text-mist-500'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-[13.5px] font-medium transition-colors ${yearly ? 'bg-violet-500/20 text-violet-200' : 'text-mist-500'}`}
          >
            Yearly
            <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[11px] text-cyan-300">Save 18%</span>
          </button>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                plan.popular
                  ? 'border-violet-400/30 bg-gradient-to-b from-violet-500/[0.08] to-transparent shadow-glow'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-[11px] font-semibold text-void-950">
                  Most Popular
                </span>
              )}
              <h3 className="text-[17px] font-medium text-mist-100">{plan.name}</h3>
              <p className="mt-1 text-[13.5px] text-mist-500">{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-[42px] font-semibold leading-none text-mist-100">
                  ${yearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="pb-1 text-[14px] text-mist-500">/month</span>
              </div>

              <button
                className={`mt-7 rounded-xl px-5 py-3 text-[14.5px] font-medium transition-transform hover:scale-[1.02] ${
                  plan.popular
                    ? 'bg-gradient-to-b from-violet-500 to-violet-600 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_8px_24px_-8px_rgba(139,92,246,0.65)]'
                    : 'border border-white/10 bg-white/[0.03] text-mist-100 hover:bg-white/[0.07]'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-mist-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
