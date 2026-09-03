import { Sparkles, ArrowRight } from 'lucide-react'
import { Section } from './ui/Primitives'

const COLUMNS = [
  { title: 'Product', links: ['Features', 'Website Audit', 'Analytics', 'AI Recommendations', 'Pricing'] },
  { title: 'Solutions', links: ['Agencies', 'Startups', 'Marketing Teams', 'Developers'] },
  { title: 'Resources', links: ['Documentation', 'Blog', 'Guides', 'Help Center'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20">
      <Section className="pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
                <Sparkles className="h-4 w-4 text-white" strokeWidth={2.25} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-mist-100">SitePilot AI</span>
            </a>
            <p className="max-w-xs text-[14px] leading-relaxed text-mist-500">
              AI-powered website intelligence — performance, SEO, UX, accessibility, and conversion, in one score.
            </p>

            <form className="mt-2 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <label className="text-[13px] font-medium text-mist-300">Get product updates</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[13.5px] text-mist-100 placeholder:text-mist-500 outline-none focus:border-violet-400/50"
                />
                <button className="grid shrink-0 place-items-center rounded-lg bg-gradient-to-b from-violet-500 to-violet-600 px-3.5 text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="text-[13px] font-medium text-mist-200">{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[13.5px] text-mist-500 transition-colors hover:text-mist-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[13px] text-mist-500">© 2026 SitePilot AI. All rights reserved.</p>
          <div className="flex gap-5 text-[13px] text-mist-500">
            <a href="#" className="hover:text-mist-200">Privacy</a>
            <a href="#" className="hover:text-mist-200">Terms</a>
            <a href="#" className="hover:text-mist-200">Security</a>
          </div>
        </div>
      </Section>
    </footer>
  )
}
