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

  return (
    <>
      {/* =========================================================
    SECTION 01 — PREMIUM HERO
========================================================= */}
      <section className="relative overflow-hidden bg-[#f5f7f2] dark:bg-[#07100d]">

        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#72B943]/10 blur-[120px]" />
          <div className="absolute -bottom-40 -right-32 h-[460px] w-[460px] rounded-full bg-[#2E8C82]/10 blur-[130px]" />

          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.02]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(7,91,58,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,91,58,1) 1px, transparent 1px)
        `,
              backgroundSize: '72px 72px'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20 xl:px-14 xl:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">

            {/* =====================================================
          LEFT — HERO CONTENT
      ===================================================== */}
            <div
              className="relative z-10"
              data-aos="fade-up"
            >

              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3 sm:mb-8">

                <span className="h-px w-8 bg-[#075B3A] dark:bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#075B3A] dark:text-[#9FD8BC] sm:text-[10px]">
                  TECHNOLOGY. DAIRY. NUTRITION. SUSTAINABILITY.
                </span>

              </div>


              {/* Main Heading */}
              <h1 className="max-w-[760px] font-display text-[clamp(3.1rem,6.4vw,6.7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[#08150F] dark:text-white">

                THE FUTURE
                <br />

                OF DAIRY.
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  ENGINEERED.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-7 max-w-[560px] text-[15px] leading-7 text-[#53645C] dark:text-[#C8D6CF] sm:mt-8 sm:text-[17px] sm:leading-8">

                Building an integrated ecosystem where advanced dairy farming,
                technology, nutrition and sustainability work as one.

              </p>


              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="w-full rounded-full px-7 py-3.5 sm:w-auto">
                    Explore Tejays Agri
                  </Button>
                </Link>

                <Link to="/technology" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    className="w-full rounded-full border border-[#075B3A]/15 bg-transparent px-7 py-3.5 sm:w-auto dark:border-white/15"
                  >
                    Discover Our Ecosystem
                  </Button>
                </Link>

              </div>


              {/* =================================================
            MINI BRAND STATS
        ================================================= */}
              <div className="mt-10 max-w-[610px] border-t border-[#0B2118]/10 pt-5 dark:border-white/10 sm:mt-12">

                <div className="grid grid-cols-3">

                  {/* Item */}
                  <div className="pr-3 sm:pr-7">

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#87938D]">
                      APPROACH
                    </p>

                    <p className="mt-1.5 text-xs font-semibold text-[#14261E] dark:text-white sm:text-sm">
                      Technology-led
                    </p>

                  </div>


                  {/* Divider */}
                  <div className="relative px-3 sm:px-7">

                    <span className="absolute left-0 top-0 h-8 w-px bg-[#0B2118]/10 dark:bg-white/10" />

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#87938D]">
                      ECOSYSTEM
                    </p>

                    <p className="mt-1.5 text-xs font-semibold text-[#14261E] dark:text-white sm:text-sm">
                      Integrated
                    </p>

                  </div>


                  {/* Divider */}
                  <div className="relative pl-3 sm:pl-7">

                    <span className="absolute left-0 top-0 h-8 w-px bg-[#0B2118]/10 dark:bg-white/10" />

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#87938D]">
                      VISION
                    </p>

                    <p className="mt-1.5 text-xs font-semibold text-[#14261E] dark:text-white sm:text-sm">
                      Built for Scale
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =====================================================
          RIGHT — HERO IMAGE
      ===================================================== */}
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-delay="120"
            >

              {/* Top metadata */}
              <div className="mb-3 flex items-center justify-between px-1">

                <div className="flex items-center gap-2">

                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                    01
                  </span>

                  <span className="h-px w-7 bg-[#075B3A]/25 dark:bg-[#72B943]/25" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#78857F] dark:text-[#91A39A]">
                    Smart Dairy
                  </span>

                </div>

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#98A19D]">
                  TEJAYS AGRI
                </span>

              </div>


              {/* Image frame */}
              <div className="relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-white/70 p-2 shadow-[0_24px_70px_rgba(5,35,24,0.12)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-3">

                <div className="relative overflow-hidden rounded-[21px]">

                  <img
                    src={heroImage}
                    alt="Tejays Agri smart dairy and integrated campus"
                    className="h-[330px] w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-[1.02] sm:h-[430px] md:h-[500px] lg:h-[540px] xl:h-[570px]"
                  />


                  {/* Image gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06130D]/60 via-transparent to-transparent" />


                  {/* Top badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#07130E]/45 px-3.5 py-2 backdrop-blur-xl">

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                      Integrated Ecosystem
                    </span>

                  </div>


                  {/* Bottom glass panel */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">

                    <div className="rounded-[18px] border border-white/15 bg-[#07130E]/70 p-4 backdrop-blur-xl sm:p-5">

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                          <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#A9D8BD]">
                            TEJAYS AGRI
                          </p>

                          <p className="mt-1 text-sm font-medium text-white">
                            One integrated dairy ecosystem
                          </p>

                        </div>


                        <div className="hidden text-right sm:block">

                          <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/45">
                            ECOSYSTEM FLOW
                          </p>

                          <p className="mt-1.5 text-[8px] font-medium tracking-[0.12em] text-white/90">
                            GENETICS → FEED → DAIRY → PROCESSING
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Floating intelligence badge */}
              <div className="absolute -bottom-5 right-5 hidden rounded-2xl border border-black/[0.07] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#101C18]/95 sm:block">

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#075B3A]/15 dark:border-[#72B943]/20">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_10px_rgba(114,185,67,0.8)]" />

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

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 02 — THE TEJAYS AGRI APPROACH
========================================================= */}
      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#0b1210] sm:py-24 lg:py-32">

        {/* Subtle background atmosphere */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#72B943]/[0.055] blur-[130px]" />

          <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#2E8C82]/[0.05] blur-[130px]" />

        </div>


        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10 xl:px-12">

          {/* =====================================================
        TOP INTRO
    ===================================================== */}
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">

            {/* Eyebrow / Number */}
            <div
              data-aos="fade-right"
              className="flex items-start gap-4"
            >

              <span className="mt-1 text-[10px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                02
              </span>

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-[#075B3A] dark:bg-[#72B943]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#68766F] dark:text-[#9AAEA4]">
                    THE TEJAYS AGRI APPROACH
                  </span>

                </div>

                <p className="mt-4 max-w-[250px] text-[10px] leading-5 text-[#89958F] dark:text-[#788B82]">
                  Connecting multiple capabilities through one integrated ecosystem.
                </p>

              </div>

            </div>


            {/* Main heading */}
            <div data-aos="fade-up">

              <h2 className="max-w-[950px] font-display text-[clamp(2.5rem,5.4vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#091710] dark:text-white">

                ONE ECOSYSTEM.
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  MANY POSSIBILITIES.
                </span>

              </h2>

              <p className="mt-7 max-w-[720px] text-[15px] leading-7 text-[#53645C] dark:text-[#C8D6CF] sm:mt-8 sm:text-[17px] sm:leading-8">

                Tejays Agri brings together dairy, technology, nutrition,
                agriculture and sustainability into one integrated ecosystem
                designed for efficiency, scale and long-term value creation.

              </p>

            </div>

          </div>


          {/* =====================================================
        CORE PRINCIPLES
    ===================================================== */}
          <div className="mt-14 border-t border-[#0B2118]/10 pt-10 dark:border-white/10 sm:mt-20 sm:pt-12">

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* =================================================
            01 — INTEGRATED
        ================================================= */}
              <article
                data-aos="fade-up"
                data-aos-delay="0"
                className="group relative overflow-hidden rounded-[24px] border border-[#0B2118]/10 bg-[#F7F9F6] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#075B3A]/25 hover:shadow-[0_20px_55px_rgba(5,35,24,0.07)] dark:border-white/10 dark:bg-[#101B18] dark:hover:border-[#72B943]/30 sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <span className="text-[9px] font-bold tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                    01
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B3A]/10 bg-white text-[10px] font-bold text-[#075B3A] dark:border-white/10 dark:bg-[#16231F] dark:text-[#72B943]">
                    I
                  </div>

                </div>

                <div className="mt-12">

                  <h3 className="font-display text-[21px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white">
                    Integrated
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#68766F] dark:text-[#AEBEB7]">
                    Dairy, agriculture, nutrition and technology working together
                    as one connected ecosystem.
                  </p>

                </div>

                <div className="mt-7 flex flex-wrap gap-1.5">

                  {['Dairy', 'Agriculture', 'Nutrition'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#075B3A]/10 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#52635A] dark:border-white/10 dark:text-[#9CAFA5]"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#075B3A] transition-all duration-500 group-hover:w-full dark:bg-[#72B943]" />

              </article>


              {/* =================================================
            02 — INTELLIGENT
        ================================================= */}
              <article
                data-aos="fade-up"
                data-aos-delay="80"
                className="group relative overflow-hidden rounded-[24px] border border-[#0B2118]/10 bg-[#F7F9F6] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#075B3A]/25 hover:shadow-[0_20px_55px_rgba(5,35,24,0.07)] dark:border-white/10 dark:bg-[#101B18] dark:hover:border-[#72B943]/30 sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <span className="text-[9px] font-bold tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                    02
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B3A]/10 bg-white text-[10px] font-bold text-[#075B3A] dark:border-white/10 dark:bg-[#16231F] dark:text-[#72B943]">
                    D
                  </div>

                </div>

                <div className="mt-12">

                  <h3 className="font-display text-[21px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white">
                    Intelligent
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#68766F] dark:text-[#AEBEB7]">
                    Data, sensors and automation helping transform operations into
                    intelligent decision-making systems.
                  </p>

                </div>

                <div className="mt-7 flex flex-wrap gap-1.5">

                  {['AI', 'IoT', 'Automation'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#075B3A]/10 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#52635A] dark:border-white/10 dark:text-[#9CAFA5]"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#075B3A] transition-all duration-500 group-hover:w-full dark:bg-[#72B943]" />

              </article>


              {/* =================================================
            03 — SUSTAINABLE
        ================================================= */}
              <article
                data-aos="fade-up"
                data-aos-delay="160"
                className="group relative overflow-hidden rounded-[24px] border border-[#0B2118]/10 bg-[#F7F9F6] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#075B3A]/25 hover:shadow-[0_20px_55px_rgba(5,35,24,0.07)] dark:border-white/10 dark:bg-[#101B18] dark:hover:border-[#72B943]/30 sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <span className="text-[9px] font-bold tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                    03
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B3A]/10 bg-white text-[10px] font-bold text-[#075B3A] dark:border-white/10 dark:bg-[#16231F] dark:text-[#72B943]">
                    S
                  </div>

                </div>

                <div className="mt-12">

                  <h3 className="font-display text-[21px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white">
                    Sustainable
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#68766F] dark:text-[#AEBEB7]">
                    Circular systems connecting energy, water, agriculture and
                    responsible resource management.
                  </p>

                </div>

                <div className="mt-7 flex flex-wrap gap-1.5">

                  {['Energy', 'Water', 'Circularity'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#075B3A]/10 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#52635A] dark:border-white/10 dark:text-[#9CAFA5]"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#075B3A] transition-all duration-500 group-hover:w-full dark:bg-[#72B943]" />

              </article>


              {/* =================================================
            04 — SCALABLE
        ================================================= */}
              <article
                data-aos="fade-up"
                data-aos-delay="240"
                className="group relative overflow-hidden rounded-[24px] border border-[#0B2118]/10 bg-[#F7F9F6] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#075B3A]/25 hover:shadow-[0_20px_55px_rgba(5,35,24,0.07)] dark:border-white/10 dark:bg-[#101B18] dark:hover:border-[#72B943]/30 sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <span className="text-[9px] font-bold tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                    04
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B3A]/10 bg-white text-[10px] font-bold text-[#075B3A] dark:border-white/10 dark:bg-[#16231F] dark:text-[#72B943]">
                    G
                  </div>

                </div>

                <div className="mt-12">

                  <h3 className="font-display text-[21px] font-semibold tracking-[-0.04em] text-[#12241C] dark:text-white">
                    Built for Scale
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#68766F] dark:text-[#AEBEB7]">
                    Infrastructure and systems conceived to evolve with future
                    capacity, capabilities and opportunities.
                  </p>

                </div>

                <div className="mt-7 flex flex-wrap gap-1.5">

                  {['Infrastructure', 'Capacity', 'Future'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#075B3A]/10 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#52635A] dark:border-white/10 dark:text-[#9CAFA5]"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#075B3A] transition-all duration-500 group-hover:w-full dark:bg-[#72B943]" />

              </article>

            </div>
          </div>


          {/* =====================================================
        BOTTOM STATEMENT / NAVIGATION
    ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-12 rounded-[26px] border border-[#0B2118]/10 bg-[#F5F8F3] p-6 dark:border-white/10 dark:bg-[#101B18] sm:mt-16 sm:p-8 lg:p-10"
          >

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-[760px]">

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  THE BIGGER PICTURE
                </p>

                <h3 className="mt-3 max-w-[700px] font-display text-[clamp(1.65rem,3vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-[#10231A] dark:text-white">

                  Better systems create
                  <span className="text-[#075B3A] dark:text-[#72B943]">
                    {' '}better possibilities.
                  </span>

                </h3>

                <p className="mt-4 max-w-[680px] text-[13px] leading-6 text-[#69776F] dark:text-[#AEBEB7] sm:text-sm sm:leading-7">
                  Our approach is built around the idea that the strongest dairy
                  ecosystem is not a collection of separate operations, but a
                  connected system where every part contributes to the next.
                </p>

              </div>


              <Link
                to="/about"
                className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-[#075B3A]/15 bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#075B3A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#075B3A]/30 hover:shadow-md dark:border-white/10 dark:bg-[#16231F] dark:text-[#72B943] lg:self-center"
              >

                About Tejays Agri

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#075B3A] text-white transition-transform duration-300 group-hover:translate-x-0.5 dark:bg-[#72B943] dark:text-[#07100D]">
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

      <section className="relative overflow-hidden bg-[#f5f7f2] py-20 dark:bg-[#07100d] sm:py-24 lg:py-28">

        {/* =====================================================
      BACKGROUND
  ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Soft green glow */}
          <div className="absolute left-[-120px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#72B943]/10 blur-[130px]" />

          <div className="absolute bottom-[-180px] right-[-120px] h-[500px] w-[500px] rounded-full bg-[#075B3A]/10 blur-[150px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.02]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(7,91,58,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,91,58,1) 1px, transparent 1px)
        `,
              backgroundSize: '90px 90px'
            }}
          />

          {/* Top gradient */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/40 to-transparent dark:from-white/[0.015]" />

        </div>


        <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8 xl:px-10">


          {/* =====================================================
        SECTION HEADER
    ===================================================== */}

          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">


            {/* LEFT SIDE */}

            <div
              data-aos="fade-right"
              className="flex items-start gap-4"
            >

              <span className="pt-1 text-[11px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                03
              </span>


              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-[#075B3A] dark:bg-[#72B943]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#68766F] dark:text-[#9AAEA4]">
                    Integrated Ecosystem
                  </span>

                </div>


                <p className="mt-5 max-w-[250px] text-[11px] leading-6 text-[#7C8983] dark:text-[#82938B]">

                  Every capability connected through one intelligent,
                  integrated agricultural ecosystem.

                </p>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <h2 className="max-w-[950px] font-display text-[clamp(2.8rem,6vw,6.3rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#0B1A13] dark:text-white">

                FROM GENETICS

                <br />

                TO{' '}

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  NUTRITION.
                </span>

              </h2>


              <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#5C6B64] dark:text-[#B9CAC1] sm:text-[17px] sm:leading-8">

                A connected value chain where genetics, feed, smart dairy,
                processing and nutrition work together as one continuous
                ecosystem.

              </p>

            </div>

          </div>

          {/* =====================================================
    PREMIUM ECOSYSTEM FLOW
===================================================== */}

          <div
            className="mt-14"
            data-aos="fade-up"
            data-aos-delay="150"
          >


            {/* ===================================================
      HORIZONTAL SCROLL
  =================================================== */}

            <div className="overflow-x-auto pb-6 scrollbar-hide">

              <div
                className="
        relative
        min-w-[1050px]
        px-5
        lg:min-w-0
      "
              >

                {/* =================================================
          MAIN HORIZONTAL LINE
      ================================================= */}

                <div
                  className="
          pointer-events-none
          absolute
          left-[5.5%]
          right-[5.5%]
          top-[26px]
          z-0
          hidden
          h-px
          bg-gradient-to-r
          from-[#72B943]/25
          via-[#075B3A]/20
          to-[#D5A33A]/25
          lg:block
        "
                />


                {/* =================================================
          9 ECOSYSTEM ITEMS
      ================================================= */}

                <div className="grid grid-cols-9 gap-2">

                  {[
                    {
                      number: '01',
                      title: 'GENETICS',
                      description: 'Better Genes',
                      image: assetPath('/images/ecosystem/genetics.jpg'),
                      color: '#72B943',
                    },

                    {
                      number: '02',
                      title: 'FEED',
                      description: 'Balanced Nutrition',
                      image: assetPath('/images/ecosystem/feed.png'),
                      color: '#72B943',
                    },

                    {
                      number: '03',
                      title: 'SMART DAIRY',
                      description: 'Connected Intelligence',
                      image: assetPath('/images/ecosystem/smart-dairy.png'),
                      color: '#075B3A',
                    },

                    {
                      number: '04',
                      title: 'MILK',
                      description: 'Pure & Precise',
                      image: assetPath('/images/ecosystem/milk.png'),
                      color: '#075B3A',
                    },

                    {
                      number: '05',
                      title: 'PROCESSING',
                      description: 'Modern Infrastructure',
                      image: assetPath('/images/ecosystem/processing.png'),
                      color: '#075B3A',
                    },

                    {
                      number: '06',
                      title: 'DAIRY PRODUCTS',
                      description: 'Value Added Dairy',
                      image: assetPath('/images/ecosystem/dairy-products.png'),
                      color: '#075B3A',
                    },

                    {
                      number: '07',
                      title: 'CHEESE',
                      description: 'Premium Dairy',
                      image: assetPath('/images/ecosystem/cheese.png'),
                      color: '#D5A33A',
                    },

                    {
                      number: '08',
                      title: 'WHEY',
                      description: 'High Value Ingredients',
                      image: assetPath('/images/ecosystem/whey.png'),
                      color: '#D5A33A',
                    },

                    {
                      number: '09',
                      title: 'NUTRITION',
                      description: 'Advanced Nutrition',
                      image: assetPath('/images/ecosystem/nutrition.png'),
                      color: '#D5A33A',
                    },
                  ].map((item) => (

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

                      <div
                        className="
                relative
                z-20
                flex
                h-[52px]
                w-[52px]
                items-center
                justify-center
              "
                      >

                        <span
                          className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#075B3A]/10
                  bg-white
                  font-display
                  text-[9px]
                  font-bold
                  tracking-[0.08em]
                  text-[#829189]
                  shadow-[0_4px_14px_rgba(7,91,58,0.04)]
                  transition-colors
                  duration-300
                  group-hover:text-[#075B3A]
                  dark:border-white/10
                  dark:bg-[#0E1A16]
                  dark:text-[#8A9992]
                  dark:group-hover:text-[#72B943]
                "
                        >
                          {item.number}
                        </span>

                        {/* NUMBER HOVER RING */}
                        <span
                          className="
                  pointer-events-none
                  absolute
                  inset-[5px]
                  rounded-full
                  border
                  border-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                          style={{
                            borderColor: item.color,
                          }}
                        />

                      </div>


                      {/* =================================================
                VERTICAL LINE
            ================================================= */}

                      <div
                        className="
                relative
                z-10
                h-8
                w-px
                bg-[#075B3A]/15
                dark:bg-white/15
              "
                      />


                      {/* =================================================
                IMAGE
            ================================================= */}

                      <div
                        className="
                relative
                z-20
                h-[112px]
                w-[112px]
                rounded-full
                border
                border-[#075B3A]/10
                bg-white
                p-[4px]
                transition-colors
                duration-300
                dark:border-white/10
                dark:bg-[#101C17]
                sm:h-[122px]
                sm:w-[122px]
                lg:h-[128px]
                lg:w-[128px]
              "
                      >

                        {/* HOVER BORDER ONLY */}
                        <span
                          className="
                  pointer-events-none
                  absolute
                  inset-[-2px]
                  rounded-full
                  border-2
                  border-transparent
                  opacity-0
                  transition-opacity
                  duration-300
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
                  "
                          />
                        </div>

                      </div>


                      {/* =================================================
                TITLE
            ================================================= */}

                      <div className="mt-5 w-full text-center">

                        <h3
                          className="
                  font-display
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.05em]
                  text-[#17382C]
                  transition-colors
                  duration-300
                  dark:text-white
                "
                          style={{
                            '--title-color': item.color,
                          }}
                        >
                          <span className="group-hover:text-[var(--title-color)]">
                            {item.title}
                          </span>
                        </h3>


                        {/* DESCRIPTION */}

                        <p
                          className="
                  mt-1.5
                  text-[8px]
                  leading-4
                  text-[#87958D]
                  dark:text-[#8FA098]
                "
                        >
                          {item.description}
                        </p>


                        {/* SMALL HOVER LINE */}

                        <div className="mt-3 flex justify-center">
                          <span
                            className="
                    h-[2px]
                    w-0
                    rounded-full
                    transition-all
                    duration-300
                    group-hover:w-6
                  "
                            style={{
                              backgroundColor: item.color,
                            }}
                          />
                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* ===================================================
    INPUT / CORE / OUTPUT — BELOW ECOSYSTEM
=================================================== */}

            <div className="mt-10 flex justify-center">
              <div
                className="
      flex
      items-center
      justify-center
      gap-3
      rounded-full
      border
      border-[#075B3A]/10
      bg-white/80
      px-4
      py-2.5
      shadow-[0_8px_30px_rgba(7,91,58,0.04)]
      backdrop-blur-sm
      dark:border-white/10
      dark:bg-[#0E1A16]/80
      sm:gap-5
      sm:px-6
    "
              >

                {/* ================= INPUT ================= */}
                <div className="flex items-center gap-2">

                  <span
                    className="
          h-1.5
          w-1.5
          rounded-full
          bg-[#72B943]
          shadow-[0_0_8px_rgba(114,185,67,0.35)]
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


                {/* ================= DIVIDER ================= */}
                <span
                  className="
        h-px
        w-5
        bg-[#075B3A]/15
        sm:w-8
      "
                />


                {/* ================= CORE ================= */}
                <div className="flex items-center gap-2">

                  <span
                    className="
          h-1.5
          w-1.5
          rounded-full
          bg-[#075B3A]
          shadow-[0_0_8px_rgba(7,91,58,0.25)]
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


                {/* ================= DIVIDER ================= */}
                <span
                  className="
        h-px
        w-5
        bg-[#075B3A]/15
        sm:w-8
      "
                />


                {/* ================= OUTPUT ================= */}
                <div className="flex items-center gap-2">

                  <span
                    className="
          h-1.5
          w-1.5
          rounded-full
          bg-[#D5A33A]
          shadow-[0_0_8px_rgba(213,163,58,0.35)]
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
            data-aos-delay="200"
            className="
        mt-14 overflow-hidden rounded-[28px]
        border border-[#075B3A]/10 bg-white
        shadow-[0_25px_70px_rgba(5,35,24,0.07)]

        dark:border-white/10
        dark:bg-[#0E1B16]

        sm:mt-20
      "
          >

            <div className="grid md:grid-cols-3">


              {/* INPUT */}

              <div className="group relative p-7 sm:p-9">

                <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#72B943]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block" />

                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#72B943]/10 text-[10px] font-bold text-[#075B3A] dark:text-[#72B943]">
                    01
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#075B3A] dark:text-[#72B943]">
                    Input
                  </span>

                </div>


                <h3 className="mt-7 font-display text-[clamp(1.5rem,2vw,2rem)] font-semibold tracking-[-0.05em] text-[#13261D] dark:text-white">

                  Genetics & Feed

                </h3>


                <p className="mt-4 max-w-[340px] text-[12px] leading-6 text-[#718078] dark:text-[#9EAEA7]">

                  Building the foundation for healthier animals,
                  better genetics and efficient dairy operations.

                </p>


                <div className="mt-7 h-px w-12 bg-[#72B943] transition-all duration-500 group-hover:w-24" />

              </div>


              {/* CORE */}

              <div className="group relative border-t border-[#0B2118]/10 bg-[#F7FAF6] p-7 sm:p-9 md:border-l md:border-r md:border-t-0 dark:border-white/10 dark:bg-[#10231A]">

                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#075B3A] text-[10px] font-bold text-white dark:bg-[#72B943] dark:text-[#07100D]">
                    02
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#075B3A] dark:text-[#72B943]">
                    Core
                  </span>

                </div>


                <h3 className="mt-7 font-display text-[clamp(1.5rem,2vw,2rem)] font-semibold tracking-[-0.05em] text-[#13261D] dark:text-white">

                  Smart Dairy

                </h3>


                <p className="mt-4 max-w-[340px] text-[12px] leading-6 text-[#718078] dark:text-[#9EAEA7]">

                  Connected systems bring animals, people,
                  infrastructure, intelligence and data together.

                </p>


                <div className="mt-7 h-px w-12 bg-[#075B3A] transition-all duration-500 group-hover:w-24 dark:bg-[#72B943]" />

              </div>


              {/* OUTPUT */}

              <div className="group relative border-t border-[#0B2118]/10 p-7 sm:p-9 md:border-t-0 dark:border-white/10">

                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D5A33A]/10 text-[10px] font-bold text-[#A47716]">
                    03
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A47716] dark:text-[#E2BA64]">
                    Output
                  </span>

                </div>


                <h3 className="mt-7 font-display text-[clamp(1.5rem,2vw,2rem)] font-semibold tracking-[-0.05em] text-[#13261D] dark:text-white">

                  Nutrition & Value

                </h3>


                <p className="mt-4 max-w-[340px] text-[12px] leading-6 text-[#718078] dark:text-[#9EAEA7]">

                  Dairy products, ingredients and nutrition
                  capabilities create greater value across the ecosystem.

                </p>


                <div className="mt-7 h-px w-12 bg-[#D5A33A] transition-all duration-500 group-hover:w-24" />

              </div>

            </div>

          </div>


          {/* =====================================================
        BOTTOM CTA
    ===================================================== */}

          <div
            className="mt-10 flex flex-col items-center justify-center gap-5 sm:mt-14"
            data-aos="fade-up"
            data-aos-delay="250"
          >

            <p className="text-center text-[9px] font-bold uppercase tracking-[0.28em] text-[#7A8981] dark:text-[#82938B]">

              One ecosystem. Connected intelligence. Future-ready value.

            </p>


            <Link
              to="/technology"
              className="
          group inline-flex items-center gap-4
          rounded-full bg-[#075B3A]
          px-6 py-3.5
          text-[9px] font-bold uppercase tracking-[0.2em]
          text-white
          shadow-[0_15px_35px_rgba(7,91,58,0.18)]
          transition-all duration-300

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
          flex h-7 w-7 items-center justify-center
          rounded-full bg-white/15
          transition-all duration-300
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
      <section className="relative overflow-hidden bg-[#07100d] py-20 text-white sm:py-24 lg:py-32">

        {/* Ambient lighting */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#075B3A]/20 blur-[150px]" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2E8C82]/10 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
              backgroundSize: '90px 90px'
            }}
          />

        </div>


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        TOP HEADER
    ===================================================== */}
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            {/* Index */}
            <div
              data-aos="fade-right"
              className="flex items-start gap-4"
            >

              <span className="mt-1 text-[10px] font-bold tracking-[0.25em] text-[#72B943]">
                04
              </span>

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-[#72B943]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#9AAEA4]">
                    SMART DAIRY
                  </span>

                </div>

                <p className="mt-4 max-w-[250px] text-[10px] leading-5 text-[#71847B]">
                  Intelligent systems connecting animals, infrastructure and
                  operational data.
                </p>

              </div>

            </div>


            {/* Heading */}
            <div data-aos="fade-up">

              <h2 className="max-w-[950px] font-display text-[clamp(2.6rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">

                SMART DAIRY.
                <br />

                <span className="text-[#72B943]">
                  INTELLIGENCE
                </span>

                <br />

                IN EVERY OPERATION.

              </h2>

              <p className="mt-7 max-w-[720px] text-[15px] leading-7 text-[#B8C9C1] sm:mt-8 sm:text-[17px] sm:leading-8">

                A technology-led dairy environment where connected systems,
                automation and real-time intelligence support better decisions
                across the operation.

              </p>

            </div>

          </div>


          {/* =====================================================
        MAIN VISUAL + TECHNOLOGY PANEL
    ===================================================== */}
          <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-[1.45fr_0.55fr] lg:gap-6">

            {/* ===================================================
          LARGE IMAGE
      =================================================== */}
            <div
              data-aos="fade-right"
              className="group relative min-h-[390px] overflow-hidden rounded-[28px] border border-white/10 bg-[#101C18] sm:min-h-[500px] lg:min-h-[610px]"
            >

              <img
                src={heroImage}
                alt="Tejays Agri smart dairy facility"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A07] via-[#07100D]/15 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#07100D]/35 via-transparent to-transparent" />


              {/* Top technical label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">

                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-[#07100D]/45 px-3 py-2 backdrop-blur-xl">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_12px_rgba(114,185,67,0.9)]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/90">
                    SMART DAIRY / SYSTEM 01
                  </span>

                </div>

              </div>


              {/* Bottom image information */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">

                <div className="max-w-[700px]">

                  <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#A9D8BD]">
                    CONNECTED OPERATIONS
                  </p>

                  <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,3rem)] font-semibold leading-tight tracking-[-0.05em] text-white">
                    Every animal. Every signal. Every decision.
                  </h3>

                </div>

              </div>

            </div>


            {/* ===================================================
          RIGHT TECHNOLOGY PANEL
      =================================================== */}
            <div
              data-aos="fade-left"
              data-aos-delay="120"
              className="rounded-[28px] border border-white/10 bg-[#0D1915] p-5 sm:p-7"
            >

              <div className="flex items-center justify-between">

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                  CORE SYSTEMS
                </span>

                <span className="text-[8px] font-semibold tracking-[0.18em] text-white/30">
                  01 — 04
                </span>

              </div>


              {/* System list */}
              <div className="mt-8">

                {[
                  {
                    number: '01',
                    title: 'Animal Intelligence',
                    text: 'Identification, activity and health monitoring.'
                  },
                  {
                    number: '02',
                    title: 'Smart Feeding',
                    text: 'Connected feeding systems and operational visibility.'
                  },
                  {
                    number: '03',
                    title: 'Milk Intelligence',
                    text: 'Monitoring milk performance and quality parameters.'
                  },
                  {
                    number: '04',
                    title: 'Environmental Control',
                    text: 'Sensors supporting climate and animal comfort.'
                  }
                ].map((item, index) => (

                  <div
                    key={item.number}
                    className={`group py-5 ${index !== 0 ? 'border-t border-white/[0.08]' : ''
                      }`}
                  >

                    <div className="flex gap-4">

                      <span className="pt-0.5 text-[8px] font-bold tracking-[0.15em] text-[#72B943]/70">
                        {item.number}
                      </span>

                      <div>

                        <h4 className="text-[13px] font-semibold tracking-[-0.01em] text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-[11px] leading-5 text-[#83958C]">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* Future capability label */}
              <div className="mt-6 rounded-[16px] border border-[#72B943]/15 bg-[#72B943]/[0.045] p-4">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#9BCDAF]">
                    PROPOSED / FUTURE CAPABILITY
                  </span>

                </div>

                <p className="mt-2 text-[10px] leading-5 text-[#70837A]">
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
            className="mt-5 overflow-hidden rounded-[26px] border border-white/10 bg-[#0D1915]"
          >

            <div className="grid grid-cols-2 sm:grid-cols-4">

              {[
                ['RFID', 'Animal Identification'],
                ['AI + IoT', 'Connected Sensors'],
                ['VISION', 'Computer Vision'],
                ['DATA', 'Command Intelligence']
              ].map(([title, subtitle], index) => (

                <div
                  key={title}
                  className={`relative p-5 sm:p-7 ${index > 0
                    ? 'border-t border-white/[0.08] sm:border-l sm:border-t-0'
                    : ''
                    }`}
                >

                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#72B943]">
                    {title}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-[#809189]">
                    {subtitle}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* =====================================================
        BOTTOM CTA
    ===================================================== */}
          <div className="mt-9 flex justify-center sm:mt-11">

            <Link
              to="/technology"
              className="group inline-flex items-center gap-3 rounded-full border border-[#72B943]/20 bg-[#72B943] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#07100D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#84CE50] hover:shadow-[0_12px_30px_rgba(114,185,67,0.18)]"
            >

              Explore Smart Dairy

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07100D] text-[#72B943] transition-transform duration-300 group-hover:translate-x-0.5">
                <FaArrowRight size={9} />
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 05 — AI COMMAND CENTRE
========================================================= */}
      <section className="relative overflow-hidden bg-[#F5F7F2] py-20 text-[#0C1813] sm:py-24 lg:py-32 dark:bg-[#08110E] dark:text-white">

        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.08]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(7,91,58,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(7,91,58,0.08) 1px, transparent 1px)
      `,
            backgroundSize: '80px 80px'
          }}
        />

        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#72B943]/10 blur-[140px]" />


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="grid gap-8 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">

                <span className="text-[10px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  05
                </span>

                <span className="h-px w-8 bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#62736B] dark:text-[#8EA199]">
                  TECHNOLOGY
                </span>

              </div>

              <p className="mt-5 max-w-[240px] text-[10px] leading-5 text-[#75857E] dark:text-[#72847B]">
                Bringing operational data together into one intelligent
                decision environment.
              </p>

            </div>


            <div data-aos="fade-up">

              <h2 className="max-w-[1000px] font-display text-[clamp(2.6rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">

                DATA.
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  INTELLIGENCE.
                </span>

                <br />

                DECISIONS.

              </h2>

              <p className="mt-7 max-w-[720px] text-[15px] leading-7 text-[#52635B] sm:text-[17px] sm:leading-8 dark:text-[#A8B9B1]">

                The future dairy operation is not only automated.
                It is connected, measurable and increasingly intelligent.

              </p>

            </div>

          </div>


          {/* =====================================================
        COMMAND CENTRE
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-14 overflow-hidden rounded-[30px] border border-black/10 bg-[#0A1511] shadow-[0_30px_80px_rgba(7,30,20,0.12)] sm:mt-16 dark:border-white/10"
          >

            {/* Dashboard top bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#72B943]/10 text-[#72B943]">
                  <FiCpu size={15} />
                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white">
                    TEJAYS INTELLIGENCE
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/35">
                    Integrated Operations Layer
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-2 rounded-full border border-[#72B943]/20 bg-[#72B943]/[0.06] px-3 py-1.5">

                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9BCDAF]">
                  PROPOSED / FUTURE CAPABILITY
                </span>

              </div>

            </div>


            {/* Dashboard body */}
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">

              {/* =================================================
            LEFT — SYSTEM LIST
        ================================================= */}
              <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                  OPERATIONAL SYSTEMS
                </p>


                <div className="mt-6 space-y-2">

                  {[
                    ['HERD', 'Animal intelligence', FiActivity],
                    ['FEED', 'Nutrition management', FiDroplet],
                    ['MILK', 'Production intelligence', FiActivity],
                    ['PROCESSING', 'Plant visibility', FiCpu],
                    ['ENERGY', 'Resource monitoring', FiZap],
                    ['WATER', 'Water intelligence', FiDroplet],
                    ['INVENTORY', 'Material visibility', FiDatabase],
                    ['LOGISTICS', 'Movement & dispatch', FiActivity]
                  ].map(([title, subtitle, Icon], index) => (

                    <div
                      key={title}
                      className={`group flex items-center justify-between rounded-xl border px-3 py-3 transition-all duration-300 ${index === 0
                        ? 'border-[#72B943]/20 bg-[#72B943]/[0.07]'
                        : 'border-white/[0.06] hover:border-[#72B943]/20 hover:bg-white/[0.025]'
                        }`}
                    >

                      <div className="flex items-center gap-3">

                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${index === 0
                          ? 'bg-[#72B943]/10 text-[#72B943]'
                          : 'bg-white/[0.04] text-white/40'
                          }`}>
                          <Icon size={13} />
                        </div>

                        <div>

                          <p className="text-[9px] font-bold tracking-[0.16em] text-white">
                            {title}
                          </p>

                          <p className="mt-1 text-[8px] text-white/35">
                            {subtitle}
                          </p>

                        </div>

                      </div>


                      <span className="text-[8px] text-white/20">
                        0{index + 1}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* =================================================
            RIGHT — INTELLIGENCE VIEW
        ================================================= */}
              <div className="p-5 sm:p-7 lg:p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                      INTELLIGENCE OVERVIEW
                    </p>

                    <h3 className="mt-2 font-display text-[clamp(1.4rem,2.5vw,2.2rem)] font-semibold tracking-[-0.04em] text-white">
                      Connected dairy intelligence
                    </h3>

                  </div>

                  <FiActivity
                    className="hidden text-[#72B943] sm:block"
                    size={22}
                  />

                </div>


                {/* Metric cards */}
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    ['HERD', 'IDENTITY'],
                    ['FEED', 'NUTRITION'],
                    ['MILK', 'OUTPUT'],
                    ['ENERGY', 'EFFICIENCY']
                  ].map(([title, subtitle]) => (

                    <div
                      key={title}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-[8px] font-bold tracking-[0.18em] text-white/40">
                          {title}
                        </span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                      </div>

                      <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                        {subtitle}
                      </p>

                    </div>

                  ))}

                </div>


                {/* Intelligence visual */}
                <div className="relative mt-4 min-h-[270px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0D1B16] p-5 sm:min-h-[310px]">

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `
                  linear-gradient(rgba(114,185,67,0.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(114,185,67,0.12) 1px, transparent 1px)
                `,
                      backgroundSize: '45px 45px'
                    }}
                  />


                  {/* Central node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#72B943]/30 bg-[#72B943]/[0.08]">

                      <div className="absolute inset-3 rounded-full border border-[#72B943]/20" />

                      <FiCpu
                        size={25}
                        className="relative text-[#72B943]"
                      />

                    </div>

                  </div>


                  {/* Connected nodes */}
                  {[
                    ['HERD', 'left-[8%] top-[22%]'],
                    ['FEED', 'right-[8%] top-[20%]'],
                    ['MILK', 'left-[10%] bottom-[20%]'],
                    ['ENERGY', 'right-[7%] bottom-[18%]']
                  ].map(([label, position]) => (

                    <div
                      key={label}
                      className={`absolute ${position}`}
                    >

                      <div className="rounded-xl border border-white/10 bg-[#09120F]/90 px-3 py-2 backdrop-blur-xl">

                        <div className="flex items-center gap-2">

                          <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                          <span className="text-[8px] font-bold tracking-[0.18em] text-white">
                            {label}
                          </span>

                        </div>

                      </div>

                    </div>

                  ))}


                  {/* Connection lines */}
                  <div className="pointer-events-none absolute left-[20%] top-[33%] h-px w-[30%] origin-left rotate-[18deg] bg-gradient-to-r from-[#72B943]/20 to-[#72B943]/50" />

                  <div className="pointer-events-none absolute right-[20%] top-[32%] h-px w-[30%] origin-right -rotate-[18deg] bg-gradient-to-l from-[#72B943]/20 to-[#72B943]/50" />

                  <div className="pointer-events-none absolute bottom-[32%] left-[20%] h-px w-[30%] origin-left -rotate-[18deg] bg-gradient-to-r from-[#72B943]/20 to-[#72B943]/50" />

                  <div className="pointer-events-none absolute bottom-[31%] right-[20%] h-px w-[30%] origin-right rotate-[18deg] bg-gradient-to-l from-[#72B943]/20 to-[#72B943]/50" />


                  <div className="absolute bottom-4 left-5">

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                      DATA → INTELLIGENCE → DECISION
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
        BOTTOM STATEMENT
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-10 grid gap-7 border-t border-black/10 pt-8 sm:mt-12 sm:grid-cols-[1fr_auto] sm:items-end dark:border-white/10"
          >

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                THE PRINCIPLE
              </p>

              <p className="mt-3 max-w-[760px] font-display text-[clamp(1.35rem,2.4vw,2.2rem)] font-semibold leading-tight tracking-[-0.04em]">
                Better visibility creates better decisions.
                Better decisions create better systems.
              </p>

            </div>


            <Link
              to="/technology"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#075B3A] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B7A4B]"
            >

              Explore Technology

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#075B3A] transition-transform duration-300 group-hover:translate-x-0.5">
                <FaArrowRight size={9} />
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 06 — DAIRY & NUTRITION
========================================================= */}
      <section className="relative overflow-hidden bg-white py-20 text-[#0C1813] sm:py-24 lg:py-32 dark:bg-[#0A120F] dark:text-white">

        <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#72B943]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* HEADER */}
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  06
                </span>

                <span className="h-px w-8 bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#62736B] dark:text-[#8EA199]">
                  DAIRY & NUTRITION
                </span>
              </div>

              <p className="mt-5 max-w-[250px] text-[10px] leading-5 text-[#75857E] dark:text-[#72847B]">
                From everyday dairy essentials to higher-value nutrition ingredients.
              </p>

            </div>


            <div data-aos="fade-up">

              <h2 className="max-w-[1000px] font-display text-[clamp(2.6rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">

                FROM MILK.
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  TO NUTRITION.
                </span>

                <br />

                VALUE AT EVERY STAGE.

              </h2>

              <p className="mt-7 max-w-[720px] text-[15px] leading-7 text-[#52635B] sm:text-[17px] sm:leading-8 dark:text-[#A8B9B1]">
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
            className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-12"
          >

            {/* PRIMARY DAIRY */}
            <div className="rounded-[28px] border border-black/10 bg-[#F5F7F2] p-6 sm:p-8 lg:col-span-7 dark:border-white/10 dark:bg-[#101B17]">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                    01 / CORE DAIRY
                  </p>

                  <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.05em]">
                    Everyday Dairy
                  </h3>
                </div>

                <span className="rounded-full border border-[#075B3A]/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#63746C] dark:border-white/10 dark:text-white/40">
                  CORE PORTFOLIO
                </span>

              </div>


              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">

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
                    className="group rounded-2xl border border-black/[0.07] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943]/30 hover:shadow-[0_15px_35px_rgba(10,40,25,0.06)] dark:border-white/[0.07] dark:bg-[#0B1511] dark:hover:border-[#72B943]/30"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-[8px] font-bold tracking-[0.18em] text-[#075B3A]/50 dark:text-[#72B943]/60">
                        0{index + 1}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] opacity-50 transition-opacity group-hover:opacity-100" />

                    </div>

                    <p className="mt-7 font-display text-[14px] font-semibold tracking-[-0.02em]">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* VALUE ADDED */}
            <div className="rounded-[28px] border border-black/10 bg-[#075B3A] p-6 text-white sm:p-8 lg:col-span-5 dark:border-white/10">

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#A9D8BD]">
                02 / VALUE ADDED
              </p>

              <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.05em]">
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
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4"
                  >

                    <span className="text-[11px] font-semibold">
                      {item}
                    </span>

                    <span className="text-[8px] font-bold tracking-[0.18em] text-[#A9D8BD]">
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* NUTRITION INGREDIENTS */}
            <div className="rounded-[28px] border border-black/10 bg-[#F8F5EA] p-6 sm:p-8 lg:col-span-5 dark:border-white/10 dark:bg-[#171710]">

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#8A7130]">
                03 / NUTRITION INGREDIENTS
              </p>

              <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.05em]">
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
                    className="rounded-2xl border border-[#8A7130]/10 bg-white/60 p-4 dark:border-white/10 dark:bg-black/10"
                  >

                    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#8A7130]">
                      NUTRITION
                    </span>

                    <p className="mt-5 font-display text-[13px] font-semibold tracking-[-0.02em]">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* FUTURE */}
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#EEF3ED] p-6 sm:p-8 lg:col-span-7 dark:border-white/10 dark:bg-[#0D1915]">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#72B943]/20" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#72B943]/10" />

              <div className="relative">

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                      04 / FUTURE PORTFOLIO
                    </p>

                    <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.05em]">
                      Built for What Comes Next
                    </h3>
                  </div>

                  <span className="hidden rounded-full border border-[#72B943]/20 bg-[#72B943]/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#075B3A] sm:inline-flex dark:text-[#9BCDAF]">
                    PLANNED
                  </span>

                </div>


                <div className="mt-8 grid gap-2 sm:grid-cols-3">

                  {[
                    'Advanced Protein',
                    'Functional Nutrition',
                    'New Dairy Formats'
                  ].map((item) => (

                    <div
                      key={item}
                      className="rounded-2xl border border-black/[0.06] bg-white/70 p-4 dark:border-white/[0.07] dark:bg-white/[0.025]"
                    >

                      <span className="text-[8px] text-[#72B943]">
                        FUTURE
                      </span>

                      <p className="mt-5 text-[11px] font-semibold leading-5">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

                <p className="mt-5 text-[9px] leading-5 text-[#73827B] dark:text-[#73857B]">
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
            className="mt-5 rounded-[28px] border border-black/10 bg-[#0A1511] p-6 text-white sm:p-8 dark:border-white/10"
          >

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                  VALUE CHAIN
                </p>

                <h3 className="mt-3 font-display text-[clamp(1.4rem,2.5vw,2.2rem)] font-semibold tracking-[-0.04em]">
                  One raw material. Multiple value pathways.
                </h3>

              </div>


              <div className="flex flex-wrap items-center gap-2">

                {[
                  'MILK',
                  'PROCESSING',
                  'DAIRY',
                  'WHEY',
                  'PROTEIN',
                  'NUTRITION'
                ].map((item, index) => (

                  <div key={item} className="flex items-center gap-2">

                    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[8px] font-bold tracking-[0.15em] text-white/70">
                      {item}
                    </span>

                    {index < 5 && (
                      <span className="text-[10px] text-[#72B943]">
                        →
                      </span>
                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* CTA */}
          <div className="mt-9 flex justify-center sm:mt-11">

            <Link
              to="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-[#075B3A] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B7A4B]"
            >

              Explore Dairy & Nutrition

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#075B3A] transition-transform duration-300 group-hover:translate-x-0.5">
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

        {/* Background */}
        <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(rgba(7,91,58,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,91,58,0.08) 1px, transparent 1px)
        `,
              backgroundSize: '85px 85px'
            }}
          />
        </div>

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#72B943]/15 blur-[150px]" />

        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">

                <span className="text-[10px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  07
                </span>

                <span className="h-px w-8 bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#60726A] dark:text-[#8EA199]">
                  SUSTAINABILITY
                </span>

              </div>

              <p className="mt-5 max-w-[250px] text-[10px] leading-5 text-[#74837C] dark:text-[#71847B]">
                Designing a connected cycle where resources are recovered,
                reused and transformed into new value.
              </p>

            </div>


            <div data-aos="fade-up">

              <h2 className="max-w-[1000px] font-display text-[clamp(2.6rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">

                WASTE
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  BECOMES VALUE.
                </span>

              </h2>

              <p className="mt-7 max-w-[730px] text-[15px] leading-7 text-[#52635B] sm:text-[17px] sm:leading-8 dark:text-[#A8B9B1]">
                Sustainability at Tejays Agri is approached as a connected
                operating system — linking dairy, energy, agriculture, water
                and nutrition.
              </p>

            </div>

          </div>


          {/* =====================================================
        CIRCULAR SYSTEM
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="relative mt-14 overflow-hidden rounded-[32px] border border-black/10 bg-white p-5 shadow-[0_25px_70px_rgba(20,50,30,0.06)] sm:mt-16 sm:p-8 lg:p-10 dark:border-white/10 dark:bg-[#0D1915]"
          >

            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

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
            <div className="relative mx-auto mt-10 hidden h-[570px] max-w-[900px] lg:block">

              {/* Outer rings */}
              <div className="absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#075B3A]/10" />

              <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#72B943]/20" />

              <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#075B3A]/10 bg-[#EEF3EC]/40 dark:bg-[#72B943]/[0.03]" />


              {/* Central system */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#72B943]/30 bg-[#075B3A] text-center text-white shadow-[0_20px_60px_rgba(7,91,58,0.18)]">

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#A9D8BD]">
                    TEJAYS
                  </p>

                  <p className="mt-1 font-display text-[16px] font-semibold tracking-[-0.03em]">
                    CIRCULAR
                  </p>

                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/55">
                    ECOSYSTEM
                  </p>

                </div>

              </div>


              {/* Nodes */}
              {[
                ['MANURE', 'Resource Input', 'left-1/2 top-0 -translate-x-1/2'],
                ['BIOGAS', 'Energy Recovery', 'right-[4%] top-[20%]'],
                ['ENERGY', 'Power Generation', 'right-[2%] bottom-[22%]'],
                ['FERTILIZER', 'Soil Nutrition', 'left-1/2 bottom-0 -translate-x-1/2'],
                ['AGRICULTURE', 'Crop Production', 'left-[3%] bottom-[22%]'],
                ['FEED', 'Feed Resources', 'left-[4%] top-[20%]'],
              ].map(([title, subtitle, position], index) => (

                <div
                  key={title}
                  className={`absolute ${position} z-20 w-[145px] rounded-2xl border border-black/10 bg-[#F8FAF7] p-4 shadow-[0_12px_35px_rgba(10,40,25,0.06)] dark:border-white/10 dark:bg-[#111D18]`}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-bold tracking-[0.18em] text-[#075B3A] dark:text-[#72B943]">
                      0{index + 1}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

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
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:hidden">

              {[
                ['01', 'MANURE', 'Resource Input'],
                ['02', 'BIOGAS', 'Energy Recovery'],
                ['03', 'ENERGY', 'Power Generation'],
                ['04', 'FERTILIZER', 'Soil Nutrition'],
                ['05', 'AGRICULTURE', 'Crop Production'],
                ['06', 'FEED', 'Feed Resources'],
                ['07', 'DAIRY', 'Production Cycle']
              ].map(([number, title, subtitle], index) => (

                <div key={title} className="relative">

                  <div className="flex items-center justify-between rounded-2xl border border-black/[0.08] bg-[#F7F9F5] p-4 dark:border-white/[0.08] dark:bg-[#111D18]">

                    <div className="flex items-center gap-4">

                      <span className="text-[8px] font-bold tracking-[0.15em] text-[#72B943]">
                        {number}
                      </span>

                      <div>

                        <p className="text-[9px] font-bold tracking-[0.16em]">
                          {title}
                        </p>

                        <p className="mt-1 text-[8px] text-[#77867F] dark:text-white/40">
                          {subtitle}
                        </p>

                      </div>

                    </div>

                    {index < 6 && (
                      <span className="text-[11px] text-[#72B943]">
                        →
                      </span>
                    )}

                  </div>

                </div>

              ))}

            </div>


            {/* System statement */}
            <div className="mt-8 grid gap-4 border-t border-black/10 pt-7 sm:grid-cols-3 dark:border-white/10">

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075B3A] dark:text-[#72B943]">
                  ENERGY
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#687871] dark:text-white/45">
                  Exploring renewable energy pathways from organic resources.
                </p>
              </div>


              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075B3A] dark:text-[#72B943]">
                  WATER
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#687871] dark:text-white/45">
                  Rainwater harvesting, treatment and potential reuse systems.
                </p>
              </div>


              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075B3A] dark:text-[#72B943]">
                  AGRICULTURE
                </p>

                <p className="mt-2 text-[10px] leading-5 text-[#687871] dark:text-white/45">
                  Linking soil, crops and feed resources back into the dairy cycle.
                </p>
              </div>

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
                title: 'Renewable Energy',
                items: 'Solar • Biogas • Energy Management'
              },
              {
                title: 'Water Intelligence',
                items: 'Harvesting • Treatment • Recycling'
              },
              {
                title: 'From Waste to Resource',
                items: 'Recovery • Reuse • Circular Value'
              }
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[24px] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#0D1915]"
              >

                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                  FUTURE SYSTEM
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
          <div className="mt-7 flex justify-center">

            <p className="max-w-[720px] text-center text-[9px] leading-5 text-[#7B8983] dark:text-white/35">
              Sustainability initiatives shown represent planned and potential
              system directions. Specific technologies, capacities and outcomes
              are subject to engineering, regulatory and operational validation.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 08 — CAMPUS / MASTERPLAN
========================================================= */}
      <section className="relative overflow-hidden bg-[#07100D] py-20 text-white sm:py-24 lg:py-32">

        {/* Ambient background */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#075B3A]/20 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#72B943]/10 blur-[150px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
            backgroundSize: '70px 70px'
          }}
        />


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">

                <span className="text-[10px] font-bold tracking-[0.25em] text-[#72B943]">
                  08
                </span>

                <span className="h-px w-8 bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8EA199]">
                  CAMPUS
                </span>

              </div>

              <p className="mt-5 max-w-[250px] text-[10px] leading-5 text-[#71847B]">
                One integrated campus connecting dairy, processing,
                agriculture, energy and water systems.
              </p>

            </div>


            <div data-aos="fade-up">

              <h2 className="max-w-[1000px] font-display text-[clamp(2.6rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">

                ONE CAMPUS.
                <br />

                <span className="text-[#72B943]">
                  ONE ECOSYSTEM.
                </span>

              </h2>

              <p className="mt-7 max-w-[730px] text-[15px] leading-7 text-[#A8B9B1] sm:text-[17px] sm:leading-8">
                Infrastructure designed as a connected system — where animals,
                people, processing, resources and intelligence operate together.
              </p>

            </div>

          </div>


          {/* =====================================================
        MASTERPLAN
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-[1.5fr_0.5fr]"
          >

            {/* ===================================================
          MASTERPLAN BLUEPRINT
      =================================================== */}
            <div className="relative min-h-[650px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1713] p-5 sm:min-h-[720px] sm:p-8">

              {/* Blueprint grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(114,185,67,0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(114,185,67,0.10) 1px, transparent 1px)
            `,
                  backgroundSize: '42px 42px'
                }}
              />

              {/* Blueprint border */}
              <div className="absolute inset-5 rounded-[24px] border border-[#72B943]/10 sm:inset-8" />


              {/* Top labels */}
              <div className="relative z-10 flex items-start justify-between">

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                    TEJAYS AGRI CAMPUS
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.18em] text-white/30">
                    CONCEPTUAL MASTERPLAN
                  </p>

                </div>


                <div className="text-right">

                  <p className="text-[8px] font-bold tracking-[0.18em] text-white/40">
                    MASTERPLAN / 01
                  </p>

                  <p className="mt-1 text-[8px] text-white/20">
                    NOT TO SCALE
                  </p>

                </div>

              </div>


              {/* =================================================
            CAMPUS ZONES
        ================================================= */}

              {/* Agriculture */}
              <div className="absolute bottom-[10%] left-[7%] h-[22%] w-[27%] rounded-[18px] border border-[#72B943]/20 bg-[#72B943]/[0.04]">

                <div className="absolute left-3 top-3">

                  <span className="text-[8px] font-bold text-[#72B943]">
                    05
                  </span>

                  <p className="mt-1 text-[8px] font-bold tracking-[0.12em] text-white/70">
                    AGRICULTURE
                  </p>

                </div>

                {/* Field lines */}
                <div className="absolute inset-x-4 bottom-4 space-y-2 opacity-30">

                  <span className="block h-px bg-[#72B943]" />
                  <span className="block h-px bg-[#72B943]" />
                  <span className="block h-px bg-[#72B943]" />
                  <span className="block h-px bg-[#72B943]" />

                </div>

              </div>


              {/* Feed */}
              <div className="absolute left-[7%] top-[29%] h-[17%] w-[27%] rounded-[18px] border border-white/10 bg-white/[0.025]">

                <span className="absolute left-3 top-3 text-[8px] font-bold text-[#72B943]">
                  04
                </span>

                <p className="absolute bottom-3 left-3 text-[8px] font-bold tracking-[0.12em] text-white/65">
                  FEED SYSTEM
                </p>

              </div>


              {/* Smart Dairy - central */}
              <div className="absolute left-[36%] top-[25%] h-[40%] w-[29%] rounded-[24px] border border-[#72B943]/40 bg-[#075B3A]/20 shadow-[0_0_60px_rgba(114,185,67,0.08)]">

                <div className="absolute inset-3 rounded-[18px] border border-[#72B943]/10" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#72B943]">
                    01
                  </span>

                  <h3 className="mt-3 font-display text-[clamp(1rem,2vw,1.6rem)] font-semibold tracking-[-0.04em]">
                    SMART
                    <br />
                    DAIRY
                  </h3>

                  <p className="mt-3 text-[7px] uppercase tracking-[0.14em] text-white/35">
                    CORE OPERATING ZONE
                  </p>

                </div>

              </div>


              {/* Processing */}
              <div className="absolute right-[7%] top-[19%] h-[20%] w-[25%] rounded-[18px] border border-white/10 bg-white/[0.025]">

                <span className="absolute left-3 top-3 text-[8px] font-bold text-[#72B943]">
                  02
                </span>

                <p className="absolute bottom-3 left-3 text-[8px] font-bold tracking-[0.12em] text-white/65">
                  PROCESSING
                </p>

              </div>


              {/* Nutrition */}
              <div className="absolute right-[7%] top-[45%] h-[17%] w-[25%] rounded-[18px] border border-[#D6B65B]/20 bg-[#D6B65B]/[0.035]">

                <span className="absolute left-3 top-3 text-[8px] font-bold text-[#D6B65B]">
                  03
                </span>

                <p className="absolute bottom-3 left-3 text-[8px] font-bold tracking-[0.12em] text-white/65">
                  NUTRITION
                </p>

              </div>


              {/* Energy */}
              <div className="absolute bottom-[10%] right-[7%] h-[18%] w-[25%] rounded-[18px] border border-white/10 bg-white/[0.025]">

                <span className="absolute left-3 top-3 text-[8px] font-bold text-[#72B943]">
                  06
                </span>

                <p className="absolute bottom-3 left-3 text-[8px] font-bold tracking-[0.12em] text-white/65">
                  ENERGY
                </p>

              </div>


              {/* Water */}
              <div className="absolute bottom-[10%] left-[38%] h-[14%] w-[25%] rounded-[18px] border border-[#2E8C82]/20 bg-[#2E8C82]/[0.035]">

                <span className="absolute left-3 top-3 text-[8px] font-bold text-[#2E8C82]">
                  07
                </span>

                <p className="absolute bottom-3 left-3 text-[8px] font-bold tracking-[0.12em] text-white/65">
                  WATER
                </p>

              </div>


              {/* =================================================
            CONNECTION LINES
        ================================================= */}

              <div className="absolute left-[33%] top-[43%] h-px w-[8%] bg-[#72B943]/30" />

              <div className="absolute left-[64%] top-[39%] h-px w-[10%] bg-[#72B943]/30" />

              <div className="absolute left-[64%] top-[52%] h-px w-[9%] bg-[#D6B65B]/30" />

              <div className="absolute left-[49%] top-[65%] h-[12%] w-px bg-[#2E8C82]/30" />

              <div className="absolute left-[31%] top-[62%] h-[10%] w-px rotate-[55deg] bg-[#72B943]/25" />


              {/* Bottom legend */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-4 border-t border-white/10 pt-4 sm:bottom-8 sm:left-8 sm:right-8">

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />
                  <span className="text-[7px] uppercase tracking-[0.16em] text-white/40">
                    Core Infrastructure
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D6B65B]" />
                  <span className="text-[7px] uppercase tracking-[0.16em] text-white/40">
                    Nutrition
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2E8C82]" />
                  <span className="text-[7px] uppercase tracking-[0.16em] text-white/40">
                    Resource Systems
                  </span>
                </div>

              </div>

            </div>


            {/* ===================================================
          SELECTED ZONE
      =================================================== */}
            <div
              data-aos="fade-left"
              className="rounded-[30px] border border-white/10 bg-[#0D1915] p-6 sm:p-8"
            >

              <div className="flex items-center justify-between">

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                  SELECTED ZONE
                </span>

                <span className="text-[8px] tracking-[0.18em] text-white/25">
                  01
                </span>

              </div>


              <div className="mt-10">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  CORE OPERATING ZONE
                </p>

                <h3 className="mt-3 font-display text-[clamp(2rem,3vw,3rem)] font-semibold leading-none tracking-[-0.06em]">
                  Smart
                  <br />
                  Dairy
                </h3>

                <div className="mt-7 h-px w-full bg-white/10" />


                {/* Specifications */}
                <div className="mt-6 space-y-4">

                  {[
                    'Phase-I: 2,000 milking cows',
                    'Climate-controlled barns',
                    'Automated feeding systems',
                    'Animal identification',
                    'Health monitoring',
                    'Cow comfort systems'
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex gap-3"
                    >

                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#72B943]" />

                      <p className="text-[10px] leading-5 text-white/60">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </div>


              {/* Capacity */}
              <div className="mt-10 grid grid-cols-2 gap-2">

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">

                  <p className="text-[7px] uppercase tracking-[0.18em] text-white/30">
                    PHASE-I
                  </p>

                  <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[#72B943]">
                    2,000
                  </p>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.14em] text-white/30">
                    DESIGN CAPACITY
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">

                  <p className="text-[7px] uppercase tracking-[0.18em] text-white/30">
                    LONG TERM
                  </p>

                  <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[#72B943]">
                    5,000+
                  </p>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.14em] text-white/30">
                    SCALABILITY
                  </p>

                </div>

              </div>


              {/* Disclaimer */}
              <div className="mt-5 rounded-xl border border-[#72B943]/10 bg-[#72B943]/[0.035] p-4">

                <p className="text-[8px] leading-5 text-white/35">
                  Concept / Planned Infrastructure. Figures shown represent
                  design direction and planned scalability, subject to
                  engineering and operational validation.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
        CAMPUS SYSTEMS
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >

            {[
              ['01', 'SMART DAIRY', 'Animal intelligence & automation'],
              ['02', 'PROCESSING', 'Milk & value-added production'],
              ['03', 'RESOURCE SYSTEMS', 'Energy & water infrastructure'],
              ['04', 'AGRICULTURE', 'Feed & circular resource pathways']
            ].map(([number, title, text]) => (

              <div
                key={title}
                className="rounded-[22px] border border-white/10 bg-[#0D1915] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943]/25"
              >

                <span className="text-[8px] font-bold tracking-[0.18em] text-[#72B943]">
                  {number}
                </span>

                <h4 className="mt-5 text-[10px] font-bold tracking-[0.15em] text-white">
                  {title}
                </h4>

                <p className="mt-2 text-[9px] leading-5 text-white/35">
                  {text}
                </p>

              </div>

            ))}

          </div>


          {/* Bottom note */}
          <div className="mt-8 text-center">

            <p className="mx-auto max-w-[700px] text-[9px] leading-5 text-white/30">
              The masterplan is a conceptual representation of the proposed
              integrated campus and is not a construction drawing or final
              engineering layout.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 09 — SCALE & VISION
========================================================= */}
      <section className="relative overflow-hidden bg-white py-20 text-[#0B1712] sm:py-24 lg:py-32 dark:bg-[#07100D] dark:text-white">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72B943]/[0.07] blur-[160px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(7,91,58,0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(7,91,58,0.07) 1px, transparent 1px)
      `,
            backgroundSize: '100px 100px'
          }}
        />


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">

                <span className="text-[10px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  09
                </span>

                <span className="h-px w-8 bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#65756E] dark:text-[#8EA199]">
                  SCALE & VISION
                </span>

              </div>

            </div>


            <p
              data-aos="fade-left"
              className="max-w-[410px] text-[9px] uppercase leading-5 tracking-[0.15em] text-[#7B8982] dark:text-white/35"
            >
              Designed for disciplined growth,
              operational depth and long-term scalability.
            </p>

          </div>


          {/* =====================================================
        MAIN STATEMENT
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-16 border-y border-black/10 py-12 sm:mt-20 sm:py-16 lg:py-20 dark:border-white/10"
          >

            <p className="text-center text-[9px] font-bold uppercase tracking-[0.3em] text-[#075B3A] dark:text-[#72B943]">
              BUILDING WITH SCALE IN MIND
            </p>


            <h2 className="mx-auto mt-8 max-w-[1200px] text-center font-display text-[clamp(3.5rem,11vw,10rem)] font-semibold leading-[0.78] tracking-[-0.09em]">

              <span className="text-[#075B3A] dark:text-[#72B943]">
                2,000
              </span>

              <span className="mx-2 text-[#A8B3AD] dark:text-white/20 sm:mx-5">
                →
              </span>

              <span>
                5,000+
              </span>

            </h2>


            <p className="mx-auto mt-8 max-w-[620px] text-center text-[11px] leading-6 text-[#718079] sm:text-[12px] dark:text-white/40">
              Phase-I design capacity with long-term scalability built into
              the broader campus vision.
            </p>

          </div>


          {/* =====================================================
        SCALE METRICS
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="grid gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10"
          >

            {/* Metric 01 */}
            <div className="bg-[#F5F7F2] p-7 sm:p-9 dark:bg-[#0D1915]">

              <span className="text-[8px] font-bold tracking-[0.2em] text-[#72B943]">
                01
              </span>

              <p className="mt-8 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.06em]">
                2,000
              </p>

              <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#687870] dark:text-white/35">
                PHASE-I DESIGN CAPACITY
              </p>

            </div>


            {/* Metric 02 */}
            <div className="bg-[#F5F7F2] p-7 sm:p-9 dark:bg-[#0D1915]">

              <span className="text-[8px] font-bold tracking-[0.2em] text-[#72B943]">
                02
              </span>

              <p className="mt-8 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.06em]">
                5,000+
              </p>

              <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#687870] dark:text-white/35">
                LONG-TERM SCALABILITY
              </p>

            </div>


            {/* Metric 03 */}
            <div className="bg-[#075B3A] p-7 text-white sm:p-9">

              <span className="text-[8px] font-bold tracking-[0.2em] text-[#A9D8BD]">
                03
              </span>

              <p className="mt-8 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.06em]">
                01
              </p>

              <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.2em] text-white/55">
                INTEGRATED ECOSYSTEM
              </p>

            </div>

          </div>


          {/* =====================================================
        VISION STATEMENT
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]"
          >

            {/* Large statement */}
            <div className="rounded-[28px] border border-black/10 bg-[#EEF3EC] p-7 sm:p-10 lg:p-12 dark:border-white/10 dark:bg-[#0D1915]">

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                THE LONG VIEW
              </p>

              <h3 className="mt-6 max-w-[850px] font-display text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">

                Start with a dairy.
                <br />

                Build an
                <span className="text-[#075B3A] dark:text-[#72B943]">
                  {' '}ecosystem.
                </span>

              </h3>

              <p className="mt-7 max-w-[650px] text-[11px] leading-6 text-[#697970] sm:text-[12px] dark:text-white/40">
                The vision extends beyond herd capacity — toward connected
                infrastructure, processing, nutrition, agriculture, energy,
                water and technology operating as one system.
              </p>

            </div>


            {/* Vision side panel */}
            <div className="rounded-[28px] border border-black/10 bg-[#0A1511] p-7 text-white sm:p-10 dark:border-white/10">

              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                SCALE PRINCIPLES
              </p>


              <div className="mt-8 space-y-5">

                {[
                  'Modular infrastructure',
                  'Connected operations',
                  'Data-led decisions',
                  'Resource efficiency',
                  'Future-ready expansion'
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.08] pb-5 last:border-0 last:pb-0"
                  >

                    <span className="text-[8px] font-bold tracking-[0.15em] text-[#72B943]/70">
                      0{index + 1}
                    </span>

                    <p className="text-[10px] font-semibold text-white/75">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
        DISCLAIMER
    ===================================================== */}
          <div className="mx-auto mt-8 max-w-[760px] text-center">

            <p className="text-[9px] leading-5 text-[#7B8982] dark:text-white/30">
              Scale figures shown are planning and design references for the
              proposed ecosystem. They should not be interpreted as current
              operating capacity or guaranteed future output.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
    SECTION 10 — INNOVATION / FUTURE
========================================================= */}
      <section className="relative overflow-hidden bg-[#F5F7F2] py-20 text-[#0B1712] sm:py-24 lg:py-32 dark:bg-[#08110E] dark:text-white">

        {/* Ambient elements */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#72B943]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#2E8C82]/10 blur-[150px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(7,91,58,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(7,91,58,0.08) 1px, transparent 1px)
      `,
            backgroundSize: '90px 90px'
          }}
        />


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        HEADER
    ===================================================== */}
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">

                <span className="text-[10px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  10
                </span>

                <span className="h-px w-8 bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#62736B] dark:text-[#8EA199]">
                  INNOVATION
                </span>

              </div>

              <p className="mt-5 max-w-[250px] text-[10px] leading-5 text-[#75857E] dark:text-[#72847B]">
                Exploring technologies that can transform the next generation
                of dairy, agriculture and nutrition.
              </p>

            </div>


            <div data-aos="fade-up">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#075B3A] dark:text-[#72B943]">
                WHAT COMES NEXT?
              </p>

              <h2 className="mt-5 max-w-[1050px] font-display text-[clamp(2.7rem,5.5vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">

                BUILDING FOR
                <br />

                <span className="text-[#075B3A] dark:text-[#72B943]">
                  THE NEXT
                </span>

                <br />

                GENERATION.

              </h2>

              <p className="mt-7 max-w-[720px] text-[15px] leading-7 text-[#52635B] sm:text-[17px] sm:leading-8 dark:text-[#A8B9B1]">
                Innovation is treated as a continuous capability — connecting
                technology, biology, infrastructure and resource efficiency.
              </p>

            </div>

          </div>


          {/* =====================================================
        FUTURE CAPABILITY GRID
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-12"
          >

            {/* ===================================================
          FEATURED AI
      =================================================== */}
            <div className="relative min-h-[390px] overflow-hidden rounded-[30px] bg-[#075B3A] p-7 text-white sm:min-h-[450px] sm:p-9 lg:col-span-7">

              {/* Rings */}
              <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-white/10" />
              <div className="absolute -right-8 -top-8 h-[180px] w-[180px] rounded-full border border-white/10" />

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
                  backgroundSize: '50px 50px'
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">

                <div className="flex items-start justify-between">

                  <div>

                    <span className="text-[8px] font-bold tracking-[0.25em] text-[#A9D8BD]">
                      01 / INTELLIGENCE
                    </span>

                    <h3 className="mt-5 max-w-[520px] font-display text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                      AI-Driven
                      <br />
                      Operations
                    </h3>

                  </div>


                  <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.16em] text-white/60">
                    FUTURE
                  </span>

                </div>


                <div className="mt-10">

                  <p className="max-w-[560px] text-[11px] leading-6 text-white/60">
                    Potential intelligence layers across herd management,
                    feeding, milk production, processing, energy, water and
                    logistics.
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      'Predictive Analytics',
                      'Computer Vision',
                      'AI Command Centre'
                    ].map((item) => (

                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[8px] font-semibold tracking-[0.08em] text-white/70"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>


            {/* ===================================================
          PRECISION AGRICULTURE
      =================================================== */}
            <div className="rounded-[30px] border border-black/10 bg-white p-7 sm:p-9 lg:col-span-5 dark:border-white/10 dark:bg-[#0D1915]">

              <span className="text-[8px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                02 / AGRICULTURE
              </span>

              <h3 className="mt-5 font-display text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                Precision
                <br />
                Agriculture
              </h3>

              <p className="mt-5 text-[10px] leading-5 text-[#718079] dark:text-white/40">
                Connecting crop, soil, irrigation and feed-resource intelligence
                into the broader dairy ecosystem.
              </p>


              <div className="mt-8 space-y-2">

                {[
                  'Precision Irrigation',
                  'Crop Intelligence',
                  'Feed Resource Planning',
                  'Soil & Resource Monitoring'
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-black/[0.07] bg-[#F7F9F5] px-4 py-3 dark:border-white/[0.07] dark:bg-white/[0.025]"
                  >

                    <span className="text-[9px] font-semibold">
                      {item}
                    </span>

                    <span className="text-[8px] text-[#72B943]">
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* ===================================================
          ROBOTICS
      =================================================== */}
            <div className="rounded-[30px] border border-black/10 bg-[#101B17] p-7 text-white sm:p-9 lg:col-span-4 dark:border-white/10">

              <span className="text-[8px] font-bold tracking-[0.25em] text-[#72B943]">
                03 / AUTOMATION
              </span>

              <h3 className="mt-5 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                Robotics &
                <br />
                Automation
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
                    'Barn Automation',
                    'Material Handling',
                    'Process Automation'
                  ].map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-[8px] text-white/60"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>


            {/* ===================================================
          ADVANCED NUTRITION
      =================================================== */}
            <div className="rounded-[30px] border border-black/10 bg-[#F8F4E9] p-7 sm:p-9 lg:col-span-4 dark:border-white/10 dark:bg-[#171710]">

              <span className="text-[8px] font-bold tracking-[0.25em] text-[#92752E]">
                04 / NUTRITION
              </span>

              <h3 className="mt-5 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                Advanced
                <br />
                Nutrition
              </h3>

              <p className="mt-5 text-[10px] leading-5 text-[#746E5D] dark:text-white/40">
                Exploring higher-value dairy proteins, functional ingredients
                and future nutrition formats.
              </p>


              <div className="mt-8 grid grid-cols-2 gap-2">

                {[
                  'WPC',
                  'WPI',
                  'Protein',
                  'Functional Nutrition'
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-[#92752E]/10 bg-white/50 p-4 dark:bg-black/10"
                  >

                    <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#92752E]">
                      FUTURE
                    </p>

                    <p className="mt-4 text-[9px] font-semibold leading-4">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* ===================================================
          CONNECTED ECOSYSTEM
      =================================================== */}
            <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-[#EEF3EC] p-7 sm:p-9 lg:col-span-4 dark:border-white/10 dark:bg-[#0D1915]">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#72B943]/15" />
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-[#72B943]/10" />

              <span className="relative text-[8px] font-bold tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                05 / CONNECTIVITY
              </span>

              <h3 className="relative mt-5 font-display text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                One Digital
                <br />
                Ecosystem
              </h3>

              <p className="relative mt-5 text-[10px] leading-5 text-[#718079] dark:text-white/40">
                Connecting physical infrastructure with data and intelligence
                across the complete value chain.
              </p>


              <div className="relative mt-8 flex flex-wrap gap-2">

                {[
                  'ANIMALS',
                  'DATA',
                  'PROCESSING',
                  'AGRICULTURE',
                  'ENERGY'
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-[#075B3A]/10 bg-white/60 px-3 py-2 text-[7px] font-bold tracking-[0.14em] text-[#075B3A] dark:border-white/10 dark:bg-white/[0.03] dark:text-[#9BCDAF]"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
        FINAL INNOVATION STATEMENT
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="mt-5 rounded-[30px] border border-black/10 bg-[#0A1511] p-7 text-white sm:p-10 lg:p-14 dark:border-white/10"
          >

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                  INNOVATION PRINCIPLE
                </p>

                <h3 className="mt-5 max-w-[900px] font-display text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                  Technology should not
                  <span className="text-[#72B943]">
                    {' '}complicate
                  </span>
                  the system.
                  <br />
                  It should make it smarter.
                </h3>

              </div>


              <div className="lg:max-w-[280px]">

                <p className="text-[10px] leading-5 text-white/40">
                  Future capabilities shown here are exploratory directions,
                  not representations of currently deployed commercial systems.
                </p>

              </div>

            </div>

          </div>


        </div>

      </section>


      {/* =========================================================
    SECTION 11 — FINAL CTA / CLOSING
========================================================= */}
      <section className="relative overflow-hidden bg-[#075B3A] py-24 text-white sm:py-28 lg:py-36">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-32 top-[-120px] h-[420px] w-[420px] rounded-full bg-[#72B943]/20 blur-[130px]" />

        <div className="pointer-events-none absolute -right-32 bottom-[-140px] h-[500px] w-[500px] rounded-full bg-[#D8B85A]/10 blur-[150px]" />


        {/* Architectural grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
      `,
            backgroundSize: '80px 80px'
          }}
        />


        <div className="relative mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10 xl:px-14">

          {/* =====================================================
        TOP LABEL
    ===================================================== */}
          <div
            data-aos="fade-up"
            className="flex items-center gap-3"
          >

            <span className="text-[10px] font-bold tracking-[0.25em] text-[#B7E2C8]">
              11
            </span>

            <span className="h-px w-8 bg-[#72B943]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/50">
              THE NEXT CHAPTER
            </span>

          </div>


          {/* =====================================================
        MAIN STATEMENT
    ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-12 max-w-[1150px] sm:mt-16"
          >

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
              TEJAYS AGRI
            </p>


            <h2 className="mt-6 font-display text-[clamp(3rem,7vw,8rem)] font-semibold leading-[0.84] tracking-[-0.075em]">

              LET'S BUILD

              <br />

              <span className="text-[#B7E2C8]">
                THE FUTURE
              </span>

              <br />

              OF DAIRY.

            </h2>

          </div>


          {/* =====================================================
        DESCRIPTION + CTA
    ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="180"
            className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >

            <div className="max-w-[620px]">

              <p className="text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8">
                A connected ecosystem built around better animals,
                smarter operations, responsible resources and higher-value
                nutrition.
              </p>

            </div>


            <div className="flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#075B3A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4F7F1]"
              >

                Start a Conversation

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>


              <Link
                to="/technology"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Explore Technology
              </Link>

            </div>

          </div>


          {/* =====================================================
        CLOSING LINE
    ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-20 border-t border-white/10 pt-8 sm:mt-24"
          >

            <div className="grid gap-8 md:grid-cols-3">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/35">
                  OUR APPROACH
                </p>

                <p className="mt-3 text-[11px] font-medium text-white/65">
                  Integrated. Intelligent. Sustainable.
                </p>

              </div>


              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/35">
                  OUR DIRECTION
                </p>

                <p className="mt-3 text-[11px] font-medium text-white/65">
                  Dairy → Agriculture → Nutrition
                </p>

              </div>


              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/35">
                  OUR PRINCIPLE
                </p>

                <p className="mt-3 text-[11px] font-medium text-white/65">
                  Better systems. Better possibilities.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
        FINAL BRAND MARK
    ===================================================== */}
          <div
            data-aos="fade-up"
            data-aos-delay="320"
            className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:mt-24 sm:flex-row sm:items-center sm:justify-between"
          >

            <div>

              <p className="font-display text-xl font-semibold tracking-[-0.04em]">
                TEJAYS AGRI
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                THE FUTURE OF DAIRY. ENGINEERED.
              </p>

            </div>


            <p className="max-w-[420px] text-[9px] leading-5 text-white/30 sm:text-right">
              Future capabilities, capacities and infrastructure shown across
              this website represent planned, conceptual or exploratory
              directions unless specifically stated otherwise.
            </p>

          </div>

        </div>

      </section>
    </>
  )
}