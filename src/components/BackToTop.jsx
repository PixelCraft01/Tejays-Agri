import { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 bg-white text-forest shadow-soft transition-all duration-300 hover:-translate-y-1 dark:bg-[#0d1714] dark:text-[#dfe9e4] ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <FiChevronUp size={20} />
    </button>
  )
}
