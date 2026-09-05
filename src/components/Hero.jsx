import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Zap, Bell } from 'lucide-react'
import { Section, ScoreRing, MetricBar } from './ui/Primitives'
import AINodeField from './three/AINodeField'
import humanHand from "../assets/images/h-hand.webp"
import robotHand from "../assets/images/r-hand.webp"

const METRICS = [
  { label: 'Performance', value: 94 },
  { label: 'SEO', value: 87 },
  { label: 'UX', value: 78 },
  { label: 'Accessibility', value: 89 },
  { label: 'Conversion', value: 91 },
]

export default function Hero() {
  const ref = useRef(null)
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mvY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 })
  const rotateY = useSpring(useTransform(mvX, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mvX.set((e.clientX - rect.left) / rect.width - 0.5)
    mvY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <div>
      <div className="flex justify-center -z-10">
        <div className="absolute grid items-center justify-center w-screen h-screen max-h-[650px] grid-cols-2 max-w-[1400px] mx-auto overflow-hidden">
          <motion.img
            width={1000}
            height={1000}
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className='brightness-75' src={humanHand} alt="Human Hand" />
          <motion.img
            width={1000}
            height={1000}
            initial={{ x: 700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay:0.2,
            }}
            className='relative top-2 brightness-75' src={robotHand} alt="Robot Hand" />
        </div>
      </div>

      <div id="top" className="relative overflow-hidden pt-36 lg:pt-25 lg:pb-32">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_10%,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <Section>
          {/* Left: copy */}
          <div className='grid grid-cols-1 min-[820px]:grid-cols-[2fr_1fr] items-center gap-16 lg:gap-8 mb-20 lg:mb-20'>
            <div className="relative z-10 flex flex-col items-start gap-7">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/[0.08] px-3.5 py-1.5 text-[13px] font-medium text-violet-300"
              >
                <span className="text-cyan-300">✦</span> AI Website Intelligence — Now available
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="text-[44px] font-semibold leading-[1.08] tracking-[-0.025em] text-mist-100 sm:text-[58px] lg:text-[68px]"
              >
                Turn your website into a{' '}
                <span className="text-gradient-violet">growth engine.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="max-w-[520px] text-[18px] leading-relaxed text-mist-400"
              >
                SitePilot AI analyzes your website's performance, SEO, UX, accessibility, and conversion
                opportunities — then gives you clear actions to improve it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <a
                  href="#scanner"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_10px_28px_-8px_rgba(139,92,246,0.65)] transition-transform duration-200 hover:scale-[1.02]"
                >
                  Analyze My Website
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[15px] font-medium text-mist-100 backdrop-blur transition-colors hover:bg-white/[0.07]">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="text-[13px] text-mist-500"
              >
                No credit card required · Free website audit
              </motion.p>
            </div>
          </div>


          {/* Right: floating dashboard */}
          <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mvX.set(0)
              mvY.set(0)
            }}
            className="relative z-10 [perspective:1400px] min-[780px]:p-20"
          >
            <div className="absolute pointer-events-none -inset-10 min-[780px]:-inset-0 opacity-70 ">
              <AINodeField className="w-full h-full" />
            </div>

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [0, -12, 0] }}
              transition={{ y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
              className="relative rounded-3xl border border-white/10 bg-void-850/80 p-8 shadow-card backdrop-blur-2xl [transform-style:preserve-3d]"
            >
              {/* header row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span className="text-[13px] font-medium text-mist-300">sitepilot.ai/audit</span>
                </div>
                <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
                  Scan complete
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto_1fr]">
                <div className="flex flex-col items-center gap-2 p-5 glass rounded-2xl">
                  <ScoreRing value={92} label="/ 100" size={116} />
                  <span className="text-[13px] font-medium text-mist-200">Website Health Score</span>
                </div>

                <div className="glass flex flex-col justify-center gap-3.5 rounded-2xl p-5">
                  {METRICS.map((m, i) => (
                    <MetricBar key={m.label} label={m.label} value={m.value} delay={0.1 * i} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                <div className="p-4 glass rounded-2xl">
                  <div className="mb-2 flex items-center gap-2 text-[13px] font-medium text-mist-200">
                    <TrendingUp className="h-3.5 w-3.5 text-cyan-300" /> Traffic trend
                  </div>
                  <svg viewBox="0 0 220 60" className="w-full h-14">
                    <defs>
                      <linearGradient id="heroLine" x1="0" x2="1">
                        <stop offset="0%" stopColor="#A78BFA" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                    <polyline
                      points="0,45 30,38 60,42 90,25 120,30 150,14 180,20 220,6"
                      fill="none"
                      stroke="url(#heroLine)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-start gap-3 p-4 glass rounded-2xl">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-violet-300">
                    <Zap className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-medium text-mist-200">AI recommendation</p>
                    <p className="text-[12px] leading-snug text-mist-500">Compress hero images to cut LCP by 0.6s</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="glass absolute -right-6 -top-6 min-[780px]:top-8 min-[780px]:right-0 hidden items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card sm:flex"
            >
              <Bell className="w-4 h-4 text-cyan-300" />
              <div className="text-[12px]">
                <p className="font-medium text-mist-200">New issue resolved</p>
                <p className="text-mist-500">Mobile CTA contrast fixed</p>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  )
}
