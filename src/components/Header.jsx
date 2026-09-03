import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from 'react-icons/fi'
import { navItems } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const marqueeItems = [
  'PRECISION AGRICULTURE',
  'SMART DAIRY',
  'FOOD TECHNOLOGY',
  'CIRCULAR SUSTAINABILITY',
]

function ThemeToggle({ isDark, themeLabel, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={themeLabel}
      aria-pressed={isDark}
      title={themeLabel}
      className="relative inline-flex h-[34px] w-[58px] shrink-0 items-center rounded-full border border-[#075B3A]/15 bg-white/90 p-1 shadow-[0_5px_18px_rgba(7,91,58,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#72B943] dark:border-white/10 dark:bg-[#102019]"
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-[7px] text-[13px] text-[#075B3A]/50 dark:text-white/45">
        <FiSun aria-hidden="true" />
        <FiMoon aria-hidden="true" />
      </span>
      <span className={`relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#eaf3eb] text-[#075B3A] shadow-[0_2px_8px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-out dark:bg-[#1b3528] dark:text-[#dff5ea] ${isDark ? 'translate-x-[22px]' : 'translate-x-0'}`}>
        {isDark ? <FiMoon size={14} aria-hidden="true" /> : <FiSun size={14} aria-hidden="true" />}
      </span>
      <span className="sr-only">{themeLabel}</span>
    </button>
  )
}

export default function Header({ theme, setTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const closeTimer = useRef(null)

  const isDark = theme === 'dark'

  /* =========================================================
     CLOSE MENU
  ========================================================= */

  const closeMenu = useCallback(() => {
    if (!isMobileMenuOpen) return

    setIsClosing(true)

    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }

    closeTimer.current = setTimeout(() => {
      setIsMobileMenuOpen(false)
      setIsClosing(false)
    }, 180)
  }, [isMobileMenuOpen])

  /* =========================================================
     TOGGLE MENU
  ========================================================= */

  const toggleMenu = () => {
    if (isMobileMenuOpen) {
      closeMenu()
      return
    }

    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }

    setIsClosing(false)
    setIsMobileMenuOpen(true)
  }

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''

      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
      }
    }
  }, [isMobileMenuOpen])

  /* =========================================================
     ESC KEY + RESPONSIVE RESET
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMenu()
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        if (closeTimer.current) {
          clearTimeout(closeTimer.current)
        }

        setIsMobileMenuOpen(false)
        setIsClosing(false)
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [closeMenu, isMobileMenuOpen])

  /* =========================================================
     THEME
  ========================================================= */

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'dark' ? 'light' : 'dark',
    )
  }

  const themeLabel = isDark
    ? 'Switch to light mode'
    : 'Switch to dark mode'

  return (
    <>
      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header
        className="
          site-header
          sticky
          top-0
          z-[9999]
          w-full
          border-b
          border-black/5
          bg-[#F7F9F5]/95
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-[#07100D]/95
        "
      >
        {/* ===================================================
            TOP HEADER ROW
        =================================================== */}

        <div
          className="
            mx-auto
            grid
            h-[72px]
            max-w-[1400px]
            grid-cols-[auto_1fr_auto]
            items-center
            gap-4
            px-4
            sm:h-[80px]
            sm:px-6
            lg:h-[94px]
            lg:px-8
            xl:px-10
          "
        >
          {/* =================================================
              LEFT — LOGO
          ================================================= */}

          <div
            className="
              flex
              min-w-0
              items-center
              justify-start
            "
          >
            <Link
              to="/"
              aria-label="Tejays Agri home"
              className="
                inline-flex
                shrink-0
                items-center
              "
            >
              <img src={assetPath(
                isDark
                  ? '/logo/Tejays_logo_dark.png'
                  : '/logo/Tejays_logo.png'
              )}
                alt="Tejays Agri"
                className="
                  h-[44px]
                  w-auto
                  max-w-[175px]
                  object-contain
                  sm:h-[52px]
                  sm:max-w-[195px]
                  lg:h-[68px]
                  lg:max-w-none
                "
              />
            </Link>
          </div>

          {/* =================================================
              CENTER — MARQUEE
              DESKTOP ONLY
          ================================================= */}

          <div
            className="
              hidden
              items-center
              justify-center
              lg:flex
            "
          >
            <div
              className="
                w-[420px]
                overflow-hidden
                rounded-full
                border
                border-[#075B3A]/15
                bg-white/60
                px-4
                py-2
                shadow-[0_8px_30px_rgba(7,91,58,0.04)]
                backdrop-blur-sm
                xl:w-[500px]
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <div
                className="
                  marquee-track
                  flex
                  w-max
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#17352A]/65
                  dark:text-white/70
                "
              >
                {[
                  ...marqueeItems,
                  ...marqueeItems,
                ].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="
                      mx-3
                      inline-flex
                      items-center
                      gap-3
                    "
                  >
                    {item}

                    <span className="text-[#72B943]">
                      /
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — CTA + THEME + MENU
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-end
              gap-2
              sm:gap-3
            "
          >
            {/* Desktop CTA */}

            <Link
              to="/contact"
              className="
                hidden
                items-center
                rounded-full
                bg-[#075B3A]
                px-5
                py-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
                transition-colors
                hover:bg-[#064C31]
                lg:inline-flex
              "
            >
              Start a conversation
            </Link>

            {/* Theme Toggle
                ALWAYS VISIBLE
                MOBILE + TABLET + DESKTOP */}

            <ThemeToggle isDark={isDark} themeLabel={themeLabel} onToggle={toggleTheme} />

            {/* Hamburger
                MOBILE + TABLET ONLY */}

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                isMobileMenuOpen
                  ? 'Close menu'
                  : 'Open menu'
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="
                inline-flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#17352A]/15
                bg-white/80
                text-[#17352A]
                shadow-sm
                transition-all
                duration-200
                hover:border-[#72B943]
                hover:text-[#075B3A]
                sm:h-[42px]
                sm:w-[42px]
                lg:hidden
                dark:border-white/10
                dark:bg-[#102019]
                dark:text-white
                dark:hover:border-[#72B943]
                dark:hover:text-[#72B943]
              "
            >
              {isMobileMenuOpen ? (
                <FiX
                  size={20}
                  aria-hidden="true"
                />
              ) : (
                <FiMenu
                  size={20}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* ===================================================
            DESKTOP NAVIGATION
            LG AND ABOVE
        =================================================== */}

        <div
          className="
            hidden
            border-t
            border-black/5
            lg:block
            dark:border-white/10
          "
        >
          <nav
            aria-label="Main navigation"
            className="
              mx-auto
              flex
              max-w-[1400px]
              items-center
              justify-center
              gap-x-6
              px-4
              py-3
              sm:px-6
              lg:px-8
              xl:px-10
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  group
                  relative
                  py-2
                  font-display
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  transition-colors
                  duration-300
                  ${isActive
                    ? 'text-[#075B3A] dark:text-[#72B943]'
                    : 'text-[#17352A]/75 hover:text-[#075B3A] dark:text-white/75 dark:hover:text-[#72B943]'
                  }
                `}
              >
                {({ isActive }) => (
                  <span className="relative whitespace-nowrap">
                    {item.name}

                    <span
                      className={`
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        bg-[#72B943]
                        transition-[width]
                        duration-300
                        ${isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                        }
                      `}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* =====================================================
          MOBILE / TABLET MENU
          OUTSIDE HEADER
      ===================================================== */}

      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}

          <div
            className="
              fixed
              inset-0
              z-[9997]
              bg-black/10
              backdrop-blur-[2px]
              lg:hidden
            "
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu */}

          <div
            id="mobile-navigation"
            className={`
              fixed
              left-0
              right-0
              bottom-0
              top-[72px]
              z-[9998]
              overflow-y-auto
              overscroll-contain
              bg-[#F7F9F5]
              text-[#17352A]
              shadow-[0_20px_60px_rgba(7,91,58,0.12)]
              lg:hidden
              dark:bg-[#07100D]
              dark:text-white
              sm:top-[80px]
              ${isClosing
                ? 'mobile-menu-out'
                : 'mobile-menu-in'
              }
            `}
          >
            <div
              className="
                mx-auto
                flex
                min-h-full
                max-w-[1400px]
                flex-col
                px-4
                pb-8
                sm:px-6
              "
            >
              {/* =================================================
                  MENU HEADER
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-black/5
                  py-5
                  dark:border-white/10
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#72B943]
                  "
                >
                  Navigation
                </span>

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#17352A]/40
                    dark:text-white/40
                  "
                >
                  Tejays Agri
                </span>
              </div>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col"
              >
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) => `
                      group
                      flex
                      min-h-[62px]
                      items-center
                      justify-between
                      border-b
                      border-black/10
                      font-display
                      text-[18px]
                      font-semibold
                      tracking-[-0.02em]
                      transition-colors
                      duration-200
                      sm:min-h-[66px]
                      sm:text-[20px]
                      dark:border-white/10
                      ${isActive
                        ? 'text-[#075B3A] dark:text-[#72B943]'
                        : 'text-[#17352A] hover:text-[#075B3A] dark:text-white dark:hover:text-[#72B943]'
                      }
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-3">
                          <span
                            className={`
                              text-[8px]
                              font-bold
                              tracking-[0.15em]
                              ${isActive
                                ? 'text-[#72B943]'
                                : 'text-[#17352A]/30 dark:text-white/25'
                              }
                            `}
                          >
                            {String(index + 1).padStart(
                              2,
                              '0',
                            )}
                          </span>

                          <span>
                            {item.name}
                          </span>
                        </span>

                        <span
                          className={`
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#72B943]
                            transition-opacity
                            duration-200
                            ${isActive
                              ? 'opacity-100'
                              : 'opacity-0 group-hover:opacity-100'
                            }
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <div className="mt-auto pt-7">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="
                    inline-flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#075B3A]
                    px-4
                    py-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    transition-colors
                    hover:bg-[#064C31]
                  "
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}