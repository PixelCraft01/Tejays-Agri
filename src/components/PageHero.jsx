export default function PageHero({ eyebrow, title, description, align = 'left', actions, image }) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 dark:border-white/10 bg-white dark:bg-[#0b1210]">
      <div className="absolute inset-0 bg-hero-grid bg-[size:38px_38px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className={`grid items-center gap-10 ${image ? 'lg:grid-cols-[1.2fr_0.8fr]' : ''}`}>
          <div className={align === 'center' ? 'text-center mx-auto max-w-4xl' : ''} data-aos="fade-up">
            {eyebrow && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest dark:text-[#9fd8bc]">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-[#0b1210] dark:text-white sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#4a5b55] dark:text-[#dfe9e4] sm:text-lg">
                {description}
              </p>
            )}
            {actions && <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">{actions}</div>}
          </div>
          {image && (
            <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-[#edf3ee] p-3 shadow-card dark:border-white/10 dark:bg-[#0e1c18]" data-aos="zoom-in" data-aos-delay="150">
              <img src={image} alt="Tejays Agri concept" className="h-[360px] w-full rounded-[22px] object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
