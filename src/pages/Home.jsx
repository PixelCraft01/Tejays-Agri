import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from 'react-icons/fa'

import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiDroplet,
  FiZap,
} from 'react-icons/fi'

import Button from '../components/Button'
import { usePageMeta } from '../hooks/usePageMeta'
import { assetPath } from '../utils/assetPath'

const heroImage = assetPath('/images/tejays-agri-hero3.jpg')

export default function Home() {

  usePageMeta(
    'Tejays Agri | Technology. Dairy. Nutrition. Sustainability.',
    'Tejays Agri is a future-focused dairy ecosystem connecting technology, nutrition, sustainability, and smart agriculture.'
  )

  // =========================================================
  // VALUE CHAIN AUTO SCROLL
  // =========================================================

  const flowScrollRef = useRef(null)

  useEffect(() => {

    const container = flowScrollRef.current

    if (!container) return

    // Auto scroll only for mobile + tablet
    const isMobileTablet = window.matchMedia(
      '(max-width: 1023px)'
    )

    let animationFrame
    let paused = false
    let resumeTimer

    const scroll = () => {

      if (!paused && isMobileTablet.matches) {

        const maxScroll =
          container.scrollWidth - container.clientWidth

        if (maxScroll > 0) {

          if (container.scrollLeft >= maxScroll - 1) {

            container.scrollTo({
              left: 0,
              behavior: 'smooth',
            })

          } else {

            container.scrollLeft += 0.45

          }

        }

      }

      animationFrame = requestAnimationFrame(scroll)
    }

    const pause = () => {

      paused = true

      clearTimeout(resumeTimer)

      resumeTimer = setTimeout(() => {
        paused = false
      }, 1800)

    }

    container.addEventListener(
      'touchstart',
      pause,
      { passive: true }
    )

    container.addEventListener(
      'wheel',
      pause,
      { passive: true }
    )

    animationFrame = requestAnimationFrame(scroll)

    return () => {

      cancelAnimationFrame(animationFrame)

      clearTimeout(resumeTimer)

      container.removeEventListener(
        'touchstart',
        pause
      )

      container.removeEventListener(
        'wheel',
        pause
      )

    }

  }, [])

  return (
    <>
      {/* =========================================================
    SECTION 01 — PREMIUM HERO
========================================================= */}
      <section className="relative overflow-hidden bg-[#f5f7f2] dark:bg-[#07100d]">

        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#72B943]/10 blur-[110px]" />

          <div className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-[#2E8C82]/10 blur-[120px]" />

          {/* Tailwind-only technical grid */}
          <div
            className="
        absolute inset-0 opacity-[0.035] dark:opacity-[0.025]
        bg-[linear-gradient(rgba(7,91,58,1)_1px,transparent_1px),linear-gradient(90deg,rgba(7,91,58,1)_1px,transparent_1px)]
        bg-[size:72px_72px]
      "
          />

        </div>


        {/* MAIN CONTAINER */}
        <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-14 pt-16 sm:px-7 sm:pb-16 sm:pt-20 md:px-10 md:pb-20 md:pt-16 lg:px-12 lg:pb-24 lg:pt-20 xl:px-16">

          <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">


            {/* =====================================================
          LEFT CONTENT
      ===================================================== */}
            <div
              className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
              data-aos="fade-up"
            >

              {/* EYEBROW */}
              <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">

                <span className="h-px w-8 bg-[#075B3A] dark:bg-[#72B943]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#075B3A] dark:text-[#9FD8BC] sm:text-[9px] md:text-[10px]">
                  TECHNOLOGY. DAIRY. NUTRITION. SUSTAINABILITY.
                </span>

              </div>


              {/* SMALL INTRO LABEL */}
              <div className="mb-4 flex items-center gap-2 rounded-full border border-[#075B3A]/10 bg-white/60 px-3 py-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.035]">

                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_12px_rgba(114,185,67,0.65)]" />

                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#5C6B64] dark:text-[#A7B8B0]">
                  TEJAYS AGRI / GROWING FOR THE FUTURE
                </span>

              </div>


              {/* MAIN HEADING */}
              <h1
                className="
            max-w-[760px]
            font-display
            text-[clamp(3.2rem,11vw,5rem)]
            font-semibold
            leading-[0.88]
            tracking-[-0.065em]
            text-[#08150F]
            dark:text-white
            sm:text-[clamp(3.7rem,8vw,5.8rem)]
            md:text-[clamp(4.3rem,6vw,6.2rem)]
            lg:text-[clamp(4.4rem,5.2vw,6.5rem)]
          "
              >
                THE FUTURE
                <br />
                OF DAIRY.
                <br />

                <span className="relative inline-block text-[#075B3A] dark:text-[#72B943]">
                  ENGINEERED.

                  <span className="absolute -bottom-2 left-1 h-[2px] w-14 bg-[#72B943]/70 sm:w-20" />
                </span>
              </h1>


              {/* DESCRIPTION */}
              <p
                className="
            mt-7
            max-w-[610px]
            text-[14px]
            leading-6
            text-[#53645C]
            dark:text-[#C8D6CF]
            sm:mt-8
            sm:text-[16px]
            sm:leading-7
            md:text-[17px]
            md:leading-8
          "
              >
                Building an integrated ecosystem where advanced dairy farming,
                technology, nutrition and sustainability work as one connected future.
              </p>


              {/* BUTTONS */}
              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-4">

                <Link to="/contact" className="w-full sm:w-auto">

                  <Button
                    className="
                w-full
                rounded-full
                px-6
                py-3.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.08em]
                shadow-[0_12px_30px_rgba(7,91,58,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_16px_35px_rgba(7,91,58,0.22)]
                sm:w-auto
                sm:px-7
                sm:py-4
                sm:text-[10px]
              "
                  >
                    EXPLORE TEJAYS AGRI
                  </Button>

                </Link>


                <Link to="/technology" className="w-full sm:w-auto">

                  <Button
                    variant="secondary"
                    className="
                w-full
                rounded-full
                border
                border-[#075B3A]/15
                bg-white/70
                px-6
                py-3.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#075B3A]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                dark:border-white/15
                dark:bg-white/[0.035]
                dark:text-white
                dark:hover:bg-white/[0.07]
                sm:w-auto
                sm:px-7
                sm:py-4
                sm:text-[10px]
              "
                  >
                    DISCOVER OUR ECOSYSTEM
                  </Button>

                </Link>

              </div>


              {/* =====================================================
            POSITIONING STRIP
        ===================================================== */}
              <div
                className="
            mt-10
            w-full
            max-w-[650px]
            border-t
            border-[#0B2118]/10
            pt-6
            dark:border-white/10
            sm:mt-12
            sm:pt-7
          "
              >

                <div className="grid grid-cols-3">

                  {/* APPROACH */}
                  <div className="pr-3 sm:pr-5">

                    <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#87938D] sm:text-[8px]">
                      APPROACH
                    </p>

                    <p className="mt-2 text-[10px] font-semibold text-[#14261E] dark:text-white sm:text-sm">
                      Technology-led
                    </p>

                  </div>


                  {/* ECOSYSTEM */}
                  <div className="border-l border-[#0B2118]/10 px-3 dark:border-white/10 sm:px-5">

                    <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#87938D] sm:text-[8px]">
                      ECOSYSTEM
                    </p>

                    <p className="mt-2 text-[10px] font-semibold text-[#14261E] dark:text-white sm:text-sm">
                      Integrated
                    </p>

                  </div>


                  {/* VISION */}
                  <div className="border-l border-[#0B2118]/10 pl-3 dark:border-white/10 sm:pl-5">

                    <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#87938D] sm:text-[8px]">
                      VISION
                    </p>

                    <p className="mt-2 text-[10px] font-semibold text-[#14261E] dark:text-white sm:text-sm">
                      Built for Scale
                    </p>

                  </div>

                </div>

              </div>


              {/* SMALL BRAND STATEMENT */}
              <div className="mt-7 hidden items-center gap-3 lg:flex">

                <span className="h-px w-8 bg-[#075B3A]/20 dark:bg-[#72B943]/25" />

                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#87938D] dark:text-[#82968C]">
                  GROWING FOR THE FUTURE
                </span>

              </div>

            </div>


            {/* =====================================================
          RIGHT — HERO IMAGE
      ===================================================== */}
            <div
              className="relative w-full"
              data-aos="fade-left"
              data-aos-delay="120"
            >

              {/* TOP META */}
              <div className="mb-3 flex items-center justify-between px-1 sm:mb-4">

                <div className="flex items-center gap-2">

                  <span className="text-[8px] font-bold tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                    01
                  </span>

                  <span className="h-px w-7 bg-[#075B3A]/25 dark:bg-[#72B943]/25" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#78857F] dark:text-[#91A39A]">
                    SMART DAIRY
                  </span>

                </div>

                <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[#98A19D] dark:text-[#65756D]">
                  TEJAYS AGRI
                </span>

              </div>


              {/* IMAGE FRAME */}
              <div
                className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-black/[0.07]
            bg-white/70
            p-2
            shadow-[0_24px_70px_rgba(5,35,24,0.13)]
            backdrop-blur-sm
            dark:border-white/[0.08]
            dark:bg-white/[0.025]
            dark:shadow-[0_24px_70px_rgba(0,0,0,0.34)]
            sm:rounded-[28px]
            sm:p-3
          "
              >

                <div className="relative aspect-[16/12] overflow-hidden rounded-[18px] sm:rounded-[21px]">

                  <img
                    src={heroImage}
                    alt="Tejays Agri smart dairy and integrated campus"
                    className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                hover:scale-[1.025]
              "
                  />


                  {/* IMAGE OVERLAY */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06130D]/85 via-[#06130D]/10 to-transparent" />


                  {/* TOP BADGE */}
                  <div
                    className="
                absolute
                right-3
                top-3
                rounded-full
                border
                border-white/20
                bg-[#07130E]/55
                px-3
                py-1.5
                shadow-lg
                backdrop-blur-xl
                sm:right-4
                sm:top-4
                sm:px-3.5
                sm:py-2
              "
                  >

                    <div className="flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_10px_rgba(114,185,67,0.9)]" />

                      <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-white sm:text-[8px]">
                        INTEGRATED ECOSYSTEM
                      </span>

                    </div>

                  </div>


                  {/* IMAGE CORNER LABEL */}
                  <div className="absolute left-3 top-3 rounded-lg border border-white/15 bg-black/20 px-2.5 py-1.5 backdrop-blur-md sm:left-4 sm:top-4">

                    <p className="text-[6px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-[7px]">
                      AGRI / DAIRY / TECHNOLOGY
                    </p>

                  </div>


                  {/* BOTTOM PANEL */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">

                    <div
                      className="
                  rounded-[16px]
                  border
                  border-white/15
                  bg-[#07130E]/78
                  p-3
                  shadow-2xl
                  backdrop-blur-xl
                  sm:rounded-[18px]
                  sm:p-5
                "
                    >

                      <div className="flex items-end justify-between gap-4">

                        <div>

                          <p className="text-[7px] font-bold uppercase tracking-[0.22em] text-[#A9D8BD]">
                            TEJAYS AGRI
                          </p>

                          <p className="mt-1.5 text-xs font-medium text-white sm:text-sm">
                            One integrated dairy ecosystem
                          </p>

                        </div>


                        <div className="hidden text-right md:block">

                          <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-white/45">
                            ECOSYSTEM FLOW
                          </p>

                          <p className="mt-1.5 text-[8px] font-medium tracking-[0.08em] text-white/90">
                            GENETICS → FEED → DAIRY → PROCESSING
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* =====================================================
            FLOATING SYSTEM CARD
        ===================================================== */}
              <div
                className="
            absolute
            -bottom-5
            right-5
            hidden
            rounded-2xl
            border
            border-black/[0.07]
            bg-white/95
            px-4
            py-3
            shadow-[0_18px_45px_rgba(5,35,24,0.16)]
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-[#101C18]/95
            sm:block
          "
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#075B3A]/15 dark:border-[#72B943]/20">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_12px_rgba(114,185,67,0.9)]" />

                  </div>

                  <div>

                    <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#87938D]">
                      SYSTEM
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-[#14261E] dark:text-white">
                      Connected Intelligence
                    </p>

                  </div>

                </div>

              </div>


              {/* DECORATIVE INDEX */}
              <div className="absolute -bottom-10 left-0 hidden items-center gap-3 lg:flex">

                <span className="text-[7px] font-bold tracking-[0.2em] text-[#075B3A]/45 dark:text-[#72B943]/45">
                  01 / 12
                </span>

                <span className="h-px w-12 bg-[#075B3A]/15 dark:bg-[#72B943]/20" />

                <span className="text-[7px] uppercase tracking-[0.18em] text-[#87938D] dark:text-[#667870]">
                  THE BEGINNING
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 02 — THE TEJAYS AGRI APPROACH
========================================================= */}
      <section className="relative overflow-hidden bg-[#F7F9F6] py-16 dark:bg-[#07100D] sm:py-20 lg:py-24">

        {/* =====================================================
      BACKGROUND
  ===================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#72B943]/10 blur-[140px]" />

          <div className="absolute -right-40 top-[35%] h-[420px] w-[420px] rounded-full bg-[#075B3A]/[0.07] blur-[140px]" />

          <div className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full bg-[#2E8C82]/[0.06] blur-[140px]" />

        </div>


        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10 xl:px-12">

          {/* =====================================================
    INTRO
===================================================== */}
          <div className="grid gap-8 text-center lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:gap-16 lg:text-left xl:gap-24">

            {/* LEFT LABEL */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="relative flex items-start justify-start gap-4 min-h-0 lg:min-h-[230px] text-left"
            >
              <div className="flex shrink-0 flex-col items-center">
                {/* NUMBER + LINE */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#075B3A]/15 bg-white text-[10px] font-bold tracking-[0.08em] text-[#075B3A] shadow-[0_8px_25px_rgba(7,91,58,0.06)] dark:border-white/10 dark:bg-[#101B17] dark:text-[#72B943]">
                  02
                </span>

                <span className="mt-4 h-16 w-px bg-gradient-to-b from-[#075B3A]/30 to-transparent dark:from-[#72B943]/30" />
              </div>

              {/* CONTENT */}
              <div className="min-w-0 pt-1 text-left">
                <div className="flex items-center justify-start gap-3">
                  <span className="h-px w-8 shrink-0 bg-[#075B3A] dark:bg-[#72B943]" />

                  <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.28em] text-[#68766F] dark:text-[#9AAEA4]">
                    THE TEJAYS AGRI APPROACH
                  </span>
                </div>

                <p className="mt-5 max-w-[280px] text-left text-[11px] leading-6 text-[#7C8983] dark:text-[#82938B]">
                  Connecting dairy, agriculture, technology and sustainability through one
                  integrated ecosystem.
                </p>
              </div>
            </div>


            {/* RIGHT HEADING */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="100"
              className="flex flex-col items-center lg:items-start"
            >

              <h2 className="max-w-[1000px] font-display text-[clamp(2.4rem,5.6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#091710] dark:text-white">

                ONE ECOSYSTEM.
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  MANY POSSIBILITIES.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-7 text-[#586960] dark:text-[#C1D0C9] sm:mt-7 sm:text-[16px] sm:leading-8 lg:mx-0">
                Tejays Agri brings together dairy, technology, nutrition,
                agriculture and sustainability into one integrated ecosystem
                designed for efficiency, scale and long-term value creation.
              </p>

            </div>

          </div>


          {/* =====================================================
    PRINCIPLES HEADER
===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-10 flex w-full items-center justify-center gap-3 sm:mt-16 sm:gap-4"
          >

            <span className="h-px flex-1 bg-[#0B2118]/10 dark:bg-white/10" />

            <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.24em] text-[#8A9690] sm:text-[8px] sm:tracking-[0.28em]">
              WHAT DRIVES US
            </span>

            <span className="h-px flex-1 bg-[#0B2118]/10 dark:bg-white/10" />

          </div>

          {/* =====================================================
    CARDS
===================================================== */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">

            {/* =================================================
      CARD 01 — INTEGRATED
  ================================================= */}
            <article
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="0"
              className="
      group relative min-h-[315px] overflow-hidden rounded-[20px]
      border border-[#0B2118]/10
      bg-white
      p-4
      shadow-[0_10px_35px_rgba(5,35,24,0.04)]
      transition-all duration-500 ease-out

      hover:-translate-y-2
      hover:border-[#075B3A]/25
      hover:shadow-[0_25px_65px_rgba(5,35,24,0.12)]

      dark:border-white/10
      dark:bg-[#101B18]
      dark:hover:border-[#72B943]/30
      dark:hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]

      sm:min-h-[340px]
      sm:rounded-[24px]
      sm:p-6

      lg:p-7
    "
            >

              {/* Hover Glow */}
              <div
                className="
        pointer-events-none absolute
        -right-16 -top-16
        h-36 w-36
        rounded-full
        bg-[#72B943]/15
        opacity-0
        blur-3xl
        transition-all duration-500
        group-hover:opacity-100
        group-hover:scale-125
      "
              />

              {/* Top */}
              <div className="relative flex items-center justify-between">

                <span className="text-[8px] font-bold tracking-[0.18em] text-[#075B3A] dark:text-[#72B943] sm:text-[10px] sm:tracking-[0.2em]">
                  01
                </span>

                <div
                  className="
          flex h-9 w-9 items-center justify-center
          rounded-full
          border border-[#075B3A]/10
          bg-[#F7F9F6]
          text-[#075B3A]
          transition-all duration-500

          group-hover:scale-110
          group-hover:rotate-6
          group-hover:bg-[#075B3A]
          group-hover:text-white

          dark:border-white/10
          dark:bg-[#16231F]
          dark:text-[#72B943]
          dark:group-hover:bg-[#72B943]
          dark:group-hover:text-[#07100D]

          sm:h-11 sm:w-11
        "
                >
                  <span className="text-xs font-semibold sm:text-sm">
                    I
                    {/* I = Integrated → sabhi systems ko ek saath jodna */}
                  </span>
                </div>

              </div>


              {/* Content */}
              <div className="relative mt-8 sm:mt-12">

                <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#8A9690] sm:text-[8px] sm:tracking-[0.22em]">
                  FOUNDATION
                </p>

                <h3 className="mt-1.5 font-display text-[17px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white sm:mt-2 sm:text-[25px]">
                  Integrated
                </h3>

                <p className="mt-2.5 text-[10px] leading-[1.55] text-[#68766F] dark:text-[#AEBEB7] sm:mt-4 sm:text-[13px] sm:leading-6">
                  Dairy, agriculture, nutrition and technology working together as one connected ecosystem.
                </p>

              </div>


              {/* Tags */}
              <div className="relative mt-5 flex flex-wrap gap-1 sm:mt-7 sm:gap-2">

                {['Dairy', 'Agriculture', 'Nutrition'].map((item) => (
                  <span
                    key={item}
                    className="
            rounded-full
            border border-[#075B3A]/10
            bg-[#F7F9F6]
            px-2 py-1
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-[#52635A]
            transition-all duration-300

            group-hover:border-[#075B3A]/25
            group-hover:bg-[#075B3A]/[0.04]

            dark:border-white/10
            dark:bg-[#16231F]
            dark:text-[#9CAFA5]

            sm:px-2.5
            sm:text-[7px]
            sm:tracking-[0.12em]
          "
                  >
                    {item}
                  </span>
                ))}

              </div>


              {/* Bottom Accent */}
              <div
                className="
        absolute bottom-0 left-0
        h-[3px] w-0
        bg-[#075B3A]
        transition-all duration-500
        group-hover:w-full
        dark:bg-[#72B943]
      "
              />

            </article>


            {/* =================================================
      CARD 02 — INTELLIGENT
  ================================================= */}
            <article
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              className="
      group relative min-h-[315px] overflow-hidden rounded-[20px]
      border border-[#0B2118]/10
      bg-white
      p-4
      shadow-[0_10px_35px_rgba(5,35,24,0.04)]
      transition-all duration-500 ease-out

      hover:-translate-y-2
      hover:border-[#075B3A]/25
      hover:shadow-[0_25px_65px_rgba(5,35,24,0.12)]

      dark:border-white/10
      dark:bg-[#101B18]
      dark:hover:border-[#72B943]/30
      dark:hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]

      sm:min-h-[340px]
      sm:rounded-[24px]
      sm:p-6

      lg:p-7
    "
            >

              <div
                className="
        pointer-events-none absolute
        -right-16 -top-16
        h-36 w-36
        rounded-full
        bg-[#2E8C82]/15
        opacity-0
        blur-3xl
        transition-all duration-500
        group-hover:opacity-100
        group-hover:scale-125
      "
              />

              <div className="relative flex items-center justify-between">

                <span className="text-[8px] font-bold tracking-[0.18em] text-[#075B3A] dark:text-[#72B943] sm:text-[10px] sm:tracking-[0.2em]">
                  02
                </span>

                <div
                  className="
          flex h-9 w-9 items-center justify-center
          rounded-full
          border border-[#075B3A]/10
          bg-[#F7F9F6]
          text-[#075B3A]
          transition-all duration-500

          group-hover:scale-110
          group-hover:-rotate-6
          group-hover:bg-[#075B3A]
          group-hover:text-white

          dark:border-white/10
          dark:bg-[#16231F]
          dark:text-[#72B943]
          dark:group-hover:bg-[#72B943]
          dark:group-hover:text-[#07100D]

          sm:h-11 sm:w-11
        "
                >
                  <span className="text-xs font-semibold sm:text-sm">
                    D
                    {/* D = Intelligent → technology, data, AI/automation */}
                  </span>
                </div>

              </div>


              <div className="relative mt-8 sm:mt-12">

                <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#8A9690] sm:text-[8px] sm:tracking-[0.22em]">
                  TECHNOLOGY
                </p>

                <h3 className="mt-1.5 font-display text-[17px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white sm:mt-2 sm:text-[25px]">
                  Intelligent
                </h3>

                <p className="mt-2.5 text-[10px] leading-[1.55] text-[#68766F] dark:text-[#AEBEB7] sm:mt-4 sm:text-[13px] sm:leading-6">
                  Data, sensors and automation helping transform operations into intelligent decision-making systems.
                </p>

              </div>


              <div className="relative mt-5 flex flex-wrap gap-1 sm:mt-7 sm:gap-2">

                {['AI', 'IoT', 'Automation'].map((item) => (
                  <span
                    key={item}
                    className="
            rounded-full
            border border-[#075B3A]/10
            bg-[#F7F9F6]
            px-2 py-1
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-[#52635A]
            transition-all duration-300

            group-hover:border-[#075B3A]/25

            dark:border-white/10
            dark:bg-[#16231F]
            dark:text-[#9CAFA5]

            sm:px-2.5
            sm:text-[7px]
            sm:tracking-[0.12em]
          "
                  >
                    {item}
                  </span>
                ))}

              </div>


              <div
                className="
        absolute bottom-0 left-0
        h-[3px] w-0
        bg-[#075B3A]
        transition-all duration-500
        group-hover:w-full
        dark:bg-[#72B943]
      "
              />

            </article>


            {/* =================================================
      CARD 03 — SUSTAINABLE
  ================================================= */}
            <article
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              className="
      group relative min-h-[315px] overflow-hidden rounded-[20px]
      border border-[#0B2118]/10
      bg-white
      p-4
      shadow-[0_10px_35px_rgba(5,35,24,0.04)]
      transition-all duration-500 ease-out

      hover:-translate-y-2
      hover:border-[#075B3A]/25
      hover:shadow-[0_25px_65px_rgba(5,35,24,0.12)]

      dark:border-white/10
      dark:bg-[#101B18]
      dark:hover:border-[#72B943]/30
      dark:hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]

      sm:min-h-[340px]
      sm:rounded-[24px]
      sm:p-6

      lg:p-7
    "
            >

              <div
                className="
        pointer-events-none absolute
        -right-16 -top-16
        h-36 w-36
        rounded-full
        bg-[#72B943]/15
        opacity-0
        blur-3xl
        transition-all duration-500
        group-hover:opacity-100
        group-hover:scale-125
      "
              />

              <div className="relative flex items-center justify-between">

                <span className="text-[8px] font-bold tracking-[0.18em] text-[#075B3A] dark:text-[#72B943] sm:text-[10px] sm:tracking-[0.2em]">
                  03
                </span>

                <div
                  className="
          flex h-9 w-9 items-center justify-center
          rounded-full
          border border-[#075B3A]/10
          bg-[#F7F9F6]
          text-[#075B3A]
          transition-all duration-500

          group-hover:scale-110
          group-hover:rotate-6
          group-hover:bg-[#075B3A]
          group-hover:text-white

          dark:border-white/10
          dark:bg-[#16231F]
          dark:text-[#72B943]
          dark:group-hover:bg-[#72B943]
          dark:group-hover:text-[#07100D]

          sm:h-11 sm:w-11
        "
                >
                  <span className="text-xs font-semibold sm:text-sm">
                    S
                    {/* S = Sustainable → sustainability, energy, water, circularity */}
                  </span>
                </div>

              </div>


              <div className="relative mt-8 sm:mt-12">

                <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#8A9690] sm:text-[8px] sm:tracking-[0.22em]">
                  RESPONSIBILITY
                </p>

                <h3 className="mt-1.5 font-display text-[17px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white sm:mt-2 sm:text-[25px]">
                  Sustainable
                </h3>

                <p className="mt-2.5 text-[10px] leading-[1.55] text-[#68766F] dark:text-[#AEBEB7] sm:mt-4 sm:text-[13px] sm:leading-6">
                  Circular systems connecting energy, water, agriculture and responsible resource management.
                </p>

              </div>


              <div className="relative mt-5 flex flex-wrap gap-1 sm:mt-7 sm:gap-2">

                {['Energy', 'Water', 'Circularity'].map((item) => (
                  <span
                    key={item}
                    className="
            rounded-full
            border border-[#075B3A]/10
            bg-[#F7F9F6]
            px-2 py-1
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-[#52635A]
            transition-all duration-300

            group-hover:border-[#075B3A]/25

            dark:border-white/10
            dark:bg-[#16231F]
            dark:text-[#9CAFA5]

            sm:px-2.5
            sm:text-[7px]
            sm:tracking-[0.12em]
          "
                  >
                    {item}
                  </span>
                ))}

              </div>


              <div
                className="
        absolute bottom-0 left-0
        h-[3px] w-0
        bg-[#075B3A]
        transition-all duration-500
        group-hover:w-full
        dark:bg-[#72B943]
      "
              />

            </article>


            {/* =================================================
      CARD 04 — BUILT FOR SCALE
  ================================================= */}
            <article
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className="
      group relative min-h-[315px] overflow-hidden rounded-[20px]
      border border-[#0B2118]/10
      bg-white
      p-4
      shadow-[0_10px_35px_rgba(5,35,24,0.04)]
      transition-all duration-500 ease-out

      hover:-translate-y-2
      hover:border-[#075B3A]/25
      hover:shadow-[0_25px_65px_rgba(5,35,24,0.12)]

      dark:border-white/10
      dark:bg-[#101B18]
      dark:hover:border-[#72B943]/30
      dark:hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]

      sm:min-h-[340px]
      sm:rounded-[24px]
      sm:p-6

      lg:p-7
    "
            >

              <div
                className="
        pointer-events-none absolute
        -right-16 -top-16
        h-36 w-36
        rounded-full
        bg-[#075B3A]/15
        opacity-0
        blur-3xl
        transition-all duration-500
        group-hover:opacity-100
        group-hover:scale-125
      "
              />

              <div className="relative flex items-center justify-between">

                <span className="text-[8px] font-bold tracking-[0.18em] text-[#075B3A] dark:text-[#72B943] sm:text-[10px] sm:tracking-[0.2em]">
                  04
                </span>

                <div
                  className="
          flex h-9 w-9 items-center justify-center
          rounded-full
          border border-[#075B3A]/10
          bg-[#F7F9F6]
          text-[#075B3A]
          transition-all duration-500

          group-hover:scale-110
          group-hover:-rotate-6
          group-hover:bg-[#075B3A]
          group-hover:text-white

          dark:border-white/10
          dark:bg-[#16231F]
          dark:text-[#72B943]
          dark:group-hover:bg-[#72B943]
          dark:group-hover:text-[#07100D]

          sm:h-11 sm:w-11
        "
                >
                  <span className="text-xs font-semibold sm:text-sm">
                    G
                    {/* G = Built for Scale Growth → future expansion aur scalability */}
                  </span>
                </div>

              </div>


              <div className="relative mt-8 sm:mt-12">

                <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#8A9690] sm:text-[8px] sm:tracking-[0.22em]">
                  FUTURE READY
                </p>

                <h3 className="mt-1.5 font-display text-[17px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white sm:mt-2 sm:text-[25px]">
                  Built for Scale
                </h3>

                <p className="mt-2.5 text-[10px] leading-[1.55] text-[#68766F] dark:text-[#AEBEB7] sm:mt-4 sm:text-[13px] sm:leading-6">
                  Infrastructure and systems conceived to evolve with future capacity, capabilities and opportunities.
                </p>

              </div>


              <div className="relative mt-5 flex flex-wrap gap-1 sm:mt-7 sm:gap-2">

                {['Infrastructure', 'Capacity', 'Future'].map((item) => (
                  <span
                    key={item}
                    className="
            rounded-full
            border border-[#075B3A]/10
            bg-[#F7F9F6]
            px-2 py-1
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-[#52635A]
            transition-all duration-300

            group-hover:border-[#075B3A]/25

            dark:border-white/10
            dark:bg-[#16231F]
            dark:text-[#9CAFA5]

            sm:px-2.5
            sm:text-[7px]
            sm:tracking-[0.12em]
          "
                  >
                    {item}
                  </span>
                ))}

              </div>


              <div
                className="
        absolute bottom-0 left-0
        h-[3px] w-0
        bg-[#075B3A]
        transition-all duration-500
        group-hover:w-full
        dark:bg-[#72B943]
      "
              />

            </article>

          </div>


          {/* =====================================================
    BOTTOM CTA
===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="150"
            className="
    relative mt-8 overflow-hidden rounded-[30px]
    border border-[#075B3A]/10
    bg-[#075B3A]
    p-6
    text-center
    shadow-[0_24px_70px_rgba(7,91,58,0.15)]
    sm:mt-10
    sm:p-8
    lg:p-10
    lg:text-left
    dark:border-[#72B943]/15
    dark:bg-[#0D1E17]
    dark:shadow-[0_24px_70px_rgba(0,0,0,0.25)]
  "
          >
            {/* CTA background glow */}
            <div className="pointer-events-none absolute -right-20 -top-32 h-[300px] w-[300px] rounded-full bg-[#72B943]/20 blur-[100px]" />

            <div className="relative flex flex-col items-center gap-7 lg:flex-row lg:items-center lg:justify-between">

              {/* CTA CONTENT */}
              <div className="flex max-w-[780px] flex-col items-center lg:items-start">

                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#A9D8BD]">
                  THE BIGGER PICTURE
                </p>

                <h3 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">

                  Better systems create
                  <span className="text-[#9FDB72]">
                    {' '}better possibilities.
                  </span>

                </h3>

                <p className="mt-4 max-w-[700px] text-[13px] leading-6 text-white/65 sm:text-sm sm:leading-7">
                  Our approach is built around the idea that the strongest dairy
                  ecosystem is not a collection of separate operations, but a
                  connected system where every part contributes to the next.
                </p>

              </div>


              {/* CTA BUTTON */}
              <Link
                to="/about"
                className="
        group inline-flex shrink-0 items-center justify-center
        gap-3
        rounded-full
        bg-white
        px-5 py-3
        text-[8px]
        font-bold
        uppercase
        tracking-[0.16em]
        text-[#075B3A]
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#F2F7F1]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
        sm:px-6
        sm:py-3.5
        sm:text-[9px]
        sm:tracking-[0.18em]
      "
              >

                <span>About Tejays Agri</span>

                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#075B3A] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight size={9} />
                </span>

              </Link>

            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
    03 — INTEGRATED ECOSYSTEM
===================================================== */}
      <section className="relative overflow-hidden bg-[#F5F7F2] py-20 dark:bg-[#07100D] sm:py-24 lg:py-32">

        {/* =====================================================
      BACKGROUND
  ===================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#72B943]/10 blur-[130px]" />

          <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#075B3A]/10 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.018]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(7,91,58,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,91,58,1) 1px, transparent 1px)
        `,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/60 to-transparent dark:from-white/[0.02]" />

        </div>


        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8 xl:px-10">


          {/* =====================================================
        SECTION HEADER
    ===================================================== */}

          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end lg:gap-20">


            {/* LEFT LABEL */}

            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="
    relative
    flex
    items-start
    gap-4
    justify-start

    min-h-0
    lg:min-h-[230px]
  "
            >
              <div
                className="
      flex
      items-start
      gap-4
      w-full
    "
              >

                {/* NUMBER + LINE */}

                <div className="flex shrink-0 flex-col items-center">

                  <span
                    className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#075B3A]/15
          bg-white
          text-[10px]
          font-bold
          tracking-[0.08em]
          text-[#075B3A]
          shadow-[0_8px_25px_rgba(7,91,58,0.06)]

          dark:border-white/10
          dark:bg-[#101B17]
          dark:text-[#72B943]
        "
                  >
                    03
                  </span>

                  <span
                    className="
          mt-4
          h-16
          w-px
          bg-gradient-to-b
          from-[#075B3A]/30
          to-transparent
          dark:from-[#72B943]/30
        "
                  />

                </div>


                {/* CONTENT */}

                <div className="min-w-0 pt-1">

                  <div className="flex items-center gap-3">

                    <span
                      className="
            h-px
            w-8
            shrink-0
            bg-[#075B3A]
            dark:bg-[#72B943]
          "
                    />

                    <span
                      className="
            whitespace-nowrap
            text-[9px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-[#68766F]
            dark:text-[#9AAEA4]
          "
                    >
                      Integrated Ecosystem
                    </span>

                  </div>


                  <p
                    className="
          mt-5
          max-w-[280px]
          text-[11px]
          leading-6
          text-[#7C8983]
          dark:text-[#82938B]
        "
                  >
                    Every capability connected through one intelligent,
                    integrated agricultural ecosystem.
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT HEADING */}

            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="100"
              className="min-w-0 max-sm:text-center"
            >
              <h2
                className="
      max-w-[1000px]
      font-display
      text-[clamp(2.4rem,11vw,6.5rem)]
      font-semibold
      leading-[0.9]
      tracking-[-0.065em]
      text-[#0B1A13]
      dark:text-white

      max-sm:mx-auto
      sm:text-[clamp(3rem,7vw,5.5rem)]
      lg:text-[clamp(4rem,6vw,6.5rem)]
    "
              >
                FROM GENETICS
                <br />
                TO{" "}
                <span className="text-[#075B3A] dark:text-[#72B943]">
                  NUTRITION.
                </span>
              </h2>

              <p
                className="
      mt-5
      max-w-[760px]
      text-[13px]
      leading-6
      text-[#5C6B64]
      dark:text-[#B9CAC1]

      max-sm:mx-auto

      sm:mt-6
      sm:text-[15px]
      sm:leading-7

      lg:mt-7
      lg:text-[16px]
      lg:leading-8
    "
              >
                A connected value chain where genetics, feed, smart dairy,
                processing and nutrition work together as one continuous
                ecosystem.
              </p>
            </div>

          </div>


          {/* =====================================================
        ECOSYSTEM FLOW
    ===================================================== */}

          <div
            className="mt-16 sm:mt-20 lg:mt-24"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* =========================================================
      FLOW HEADER
  ========================================================= */}
            <div
              className="
    mb-7
    hidden
    md:flex
    md:items-center
    md:justify-between
  "
            >
              {/* LEFT CONTENT */}
              <div className="min-w-0">
                <p
                  className="
        text-[8px]
        font-bold
        uppercase
        tracking-[0.3em]
        text-[#075B3A]
        dark:text-[#72B943]
      "
                >
                  THE VALUE CHAIN
                </p>

                <p
                  className="
        mt-2
        text-[10px]
        leading-5
        text-[#849189]
        dark:text-[#8FA098]
      "
                >
                  Connected from foundation to advanced nutrition
                </p>
              </div>

              {/* RIGHT BADGE */}
              <span
                className="
      ml-4
      shrink-0
      rounded-full
      border
      border-[#075B3A]/10
      bg-white/70
      px-4
      py-2
      text-[8px]
      font-bold
      uppercase
      tracking-[0.18em]
      text-[#68766F]
      backdrop-blur-sm

      dark:border-white/10
      dark:bg-[#101B17]/70
      dark:text-[#8FA098]
    "
              >
                09 Connected Stages
              </span>
            </div>

            {/* =========================================================
    SCROLL AREA
========================================================= */}

            <div
              ref={flowScrollRef}
              className="
    w-full
    overflow-x-auto
    overflow-y-hidden
    pb-6
    scrollbar-hide
    touch-pan-x
    overscroll-x-contain
  "
            >
              <div
                className="
      relative
      w-max
      min-w-[1080px]
      px-4

      sm:min-w-[1140px]
      sm:px-6

      md:min-w-[1200px]
      md:px-8

      lg:w-full
      lg:min-w-0
      lg:px-0
    "
              >

                {/* =======================================================
        MAIN FLOW LINE
    ======================================================= */}

                <div
                  className="
        pointer-events-none
        absolute
        left-[5.5%]
        right-[5.5%]
        top-[30px]
        z-0
        hidden
        h-[2px]
        lg:block
      "
                >
                  <div
                    className="
          h-full
          w-full
          bg-gradient-to-r
          from-[#72B943]/30
          via-[#075B3A]/25
          to-[#D5A33A]/35
        "
                  />
                </div>


                {/* =======================================================
        ECOSYSTEM ITEMS
    ======================================================= */}

                <div
                  className="
        grid
        grid-cols-9
        gap-x-4

        sm:gap-x-5

        md:gap-x-6

        lg:gap-x-2
      "
                >

                  {[
                    {
                      number: '01',
                      title: 'GENETICS',
                      description: 'Better Genes',
                      image: assetPath('/images/ecosystem/genetics.jpg'),
                      color: '#72B943',
                      stage: 'input',
                    },

                    {
                      number: '02',
                      title: 'FEED',
                      description: 'Balanced Nutrition',
                      image: assetPath('/images/ecosystem/feed.png'),
                      color: '#72B943',
                      stage: 'input',
                    },

                    {
                      number: '03',
                      title: 'SMART DAIRY',
                      description: 'Connected Intelligence',
                      image: assetPath('/images/ecosystem/smart-dairy.png'),
                      color: '#075B3A',
                      stage: 'core',
                    },

                    {
                      number: '04',
                      title: 'MILK',
                      description: 'Pure & Precise',
                      image: assetPath('/images/ecosystem/milk.png'),
                      color: '#075B3A',
                      stage: 'core',
                    },

                    {
                      number: '05',
                      title: 'PROCESSING',
                      description: 'Modern Infrastructure',
                      image: assetPath('/images/ecosystem/processing.png'),
                      color: '#075B3A',
                      stage: 'core',
                    },

                    {
                      number: '06',
                      title: 'DAIRY PRODUCTS',
                      description: 'Value Added Dairy',
                      image: assetPath('/images/ecosystem/dairy-products.png'),
                      color: '#075B3A',
                      stage: 'core',
                    },

                    {
                      number: '07',
                      title: 'CHEESE',
                      description: 'Premium Dairy',
                      image: assetPath('/images/ecosystem/cheese.png'),
                      color: '#D5A33A',
                      stage: 'output',
                    },

                    {
                      number: '08',
                      title: 'WHEY',
                      description: 'High Value Ingredients',
                      image: assetPath('/images/ecosystem/whey.png'),
                      color: '#D5A33A',
                      stage: 'output',
                    },

                    {
                      number: '09',
                      title: 'NUTRITION',
                      description: 'Advanced Nutrition',
                      image: assetPath('/images/ecosystem/nutrition.png'),
                      color: '#D5A33A',
                      stage: 'output',
                    },

                  ].map((item) => {

                    const stageColor =
                      item.stage === 'input'
                        ? '#72B943'
                        : item.stage === 'core'
                          ? '#075B3A'
                          : '#D5A33A';

                    return (

                      <div
                        key={item.number}
                        className="
              group
              relative
              flex
              min-w-0
              flex-col
              items-center
            "
                      >

                        {/* =================================================
                NUMBER
            ================================================= */}

                        <div className="relative z-20">

                          <span
                            className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center

                  rounded-xl
                  border

                  bg-white

                  font-display
                  text-[9px]
                  font-bold
                  tracking-[0.08em]

                  transition-all
                  duration-300
                  ease-out

                  group-hover:scale-105

                  dark:bg-white
                "
                            style={{
                              borderColor: `${stageColor}30`,
                              color: stageColor,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                stageColor;

                              e.currentTarget.style.borderColor =
                                stageColor;

                              e.currentTarget.style.color =
                                '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                '#ffffff';

                              e.currentTarget.style.borderColor =
                                `${stageColor}30`;

                              e.currentTarget.style.color =
                                stageColor;
                            }}
                          >
                            {item.number}
                          </span>

                        </div>


                        {/* =================================================
                CONNECTOR
            ================================================= */}

                        <div
                          className="
                relative
                z-10
                h-9
                w-px
                shrink-0

                bg-gradient-to-b
                from-[#075B3A]/20
                to-[#075B3A]/5

                dark:from-white/20
                dark:to-white/5
              "
                        />


                        {/* =================================================
                IMAGE
            ================================================= */}

                        <div
                          className="
                relative
                z-20

                h-[105px]
                w-[105px]
                shrink-0

                rounded-full
                border
                border-white
                bg-white
                p-[5px]

                shadow-[0_15px_40px_rgba(7,91,58,0.09)]

                transition-all
                duration-500
                ease-out

                group-hover:-translate-y-2
                group-hover:shadow-[0_25px_55px_rgba(7,91,58,0.16)]

                sm:h-[118px]
                sm:w-[118px]

                md:h-[125px]
                md:w-[125px]

                lg:h-[136px]
                lg:w-[136px]

                dark:border-[#1A3027]
                dark:bg-[#101C17]
              "
                        >

                          {/* COLOR RING */}

                          <span
                            className="
                  pointer-events-none
                  absolute
                  inset-[-3px]

                  rounded-full
                  border-2
                  border-transparent

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
                            style={{
                              borderColor: item.color,
                            }}
                          />


                          {/* IMAGE */}

                          <div
                            className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-full
                "
                          >

                            <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="
                    h-full
                    w-full
                    rounded-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                            />


                            {/* IMAGE OVERLAY */}

                            <div
                              className="
                    pointer-events-none
                    absolute
                    inset-0

                    rounded-full

                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-white/10

                    opacity-60
                  "
                            />

                          </div>

                        </div>


                        {/* =================================================
                TEXT
            ================================================= */}

                        <div
                          className="
                mt-6
                w-full
                min-w-0
                text-center
              "
                        >

                          <h3
                            className="
                  mx-auto
                  max-w-[125px]

                  font-display
                  text-[9px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.06em]

                  text-[#17382C]

                  transition-colors
                  duration-300

                  dark:text-white

                  sm:text-[10px]
                "
                            style={{
                              '--item-color': item.color,
                            }}
                          >

                            <span className="group-hover:text-[var(--item-color)]">
                              {item.title}
                            </span>

                          </h3>


                          <p
                            className="
                  mx-auto
                  mt-1.5
                  max-w-[120px]

                  text-[8px]
                  leading-4

                  text-[#87958D]
                  dark:text-[#8FA098]
                "
                          >
                            {item.description}
                          </p>


                          {/* HOVER INDICATOR */}

                          <div className="mt-3 flex justify-center">

                            <span
                              className="
                    h-[2px]
                    w-0
                    rounded-full

                    transition-all
                    duration-500

                    group-hover:w-8
                  "
                              style={{
                                backgroundColor: item.color,
                              }}
                            />

                          </div>

                        </div>

                      </div>

                    );

                  })}

                </div>

              </div>
            </div>


            {/* =========================================================
      FLOW LEGEND
  ========================================================= */}

            <div className="mt-7 flex justify-center">

              <div
                className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-x-4
        gap-y-2

        rounded-2xl
        border
        border-[#075B3A]/10

        bg-white/75

        px-4
        py-3

        shadow-[0_10px_30px_rgba(7,91,58,0.04)]

        backdrop-blur-md

        dark:border-white/10
        dark:bg-[#0E1A16]/75

        sm:gap-x-5
        sm:rounded-full
        sm:px-5
        sm:py-2.5

        md:gap-x-6
      "
              >

                {/* INPUT */}

                <div className="flex items-center gap-2">

                  <span
                    className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-[#72B943]
            shadow-[0_0_10px_rgba(114,185,67,0.4)]
          "
                  />

                  <span
                    className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#72B943]
          "
                  >
                    Input
                  </span>

                </div>


                <span
                  className="
          hidden
          h-px
          w-5
          bg-[#075B3A]/15
          sm:block
          sm:w-8
        "
                />


                {/* CORE */}

                <div className="flex items-center gap-2">

                  <span
                    className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-[#075B3A]
            shadow-[0_0_10px_rgba(7,91,58,0.3)]
            dark:bg-[#72B943]
          "
                  />

                  <span
                    className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#075B3A]
            dark:text-[#72B943]
          "
                  >
                    Core
                  </span>

                </div>


                <span
                  className="
          hidden
          h-px
          w-5
          bg-[#075B3A]/15
          sm:block
          sm:w-8
        "
                />


                {/* OUTPUT */}

                <div className="flex items-center gap-2">

                  <span
                    className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-[#D5A33A]
            shadow-[0_0_10px_rgba(213,163,58,0.35)]
          "
                  />

                  <span
                    className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#B48724]
          "
                  >
                    Output
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
        INPUT / CORE / OUTPUT
    ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="200"
            className="
    relative
    mx-auto
    mt-16
    w-full
    max-w-[520px]
    overflow-hidden
    rounded-[32px]
    border
    border-[#075B3A]/10
    bg-white
    shadow-[0_25px_80px_rgba(5,35,24,0.07)]

    sm:mt-20
    sm:max-w-[620px]

    md:max-w-none

    dark:border-white/10
    dark:bg-[#0E1B16]
  "
          >
            {/* TOP LINE */}

            <div
              className="
      absolute
      inset-x-0
      top-0
      h-[2px]
      bg-gradient-to-r
      from-[#72B943]
      via-[#075B3A]
      to-[#D5A33A]
    "
            />

            <div className="grid md:grid-cols-3">

              {/* =================================================
        INPUT
    ================================================= */}

              <div
                className="
        group
        relative
        flex
        flex-col
        items-center
        p-7
        text-center

        sm:p-10

        md:items-start
        md:text-left
      "
              >

                <div
                  className="
          absolute
          right-0
          top-8
          hidden
          h-[calc(100%-64px)]
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#72B943]/30
          to-transparent
          md:block
        "
                />

                <div className="flex items-center gap-3">

                  <span
                    className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#72B943]/10
            text-[10px]
            font-bold
            text-[#075B3A]
            dark:text-[#72B943]
          "
                  >
                    01
                  </span>

                  <span
                    className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#075B3A]
            dark:text-[#72B943]
          "
                  >
                    Input
                  </span>

                </div>

                <h3
                  className="
          mt-7
          font-display
          text-[clamp(1.5rem,2vw,2rem)]
          font-semibold
          tracking-[-0.05em]
          text-[#13261D]
          dark:text-white
        "
                >
                  Genetics & Feed
                </h3>

                <p
                  className="
          mt-4
          max-w-[340px]
          text-[12px]
          leading-6
          text-[#718078]
          dark:text-[#9EAEA7]
        "
                >
                  Building the foundation for healthier animals,
                  better genetics and efficient dairy operations.
                </p>

                <div
                  className="
          mt-8
          h-[2px]
          w-10
          bg-[#72B943]
          transition-all
          duration-500
          group-hover:w-20
        "
                />

              </div>


              {/* =================================================
        CORE
    ================================================= */}

              <div
                className="
        group
        relative
        flex
        flex-col
        items-center
        border-t
        border-[#0B2118]/10
        bg-[#F7FAF6]
        p-7
        text-center

        sm:p-10

        md:items-start
        md:border-l
        md:border-r
        md:border-t-0
        md:text-left

        dark:border-white/10
        dark:bg-[#10231A]
      "
              >

                <div
                  className="
          absolute
          inset-x-0
          top-0
          h-[3px]
          bg-[#075B3A]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          dark:bg-[#72B943]
        "
                />

                <div className="flex items-center gap-3">

                  <span
                    className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#075B3A]
            text-[10px]
            font-bold
            text-white
            dark:bg-[#72B943]
            dark:text-[#07100D]
          "
                  >
                    02
                  </span>

                  <span
                    className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#075B3A]
            dark:text-[#72B943]
          "
                  >
                    Core
                  </span>

                </div>

                <h3
                  className="
          mt-7
          font-display
          text-[clamp(1.5rem,2vw,2rem)]
          font-semibold
          tracking-[-0.05em]
          text-[#13261D]
          dark:text-white
        "
                >
                  Smart Dairy
                </h3>

                <p
                  className="
          mt-4
          max-w-[340px]
          text-[12px]
          leading-6
          text-[#718078]
          dark:text-[#9EAEA7]
        "
                >
                  Connected systems bring animals, people,
                  infrastructure, intelligence and data together.
                </p>

                <div
                  className="
          mt-8
          h-[2px]
          w-10
          bg-[#075B3A]
          transition-all
          duration-500
          group-hover:w-20
          dark:bg-[#72B943]
        "
                />

              </div>


              {/* =================================================
        OUTPUT
    ================================================= */}

              <div
                className="
        group
        relative
        flex
        flex-col
        items-center
        border-t
        border-[#0B2118]/10
        p-7
        text-center

        sm:p-10

        md:items-start
        md:border-t-0
        md:text-left

        dark:border-white/10
      "
              >

                <div
                  className="
          absolute
          left-0
          top-8
          hidden
          h-[calc(100%-64px)]
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#D5A33A]/30
          to-transparent
          md:block
        "
                />

                <div className="flex items-center gap-3">

                  <span
                    className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#D5A33A]/10
            text-[10px]
            font-bold
            text-[#A47716]
          "
                  >
                    03
                  </span>

                  <span
                    className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#A47716]
            dark:text-[#E2BA64]
          "
                  >
                    Output
                  </span>

                </div>

                <h3
                  className="
          mt-7
          font-display
          text-[clamp(1.5rem,2vw,2rem)]
          font-semibold
          tracking-[-0.05em]
          text-[#13261D]
          dark:text-white
        "
                >
                  Nutrition & Value
                </h3>

                <p
                  className="
          mt-4
          max-w-[340px]
          text-[12px]
          leading-6
          text-[#718078]
          dark:text-[#9EAEA7]
        "
                >
                  Dairy products, ingredients and nutrition
                  capabilities create greater value across the ecosystem.
                </p>

                <div
                  className="
          mt-8
          h-[2px]
          w-10
          bg-[#D5A33A]
          transition-all
          duration-500
          group-hover:w-20
        "
                />

              </div>

            </div>
          </div>


          {/* =====================================================
        BOTTOM CTA
    ===================================================== */}

          <div
            className="
        mt-12
        flex
        flex-col
        items-center
        justify-center
        gap-5
        sm:mt-16
      "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#075B3A]/20 dark:bg-[#72B943]/20" />

              <p className="
          text-center
          text-[9px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-[#7A8981]
          dark:text-[#82938B]
        ">
                One ecosystem. Connected intelligence. Future-ready value.
              </p>

              <span className="h-px w-8 bg-[#075B3A]/20 dark:bg-[#72B943]/20" />

            </div>


            <Link
              to="/technology"
              className="
          group
          inline-flex
          items-center
          gap-4
          rounded-full
          bg-[#075B3A]
          px-6
          py-3.5
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white
          shadow-[0_15px_35px_rgba(7,91,58,0.18)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#0A6E46]
          hover:shadow-[0_20px_45px_rgba(7,91,58,0.25)]
          dark:bg-[#72B943]
          dark:text-[#07100D]
          dark:hover:bg-[#86C65B]
        "
            >

              Explore Our Ecosystem

              <span className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-white/15
          transition-transform
          duration-300
          group-hover:translate-x-1
          dark:bg-[#075B3A]/15
        ">
                <FaArrowRight size={10} />
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 04 — SMART DAIRY
========================================================= */}
      <section className="relative overflow-hidden bg-[#07100D] py-20 text-white sm:py-24 lg:py-32">

        {/* =====================================================
      AMBIENT BACKGROUND
  ===================================================== */}
        <div className="pointer-events-none absolute inset-0">

          <div className="
      absolute
      -left-40
      top-[15%]
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#075B3A]/20
      blur-[140px]
    " />

          <div className="
      absolute
      -right-40
      bottom-[5%]
      h-[450px]
      w-[450px]
      rounded-full
      bg-[#2E8C82]/10
      blur-[150px]
    " />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
        `,
              backgroundSize: '80px 80px',
            }}
          />

        </div>


        <div className="
    relative
    mx-auto
    max-w-[1450px]
    px-5
    sm:px-7
    lg:px-10
    xl:px-14
  ">


          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="
      grid
      gap-10
      lg:grid-cols-[0.5fr_1.5fr]
      lg:gap-20
    ">

            {/*SMART DAIRY */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="
    flex
    items-start
    justify-start
    gap-4
    text-left
    min-h-0
    lg:min-h-[230px]
  "
            >
              {/* NUMBER + CONNECTOR */}
              <div className="flex shrink-0 flex-col items-center">
                <span
                  className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#72B943]/30
        bg-[#72B943]/10
        text-[10px]
        font-bold
        tracking-[0.18em]
        text-[#72B943]
        shadow-[0_0_25px_rgba(114,185,67,0.08)]
      "
                >
                  04
                </span>

                <span
                  className="
        mt-4
        h-16
        w-px
        bg-gradient-to-b
        from-[#72B943]/50
        to-transparent
      "
                />
              </div>

              {/* LABEL + DESCRIPTION */}
              <div className="min-w-0 pt-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#72B943]" />

                  <span
                    className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-[#9AAEA4]
        "
                  >
                    Smart Dairy
                  </span>
                </div>

                <p
                  className="
        mt-5
        max-w-[280px]
        text-[11px]
        leading-6
        text-[#71847B]
      "
                >
                  Intelligent systems connecting animals,
                  infrastructure and operational data into
                  one connected dairy environment.
                </p>
              </div>
            </div>


            {/* MAIN HEADING */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
            >

              <h2 className="
          mx-auto
          max-w-[950px]
          text-center
          font-display
          text-[clamp(2.5rem,5.5vw,6rem)]
          font-semibold
          leading-[0.88]
          tracking-[-0.07em]
          lg:mx-0
          lg:text-left
        ">

                SMART DAIRY.
                <br />

                <span className="text-[#72B943]">
                  INTELLIGENCE
                </span>

                <br />

                IN EVERY OPERATION.

              </h2>


              <p className="
          mx-auto
          mt-7
          max-w-[720px]
          text-center
          text-[14px]
          leading-7
          text-[#B8C9C1]
          sm:mt-8
          sm:text-[16px]
          sm:leading-8
          lg:mx-0
          lg:text-left
        ">
                A technology-led dairy environment where connected systems,
                automation and real-time intelligence support better decisions
                across the operation.
              </p>

            </div>

          </div>


          {/* =====================================================
        MAIN CONTENT
    ===================================================== */}
          <div className="
      mt-14
      grid
      gap-5
      sm:mt-16
      lg:grid-cols-[1.45fr_0.55fr]
      lg:gap-6
    ">


            {/* ===================================================
          HERO IMAGE
      =================================================== */}
            <div
              data-aos="fade-right"
              data-aos-duration="900"
              className="
          group
          relative
          min-h-[380px]
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-[#101C18]
          transition-all
          duration-500

          hover:border-[#72B943]/40
          hover:shadow-[0_30px_90px_rgba(114,185,67,0.10)]

          sm:min-h-[500px]
          lg:min-h-[610px]
        "
            >

              {/* IMAGE */}
              <img
                src={heroImage}
                alt="Tejays Agri smart dairy facility"
                className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1400ms]
            group-hover:scale-[1.035]
          "
              />


              {/* OVERLAY */}
              <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#030A07]
          via-[#07100D]/20
          to-transparent
        " />

              <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#07100D]/45
          via-transparent
          to-transparent
        " />


              {/* TOP LABEL */}
              <div className="
          absolute
          left-5
          top-5
          sm:left-7
          sm:top-7
        ">

                <div className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-[#07100D]/50
            px-3
            py-2
            backdrop-blur-xl
          ">

                  <span className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#72B943]
              shadow-[0_0_12px_rgba(114,185,67,0.9)]
            " />

                  <span className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/90
            ">
                    SMART DAIRY / SYSTEM 01
                  </span>

                </div>

              </div>


              {/* IMAGE CONTENT */}
              <div className="
          absolute
          bottom-6
          left-5
          right-5
          sm:bottom-8
          sm:left-7
          sm:right-7
        ">

                <p className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-[#A9D8BD]
          ">
                  CONNECTED OPERATIONS
                </p>


                <h3 className="
            mt-2
            max-w-[700px]
            font-display
            text-[clamp(1.5rem,3vw,3rem)]
            font-semibold
            leading-tight
            tracking-[-0.05em]
            text-white
          ">
                  Every animal. Every signal. Every decision.
                </h3>

              </div>

            </div>


            {/* ===================================================
          SMART INFRASTRUCTURE
      =================================================== */}
            <div
              data-aos="fade-left"
              data-aos-delay="120"
              className="
          group/panel
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-[#0D1915]
          p-5
          transition-all
          duration-500

          hover:border-[#72B943]/35
          hover:shadow-[0_25px_70px_rgba(114,185,67,0.08)]

          sm:p-7
        "
            >

              {/* ACTIVE TOP BORDER */}
              <div className="
          absolute
          inset-x-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#72B943]
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover/panel:opacity-100
        " />


              {/* PANEL HEADER */}
              <div className="
          flex
          items-center
          justify-between
        ">

                <span className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#72B943]
          ">
                  SMART INFRASTRUCTURE
                </span>

                <span className="
            text-[8px]
            font-semibold
            tracking-[0.18em]
            text-white/30
          ">
                  01—04
                </span>

              </div>


              {/* SYSTEM LIST */}
              <div className="mt-7">

                {[
                  {
                    number: '01',
                    title: 'Animal Intelligence',
                    text: 'Identification, activity and health monitoring.',
                  },
                  {
                    number: '02',
                    title: 'Smart Feeding',
                    text: 'Connected feeding systems and operational visibility.',
                  },
                  {
                    number: '03',
                    title: 'Milk Intelligence',
                    text: 'Monitoring milk performance and quality parameters.',
                  },
                  {
                    number: '04',
                    title: 'Environmental Control',
                    text: 'Sensors supporting climate and animal comfort.',
                  },
                ].map((item, index) => (

                  <div
                    key={item.number}
                    className={`
                group/item
                relative
                rounded-[16px]
                px-3
                py-5
                transition-all
                duration-300

                hover:bg-[#72B943]/[0.035]
                hover:ring-1
                hover:ring-[#72B943]/25

                ${index !== 0
                        ? 'border-t border-white/[0.08]'
                        : ''
                      }
              `}
                  >

                    <div className="flex gap-4">

                      {/* NUMBER */}
                      <span className="
                  pt-0.5
                  text-[8px]
                  font-bold
                  tracking-[0.15em]
                  text-[#72B943]/70
                  transition-colors
                  duration-300
                  group-hover/item:text-[#72B943]
                ">
                        {item.number}
                      </span>


                      {/* CONTENT */}
                      <div className="min-w-0">

                        <h4 className="
                    text-[13px]
                    font-semibold
                    tracking-[-0.01em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover/item:text-[#9BDA73]
                  ">
                          {item.title}
                        </h4>

                        <p className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-[#83958C]
                  ">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* FUTURE CAPABILITY */}
              <div className="
          mt-5
          rounded-[17px]
          border
          border-[#72B943]/15
          bg-[#72B943]/[0.045]
          p-4
          transition-all
          duration-300
          hover:border-[#72B943]/30
          hover:bg-[#72B943]/[0.07]
        ">

                <div className="flex items-center gap-2">

                  <span className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#72B943]
            " />

                  <span className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#9BCDAF]
            ">
                    PROPOSED / FUTURE CAPABILITY
                  </span>

                </div>

                <p className="
            mt-2
            text-[10px]
            leading-5
            text-[#70837A]
          ">
                  Technology capabilities shown represent the planned direction
                  of the smart dairy ecosystem.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
        CAPABILITY STRIP
    ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
        mt-5
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#0D1915]
        transition-all
        duration-500
        hover:border-[#72B943]/25
      "
          >

            <div className="
        grid
        grid-cols-2
        sm:grid-cols-4
      ">

              {[
                ['RFID', 'Animal Identification'],
                ['AI + IoT', 'Connected Sensors'],
                ['VISION', 'Computer Vision'],
                ['DATA', 'Command Intelligence'],
              ].map(([title, subtitle], index) => (

                <div
                  key={title}
                  className={`
              group/cap
              relative
              flex
              min-h-[90px]
              flex-col
              items-center
              justify-center
              px-4
              py-5
              text-center
              transition-all
              duration-300

              hover:bg-[#72B943]/[0.035]

              ${index > 0
                      ? 'border-t border-white/[0.08] sm:border-l sm:border-t-0'
                      : ''
                    }
            `}
                >

                  {/* HOVER BORDER */}
                  <div className="
              pointer-events-none
              absolute
              inset-[6px]
              rounded-[14px]
              border
              border-transparent
              transition-all
              duration-300
              group-hover/cap:border-[#72B943]/25
            " />

                  <p className="
              relative
              text-[10px]
              font-bold
              tracking-[0.2em]
              text-[#72B943]
            ">
                    {title}
                  </p>

                  <p className="
              relative
              mt-2
              text-[9px]
              uppercase
              tracking-[0.1em]
              text-[#809189]
            ">
                    {subtitle}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
        CTA
    ===================================================== */}
          <div className="
      mt-9
      flex
      justify-center
      sm:mt-11
    ">

            <Link
              to="/technology"
              className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[#72B943]/20
          bg-[#72B943]
          px-5
          py-3
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#07100D]
          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-[#9BDA73]
          hover:bg-[#84CE50]
          hover:shadow-[0_12px_30px_rgba(114,185,67,0.18)]
        "
            >

              Explore Smart Dairy

              <span className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-[#07100D]
          text-[#72B943]
          transition-transform
          duration-300
          group-hover:translate-x-0.5
        ">
                <FaArrowRight size={9} />
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 05 — AI COMMAND CENTRE
========================================================= */}

      <section
        id="ai-command-centre"
        className="
    relative
    overflow-hidden
    bg-white
    px-5
    py-14
    text-[#0B1210]
    sm:px-8
    sm:py-18
    lg:px-12
    lg:py-20
  "
      >
        <div className="mx-auto max-w-[1480px]">

          {/* =====================================================
        HEADER
    ===================================================== */}

          <div
            className="
        flex
        items-center
        justify-between
        border-b
        border-black/10
        pb-4
      "
          >

            <div className="flex items-center gap-3">

              <span
                className="
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-[#075B3A]
          "
              >
                05
              </span>

              <span className="h-px w-7 bg-[#72B943]" />

              <span
                className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#68756E]
          "
              >
                AI COMMAND CENTRE
              </span>

            </div>


            <span
              className="
          rounded-full
          border
          border-[#075B3A]/15
          bg-[#F1F6ED]
          px-3
          py-1.5
          text-[7px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#075B3A]
        "
            >
              PROPOSED TECHNOLOGY
            </span>

          </div>


          {/* =====================================================
        INTRO
    ===================================================== */}

          <div className="
  mt-10
  grid
  gap-10
  lg:grid-cols-[1fr_420px]
  lg:items-end
  lg:gap-16
">

            {/* LEFT — MAIN TITLE */}
            <div>

              <div className="flex items-center gap-3 max-sm:justify-center">

                <span className="
      px-2
      text-[8px]
      font-bold
      uppercase
      tracking-[0.24em]
      text-[#075B3A]
    ">
                  Connected Intelligence
                </span>

              </div>


              <h2 className="
    mt-5
    max-w-[900px]
    font-display
    text-[clamp(3rem,6.5vw,6.8rem)]
    font-semibold
    leading-[0.84]
    tracking-[-0.075em]
    max-sm:text-center
  ">
                INTELLIGENCE
                <br />

                <span className="text-[#075B3A]">
                  BEHIND
                </span>{" "}
                EVERY

                <br className="hidden sm:block" />

                ANIMAL.
              </h2>

            </div>


            {/* RIGHT — INTELLIGENCE PANEL */}
            <div className="
    relative
    overflow-hidden
    rounded-2xl
    border
    border-[#075B3A]/10
    bg-[#F4F7F1]
    p-5
    sm:p-6
  ">

              {/* TOP STATUS */}
              <div className="
      flex
      items-center
      justify-between
      border-b
      border-[#075B3A]/10
      pb-4
    ">

                <div className="flex items-center gap-3">

                  <span className="
          h-2
          w-2
          rounded-full
          bg-[#72B943]
          shadow-[0_0_12px_rgba(114,185,67,0.55)]
        " />

                  <span className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#075B3A]
        ">
                    Proposed Digital Layer
                  </span>

                </div>

                <span className="
        text-[8px]
        font-bold
        uppercase
        tracking-[0.16em]
        text-[#075B3A]/40
      ">
                  05 / AI
                </span>

              </div>


              {/* MAIN MESSAGE */}
              <div className="py-5">

                <p className="
        max-w-[360px]
        text-[14px]
        font-semibold
        leading-6
        tracking-[-0.02em]
        text-[#0B1210]
        sm:text-[15px]
      ">
                  DATA → INTELLIGENCE → DECISION
                </p>

                <p className="
        mt-2
        max-w-[370px]
        text-[11px]
        leading-5
        text-[#66736D]
        sm:text-[12px]
        sm:leading-6
      ">
                  A proposed digital layer connecting animal,
                  feed, milk and environmental information into
                  one intelligent operating view.
                </p>

              </div>


              {/* SIGNALS */}
              <div className="
      grid
      grid-cols-2
      gap-2
    ">

                <div className="
        group
        rounded-xl
        border
        border-[#075B3A]/10
        bg-white/70
        p-3
        transition-all
        duration-300
        hover:border-[#72B943]/50
        hover:bg-[#72B943]/10
      ">

                  <p className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#075B3A]/45
        ">
                    INPUT
                  </p>

                  <p className="
          mt-1.5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.08em]
          text-[#0B1210]
          transition-colors
          duration-300
          group-hover:text-[#075B3A]
        ">
                    HERD + FEED
                  </p>

                </div>


                <div className="
        group
        rounded-xl
        border
        border-[#075B3A]/10
        bg-white/70
        p-3
        transition-all
        duration-300
        hover:border-[#72B943]/50
        hover:bg-[#72B943]/10
      ">

                  <p className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#075B3A]/45
        ">
                    SIGNAL
                  </p>

                  <p className="
          mt-1.5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.08em]
          text-[#0B1210]
          transition-colors
          duration-300
          group-hover:text-[#075B3A]
        ">
                    MILK + ENVIRONMENT
                  </p>

                </div>


                <div className="
        group
        rounded-xl
        border
        border-[#075B3A]/10
        bg-white/70
        p-3
        transition-all
        duration-300
        hover:border-[#72B943]/50
        hover:bg-[#72B943]/10
      ">

                  <p className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#075B3A]/45
        ">
                    INTELLIGENCE
                  </p>

                  <p className="
          mt-1.5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.08em]
          text-[#0B1210]
          transition-colors
          duration-300
          group-hover:text-[#075B3A]
        ">
                    PATTERN + ALERT
                  </p>

                </div>


                <div className="
        group
        rounded-xl
        border
        border-[#075B3A]/10
        bg-white/70
        p-3
        transition-all
        duration-300
        hover:border-[#72B943]/50
        hover:bg-[#72B943]/10
      ">

                  <p className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#075B3A]/45
        ">
                    OUTPUT
                  </p>

                  <p className="
          mt-1.5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.08em]
          text-[#0B1210]
          transition-colors
          duration-300
          group-hover:text-[#075B3A]
        ">
                    BETTER DECISIONS
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
        MAIN INTELLIGENCE MAP
    ===================================================== */}

          <div
            className="
        relative
        mt-10
        overflow-hidden
        rounded-[28px]
        bg-[#07100D]
      "
          >

            {/* subtle grid */}

            <div
              className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)]
          [background-size:64px_64px]
        "
            />

            {/* glow */}

            <div
              className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#72B943]/10
          blur-[100px]
        "
            />


            <div
              className="
    relative
    grid
    lg:grid-cols-[0.8fr_1.4fr_0.8fr]
  "
            >

              {/* =================================================
      LEFT — DATA SOURCES
  ================================================= */}

              <div
                className="
      border-b
      border-white/10
      p-6
      sm:p-8
      lg:border-b-0
      lg:border-r
    "
              >

                {/* Heading */}

                <div className="flex items-end justify-between">

                  <div>

                    <p
                      className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#72B943]
          "
                    >
                      01 / INPUTS
                    </p>

                    <h3
                      className="
            mt-2
            font-display
            text-[23px]
            font-semibold
            tracking-[-0.05em]
            text-white
            sm:text-[26px]
          "
                    >
                      DATA SOURCES
                    </h3>

                  </div>

                  <span
                    className="
          text-[8px]
          font-bold
          tracking-[0.15em]
          text-white/45
        "
                  >
                    04
                  </span>

                </div>


                {/* Input Items */}

                <div className="mt-6 space-y-2">

                  {[
                    ["HERD", "Animal information"],
                    ["FEED", "Nutrition & feeding"],
                    ["MILK", "Milk performance"],
                    ["ENVIRONMENT", "Climate & conditions"],
                  ].map(([title, text], index) => (

                    <div
                      key={title}
                      className="
            group
            relative
            flex
            items-center
            gap-4
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-white/[0.045]
            px-4
            py-3.5
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#72B943]/60
            hover:bg-[#72B943]/10
            hover:shadow-[0_8px_25px_rgba(114,185,67,0.08)]
          "
                    >

                      {/* Active indicator */}

                      <span
                        className="
              h-2
              w-2
              shrink-0
              rounded-full
              border
              border-[#72B943]
              bg-transparent
              transition-all
              duration-300
              group-hover:bg-[#72B943]
              group-hover:shadow-[0_0_14px_rgba(114,185,67,0.8)]
            "
                      />

                      {/* Text */}

                      <div className="min-w-0">

                        <p
                          className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
                transition-colors
                duration-300
                group-hover:text-[#B9E98D]
              "
                        >
                          {title}
                        </p>

                        <p
                          className="
                mt-1
                text-[8px]
                font-medium
                leading-4
                text-white/65
                transition-colors
                duration-300
                group-hover:text-white/85
              "
                        >
                          {text}
                        </p>

                      </div>

                      {/* Number */}

                      <span
                        className="
              ml-auto
              shrink-0
              text-[7px]
              font-bold
              tracking-[0.15em]
              text-white/40
              transition-colors
              duration-300
              group-hover:text-[#72B943]
            "
                      >
                        0{index + 1}
                      </span>

                    </div>

                  ))}

                </div>


                {/* Bottom Label */}

                <div
                  className="
        mt-5
        flex
        items-center
        gap-2
        border-t
        border-white/10
        pt-4
      "
                >

                  <span
                    className="
          h-1.5
          w-1.5
          rounded-full
          bg-[#72B943]
        "
                  />

                  <span
                    className="
          text-[7px]
          font-bold
          uppercase
          tracking-[0.17em]
          text-white/55
        "
                  >
                    CONNECTED INPUT LAYER
                  </span>

                </div>

              </div>


              {/* =================================================
      CENTER — AI CORE
  ================================================= */}

              <div
                className="
      relative
      flex
      min-h-[390px]
      items-center
      justify-center
      overflow-hidden
      px-5
      py-10
      sm:min-h-[420px]
    "
              >

                {/* Horizontal connection */}

                <div
                  className="
        absolute
        left-0
        right-0
        top-1/2
        h-px
        bg-gradient-to-r
        from-transparent
        via-[#72B943]/40
        to-transparent
      "
                />

                {/* Vertical connection */}

                <div
                  className="
        absolute
        bottom-0
        left-1/2
        top-0
        w-px
        -translate-x-1/2
        bg-[#72B943]/15
      "
                />


                {/* Top Label */}

                <div
                  className="
        absolute
        left-1/2
        top-6
        -translate-x-1/2
        whitespace-nowrap
        rounded-full
        border
        border-white/10
        bg-white/[0.035]
        px-3
        py-1.5
        text-[7px]
        font-bold
        uppercase
        tracking-[0.2em]
        text-white/55
      "
                >
                  CONNECTED DATA
                </div>


                {/* Left Connector */}

                <div
                  className="
        absolute
        left-[4%]
        top-1/2
        flex
        -translate-y-1/2
        items-center
        gap-2
      "
                >

                  <span
                    className="
          text-[7px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-white/55
        "
                  >
                    COLLECT
                  </span>

                  <span className="h-px w-7 bg-[#72B943]/50" />

                </div>


                {/* Right Connector */}

                <div
                  className="
        absolute
        right-[4%]
        top-1/2
        flex
        -translate-y-1/2
        items-center
        gap-2
      "
                >

                  <span className="h-px w-7 bg-[#72B943]/50" />

                  <span
                    className="
          text-[7px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-white/55
        "
                  >
                    DECIDE
                  </span>

                </div>


                {/* Outer Ring */}

                <div
                  className="
        absolute
        h-[265px]
        w-[265px]
        rounded-full
        border
        border-[#72B943]/15
        sm:h-[290px]
        sm:w-[290px]
      "
                />

                {/* Dashed Ring */}

                <div
                  className="
        absolute
        h-[225px]
        w-[225px]
        rounded-full
        border
        border-dashed
        border-[#72B943]/30
        sm:h-[250px]
        sm:w-[250px]
      "
                />


                {/* AI CORE */}

                <div
                  className="
        group
        relative
        z-10
        flex
        h-[175px]
        w-[175px]
        items-center
        justify-center
        rounded-full
        border
        border-[#72B943]/50
        bg-[#10271C]
        shadow-[0_0_70px_rgba(114,185,67,0.12)]
        transition-all
        duration-500
        hover:border-[#72B943]
        hover:shadow-[0_0_100px_rgba(114,185,67,0.22)]
        sm:h-[190px]
        sm:w-[190px]
      "
                >

                  {/* Inner ring */}

                  <div
                    className="
          absolute
          inset-4
          rounded-full
          border
          border-[#72B943]/25
          transition-all
          duration-500
          group-hover:inset-3
          group-hover:border-[#72B943]/45
        "
                  />


                  {/* Core content */}

                  <div
                    className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
                  >

                    <span
                      className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-[#72B943]
          "
                    >
                      TEJAYS
                    </span>

                    <span
                      className="
            mt-2
            font-display
            text-[25px]
            font-semibold
            tracking-[-0.06em]
            text-white
          "
                    >
                      AI CORE
                    </span>

                    <span
                      className="
            mt-1
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-white/60
          "
                    >
                      COMMAND CENTRE
                    </span>

                  </div>

                </div>


                {/* Bottom Information */}

                <div
                  className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        text-center
      "
                >

                  <p
                    className="
          text-[7px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#72B943]
        "
                  >
                    INTELLIGENCE LAYER
                  </p>

                  <p
                    className="
          mt-1
          whitespace-nowrap
          text-[7px]
          font-medium
          text-white/55
        "
                  >
                    Pattern • Prediction • Alert
                  </p>

                </div>

              </div>


              {/* =================================================
      RIGHT — INTELLIGENCE OUTPUT
  ================================================= */}

              <div
                className="
      border-t
      border-white/10
      p-6
      sm:p-8
      lg:border-l
      lg:border-t-0
    "
              >

                {/* Heading */}

                <div className="flex items-end justify-between">

                  <div>

                    <p
                      className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#72B943]
          "
                    >
                      02 / OUTPUTS
                    </p>

                    <h3
                      className="
            mt-2
            font-display
            text-[23px]
            font-semibold
            tracking-[-0.05em]
            text-white
            sm:text-[26px]
          "
                    >
                      INSIGHTS
                    </h3>

                  </div>

                  <span
                    className="
          text-[8px]
          font-bold
          tracking-[0.15em]
          text-white/45
        "
                  >
                    04
                  </span>

                </div>


                {/* Output Items */}

                <div className="mt-6 space-y-2">

                  {[
                    ["AI ALERTS", "Early health signals"],
                    ["VISION", "Movement & welfare"],
                    ["PREDICTION", "Potential insights"],
                    ["OPTIMISATION", "Decision support"],
                  ].map(([title, text], index) => (

                    <div
                      key={title}
                      className="
            group
            flex
            items-center
            gap-4
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-white/[0.045]
            px-4
            py-3.5
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#72B943]/60
            hover:bg-[#72B943]/10
            hover:shadow-[0_8px_25px_rgba(114,185,67,0.08)]
          "
                    >

                      {/* Number */}

                      <span
                        className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#72B943]/35
              text-[7px]
              font-bold
              text-[#72B943]
              transition-all
              duration-300
              group-hover:border-[#72B943]
              group-hover:bg-[#72B943]
              group-hover:text-[#07100D]
            "
                      >
                        0{index + 1}
                      </span>


                      {/* Text */}

                      <div className="min-w-0">

                        <p
                          className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
                transition-colors
                duration-300
                group-hover:text-[#B9E98D]
              "
                        >
                          {title}
                        </p>

                        <p
                          className="
                mt-1
                text-[8px]
                font-medium
                leading-4
                text-white/65
                transition-colors
                duration-300
                group-hover:text-white/85
              "
                        >
                          {text}
                        </p>

                      </div>


                      {/* Arrow */}

                      <span
                        className="
              ml-auto
              shrink-0
              text-[10px]
              text-white/25
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-[#72B943]
            "
                      >
                        →
                      </span>

                    </div>

                  ))}

                </div>


                {/* Bottom Label */}

                <div
                  className="
        mt-5
        flex
        items-center
        gap-2
        border-t
        border-white/10
        pt-4
      "
                >

                  <span
                    className="
          h-1.5
          w-1.5
          rounded-full
          bg-[#72B943]
        "
                  />

                  <span
                    className="
          text-[7px]
          font-bold
          uppercase
          tracking-[0.17em]
          text-white/55
        "
                  >
                    DECISION SUPPORT LAYER
                  </span>

                </div>

              </div>

            </div>


            {/* =====================================================
          COMMAND STATUS BAR
      ===================================================== */}

            <div className="relative grid border-t border-white/10 sm:grid-cols-3">

              {/* SYSTEM */}
              <div className="group border-b border-white/10 px-6 py-5 transition-all duration-300 hover:bg-[#72B943]/5 sm:border-b-0 sm:border-r sm:px-7">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-white/40">
                      SYSTEM
                    </p>

                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 group-hover:text-[#B9E98D]">
                      Connected Intelligence
                    </p>
                  </div>

                  <span className="mt-1 h-2 w-2 rounded-full bg-[#72B943] shadow-[0_0_12px_rgba(114,185,67,0.7)] transition-transform duration-300 group-hover:scale-125" />

                </div>

              </div>


              {/* FLOW */}
              <div className="group border-b border-white/10 px-6 py-5 transition-all duration-300 hover:bg-white/[0.035] sm:border-b-0 sm:border-r sm:px-7">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-white/40">
                      FLOW
                    </p>

                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 group-hover:text-[#B9E98D]">
                      Sense
                      <span className="mx-2 text-[#72B943]">→</span>
                      Analyse
                      <span className="mx-2 text-[#72B943]">→</span>
                      Act
                    </p>
                  </div>

                  <span className="mt-1 text-[12px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#72B943]">
                    →
                  </span>

                </div>

              </div>


              {/* DIRECTION */}
              <div className="group px-6 py-5 transition-all duration-300 hover:bg-[#72B943]/5 sm:px-7">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-white/40">
                      DIRECTION
                    </p>

                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 group-hover:text-[#B9E98D]">
                      Future-Ready Dairy
                    </p>
                  </div>

                  <span className="mt-1 text-[10px] font-bold text-[#72B943] opacity-50 transition-all duration-300 group-hover:opacity-100">
                    03
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
    TECHNOLOGY RAIL
===================================================== */}

          <div className="
  mt-3
  overflow-hidden
  rounded-[24px]
  bg-[#F4F6F1]
">

            <div className="flex flex-col lg:flex-row">

              {/* TITLE */}

              <div className="
      shrink-0
      border-b
      border-black/[0.07]
      px-6
      py-6
      text-center
      lg:w-[250px]
      lg:border-b-0
      lg:border-r
      lg:text-left
    ">

                <p className="
        text-[8px]
        font-bold
        uppercase
        tracking-[0.2em]
        text-[#075B3A]
      ">
                  Technology Stack
                </p>

                <p className="
        mt-2
        text-[10px]
        leading-5
        text-[#7A857F]
      ">
                  Proposed building blocks.
                </p>

              </div>


              {/* TECHNOLOGIES */}

              <div className="
      grid
      flex-1
      grid-cols-2
      sm:grid-cols-5
    ">

                {[
                  ["RFID", "Animal ID"],
                  ["WEARABLES", "Activity"],
                  ["VISION", "Welfare"],
                  ["SENSORS", "Environment"],
                  ["AI ALERTS", "Insights"],
                ].map(([title, text], index) => (

                  <div
                    key={title}
                    className={`
            group
            flex
            min-h-[105px]
            flex-col
            items-center
            justify-center
            px-4
            py-5
            text-center
            transition-all
            duration-300
            hover:bg-white
            hover:shadow-[inset_0_-2px_0_#72B943]
            lg:items-start
            lg:text-left
            ${index < 4
                        ? "border-b border-black/[0.07] sm:border-b-0 sm:border-r"
                        : ""
                      }
          `}
                  >

                    {/* NUMBER + ARROW */}

                    <div className="
            flex
            w-full
            items-center
            justify-between
          ">

                      <span className="
              text-[7px]
              font-bold
              tracking-[0.16em]
              text-[#075B3A]/40
              transition-colors
              duration-300
              group-hover:text-[#72B943]
            ">
                        0{index + 1}
                      </span>

                      <span className="
              text-[9px]
              text-[#075B3A]/25
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-[#075B3A]
            ">
                        ↗
                      </span>

                    </div>


                    {/* TITLE */}

                    <p className="
            mt-4
            text-[9px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#0B1210]
            transition-colors
            duration-300
            group-hover:text-[#075B3A]
          ">
                      {title}
                    </p>


                    {/* DESCRIPTION */}

                    <p className="
            mt-1
            text-[8px]
            text-[#7D8982]
            transition-colors
            duration-300
            group-hover:text-[#4F5E57]
          ">
                      {text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
    BOTTOM STATEMENT
===================================================== */}

          <div className="
  mt-10
  flex
  flex-col
  items-center
  gap-7
  border-t
  border-black/10
  pt-7
  text-center
  lg:flex-row
  lg:items-end
  lg:justify-between
  lg:text-left
">

            <div>

              <p className="
      text-[8px]
      font-bold
      uppercase
      tracking-[0.22em]
      text-[#075B3A]
    ">
                The Vision
              </p>

              <h3 className="
      mt-3
      max-w-[800px]
      font-display
      text-[clamp(2rem,4vw,3.8rem)]
      font-semibold
      leading-[0.9]
      tracking-[-0.06em]
    ">
                From scattered information
                <br className="hidden sm:block" />
                to connected intelligence.
              </h3>

            </div>


            <Link
              to="/technology"
              className="
      group
      inline-flex
      w-fit
      items-center
      gap-3
      rounded-full
      bg-[#075B3A]
      px-5
      py-3
      text-[8px]
      font-bold
      uppercase
      tracking-[0.18em]
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#064C31]
      hover:shadow-[0_15px_35px_rgba(7,91,58,0.18)]
    "
            >

              Explore Technology

              <span className="
      flex
      h-6
      w-6
      items-center
      justify-center
      rounded-full
      bg-[#72B943]
      text-[#07100D]
      transition-transform
      duration-300
      group-hover:translate-x-1
    ">
                <FaArrowRight size={9} />
              </span>

            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================
    SECTION 06 — DAIRY & NUTRITION
========================================================= */}

      <section
        className="
    relative
     border-t-2
    overflow-hidden
    bg-[#F5F7F2]
    py-20
    text-[#0C1813]
    sm:py-24
    lg:py-32
    dark:bg-[#08110E]
    dark:text-white
  "
      >

        {/* =====================================================
      AMBIENT BACKGROUND
  ===================================================== */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
        absolute
        -left-40
        top-20
        h-[420px]
        w-[420px]
        rounded-full
        bg-[#72B943]/10
        blur-[150px]
        sm:h-[500px]
        sm:w-[500px]
      "
          />

          <div
            className="
        absolute
        -right-40
        bottom-10
        h-[400px]
        w-[400px]
        rounded-full
        bg-[#D5A33A]/[0.07]
        blur-[150px]
      "
          />

          <div
            className="
        absolute
        inset-0
        opacity-[0.25]
        dark:opacity-[0.06]
      "
            style={{
              backgroundImage: `
          linear-gradient(rgba(7,91,58,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,91,58,0.06) 1px, transparent 1px)
        `,
              backgroundSize: '90px 90px'
            }}
          />

        </div>


        <div
          className="
      relative
      mx-auto
      max-w-[1450px]
      px-5
      sm:px-7
      lg:px-10
      xl:px-14
    "
        >

          {/* =====================================================
        HEADER
    ===================================================== */}

          <div
            className="
        grid
        gap-10
        lg:grid-cols-[0.55fr_1.45fr]
        lg:gap-20
      "
          >

            {/* LEFT LABEL */}

            <div
              data-aos="fade-right"
              className="
    flex
    items-start
    justify-start
    gap-4
    lg:justify-start
  "
            >
              <div className="flex flex-col items-center">

                <span
                  className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-[#075B3A]/15
        bg-white
        text-[10px]
        font-bold
        tracking-[0.12em]
        text-[#075B3A]
        shadow-[0_10px_30px_rgba(7,91,58,0.06)]
        dark:border-white/10
        dark:bg-[#101B17]
        dark:text-[#72B943]
      "
                >
                  06
                </span>

                <span
                  className="
        mt-4
        h-16
        w-px
        bg-gradient-to-b
        from-[#075B3A]/30
        to-transparent
        dark:from-[#72B943]/30
      "
                />

              </div>

              <div className="pt-1 text-left">

                <div className="flex items-center justify-start gap-3">

                  <span className="h-px w-8 bg-[#72B943]" />

                  <span
                    className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-[#62736B]
          dark:text-[#8EA199]
        "
                  >
                    DAIRY & NUTRITION
                  </span>

                </div>

                <p
                  className="
        mt-5
        max-w-[270px]
        text-left
        text-[10px]
        leading-5
        text-[#75857E]
        dark:text-[#72847B]
      "
                >
                  From everyday dairy essentials to higher-value nutrition
                  ingredients.
                </p>

              </div>

            </div>

            {/* MAIN HEADING */}

            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <h2
                className="
            mx-auto
            max-w-[1000px]
            font-display
            text-[clamp(2.6rem,5.5vw,6rem)]
            font-semibold
            leading-[0.88]
            tracking-[-0.07em]
            lg:mx-0
          "
              >

                FROM MILK.
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  TO NUTRITION.
                </span>

                <br />

                VALUE AT EVERY STAGE.

              </h2>


              <p
                className="
            mx-auto
            mt-7
            max-w-[720px]
            text-[14px]
            leading-7
            text-[#52635B]
            sm:text-[16px]
            sm:leading-8
            lg:mx-0
            dark:text-[#A8B9B1]
          "
              >
                A diversified dairy and nutrition portfolio designed around
                quality, processing capability and future value creation.
              </p>

            </div>

          </div>


          {/* =====================================================
        PRODUCT SYSTEM
    ===================================================== */}

          <div
            data-aos="fade-up"
            className="
        mt-14
        grid
        gap-4
        sm:mt-16
        lg:grid-cols-12
      "
          >

            {/* ===================================================
          EVERYDAY DAIRY
      =================================================== */}

            <div
              className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-black/[0.08]
          bg-white
          p-6
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#72B943]/40
          hover:shadow-[0_25px_60px_rgba(7,91,58,0.10)]
          sm:p-8
          lg:col-span-7
          dark:border-white/[0.08]
          dark:bg-[#101B17]
          dark:hover:border-[#72B943]/40
          dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]
        "
            >

              {/* TOP ACCENT */}

              <div
                className="
            absolute
            inset-x-0
            top-0
            h-[3px]
            origin-left
            scale-x-0
            bg-[#72B943]
            transition-transform
            duration-500
            group-hover:scale-x-100
          "
              />


              <div className="flex items-start justify-between gap-4">

                <div>

                  <p
                    className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#075B3A]
                dark:text-[#72B943]
              "
                  >
                    01 / CORE DAIRY
                  </p>

                  <h3
                    className="
                mt-3
                font-display
                text-[clamp(1.8rem,3vw,3rem)]
                font-semibold
                tracking-[-0.05em]
              "
                  >
                    Everyday Dairy
                  </h3>

                </div>


                <span
                  className="
              hidden
              rounded-full
              border
              border-[#075B3A]/10
              bg-[#F7F9F5]
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#63746C]
              sm:inline-flex
              dark:border-white/10
              dark:bg-white/[0.03]
              dark:text-white/40
            "
                >
                  CORE PORTFOLIO
                </span>

              </div>


              <div
                className="
            mt-8
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
          "
              >

                {[
                  'Milk',
                  'Paneer',
                  'Ghee',
                  'Butter',
                  'Curd',
                  'Greek Yogurt'
                ].map((item, index) => (

                  <div
                    key={item}
                    className="
                group/item
                rounded-2xl
                border
                border-black/[0.07]
                bg-[#F8FAF7]
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#72B943]/40
                hover:bg-white
                hover:shadow-[0_12px_30px_rgba(7,91,58,0.07)]
                dark:border-white/[0.07]
                dark:bg-[#0B1511]
                dark:hover:border-[#72B943]/40
                dark:hover:bg-[#10231A]
              "
                  >

                    <div className="flex items-center justify-between">

                      <span
                        className="
                    text-[8px]
                    font-bold
                    tracking-[0.18em]
                    text-[#075B3A]/45
                    transition-colors
                    group-hover/item:text-[#72B943]
                    dark:text-[#72B943]/50
                  "
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#72B943]/40
                    transition-all
                    duration-300
                    group-hover/item:scale-125
                    group-hover/item:bg-[#72B943]
                  "
                      />

                    </div>


                    <p
                      className="
                  mt-7
                  font-display
                  text-[14px]
                  font-semibold
                  tracking-[-0.02em]
                  transition-colors
                  group-hover/item:text-[#075B3A]
                  dark:group-hover/item:text-[#72B943]
                "
                    >
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* ===================================================
          HIGHER VALUE
      =================================================== */}

            <div
              className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[#075B3A]
          bg-[#075B3A]
          p-6
          text-white
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#72B943]
          hover:shadow-[0_25px_60px_rgba(7,91,58,0.20)]
          sm:p-8
          lg:col-span-5
        "
            >

              <div
                className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            border
            border-white/10
            transition-transform
            duration-700
            group-hover:scale-110
          "
              />


              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#A9D8BD]">
                02 / VALUE ADDED
              </p>

              <h3
                className="
            mt-3
            font-display
            text-[clamp(1.8rem,3vw,3rem)]
            font-semibold
            tracking-[-0.05em]
          "
              >
                Higher Value Dairy
              </h3>

              <p className="mt-4 max-w-[430px] text-[11px] leading-6 text-white/65">
                Moving beyond conventional dairy into differentiated,
                higher-value products and ingredients.
              </p>


              <div className="mt-8 space-y-2">

                {[
                  'Cheese',
                  'Whey',
                  'Protein'
                ].map((item, index) => (

                  <div
                    key={item}
                    className="
                group/item
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-white/10
                bg-white/[0.055]
                px-4
                py-4
                transition-all
                duration-300
                hover:border-[#72B943]/50
                hover:bg-white/[0.10]
              "
                  >

                    <span className="text-[11px] font-semibold">
                      {item}
                    </span>

                    <span
                      className="
                  text-[8px]
                  font-bold
                  tracking-[0.18em]
                  text-[#A9D8BD]
                  transition-colors
                  group-hover/item:text-[#72B943]
                "
                    >
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* ===================================================
          FUNCTIONAL NUTRITION
      =================================================== */}

            <div
              className="
          group
          rounded-[30px]
          border
          border-[#8A7130]/15
          bg-[#FBF8EF]
          p-6
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#D5A33A]/50
          hover:shadow-[0_25px_60px_rgba(130,100,30,0.09)]
          sm:p-8
          lg:col-span-5
          dark:border-white/[0.08]
          dark:bg-[#171710]
          dark:hover:border-[#D5A33A]/40
        "
            >

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8A7130]">
                03 / NUTRITION INGREDIENTS
              </p>

              <h3
                className="
            mt-3
            font-display
            text-[clamp(1.8rem,3vw,3rem)]
            font-semibold
            tracking-[-0.05em]
          "
              >
                Functional Nutrition
              </h3>


              <div className="mt-8 grid grid-cols-2 gap-2">

                {[
                  'WPC',
                  'WPI',
                  'Milk Protein',
                  'Whey Ingredients'
                ].map((item) => (

                  <div
                    key={item}
                    className="
                group/item
                rounded-2xl
                border
                border-[#8A7130]/10
                bg-white/70
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D5A33A]/40
                hover:bg-white
                hover:shadow-[0_12px_30px_rgba(120,90,20,0.07)]
                dark:border-white/10
                dark:bg-black/10
                dark:hover:border-[#D5A33A]/40
              "
                  >

                    <span
                      className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#8A7130]
                  transition-colors
                  group-hover/item:text-[#A47716]
                  dark:text-[#D5A33A]
                "
                    >
                      NUTRITION
                    </span>

                    <p
                      className="
                  mt-5
                  font-display
                  text-[13px]
                  font-semibold
                  tracking-[-0.02em]
                "
                    >
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* ===================================================
          FUTURE PORTFOLIO
      =================================================== */}

            <div
              className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[#075B3A]/10
          bg-[#EDF4EC]
          p-6
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#72B943]/40
          hover:shadow-[0_25px_60px_rgba(7,91,58,0.08)]
          sm:p-8
          lg:col-span-7
          dark:border-white/[0.08]
          dark:bg-[#0D1915]
          dark:hover:border-[#72B943]/40
        "
            >

              {/* DECORATIVE RINGS */}

              <div
                className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-56
            w-56
            rounded-full
            border
            border-[#72B943]/15
            transition-transform
            duration-700
            group-hover:scale-110
          "
              />

              <div
                className="
            pointer-events-none
            absolute
            -right-8
            -top-8
            h-32
            w-32
            rounded-full
            border
            border-[#72B943]/10
          "
              />


              <div className="relative">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p
                      className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#075B3A]
                  dark:text-[#72B943]
                "
                    >
                      04 / FUTURE PORTFOLIO
                    </p>

                    <h3
                      className="
                  mt-3
                  max-w-[600px]
                  font-display
                  text-[clamp(1.8rem,3vw,3rem)]
                  font-semibold
                  tracking-[-0.05em]
                "
                    >
                      Built for What Comes Next
                    </h3>

                  </div>


                  <span
                    className="
                hidden
                rounded-full
                border
                border-[#72B943]/20
                bg-[#72B943]/10
                px-3
                py-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#075B3A]
                sm:inline-flex
                dark:text-[#9BCDAF]
              "
                  >
                    PLANNED
                  </span>

                </div>


                <div className="mt-8 grid gap-2 sm:grid-cols-3">

                  {[
                    'Advanced Protein',
                    'Functional Nutrition',
                    'New Dairy Formats'
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="
                  group/item
                  rounded-2xl
                  border
                  border-black/[0.06]
                  bg-white/70
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#72B943]/40
                  hover:bg-white
                  hover:shadow-[0_12px_30px_rgba(7,91,58,0.06)]
                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                  dark:hover:border-[#72B943]/40
                  dark:hover:bg-white/[0.045]
                "
                    >

                      <div className="flex items-center justify-between">

                        <span
                          className="
                      text-[8px]
                      font-bold
                      text-[#72B943]
                    "
                        >
                          0{index + 1}
                        </span>

                        <span
                          className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#72B943]/40
                      transition-all
                      group-hover/item:bg-[#72B943]
                    "
                        />

                      </div>


                      <p
                        className="
                    mt-5
                    text-[11px]
                    font-semibold
                    leading-5
                    transition-colors
                    group-hover/item:text-[#075B3A]
                    dark:group-hover/item:text-[#72B943]
                  "
                      >
                        {item}
                      </p>

                    </div>

                  ))}

                </div>


                <p
                  className="
              mt-5
              max-w-[760px]
              text-[9px]
              leading-5
              text-[#73827B]
              dark:text-[#73857B]
            "
                >
                  Future products are presented as planned directions and do not
                  represent currently available commercial offerings.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
        VALUE FLOW
    ===================================================== */}

          <div
            data-aos="fade-up"
            className="
        mt-5
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#091510]
        p-6
        text-white
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        sm:p-8
      "
          >

            <div
              className="
          flex
          flex-col
          gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
            >

              <div className="text-center lg:text-left">

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                  VALUE CHAIN
                </p>

                <h3
                  className="
              mt-3
              font-display
              text-[clamp(1.4rem,2.5vw,2.2rem)]
              font-semibold
              tracking-[-0.04em]
            "
                >
                  One raw material. Multiple value pathways.
                </h3>

              </div>


              {/* FLOW */}

              <div
                className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            lg:justify-end
          "
              >

                {[
                  'MILK',
                  'PROCESSING',
                  'DAIRY',
                  'WHEY',
                  'PROTEIN',
                  'NUTRITION'
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >

                    <span
                      className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-3
                  py-2
                  text-[8px]
                  font-bold
                  tracking-[0.15em]
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-[#72B943]/40
                  hover:bg-[#72B943]/10
                  hover:text-[#A9D8BD]
                "
                    >
                      {item}
                    </span>

                    {index < 5 && (
                      <span className="text-[10px] text-[#72B943]/70">
                        →
                      </span>
                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
        CTA
    ===================================================== */}

          <div
            className="
        mt-10
        flex
        justify-center
        sm:mt-12
      "
          >

            <Link
              to="/products"
              className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[#075B3A]
          bg-[#075B3A]
          px-5
          py-3
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-[#72B943]
          hover:bg-[#0B7A4B]
          hover:shadow-[0_15px_35px_rgba(7,91,58,0.18)]
        "
            >

              Explore Dairy & Nutrition

              <span
                className="
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#075B3A]
            transition-transform
            duration-300
            group-hover:translate-x-0.5
          "
              >
                <FaArrowRight size={9} />
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 07 — CIRCULAR SUSTAINABILITY
========================================================= */}
      <section className="relative overflow-hidden bg-[#EEF3EC] py-20 text-[#0B1712] sm:py-24 lg:py-32 dark:bg-[#07100D] dark:text-white">

        {/* =====================================================
      AMBIENT BACKGROUND
  ===================================================== */}
        <div className="pointer-events-none absolute inset-0">

          <div
            className="absolute inset-0 opacity-[0.45] dark:opacity-[0.07]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(7,91,58,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,91,58,0.07) 1px, transparent 1px)
        `,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="absolute -right-40 -top-20 h-[520px] w-[520px] rounded-full bg-[#72B943]/15 blur-[150px]" />

          <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#075B3A]/10 blur-[150px]" />

        </div>


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            {/* Section label */}   <div
              data-aos="fade-right"
              className="flex items-start justify-start gap-4"
            >
              {/* NUMBER + VERTICAL LINE */}
              <div className="flex shrink-0 flex-col items-center">

                <span
                  className="
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-[#075B3A]/15
        bg-white
        text-[10px]
        font-bold
        tracking-[0.12em]
        text-[#075B3A]
        shadow-[0_10px_30px_rgba(7,91,58,0.06)]
        dark:border-white/10
        dark:bg-[#101B17]
        dark:text-[#72B943]
      "
                >
                  07
                </span>

                <span
                  className="
        mt-4
        h-16
        w-px
        bg-gradient-to-b
        from-[#075B3A]/30
        to-transparent
        dark:from-[#72B943]/30
      "
                />

              </div>

              {/* CONTENT */}
              <div className="pt-1 text-left">

                {/* LABEL */}
                <div className="flex items-center justify-start gap-3">

                  <span className="h-px w-8 bg-[#72B943]" />

                  <span
                    className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-[#60726A]
          dark:text-[#8EA199]
        "
                  >
                    SUSTAINABILITY
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p
                  className="
        mt-5
        max-w-[270px]
        text-left
        text-[10px]
        leading-5
        text-[#74837C]
        dark:text-[#71847B]
      "
                >
                  Designing a connected cycle where resources are recovered,
                  reused and transformed into new value.
                </p>

              </div>

            </div>


            {/* Main heading */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <h2 className="mx-auto max-w-[1000px] font-display text-[clamp(2.6rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em] lg:mx-0">

                WASTE
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  BECOMES VALUE.
                </span>

              </h2>

              <p className="mx-auto mt-7 max-w-[730px] text-[15px] leading-7 text-[#52635B] sm:text-[17px] sm:leading-8 lg:mx-0 dark:text-[#A8B9B1]">
                Sustainability at Tejays Agri is approached as a connected
                operating system — linking dairy, energy, agriculture, water
                and nutrition.
              </p>

            </div>

          </div>


          {/* =====================================================
        MAIN CIRCULAR SYSTEM
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="
        relative
        mt-14
        overflow-hidden
        rounded-[32px]
        border
        border-black/[0.08]
        bg-white
        p-5
        shadow-[0_30px_90px_rgba(15,45,30,0.07)]
        transition-all
        duration-500
        hover:border-[#72B943]/30
        hover:shadow-[0_35px_100px_rgba(20,70,35,0.10)]
        sm:mt-16
        sm:p-8
        lg:p-10
        dark:border-white/[0.08]
        dark:bg-[#0D1915]
        dark:hover:border-[#72B943]/25
      "
          >

            {/* Top accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#72B943] to-transparent opacity-70" />


            {/* Header */}
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  CIRCULAR DAIRY ECOSYSTEM
                </p>

                <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.8rem)] font-semibold tracking-[-0.05em]">
                  From resource to resource.
                </h3>

              </div>

              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#87968F]">
                SYSTEM MAP / 07
              </span>

            </div>


            {/* =================================================
          DESKTOP CIRCLE
      ================================================= */}
            <div className="relative mx-auto mt-12 hidden h-[580px] max-w-[900px] lg:block">

              {/* Outer rings */}
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#075B3A]/10 transition-all duration-700 hover:scale-[1.02]" />

              <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#72B943]/20" />

              <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#075B3A]/10 bg-[#EEF3EC]/50 dark:bg-[#72B943]/[0.025]" />


              {/* Central node */}
              <div className="
          absolute
          left-1/2
          top-1/2
          z-20
          flex
          h-[150px]
          w-[150px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[#72B943]/40
          bg-[#075B3A]
          text-center
          text-white
          shadow-[0_25px_70px_rgba(7,91,58,0.20)]
          transition-all
          duration-500
          hover:scale-105
          hover:border-[#72B943]
          hover:shadow-[0_25px_80px_rgba(114,185,67,0.25)]
        ">

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#A9D8BD]">
                    TEJAYS
                  </p>

                  <p className="mt-1 font-display text-[17px] font-semibold tracking-[-0.03em]">
                    CIRCULAR
                  </p>

                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/55">
                    ECOSYSTEM
                  </p>

                </div>

              </div>


              {/* Connecting lines */}
              <div className="pointer-events-none absolute left-1/2 top-[17%] h-[33%] w-px -translate-x-1/2 bg-gradient-to-b from-[#72B943]/30 to-[#72B943]/10" />

              <div className="pointer-events-none absolute right-[17%] top-1/2 h-px w-[32%] rotate-[30deg] bg-gradient-to-r from-[#72B943]/10 to-[#72B943]/30" />

              <div className="pointer-events-none absolute right-[17%] bottom-[20%] h-px w-[32%] -rotate-[30deg] bg-gradient-to-r from-[#72B943]/10 to-[#72B943]/30" />

              <div className="pointer-events-none absolute bottom-[17%] left-1/2 h-[33%] w-px -translate-x-1/2 bg-gradient-to-t from-[#72B943]/30 to-[#72B943]/10" />

              <div className="pointer-events-none absolute bottom-[20%] left-[17%] h-px w-[32%] rotate-[30deg] bg-gradient-to-l from-[#72B943]/10 to-[#72B943]/30" />

              <div className="pointer-events-none absolute left-[17%] top-1/2 h-px w-[32%] -rotate-[30deg] bg-gradient-to-l from-[#72B943]/10 to-[#72B943]/30" />


              {/* System nodes */}
              {[
                ["MANURE", "Resource Input", "left-1/2 top-0 -translate-x-1/2"],
                ["BIOGAS", "Energy Recovery", "right-[2%] top-[18%]"],
                ["ENERGY", "Power Generation", "right-[1%] bottom-[19%]"],
                ["FERTILIZER", "Soil Nutrition", "left-1/2 bottom-0 -translate-x-1/2"],
                ["AGRICULTURE", "Crop Production", "left-[1%] bottom-[19%]"],
                ["FEED", "Feed Resources", "left-[2%] top-[18%]"],
              ].map(([title, subtitle, position], index) => (

                <div
                  key={title}
                  className={`
              group
              absolute
              ${position}
              z-30
              w-[155px]
              cursor-default
              rounded-2xl
              border
              border-black/[0.08]
              bg-[#F8FAF7]
              p-4
              shadow-[0_12px_35px_rgba(10,40,25,0.06)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#72B943]/50
              hover:bg-white
              hover:shadow-[0_18px_45px_rgba(40,100,45,0.12)]
              dark:border-white/[0.08]
              dark:bg-[#111D18]
              dark:hover:border-[#72B943]/40
              dark:hover:bg-[#14241D]
            `}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-bold tracking-[0.18em] text-[#075B3A] dark:text-[#72B943]">
                      0{index + 1}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] opacity-60 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(114,185,67,0.8)]" />

                  </div>

                  <p className="mt-4 text-[9px] font-bold tracking-[0.16em]">
                    {title}
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-[#75847D] dark:text-white/40">
                    {subtitle}
                  </p>

                </div>

              ))}

            </div>


            {/* =================================================
    MOBILE / TABLET FLOW
================================================= */}
            <div className="mt-9 grid grid-cols-2 gap-3 lg:hidden">

              {[
                ["01", "MANURE", "Resource Input"],
                ["02", "BIOGAS", "Energy Recovery"],
                ["03", "ENERGY", "Power Generation"],
                ["04", "FERTILIZER", "Soil Nutrition"],
                ["05", "AGRICULTURE", "Crop Production"],
                ["06", "FEED", "Feed Resources"],
                ["07", "DAIRY", "Production Cycle"],
              ].map(([number, title, subtitle], index) => (

                <div
                  key={title}
                  className="
        group
        rounded-2xl
        border
        border-black/[0.08]
        bg-[#F7F9F5]
        p-4
        text-center
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#72B943]/50
        hover:bg-white
        hover:shadow-[0_15px_35px_rgba(30,90,40,0.08)]

        active:scale-[0.98]
        active:border-[#72B943]/60

        dark:border-white/[0.08]
        dark:bg-[#111D18]
        dark:hover:border-[#72B943]/40
        dark:hover:bg-[#14241D]
      "
                >

                  <div className="flex items-center justify-center gap-2">

                    <span className="text-[8px] font-bold tracking-[0.15em] text-[#72B943]">
                      {number}
                    </span>

                    <span className="h-px w-4 bg-[#72B943]/20 transition-all duration-300 group-hover:w-7 group-hover:bg-[#72B943]/60" />

                    <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#72B943]" />

                  </div>

                  <p className="mt-4 text-[9px] font-bold tracking-[0.14em]">
                    {title}
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-[#77867F] dark:text-white/40">
                    {subtitle}
                  </p>

                  {index < 6 && (
                    <div className="mx-auto mt-3 text-[10px] text-[#72B943]/50">
                      ↓
                    </div>
                  )}

                </div>

              ))}

            </div>


            {/* =================================================
          SYSTEM STATEMENT
      ================================================= */}
            <div className="
        mt-9
        grid
        gap-3
        border-t
        border-black/10
        pt-8
        text-center
        sm:grid-cols-3
        sm:text-left
        dark:border-white/10
      ">

              {[
                [
                  "ENERGY",
                  "Exploring renewable energy pathways from organic resources."
                ],
                [
                  "WATER",
                  "Rainwater harvesting, treatment and potential reuse systems."
                ],
                [
                  "AGRICULTURE",
                  "Linking soil, crops and feed resources back into the dairy cycle."
                ],
              ].map(([title, text]) => (

                <div
                  key={title}
                  className="
              group
              rounded-2xl
              border
              border-transparent
              p-4
              transition-all
              duration-300
              hover:border-[#72B943]/20
              hover:bg-[#72B943]/[0.035]
            "
                >

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075B3A] dark:text-[#72B943]">
                    {title}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#687871] dark:text-white/45">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
        BOTTOM FEATURE CARDS
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >

            {[
              {
                title: "Renewable Energy",
                items: "Solar • Biogas • Energy Management",
              },
              {
                title: "Water Intelligence",
                items: "Harvesting • Treatment • Recycling",
              },
              {
                title: "From Waste to Resource",
                items: "Recovery • Reuse • Circular Value",
              },
            ].map((item, index) => (

              <div
                key={item.title}
                className="
            group
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-black/[0.08]
            bg-white
            p-6
            text-center
            shadow-[0_12px_35px_rgba(20,50,30,0.04)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#72B943]/45
            hover:shadow-[0_20px_45px_rgba(20,80,35,0.10)]
            sm:text-left
            dark:border-white/[0.08]
            dark:bg-[#0D1915]
            dark:hover:border-[#72B943]/35
          "
              >

                {/* Hover accent */}
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#72B943] transition-transform duration-300 group-hover:scale-x-100" />

                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                  FUTURE SYSTEM / 0{index + 1}
                </span>

                <h4 className="mt-4 font-display text-[19px] font-semibold tracking-[-0.04em]">
                  {item.title}
                </h4>

                <p className="mt-3 text-[10px] leading-5 text-[#718079] dark:text-white/40">
                  {item.items}
                </p>

              </div>

            ))}

          </div>


          {/* =====================================================
        NOTE
    ===================================================== */}
          <div className="mt-8 flex justify-center px-3">

            <p className="max-w-[720px] text-center text-[9px] leading-5 text-[#7B8983] dark:text-white/35">
              Sustainability initiatives shown represent planned and potential
              system directions. Specific technologies, capacities and outcomes
              are subject to engineering, regulatory and operational validation.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 08 — INTEGRATED CAMPUS
========================================================= */}
      <section className="relative overflow-hidden bg-[#F3F5EF] py-16 text-[#0B1712] sm:py-24 lg:py-32">

        {/* =====================================================
      AMBIENT BACKGROUND
  ===================================================== */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#72B943]/10 blur-[110px]" />

          <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#075B3A]/10 blur-[130px]" />

          <div
            className="
        absolute inset-0
        opacity-[0.45]
        [background-image:linear-gradient(rgba(7,91,58,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(7,91,58,0.055)_1px,transparent_1px)]
        [background-size:60px_60px]
      "
          />

        </div>


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">


          {/* =====================================================
        TOP INTRO
    ===================================================== */}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            {/* INDEX */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="flex items-start justify-start gap-4"
            >
              {/* NUMBER + VERTICAL LINE */}
              <div className="flex shrink-0 flex-col items-center">

                <span
                  className="
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-[#075B3A]/15
        bg-white
        text-[10px]
        font-bold
        tracking-[0.12em]
        text-[#075B3A]
        shadow-[0_10px_30px_rgba(7,91,58,0.06)]
        dark:border-white/10
        dark:bg-[#101B17]
        dark:text-[#72B943]
        transition-all duration-300
        hover:border-[#72B943]
        hover:bg-[#075B3A]
        hover:text-white
      "
                >
                  08
                </span>

                <span
                  className="
        mt-4
        h-16
        w-px
        bg-gradient-to-b
        from-[#075B3A]/30
        to-transparent
        dark:from-[#72B943]/30
      "
                />

              </div>

              {/* CONTENT */}
              <div className="pt-1 text-left">

                {/* LABEL */}
                <div className="flex items-center justify-start gap-3">

                  <span className="h-px w-8 bg-[#72B943]" />

                  <span
                    className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-[#60726A]
          dark:text-[#8EA199]
        "
                  >
                    INTEGRATED CAMPUS
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p
                  className="
        mt-5
        max-w-[270px]
        text-left
        text-[10px]
        leading-5
        text-[#74837C]
        dark:text-[#71847B]
      "
                >
                  A future-ready infrastructure model connecting production,
                  resources, intelligence and value creation.
                </p>

              </div>

            </div>

            {/* MAIN INTRO */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="100"
              className="text-center lg:text-left"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#075B3A]/10 bg-white px-3 py-1.5 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#52635A]">
                  PROPOSED CAMPUS MODEL
                </span>
              </div>

              <h2
                className="
      mx-auto
      max-w-[1000px]
      font-display
      text-[clamp(2.8rem,6.5vw,7rem)]
      font-semibold
      leading-[0.86]
      tracking-[-0.075em]
      text-[#091710]
      lg:mx-0
    "
              >
                BUILT AS
                <br />

                <span className="text-[#075B3A]">
                  LIVING SYSTEM.
                </span>
              </h2>

              <p
                className="
      mx-auto
      mt-7
      max-w-[720px]
      text-[14px]
      leading-7
      text-[#5C6C64]
      sm:text-[17px]
      sm:leading-8
      lg:mx-0
    "
              >
                The campus is envisioned not as a collection of buildings,
                but as one connected operating environment where dairy,
                processing, agriculture, energy, water and data continuously
                interact.
              </p>
            </div>

          </div>



          {/* =====================================================
        CAMPUS JOURNEY
    ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative mt-14 sm:mt-20"
          >

            {/* TOP LABEL */}
            <div className="mb-6 flex items-center justify-between border-b border-[#0B2118]/10 pb-4">

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[#72B943]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#52635A]">
                  CAMPUS SYSTEM JOURNEY
                </span>

              </div>


              <span className="hidden text-[8px] font-bold uppercase tracking-[0.2em] text-[#9AA59F] sm:block">
                CONCEPT / NOT TO SCALE
              </span>

            </div>



            {/* =====================================================
    DESKTOP JOURNEY — PREMIUM CAMPUS JOURNEY
===================================================== */}
            <div className="hidden lg:block">

              {/* JOURNEY FRAME */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="relative overflow-hidden rounded-[32px] border border-[#075B3A]/10 bg-[#F7F9F5] px-6 py-7 xl:px-8 xl:py-8"
              >

                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#72B943]/10 blur-[90px]" />
                <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#075B3A]/10 blur-[90px]" />

                {/* HEADER */}
                <div
                  data-aos="fade-down"
                  data-aos-delay="100"
                  className="relative mb-8 flex items-end justify-between gap-6 border-b border-[#075B3A]/10 pb-5"
                >

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold tracking-[0.25em] text-[#72B943]">
                        CAMPUS JOURNEY
                      </span>

                      <span className="h-px w-8 bg-[#72B943]" />

                      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#89958F]">
                        Integrated Operating Model
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.045em] text-[#0B1712] xl:text-3xl">
                      ONE SYSTEM.
                      <span className="text-[#075B3A]"> MANY CONNECTED LAYERS.</span>
                    </h3>
                  </div>

                  <div className="hidden items-center gap-2 rounded-full border border-[#075B3A]/10 bg-white px-3 py-2 xl:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#68756F]">
                      Proposed Campus Architecture
                    </span>
                  </div>

                </div>


                {/* MAIN JOURNEY */}
                <div className="relative">

                  {/* CENTRAL JOURNEY LINE */}
                  <div className="pointer-events-none absolute left-0 right-0 top-[112px] hidden h-px bg-gradient-to-r from-transparent via-[#075B3A]/25 to-transparent lg:block" />

                  {/* ACTIVE FLOW LINE */}
                  <div className="pointer-events-none absolute left-[8%] right-[8%] top-[112px] hidden h-px bg-[#72B943]/25 lg:block" />

                  <div className="grid grid-cols-6 gap-3 xl:gap-4">


                    {/* =================================================
            ZONE 01 — SMART DAIRY
        ================================================= */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="0"
                      className="group relative"
                    >

                      <div className="relative h-[235px] overflow-hidden rounded-[26px] border border-[#075B3A]/10 bg-white p-5 shadow-[0_12px_35px_rgba(7,91,58,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#72B943]/50 hover:shadow-[0_24px_60px_rgba(7,91,58,0.12)]">

                        {/* Number */}
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.2em] text-[#72B943]">
                            01
                          </span>

                          <span className="text-[8px] font-bold tracking-[0.15em] text-[#A0AAA5] transition-colors duration-300 group-hover:text-[#075B3A]">
                            CORE
                          </span>
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#72B943]/0 blur-3xl transition-all duration-500 group-hover:bg-[#72B943]/15" />

                        <div className="relative mt-10">

                          <h3 className="font-display text-[22px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#0B1712] transition-colors duration-300 group-hover:text-[#075B3A]">
                            SMART
                            <br />
                            DAIRY
                          </h3>

                          <p className="mt-5 max-w-[145px] text-[9px] leading-[1.7] text-[#78847E]">
                            The biological and operational core of the campus.
                          </p>

                        </div>

                        {/* Bottom Index */}
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#A2ADA7]">
                            Production
                          </span>

                          <span className="h-px w-7 bg-[#72B943]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#72B943]" />
                        </div>

                      </div>


                      {/* NODE */}
                      <div className="relative z-10 mx-auto mt-[-1px] flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-[#F7F9F5] bg-[#075B3A] shadow-[0_5px_18px_rgba(7,91,58,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#72B943]">

                        <span className="h-1.5 w-1.5 rounded-full bg-white" />

                      </div>

                    </div>



                    {/* =================================================
            ZONE 02 — FEED & AGRICULTURE
        ================================================= */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="group relative pt-12"
                    >

                      <div className="relative h-[235px] overflow-hidden rounded-[26px] border border-[#075B3A]/10 bg-[#EAF0E9] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#72B943]/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(7,91,58,0.12)]">

                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.2em] text-[#72B943]">
                            02
                          </span>

                          <span className="text-[8px] font-bold tracking-[0.15em] text-[#89958F] transition-colors duration-300 group-hover:text-[#075B3A]">
                            INPUT
                          </span>
                        </div>

                        <div className="relative mt-10">

                          <h3 className="font-display text-[21px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#0B1712] transition-colors duration-300 group-hover:text-[#075B3A]">
                            FEED &
                            <br />
                            AGRICULTURE
                          </h3>

                          <p className="mt-5 max-w-[155px] text-[9px] leading-[1.7] text-[#78847E]">
                            Feed resources and agricultural systems supporting the dairy cycle.
                          </p>

                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#98A49E]">
                            Resources
                          </span>

                          <span className="h-px w-7 bg-[#72B943]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#72B943]" />
                        </div>

                      </div>


                      <div className="relative z-10 mx-auto mt-[-1px] flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-[#F7F9F5] bg-[#075B3A] shadow-[0_5px_18px_rgba(7,91,58,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#72B943]">

                        <span className="h-1.5 w-1.5 rounded-full bg-white" />

                      </div>

                    </div>



                    {/* =================================================
            ZONE 03 — MILK PROCESSING
        ================================================= */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="group relative"
                    >

                      <div className="relative h-[235px] overflow-hidden rounded-[26px] border border-[#075B3A]/10 bg-white p-5 shadow-[0_12px_35px_rgba(7,91,58,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#72B943]/50 hover:shadow-[0_24px_60px_rgba(7,91,58,0.12)]">

                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.2em] text-[#72B943]">
                            03
                          </span>

                          <span className="text-[8px] font-bold tracking-[0.15em] text-[#A0AAA5] transition-colors duration-300 group-hover:text-[#075B3A]">
                            FLOW
                          </span>
                        </div>

                        <div className="relative mt-10">

                          <h3 className="font-display text-[21px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#0B1712] transition-colors duration-300 group-hover:text-[#075B3A]">
                            MILK
                            <br />
                            PROCESSING
                          </h3>

                          <p className="mt-5 max-w-[150px] text-[9px] leading-[1.7] text-[#78847E]">
                            Converting primary dairy output into controlled value streams.
                          </p>

                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#A2ADA7]">
                            Processing
                          </span>

                          <span className="h-px w-7 bg-[#72B943]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#72B943]" />
                        </div>

                      </div>


                      <div className="relative z-10 mx-auto mt-[-1px] flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-[#F7F9F5] bg-[#075B3A] shadow-[0_5px_18px_rgba(7,91,58,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#72B943]">

                        <span className="h-1.5 w-1.5 rounded-full bg-white" />

                      </div>

                    </div>



                    {/* =================================================
            ZONE 04 — VALUE CREATION
        ================================================= */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="group relative pt-12"
                    >

                      <div className="relative h-[235px] overflow-hidden rounded-[26px] border border-[#075B3A]/10 bg-white p-5 shadow-[0_12px_35px_rgba(7,91,58,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#72B943]/50 hover:shadow-[0_24px_60px_rgba(7,91,58,0.12)]">

                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.2em] text-[#72B943]">
                            04
                          </span>

                          <span className="text-[8px] font-bold tracking-[0.15em] text-[#A0AAA5] transition-colors duration-300 group-hover:text-[#075B3A]">
                            VALUE
                          </span>
                        </div>

                        <div className="relative mt-10">

                          <h3 className="font-display text-[21px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#0B1712] transition-colors duration-300 group-hover:text-[#075B3A]">
                            VALUE
                            <br />
                            CREATION
                          </h3>

                          <p className="mt-5 max-w-[150px] text-[9px] leading-[1.7] text-[#78847E]">
                            Dairy products, cheese, whey and nutrition pathways.
                          </p>

                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#A2ADA7]">
                            Products
                          </span>

                          <span className="h-px w-7 bg-[#72B943]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#72B943]" />
                        </div>

                      </div>


                      <div className="relative z-10 mx-auto mt-[-1px] flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-[#F7F9F5] bg-[#075B3A] shadow-[0_5px_18px_rgba(7,91,58,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#72B943]">

                        <span className="h-1.5 w-1.5 rounded-full bg-white" />

                      </div>

                    </div>



                    {/* =================================================
            ZONE 05 — RESOURCE SYSTEMS
        ================================================= */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="group relative"
                    >

                      <div className="relative h-[235px] overflow-hidden rounded-[26px] border border-[#075B3A]/10 bg-[#EAF0E9] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#72B943]/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(7,91,58,0.12)]">

                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.2em] text-[#72B943]">
                            05
                          </span>

                          <span className="text-[8px] font-bold tracking-[0.15em] text-[#89958F] transition-colors duration-300 group-hover:text-[#075B3A]">
                            SUPPORT
                          </span>
                        </div>

                        <div className="relative mt-10">

                          <h3 className="font-display text-[21px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#0B1712] transition-colors duration-300 group-hover:text-[#075B3A]">
                            RESOURCE
                            <br />
                            SYSTEMS
                          </h3>

                          <p className="mt-5 max-w-[150px] text-[9px] leading-[1.7] text-[#78847E]">
                            Energy, water and recovery systems supporting campus resilience.
                          </p>

                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#98A49E]">
                            Resilience
                          </span>

                          <span className="h-px w-7 bg-[#72B943]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#72B943]" />
                        </div>

                      </div>


                      <div className="relative z-10 mx-auto mt-[-1px] flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-[#F7F9F5] bg-[#075B3A] shadow-[0_5px_18px_rgba(7,91,58,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#72B943]">

                        <span className="h-1.5 w-1.5 rounded-full bg-white" />

                      </div>

                    </div>



                    {/* =================================================
            ZONE 06 — DATA & INTELLIGENCE
        ================================================= */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="group relative pt-12"
                    >

                      <div className="relative h-[235px] overflow-hidden rounded-[26px] bg-[#075B3A] p-5 text-white shadow-[0_18px_50px_rgba(7,91,58,0.15)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#064C31] hover:shadow-[0_28px_70px_rgba(7,91,58,0.24)]">

                        {/* Glow */}
                        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#72B943]/10 blur-3xl transition-all duration-500 group-hover:bg-[#72B943]/25" />

                        {/* Fine grid */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:24px_24px]" />

                        <div className="relative flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.2em] text-[#B9E98D]">
                            06
                          </span>

                          <span className="text-[8px] font-bold tracking-[0.15em] text-white/45">
                            DIGITAL
                          </span>
                        </div>

                        <div className="relative mt-10">

                          <h3 className="font-display text-[21px] font-semibold leading-[0.92] tracking-[-0.05em] text-white">
                            DATA &
                            <br />
                            INTELLIGENCE
                          </h3>

                          <p className="mt-5 max-w-[155px] text-[9px] leading-[1.7] text-white/55 transition-colors duration-300 group-hover:text-white/80">
                            The digital layer connecting decisions across the campus.
                          </p>

                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/40">
                            Intelligence
                          </span>

                          <span className="h-px w-7 bg-[#72B943] transition-all duration-300 group-hover:w-12" />
                        </div>

                      </div>


                      <div className="relative z-10 mx-auto mt-[-1px] flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-[#F7F9F5] bg-[#72B943] shadow-[0_5px_18px_rgba(114,185,67,0.25)] transition-all duration-300 group-hover:scale-125">

                        <span className="h-1.5 w-1.5 rounded-full bg-white" />

                      </div>

                    </div>

                  </div>

                </div>


                {/* =================================================
        JOURNEY CAPTION
    ================================================= */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="relative mt-8 flex items-center justify-between gap-6 border-t border-[#075B3A]/10 pt-5"
                >

                  <div className="flex items-start gap-3">

                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#72B943]" />

                    <p className="max-w-[650px] text-[10px] leading-5 text-[#718079]">
                      Production creates value. Resource systems support continuity.
                      Data connects the complete operating loop.
                    </p>

                  </div>


                  <div className="hidden items-center gap-3 md:flex">

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#99A49F]">
                      CONNECTED BY
                    </span>

                    <span className="h-px w-8 bg-[#72B943]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075B3A]">
                      INTELLIGENCE
                    </span>

                  </div>

                </div>


                {/* CONCEPTUAL LABEL */}
                <div
                  data-aos="fade-in"
                  data-aos-delay="700"
                  className="relative mt-5 flex justify-end"
                >
                  <span className="rounded-full border border-[#075B3A]/10 bg-white px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.2em] text-[#7C8983]">
                    PROPOSED / CONCEPTUAL
                  </span>
                </div>

              </div>

            </div>



            {/* =====================================================
          MOBILE JOURNEY
      ===================================================== */}
            <div className="lg:hidden">

              <div className="relative ml-3 border-l border-[#075B3A]/15 pl-7">

                {[
                  [
                    "01",
                    "SMART DAIRY",
                    "The biological and operational core of the campus.",
                  ],
                  [
                    "02",
                    "FEED & AGRICULTURE",
                    "Feed resources and agricultural systems supporting the dairy cycle.",
                  ],
                  [
                    "03",
                    "MILK PROCESSING",
                    "Converting primary dairy output into controlled value streams.",
                  ],
                  [
                    "04",
                    "VALUE CREATION",
                    "Dairy products, cheese, whey and nutrition pathways.",
                  ],
                  [
                    "05",
                    "RESOURCE SYSTEMS",
                    "Energy, water and recovery systems supporting campus resilience.",
                  ],
                  [
                    "06",
                    "DATA & INTELLIGENCE",
                    "The digital layer connecting decisions across the campus.",
                  ],
                ].map(([number, title, text], index) => (

                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className="group relative pb-5 last:pb-0"
                  >

                    {/* CONNECTOR */}
                    <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border-2 border-[#F3F5EF] bg-[#075B3A] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#72B943]" />


                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-[22px] border border-[#075B3A]/10 bg-white p-5 shadow-[0_12px_35px_rgba(7,91,58,0.05)] transition-all duration-400 hover:-translate-y-1 hover:border-[#72B943]/45 hover:shadow-[0_20px_50px_rgba(7,91,58,0.1)]">

                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#72B943]/0 blur-2xl transition-all duration-500 group-hover:bg-[#72B943]/15" />

                      <div className="relative flex items-start gap-4">

                        <span className="pt-0.5 text-[9px] font-bold tracking-[0.2em] text-[#72B943]">
                          {number}
                        </span>

                        <div>

                          <h3 className="font-display text-base font-semibold tracking-[-0.03em] text-[#0B1712] transition-colors duration-300 group-hover:text-[#075B3A]">
                            {title}
                          </h3>

                          <p className="mt-2 text-[10px] leading-5 text-[#78847E] transition-colors duration-300 group-hover:text-[#52635A]">
                            {text}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>



          {/* =====================================================
        CAMPUS PRINCIPLE STRIP
    ===================================================== */}
          {/* PRINCIPLES */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="mt-12 grid overflow-hidden rounded-[26px] border border-[#075B3A]/10 bg-white text-center sm:grid-cols-3 sm:text-left"
          >
            {/* PRINCIPLE 01 */}
            <div className="group border-b border-[#075B3A]/10 p-5 transition-all duration-300 hover:bg-[#075B3A] hover:text-white sm:border-b-0 sm:border-r">
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                PRINCIPLE 01
              </p>

              <h4 className="mt-3 text-sm font-semibold transition-colors group-hover:text-white">
                CONNECTED OPERATIONS
              </h4>

              <p className="mt-2 text-[9px] leading-5 text-[#7A8781] transition-colors group-hover:text-white/60">
                Systems are designed to exchange information rather than operate in isolation.
              </p>
            </div>


            {/* PRINCIPLE 02 */}
            <div className="group border-b border-[#075B3A]/10 p-5 transition-all duration-300 hover:bg-[#075B3A] hover:text-white sm:border-b-0 sm:border-r">
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                PRINCIPLE 02
              </p>

              <h4 className="mt-3 text-sm font-semibold transition-colors group-hover:text-white">
                RESOURCE EFFICIENCY
              </h4>

              <p className="mt-2 text-[9px] leading-5 text-[#7A8781] transition-colors group-hover:text-white/60">
                Energy, water and material flows are considered part of the operating model.
              </p>
            </div>


            {/* PRINCIPLE 03 */}
            <div className="group p-5 transition-all duration-300 hover:bg-[#075B3A] hover:text-white">
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                PRINCIPLE 03
              </p>

              <h4 className="mt-3 text-sm font-semibold transition-colors group-hover:text-white">
                FUTURE SCALABILITY
              </h4>

              <p className="mt-2 text-[9px] leading-5 text-[#7A8781] transition-colors group-hover:text-white/60">
                Infrastructure is envisioned to support disciplined expansion over time.
              </p>
            </div>
          </div>


          {/* FINAL NOTE */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-8 flex flex-col items-center gap-4 border-t border-[#0B2118]/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
          >
            <p className="max-w-[760px] text-[9px] leading-5 text-[#8A9690] sm:text-[10px]">
              This campus representation is conceptual and describes a proposed
              integrated operating model. Final infrastructure, engineering,
              capacities and implementation will be subject to detailed planning
              and validation.
            </p>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#075B3A]/10 bg-white px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

              <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#52635A]">
                PROPOSED / CONCEPTUAL
              </span>
            </div>
          </div>
        </div>

      </section>


      {/* =========================================================
    SECTION 09 — SCALE & VISION
========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 text-[#0B1712] sm:py-24 lg:py-32 dark:bg-[#07100D] dark:text-white">

        {/* =====================================================
      BACKGROUND
  ===================================================== */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72B943]/[0.06] blur-[120px] sm:h-[600px] sm:w-[600px]" />

          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.05]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(7,91,58,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,91,58,0.07) 1px, transparent 1px)
        `,
              backgroundSize: "80px 80px",
            }}
          />

        </div>


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
   HEADER
===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="grid gap-8 sm:grid-cols-[1fr_380px] sm:items-end lg:grid-cols-[1fr_460px] lg:gap-16"
          >
            {/* LEFT — SECTION IDENTITY */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="flex items-start gap-4"
            >
              {/* NUMBER */}
              <div className="flex shrink-0 flex-col items-center">
                <span
                  className="
          flex h-11 w-11 items-center justify-center rounded-full
          border border-[#075B3A]/20 bg-white
          text-[10px] font-bold tracking-[0.18em] text-[#075B3A]
          shadow-[0_8px_25px_rgba(7,91,58,0.06)]
          transition-all duration-300
          hover:border-[#72B943] hover:bg-[#075B3A] hover:text-white
          dark:border-white/10 dark:bg-[#101B17]
          dark:text-[#72B943]
          dark:hover:border-[#72B943]
          dark:hover:bg-[#72B943]
          dark:hover:text-[#07100D]
        "
                >
                  09
                </span>

                <span
                  className="
          mt-4 h-14 w-px
          bg-gradient-to-b
          from-[#075B3A]/30 via-[#72B943]/40 to-transparent
          dark:from-[#72B943]/40 dark:via-[#72B943]/25
        "
                />
              </div>

              {/* TITLE */}
              <div className="pt-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#72B943]" />

                  <span
                    className="
            text-[9px] font-bold uppercase tracking-[0.3em]
            text-[#075B3A]
            dark:text-[#72B943]
          "
                  >
                    SCALE & VISION
                  </span>
                </div>

                <h3
                  className="
          mt-4 max-w-[360px]
          text-[clamp(1.5rem,3vw,2.5rem)]
          font-medium leading-[1.05] tracking-[-0.04em]
          text-[#0B1210]
          dark:text-[#EDF7F2]
        "
                >
                  Designed to grow.
                  <span className="block text-[#075B3A]/45 dark:text-[#72B943]/55">
                    Built to scale.
                  </span>
                </h3>
              </div>
            </div>

            {/* RIGHT — DESCRIPTION */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              className="
      relative border-l border-[#075B3A]/15 pl-6 sm:pb-1
      dark:border-white/10
    "
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="
          text-[8px] font-bold uppercase tracking-[0.25em]
          text-[#72B943]
        "
                >
                  LONG-TERM VISION
                </span>

                <span className="h-px w-8 bg-[#72B943]/40" />
              </div>

              <p
                className="
        max-w-[400px]
        text-[10px] font-medium uppercase leading-6 tracking-[0.14em]
        text-[#68766F]
        dark:text-white/55
      "
              >
                Designed for disciplined growth,
                operational depth and long-term scalability.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                <span
                  className="
          text-[7px] font-bold uppercase tracking-[0.24em]
          text-[#8B9690]
          dark:text-white/35
        "
                >
                  FUTURE READY • BUILT FOR SCALE
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
        MAIN SCALE STATEMENT
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="
        group relative mt-12 overflow-hidden
        border-y border-black/[0.08]
        py-12
        sm:mt-20 sm:py-16
        lg:py-20
        dark:border-white/[0.08]
      "
          >

            {/* Hover glow */}
            <div className="
        pointer-events-none absolute left-1/2 top-1/2
        h-40 w-40 -translate-x-1/2 -translate-y-1/2
        rounded-full bg-[#72B943]/10 blur-[70px]
        opacity-0 transition-opacity duration-700
        group-hover:opacity-100
      " />


            <p className="relative text-center text-[8px] font-bold uppercase tracking-[0.3em] text-[#075B3A] sm:text-[9px] dark:text-[#72B943]">
              BUILDING WITH SCALE IN MIND
            </p>


            <h2
              className="
    relative mx-auto mt-7 flex w-full max-w-full
    min-w-0 items-center justify-center
    gap-1 overflow-hidden
    text-center
    font-display font-semibold
    leading-[0.85]
    tracking-[-0.08em]
    sm:gap-4
    sm:overflow-visible
  "
            >
              {/* 2,000 */}
              <span
                className="
      min-w-0 shrink
      text-[clamp(2.6rem,11vw,10rem)]
      text-[#075B3A]
      transition-all duration-500
      group-hover:tracking-[-0.1em]
      dark:text-[#72B943]
    "
              >
                2,000
              </span>

              {/* ARROW */}
              <span
                className="
      shrink-0
      text-[clamp(1.5rem,5vw,6rem)]
      text-[#A8B3AD]
      dark:text-white/20
    "
              >
                →
              </span>

              {/* 5,000+ */}
              <span
                className="
      min-w-0 shrink
      text-[clamp(2.6rem,11vw,10rem)]
      transition-all duration-500
      group-hover:tracking-[-0.1em]
    "
              >
                5,000+
              </span>
            </h2>


            <p className="
        relative mx-auto mt-7 max-w-[620px]
        text-center text-[10px] leading-6
        text-[#718079]
        sm:text-[12px]
        dark:text-white/40
      ">
              Phase-I design capacity with long-term scalability built into
              the broader campus vision.
            </p>

          </div>


          {/* =====================================================
        SCALE METRICS
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="
    mt-5 grid overflow-hidden
    rounded-[28px]
    border border-black/[0.08]
    bg-black/[0.08]
    sm:grid-cols-3
    dark:border-white/[0.08]
    dark:bg-white/[0.08]
  "
          >

            {[
              {
                number: "01",
                value: "2,000",
                label: "PHASE-I DESIGN CAPACITY",
                light: "bg-[#F5F7F2]",
              },
              {
                number: "02",
                value: "5,000+",
                label: "LONG-TERM SCALABILITY",
                light: "bg-[#F5F7F2]",
              },
            ].map((item) => (

              <div
                key={item.number}
                className={`
        group relative overflow-hidden
        ${item.light}
        p-6 sm:p-9

        /* Mobile Center */
        text-center

        transition-all duration-500
        hover:bg-white

        dark:bg-[#0D1915]
        dark:hover:bg-[#111F19]

        sm:text-left
      `}
              >

                {/* Accent line */}
                <div
                  className="
          absolute left-1/2 top-0
          h-0.5 w-0
          -translate-x-1/2
          bg-[#72B943]
          transition-all duration-500
          group-hover:w-full
        "
                />

                <span className="text-[8px] font-bold tracking-[0.2em] text-[#72B943]">
                  {item.number}
                </span>

                <p
                  className="
          mt-7
          font-display
          text-[clamp(2.4rem,12vw,4rem)]
          font-semibold
          leading-none
          tracking-[-0.06em]
          transition-transform duration-500
          group-hover:translate-y-[-2px]
          sm:text-[clamp(2.4rem,5vw,4rem)]
          sm:group-hover:translate-x-1
        "
                >
                  {item.value}
                </p>

                <p
                  className="
          mt-3
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#687870]
          dark:text-white/35
        "
                >
                  {item.label}
                </p>

              </div>

            ))}


            {/* =====================================================
      INTEGRATED ECOSYSTEM
  ===================================================== */}
            <div
              className="
      group relative overflow-hidden
      bg-[#075B3A]
      p-6 text-center text-white
      transition-all duration-500
      hover:bg-[#086A43]
      sm:p-9
      sm:text-left
    "
            >

              {/* Glow */}
              <div
                className="
        absolute left-1/2 top-1/2
        h-40 w-40
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#72B943]/20
        blur-[45px]
        transition-all duration-500
        group-hover:scale-125
      "
              />

              <div className="relative">

                <span className="text-[8px] font-bold tracking-[0.2em] text-[#A9D8BD]">
                  03
                </span>

                <p
                  className="
          mt-7
          font-display
          text-[clamp(2.4rem,12vw,4rem)]
          font-semibold
          leading-none
          tracking-[-0.06em]
          transition-transform duration-500
          group-hover:translate-y-[-2px]
          sm:text-[clamp(2.4rem,5vw,4rem)]
          sm:group-hover:translate-x-1
        "
                >
                  01
                </p>

                <p
                  className="
          mt-3
          text-[8px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white/55
        "
                >
                  INTEGRATED ECOSYSTEM
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
        VISION AREA
    ===================================================== */}
          <div data-aos="fade-up"
            className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]"
          >

            {/* =================================================
          LARGE VISION CARD
      ================================================= */}
            <div className="
          group relative overflow-hidden
          rounded-[28px]
          border border-black/[0.08]
          bg-[#EEF3EC]
          p-7
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[#72B943]/30
          hover:shadow-[0_25px_70px_rgba(30,90,40,0.08)]
          sm:p-10
          lg:p-12
          dark:border-white/[0.08]
          dark:bg-[#0D1915]
          dark:hover:border-[#72B943]/25
          dark:hover:shadow-[0_25px_70px_rgba(114,185,67,0.05)]
        "
            >

              {/* Glow */}
              <div className="
          pointer-events-none absolute
          -right-24 -top-24
          h-56 w-56 rounded-full
          bg-[#72B943]/10 blur-[80px]
          opacity-60
          transition-all duration-700
          group-hover:scale-125
          group-hover:opacity-100
        " />


              <div className="relative text-center sm:text-left">

                {/* Top Label */}
                <div className="flex items-center justify-center gap-3 sm:justify-between">

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                    THE LONG VIEW
                  </p>

                  <span
                    className="
        hidden
        h-2 w-2 rounded-full
        bg-[#72B943]
        opacity-50
        transition-all duration-300
        group-hover:scale-150
        group-hover:opacity-100
        sm:block
      "
                  />

                </div>


                {/* Main Heading */}
                <h3
                  className="
      mx-auto mt-6 max-w-[850px]
      font-display
      text-[clamp(2.2rem,10vw,4.5rem)]
      font-semibold
      leading-[0.92]
      tracking-[-0.07em]
      sm:mx-0
      sm:text-[clamp(2.2rem,5vw,4.5rem)]
    "
                >

                  Start with a dairy.
                  <br />

                  Build an
                  <span className="text-[#075B3A] dark:text-[#72B943]">
                    {" "}ecosystem.
                  </span>

                </h3>


                {/* Description */}
                <p
                  className="
      mx-auto mt-7 max-w-[650px]
      text-[10px]
      leading-6
      text-[#697970]
      sm:mx-0
      sm:text-[12px]
      dark:text-white/40
    "
                >
                  The vision extends beyond herd capacity — toward connected
                  infrastructure, processing, nutrition, agriculture, energy,
                  water and technology operating as one system.
                </p>


                {/* Bottom Accent */}
                <div
                  className="
      mt-8
      flex items-center justify-center gap-3
      sm:justify-start
    "
                >

                  <span
                    className="
        h-px w-8
        bg-[#72B943]
        transition-all duration-500
        group-hover:w-16
      "
                  />

                  <span
                    className="
        text-[7px]
        font-bold
        uppercase
        tracking-[0.2em]
        text-[#7B8982]
        dark:text-white/30
      "
                  >
                    LONG-TERM SYSTEM THINKING
                  </span>

                </div>

              </div>
            </div>


            {/* =================================================
          SCALE PRINCIPLES
      ================================================= */}
            <div
              className="
    group relative overflow-hidden
    rounded-[28px]
    border border-white/[0.08]
    bg-[#0A1511]
    p-7 text-white
    text-center
    transition-all duration-500
    hover:-translate-y-1
    hover:border-[#72B943]/30
    hover:shadow-[0_25px_70px_rgba(114,185,67,0.07)]
    sm:p-10
    lg:text-left
  "
            >

              {/* Glow */}
              <div
                className="
      pointer-events-none absolute
      -right-20 -top-20
      h-48 w-48 rounded-full
      bg-[#72B943]/10 blur-[70px]
      transition-all duration-700
      group-hover:scale-125
      group-hover:bg-[#72B943]/15
    "
              />

              <div className="relative">

                {/* Heading */}
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                  SCALE PRINCIPLES
                </p>

                {/* Principles */}
                <div className="mx-auto mt-7 max-w-[420px] space-y-0 lg:mx-0">

                  {[
                    "Modular infrastructure",
                    "Connected operations",
                    "Data-led decisions",
                    "Resource efficiency",
                    "Future-ready expansion",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="
            group/item
            flex items-center justify-center gap-3
            border-b border-white/[0.08]
            py-4
            last:border-0
            transition-all duration-300
            hover:pl-2
            sm:gap-4
            lg:justify-start
          "
                    >

                      {/* Number */}
                      <span
                        className="
              shrink-0
              text-[8px]
              font-bold
              tracking-[0.15em]
              text-[#72B943]/60
              transition-colors duration-300
              group-hover/item:text-[#72B943]
            "
                      >
                        0{index + 1}
                      </span>

                      {/* Text */}
                      <p
                        className="
              text-[10px]
              font-semibold
              text-white/65
              transition-colors duration-300
              group-hover/item:text-white
            "
                      >
                        {item}
                      </p>

                      {/* Arrow */}
                      <span
                        className="
              ml-1
              text-[9px]
              text-[#72B943]/0
              transition-all duration-300
              group-hover/item:text-[#72B943]
              lg:ml-auto
            "
                      >
                        →
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
        DISCLAIMER
    ===================================================== */}
          <div className="mx-auto mt-7 max-w-[760px] text-center sm:mt-8">

            <p className="
        text-[8px]
        leading-5
        text-[#7B8982]
        sm:text-[9px]
        dark:text-white/30
      ">
              Scale figures shown are planning and design references for the
              proposed ecosystem. They should not be interpreted as current
              operating capacity or guaranteed future output.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 10 — INNOVATION / FUTURE — REDESIGNED
========================================================= */}
      <section className="relative overflow-hidden bg-[#F5F7F2] py-20 text-[#0B1712] sm:py-24 lg:py-32 dark:bg-[#08110E] dark:text-white">

        {/* =======================================================
      AMBIENT BACKGROUND
  ======================================================= */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#72B943]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#2E8C82]/10 blur-[140px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(7,91,58,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(7,91,58,0.08) 1px, transparent 1px)
      `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =======================================================
        HEADER
    ======================================================= */}
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            {/* Section label */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="flex items-start justify-center gap-4 sm:justify-start"
            >
              {/* NUMBER + VERTICAL LINE */}
              <div className="flex shrink-0 flex-col items-center">
                <span
                  className="
        flex h-10 w-10 items-center justify-center rounded-full
        border border-[#075B3A]/20 bg-white
        text-[10px] font-bold tracking-[0.18em] text-[#075B3A]
        shadow-[0_8px_25px_rgba(7,91,58,0.05)]
        transition-all duration-300
        hover:border-[#72B943]
        hover:bg-[#075B3A]
        hover:text-white
        dark:border-white/10
        dark:bg-[#101B17]
        dark:text-[#72B943]
        dark:hover:border-[#72B943]
        dark:hover:bg-[#72B943]
        dark:hover:text-[#07100D]
      "
                >
                  10
                </span>

                <span
                  className="
        mt-4 h-16 w-px
        bg-gradient-to-b
        from-[#075B3A]/30
        via-[#72B943]/40
        to-transparent
        dark:from-[#72B943]/40
        dark:via-[#72B943]/25
      "
                />
              </div>

              {/* CONTENT */}
              <div className="pt-1 text-left">
                <div className="flex items-center justify-start gap-3">
                  <span className="h-px w-8 bg-[#72B943]" />

                  <span
                    className="
          text-[9px] font-bold uppercase tracking-[0.28em]
          text-[#075B3A]
          dark:text-[#72B943]
        "
                  >
                    INNOVATION
                  </span>
                </div>

                <p
                  className="
        mt-4 max-w-[280px]
        text-[10px] leading-5
        text-[#75857E]
        dark:text-white/45
      "
                >
                  Exploring technologies that can transform the next generation
                  of dairy, agriculture and nutrition.
                </p>
              </div>
            </div>


            {/* Main heading */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#075B3A] dark:text-[#72B943]">
                WHAT COMES NEXT?
              </p>

              <h2 className="mt-5 font-display text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[0.86] tracking-[-0.07em]">

                BUILDING FOR
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  THE NEXT
                </span>

                <br />

                GENERATION.

              </h2>

              <p className="mx-auto mt-7 max-w-[720px] text-[14px] leading-7 text-[#52635B] sm:text-[17px] sm:leading-8 lg:mx-0 dark:text-[#A8B9B1]">
                Innovation is treated as a continuous capability — connecting
                technology, biology, infrastructure and resource efficiency.
              </p>

            </div>

          </div>


          {/* =======================================================
        FUTURE CAPABILITY GRID
    ======================================================= */}
          <div
            data-aos="fade-up"
            className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-12"
          >

            {/* =====================================================
          01 — AI
      ===================================================== */}
            <div
              className="
          group relative min-h-[430px]
          overflow-hidden rounded-[30px]
          bg-[#075B3A] p-7 text-white
          transition-all duration-500
          hover:-translate-y-1
          hover:shadow-[0_30px_80px_rgba(7,91,58,0.20)]
          sm:min-h-[470px] sm:p-9
          lg:col-span-7
        "
            >

              {/* Rings */}
              <div className="pointer-events-none absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-[190px] w-[190px] rounded-full border border-white/10" />


              {/* Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
                  backgroundSize: "50px 50px",
                }}
              />


              <div className="relative z-10 flex h-full flex-col justify-between">

                {/* Top */}
                <div>

                  <div className="flex items-start justify-between gap-4">

                    <span className="text-[8px] font-bold tracking-[0.25em] text-[#A9D8BD]">
                      01 / INTELLIGENCE
                    </span>

                    <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.16em] text-white/60">
                      FUTURE
                    </span>

                  </div>

                  <h3 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">

                    AI-Driven
                    <br />

                    <span className="text-[#A9D8BD]">
                      Operations
                    </span>

                  </h3>

                </div>


                {/* Bottom */}
                <div className="mt-10">

                  <p className="max-w-[560px] text-[10px] leading-6 text-white/60 sm:text-[11px]">
                    Potential intelligence layers across herd management,
                    feeding, milk production, processing, energy, water and
                    logistics.
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      "Predictive Analytics",
                      "Computer Vision",
                      "AI Command Centre",
                    ].map((item) => (

                      <span
                        key={item}
                        className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.06]
                    px-3 py-2
                    text-[7px]
                    font-semibold
                    tracking-[0.08em]
                    text-white/70
                    transition-all duration-300
                    group-hover:bg-white/[0.10]
                  "
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>


            {/* =====================================================
          02 — PRECISION AGRICULTURE
      ===================================================== */}
            <div
              className="
          group rounded-[30px]
          border border-black/10
          bg-white p-7
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[#72B943]/30
          hover:shadow-[0_25px_70px_rgba(30,90,40,0.08)]
          sm:p-9
          lg:col-span-5
          dark:border-white/10
          dark:bg-[#0D1915]
        "
            >

              <span className="text-[8px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                02 / AGRICULTURE
              </span>

              <h3 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.92] tracking-[-0.05em]">

                Precision
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  Agriculture
                </span>

              </h3>

              <p className="mt-5 text-[10px] leading-5 text-[#718079] dark:text-white/40">
                Connecting crop, soil, irrigation and feed-resource intelligence
                into the broader dairy ecosystem.
              </p>


              <div className="mt-8 space-y-2">

                {[
                  "Precision Irrigation",
                  "Crop Intelligence",
                  "Feed Resource Planning",
                  "Soil & Resource Monitoring",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="
                group/item flex items-center justify-between
                rounded-xl
                border border-black/[0.07]
                bg-[#F7F9F5]
                px-4 py-3
                transition-all duration-300
                hover:border-[#72B943]/30
                hover:bg-[#72B943]/[0.04]
                dark:border-white/[0.07]
                dark:bg-white/[0.025]
              "
                  >

                    <span className="text-[8px] font-semibold sm:text-[9px]">
                      {item}
                    </span>

                    <span className="text-[8px] font-bold text-[#72B943]">
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* =====================================================
          03 — ROBOTICS
      ===================================================== */}
            <div
              className="
          group rounded-[30px]
          border border-white/10
          bg-[#101B17]
          p-7 text-white
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[#72B943]/25
          sm:p-9
          lg:col-span-4
        "
            >

              <span className="text-[8px] font-bold tracking-[0.25em] text-[#72B943]">
                03 / AUTOMATION
              </span>

              <h3 className="mt-5 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-semibold leading-[0.92] tracking-[-0.05em]">

                Robotics &
                <br />

                <span className="text-[#72B943]">
                  Automation
                </span>

              </h3>

              <p className="mt-5 text-[10px] leading-5 text-white/40">
                Exploring automation opportunities across repetitive,
                precision-sensitive and data-rich operations.
              </p>


              <div className="mt-8 border-t border-white/10 pt-5">

                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/30">
                  EXPLORATION AREAS
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {[
                    "Barn Automation",
                    "Material Handling",
                    "Process Automation",
                  ].map((item) => (

                    <span
                      key={item}
                      className="
                  rounded-full
                  border border-white/10
                  px-3 py-2
                  text-[7px]
                  text-white/60
                  transition-all duration-300
                  hover:border-[#72B943]/40
                  hover:text-[#A9D8BD]
                "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>


            {/* =====================================================
          04 — ADVANCED NUTRITION
      ===================================================== */}
            <div
              className="
          group rounded-[30px]
          border border-[#92752E]/10
          bg-[#F8F4E9]
          p-7
          transition-all duration-500
          hover:-translate-y-1
          hover:shadow-[0_25px_70px_rgba(140,110,40,0.08)]
          sm:p-9
          lg:col-span-4
          dark:border-white/10
          dark:bg-[#171710]
        "
            >

              <span className="text-[8px] font-bold tracking-[0.25em] text-[#92752E]">
                04 / NUTRITION
              </span>

              <h3 className="mt-5 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-semibold leading-[0.92] tracking-[-0.05em]">

                Advanced
                <br />

                <span className="text-[#92752E]">
                  Nutrition
                </span>

              </h3>

              <p className="mt-5 text-[10px] leading-5 text-[#746E5D] dark:text-white/40">
                Exploring higher-value dairy proteins, functional ingredients
                and future nutrition formats.
              </p>


              <div className="mt-8 grid grid-cols-2 gap-2">

                {[
                  "WPC",
                  "WPI",
                  "Protein",
                  "Functional Nutrition",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                rounded-xl
                border border-[#92752E]/10
                bg-white/50
                p-4
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#92752E]/25
                dark:bg-black/10
              "
                  >

                    <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#92752E]">
                      FUTURE
                    </p>

                    <p className="mt-3 text-[8px] font-semibold leading-4 sm:text-[9px]">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* =====================================================
          05 — DIGITAL ECOSYSTEM
      ===================================================== */}
            <div
              className="
          group relative overflow-hidden
          rounded-[30px]
          border border-[#075B3A]/10
          bg-[#EEF3EC]
          p-7
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[#72B943]/30
          sm:p-9
          lg:col-span-4
          dark:border-white/10
          dark:bg-[#0D1915]
        "
            >

              {/* Decorative rings */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#72B943]/15 transition-transform duration-700 group-hover:scale-110" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#72B943]/10" />


              <span className="relative text-[8px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                05 / CONNECTIVITY
              </span>

              <h3 className="relative mt-5 font-display text-[clamp(1.9rem,3vw,2.7rem)] font-semibold leading-[0.92] tracking-[-0.05em]">

                One Digital
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  Ecosystem
                </span>

              </h3>

              <p className="relative mt-5 text-[10px] leading-5 text-[#718079] dark:text-white/40">
                Connecting physical infrastructure with data and intelligence
                across the complete value chain.
              </p>


              <div className="relative mt-8 flex flex-wrap gap-2">

                {[
                  "ANIMALS",
                  "DATA",
                  "PROCESSING",
                  "AGRICULTURE",
                  "ENERGY",
                ].map((item) => (

                  <span
                    key={item}
                    className="
                rounded-full
                border border-[#075B3A]/10
                bg-white/60
                px-3 py-2
                text-[7px]
                font-bold
                tracking-[0.14em]
                text-[#075B3A]
                transition-all duration-300
                hover:bg-[#075B3A]
                hover:text-white
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:text-[#9BCDAF]
              "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* =======================================================
        FINAL INNOVATION STATEMENT
    ======================================================= */}
          <div
            data-aos="fade-up"
            className="
        group relative mt-5
        overflow-hidden
        rounded-[30px]
        border border-white/10
        bg-[#0A1511]
        p-7 text-white
        transition-all duration-500
        hover:border-[#72B943]/25
        hover:shadow-[0_30px_80px_rgba(114,185,67,0.07)]
        sm:p-10
        lg:p-14
      "
          >

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#72B943]/10 blur-[90px] transition-all duration-700 group-hover:bg-[#72B943]/15" />


            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              {/* Main */}
              <div>

                <p className="text-center text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943] lg:text-left">
                  INNOVATION PRINCIPLE
                </p>

                <h3 className="mx-auto mt-5 max-w-[900px] text-center font-display text-[clamp(2.1rem,5vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] lg:mx-0 lg:text-left">

                  Technology should not

                  <span className="text-[#72B943]">
                    {" "}complicate
                  </span>

                  the system.

                  <br />

                  It should make it smarter.

                </h3>

              </div>


              {/* Side text */}
              <div className="mx-auto max-w-[280px] text-center lg:mx-0 lg:text-left">

                <div className="mx-auto mb-5 h-px w-10 bg-[#72B943] lg:mx-0" />

                <p className="text-[9px] leading-5 text-white/40 sm:text-[10px]">
                  Future capabilities shown here are exploratory directions,
                  not representations of currently deployed commercial systems.
                </p>

              </div>

            </div>

          </div>


          {/* =======================================================
        MOBILE / FINAL NOTE
    ======================================================= */}
          <div className="mx-auto mt-8 max-w-[760px] text-center">

            <p className="text-[8px] leading-5 text-[#7B8982] dark:text-white/30 sm:text-[9px]">
              Innovation directions represent future possibilities for the
              proposed ecosystem and should not be interpreted as currently
              deployed commercial systems.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================================
    SECTION 11 — THE NEXT CHAPTER
===================================================== */}
      <section className="group relative overflow-hidden bg-[#075B3A] text-white">

        {/* BACKGROUND GLOW */}
        <div
          className="
      pointer-events-none absolute -right-32 -top-32
      h-80 w-80 rounded-full bg-[#72B943]/10 blur-[110px]
      transition-all duration-700 group-hover:bg-[#72B943]/20
    "
        />

        <div
          className="
      pointer-events-none absolute -bottom-32 -left-32
      h-72 w-72 rounded-full bg-[#D8B85A]/10 blur-[100px]
      transition-all duration-700 group-hover:bg-[#D8B85A]/15
    "
        />

        <div
          className="
      relative mx-auto max-w-[1280px]
      px-5 py-12
      text-center
      sm:px-8 sm:py-14
      lg:px-12 lg:py-16
      lg:text-left
      xl:px-16
    "
        >

          {/* TOP LABEL */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="
        flex items-center justify-center gap-3
        lg:justify-start
      "
          >
            <span
              className="
          flex h-9 w-9 shrink-0 items-center justify-center
          rounded-full border border-white/15 bg-white/[0.06]
          text-[9px] font-bold tracking-[0.18em] text-[#72B943]
          transition-all duration-300
          hover:scale-110 hover:border-[#72B943]
          hover:bg-[#72B943] hover:text-[#07100D]
        "
            >
              11
            </span>

            <span className="h-px w-8 bg-[#72B943]" />

            <span
              className="
          text-[8px] font-bold uppercase tracking-[0.28em]
          text-white/45 transition-colors duration-300
          hover:text-white/80
        "
            >
              THE NEXT CHAPTER
            </span>
          </div>


          {/* MAIN CONTENT */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
        mt-9 grid gap-8
        lg:grid-cols-[1fr_360px]
        lg:items-end lg:gap-16
      "
          >

            {/* LEFT */}
            <div className="flex flex-col items-center lg:items-start">

              <p
                className="
            mb-3 text-[8px] font-bold uppercase
            tracking-[0.28em] text-[#72B943]
            transition-colors duration-300
            group-hover:text-[#B7E2C8]
          "
              >
                TEJAYS AGRI
              </p>

              <h2
                className="
            max-w-[800px]
            font-display
            text-[clamp(2.6rem,6vw,6.5rem)]
            font-semibold
            leading-[0.86]
            tracking-[-0.075em]
          "
              >
                Let's build

                <span
                  className="
              block text-[#B7E2C8]
              transition-all duration-500
              group-hover:translate-x-2
              group-hover:text-white
            "
                >
                  what comes next.
                </span>
              </h2>

            </div>


            {/* RIGHT */}
            <div
              className="
          relative mx-auto
          border-l-0 border-white/10
          px-3
          transition-all duration-500
          hover:border-[#72B943]/60
          hover:px-5
          lg:mx-0 lg:border-l lg:pl-5 lg:pr-0
          lg:text-left
        "
            >
              <p
                className="
            mx-auto max-w-[340px]
            text-[10px] leading-5
            tracking-[0.08em] text-white/55
            transition-colors duration-300
            hover:text-white/80
            sm:text-[11px] sm:leading-6
          "
              >
                A connected ecosystem built around better animals,
                smarter operations, responsible resources and
                higher-value nutrition.
              </p>

              <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
                <span
                  className="
              h-1.5 w-1.5 rounded-full bg-[#72B943]
              transition-all duration-300
              hover:scale-150
            "
                />

                <span
                  className="
              text-[7px] font-bold uppercase
              tracking-[0.22em] text-white/30
              transition-colors duration-300
              hover:text-[#B7E2C8]
            "
                >
                  GROWING FOR THE FUTURE
                </span>
              </div>
            </div>

          </div>


          {/* BOTTOM ACTION BAR */}
          <div
            data-aos="fade-up"
            data-aos-delay="180"
            className="
        mt-9 flex flex-col items-center gap-5
        border-t border-white/10 pt-6
        lg:flex-row lg:items-center lg:justify-between
      "
          >

            {/* PRINCIPLES */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
              {["INTEGRATED", "INTELLIGENT", "SUSTAINABLE"].map((item) => (
                <span
                  key={item}
                  className="
              cursor-default text-[9px] font-bold uppercase
              tracking-[0.2em] text-white/35
              transition-all duration-300
              hover:-translate-y-0.5
              hover:text-[#B7E2C8]
            "
                >
                  {item}
                </span>
              ))}
            </div>


            {/* CTA */}
            <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">

              <Link
                to="/contact"
                className="
            group/cta inline-flex w-full items-center
            justify-center gap-3 rounded-full
            bg-white px-5 py-3
            text-[7px] font-bold uppercase
            tracking-[0.18em] text-[#075B3A]
            shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            transition-all duration-300
            hover:-translate-y-1 hover:scale-[1.02]
            hover:bg-[#B7E2C8]
            hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)]
            sm:w-auto
          "
              >
                Start a Conversation

                <span className="transition-transform duration-300 group-hover/cta:translate-x-1.5">
                  →
                </span>
              </Link>


              <Link
                to="/technology"
                className="
            group/tech inline-flex w-full items-center
            justify-center gap-2 rounded-full
            border border-white/15
            px-5 py-3
            text-[7px] font-bold uppercase
            tracking-[0.18em] text-white/70
            transition-all duration-300
            hover:-translate-y-1
            hover:border-[#72B943]
            hover:bg-[#72B943]/10
            hover:text-white
            sm:w-auto
          "
              >
                Explore Technology

                <span
                  className="
              opacity-0 transition-all duration-300
              group-hover/tech:translate-x-1
              group-hover/tech:opacity-100
            "
                >
                  →
                </span>
              </Link>

            </div>

          </div>


          {/* DISCLAIMER */}
          <p
            data-aos="fade-up"
            data-aos-delay="240"
            className="
        mx-auto mt-6 max-w-[760px]
        border-l-0 border-[#72B943]/50
        px-2
        text-center text-[10px]
        leading-5 tracking-[0.03em]
        text-white/60
        transition-all duration-300
        hover:border-[#72B943]
        hover:text-white/85
        lg:mx-0 lg:border-l-2 lg:pl-4
        lg:text-left
      "
          >
            The capabilities, infrastructure and technologies presented across
            this website represent planned, conceptual or exploratory directions
            for the future, unless specifically stated otherwise.
          </p>

        </div>
      </section>
    </>
  )
}