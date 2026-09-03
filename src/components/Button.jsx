import { FiArrowRight } from 'react-icons/fi'

export default function Button({ children, variant = 'primary', className = '', href, onClick, type = 'button' }) {
  const base = 'group inline-flex items-center justify-center gap-2 rounded-full border transition-all duration-300 text-sm font-semibold tracking-[0.12em] uppercase'
  const variants = {
    primary: 'border-forest bg-forest text-white hover:-translate-y-1 hover:shadow-soft',
    secondary: 'border-border bg-white text-forest dark:bg-[#0f1a17] dark:text-[#edf7f2] dark:border-[#1d312b] hover:-translate-y-1 hover:shadow-soft',
    dark: 'border-white/10 bg-[#0d1714] text-white hover:-translate-y-1 hover:shadow-soft'
  }

  const content = (
    <>
      <span>{children}</span>
      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} px-6 py-3 ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} px-6 py-3 ${className}`}>
      {content}
    </button>
  )
}
