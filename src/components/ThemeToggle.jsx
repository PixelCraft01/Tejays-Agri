export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#0d1714] dark:text-[#edf7f2]"
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
