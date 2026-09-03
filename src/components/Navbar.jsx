import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const LINKS = ['Product', 'Features', 'Solutions', 'Integrations', 'Pricing', 'Resources']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? 'mx-3 mt-3 rounded-2xl border border-white/10 bg-void-950/70 shadow-card backdrop-blur-xl sm:mx-6 sm:mt-4' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-glow">
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2.25} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-mist-100">SitePilot AI</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="rounded-lg px-3.5 py-2 text-[14px] text-mist-400 transition-colors hover:bg-white/[0.04] hover:text-mist-100"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#login" className="px-2 text-[14px] font-medium text-mist-300 hover:text-mist-100">
              Log in
            </a>
            <a
              href="#scanner"
              className="rounded-lg bg-gradient-to-b from-violet-500 to-violet-600 px-4 py-2 text-[14px] font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_6px_16px_-6px_rgba(139,92,246,0.6)] transition-transform hover:scale-[1.03]"
            >
              Start Free
            </a>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-mist-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-2 rounded-2xl border border-white/10 bg-void-900/95 p-4 shadow-card backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] text-mist-300 hover:bg-white/[0.05] hover:text-mist-100"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <a href="#login" className="rounded-lg px-3 py-2.5 text-center text-[15px] font-medium text-mist-300">
                Log in
              </a>
              <a
                href="#scanner"
                className="rounded-lg bg-gradient-to-b from-violet-500 to-violet-600 px-3 py-2.5 text-center text-[15px] font-medium text-white"
              >
                Start Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
