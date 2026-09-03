import { motion } from 'framer-motion'

/** Consistent section wrapper: vertical rhythm + max width + horizontal padding */
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative container-px ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

/** Scroll-reveal wrapper — used sparingly, only for section-level entrances */
export function Reveal({ children, delay = 0, y = 22, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-mist-300">
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`} style={{ maxWidth: align === 'center' ? 640 : 620 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-[34px] leading-[1.15] font-semibold tracking-[-0.02em] text-mist-100 sm:text-[42px] lg:text-[48px]">
        {title}
      </h2>
      {subtitle && <p className="text-[17px] leading-relaxed text-mist-400">{subtitle}</p>}
    </div>
  )
}

export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_8px_24px_-8px_rgba(139,92,246,0.65)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[15px] font-medium text-mist-100 backdrop-blur transition-colors duration-200 hover:bg-white/[0.07] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

/** Circular score ring, animates the arc in on view */
export function ScoreRing({ value, size = 132, stroke = 10, label, delay = 0 }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const color =
    value >= 90 ? '#22D3EE' : value >= 75 ? '#A78BFA' : value >= 50 ? '#818CF8' : '#F87171'
  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (value / 100) * c }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-[26px] font-semibold tabular-nums text-mist-100">{value}</span>
        {label && <span className="text-[11px] text-mist-500">{label}</span>}
      </div>
    </div>
  )
}

export function MetricBar({ label, value, color = '#8B5CF6', delay = 0 }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-mist-400">{label}</span>
        <span className="font-medium tabular-nums text-mist-200">{value}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, #67E8F9)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
