export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`} data-aos="fade-up">
      {eyebrow && (
        <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? 'text-[#d8d5b4]' : 'text-forest dark:text-[#9fd8bc]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] ${light ? 'text-white' : 'text-[#0d1714] dark:text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-7 ${light ? 'text-white/70' : 'text-[#4a5b55] dark:text-[#dfe9e4]'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
