export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
        <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </span>
        {align === 'center' && (
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
        )}
      </div>

      <h2 className="font-display text-3xl font-bold tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>

      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>}
    </div>
  )
}
