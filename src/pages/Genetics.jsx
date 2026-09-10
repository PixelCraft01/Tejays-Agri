import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaDna,
  FaHeartbeat,
  FaShieldAlt,
  FaChartLine,
  FaSeedling,
} from 'react-icons/fa'
import { usePageMeta } from '../hooks/usePageMeta'
import { assetPath } from '../utils/assetPath'

const geneticsHero = assetPath('/images/ecosystem/genetics.png')

const geneticsProgramme = [
  {
    number: '01',
    title: 'Genomic Selection',
    text: 'Using genetic information as part of a planned approach to long-term herd improvement.',
    icon: FaDna,
  },
  {
    number: '02',
    title: 'Sexed Semen',
    text: 'A reproductive technology planned to support more intentional herd development.',
    icon: FaSeedling,
  },
  {
    number: '03',
    title: 'IVF & Embryo Transfer',
    text: 'Advanced reproductive pathways considered within the future genetics programme.',
    icon: FaChartLine,
  },
  {
    number: '04',
    title: 'Genetic Improvement',
    text: 'Connecting breeding decisions, animal records and performance data across generations.',
    icon: FaDna,
  },
]

const healthSystems = [
  {
    number: '01',
    title: 'Diagnostics',
    text: 'Planned diagnostic capabilities to support timely identification and management of animal health conditions.',
  },
  {
    number: '02',
    title: 'Preventive Healthcare',
    text: 'A proactive approach focused on maintaining herd health and reducing avoidable health risks.',
  },
  {
    number: '03',
    title: 'Reproductive Healthcare',
    text: 'Healthcare and reproductive management designed to work together across the herd.',
  },
  {
    number: '04',
    title: 'Isolation & Quarantine',
    text: 'Dedicated protocols and infrastructure planned to support responsible herd biosecurity.',
  },
  {
    number: '05',
    title: 'Hoof Care',
    text: 'Regular hoof-care practices planned as part of animal comfort and welfare management.',
  },
  {
    number: '06',
    title: 'Animal Health Records',
    text: 'Structured records designed to connect individual animal history with herd-level decision making.',
  },
]

const calfSystems = [
  {
    title: 'Dedicated Facilities',
    text: 'Purpose-designed calf facilities planned for controlled early-life development.',
  },
  {
    title: 'Nutrition Monitoring',
    text: 'Monitoring nutritional needs to support healthy and consistent development.',
  },
  {
    title: 'Growth Monitoring',
    text: 'Tracking growth as an important indicator of calf development and future herd performance.',
  },
  {
    title: 'Health Tracking',
    text: 'Maintaining health information from early life to support better long-term decisions.',
  },
]

const lifecycle = [
  'Identification',
  'Health',
  'Reproduction',
  'Growth',
  'Genetics',
  'Herd Improvement',
]

export default function Genetics() {
  usePageMeta(
    'Tejays Agri | Genetics',
    'A planned genetics and animal health programme focused on responsible herd development, reproductive management and long-term genetic improvement.'
  )

  return (
    <div className="bg-[#f7f7f2] text-[#0b1210] dark:bg-[#0b1210] dark:text-[#edf7f2]">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#07100D] text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src={geneticsHero}
            alt="TEJAYS AGRI Genetics and Animal Health"
            className="h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-[#07100D]" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07100D] via-[#07100D]/85 to-[#07100D]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07100D]/80 via-transparent to-[#07100D]/20" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(114,185,67,1)_1px,transparent_1px),linear-gradient(90deg,rgba(114,185,67,1)_1px,transparent_1px)] [background-size:90px_90px]" />

        </div>


        {/* CONTENT */}
        <div
          className="
      relative z-10 mx-auto flex min-h-[650px] max-w-[1500px]
      items-center justify-center
      px-5 py-20 text-center
      sm:px-8 sm:py-24
      lg:justify-start lg:px-12 lg:py-24 lg:text-left
    "
        >

          <div
            data-aos="fade-up"
            className="w-full max-w-4xl"
          >

            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">

              <span className="h-px w-10 bg-[#72B943]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                TEJAYS AGRI / GENETICS & ANIMAL HEALTH
              </span>

            </div>


            {/* HEADING */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="
          mt-8
          text-[clamp(3.4rem,8vw,8.5rem)]
          font-semibold leading-[0.82]
          tracking-[-0.085em]
        "
            >
              BUILDING
              <br />

              <span className="text-white/25">
                BETTER HERDS,
              </span>

              <br />

              <span className="text-[#72B943]">
                BY DESIGN.
              </span>
            </h1>


            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="
          mx-auto mt-8 max-w-2xl
          text-sm leading-7 text-white/50
          sm:text-base sm:leading-8
          lg:mx-0
        "
            >
              A planned approach to genetics, reproductive management and
              animal health—designed to support long-term herd performance
              and responsible dairy development.
            </p>


            {/* BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="
          mt-9 flex flex-col items-center justify-center gap-3
          sm:flex-row
          lg:justify-start
        "
            >

              <Link
                to="/smart-dairy"
                className="
            group inline-flex w-full items-center justify-center
            gap-3 rounded-full
            bg-[#72B943] px-7 py-4
            text-[9px] font-bold uppercase tracking-[0.2em]
            text-[#07100D]
            transition-all duration-300
            hover:-translate-y-1 hover:bg-white
            sm:w-auto
          "
              >
                Explore Smart Dairy

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>


              <a
                href="#genetics-programme"
                className="
            group inline-flex w-full items-center justify-center
            gap-3 rounded-full
            border border-white/15
            px-7 py-4
            text-[9px] font-bold uppercase tracking-[0.2em]
            text-white/70
            transition-all duration-300
            hover:border-[#72B943]
            hover:text-[#72B943]
            sm:w-auto
          "
              >
                Our Approach

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            </div>

          </div>


          {/* STATUS */}
          <div className="absolute bottom-8 right-8 hidden lg:block">

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/25">
              GROWING FOR THE FUTURE
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-24">

            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                01 / THE APPROACH
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                Genetics
                <br />
                with a
                <br />
                <span className="text-[#075b3a] dark:text-[#72B943]">
                  long-term view.
                </span>
              </h2>

            </div>


            <div
              data-aos="fade-left"
              className="border-t border-black/10 pt-7 dark:border-white/10"
            >

              <p className="max-w-3xl text-base leading-8 text-black/60 sm:text-lg sm:leading-9 dark:text-white/55">
                Building a stronger herd begins with better decisions at every
                generation. TEJAYS AGRI&apos;s planned genetics programme is
                designed to connect reproductive technologies, animal records,
                health and performance data with long-term herd development.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-2 w-2 rounded-full bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-black/40 dark:text-white/35">
                  PLANNED DEVELOPMENT
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          GENETICS PROGRAMME
      ========================================================== */}
      <section
        id="genetics-programme"
        className="bg-[#0e1915] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                  02 / GENETICS PROGRAMME
                </p>
              </div>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-8xl">
                Selection.
                <br />
                Data.
                <br />
                <span className="text-[#72B943]">
                  Progress.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-md text-xs leading-6 text-white/45 sm:text-sm sm:leading-7 lg:mx-0">
                A planned genetics strategy can combine advanced reproductive
                pathways with animal information to support continuous
                improvement across generations.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {geneticsProgramme.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.number}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className="group relative min-h-[245px] overflow-hidden rounded-[22px] border border-white/10 bg-[#101f19] p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#72B943]/40 hover:bg-[#075b3a] sm:min-h-[275px] sm:rounded-[26px] sm:p-6 lg:min-h-[310px] lg:p-7"
                  >

                    <div className="flex items-start justify-between">

                      <span className="text-[9px] font-bold tracking-[0.2em] text-white/25 group-hover:text-white/50">
                        {item.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#72B943] transition group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                        <Icon className="text-sm" />
                      </div>

                    </div>

                    <div className="mt-14 sm:mt-16">

                      <h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[11px] leading-6 text-white/40 transition group-hover:text-white/70 sm:text-xs sm:leading-7">
                        {item.text}
                      </p>

                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#72B943] transition-all duration-500 group-hover:w-full" />

                  </article>
                )
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          GENETIC IMPROVEMENT
      ========================================================== */}
      <section className="overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24">

            <div
              data-aos="fade-right"
              className="relative"
            >

              <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#e9eee8] p-5 sm:rounded-[34px] sm:p-8 dark:border-white/10 dark:bg-[#101c18]">

                <div className="relative min-h-[410px] overflow-hidden rounded-[22px] bg-[#075b3a] sm:min-h-[500px]">

                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -left-20 top-20 h-64 w-64 rounded-full border border-white/40" />
                    <div className="absolute left-16 top-32 h-40 w-40 rounded-full border border-white/30" />
                    <div className="absolute right-[-80px] bottom-[-80px] h-80 w-80 rounded-full border border-white/30" />
                  </div>

                  <div className="absolute left-6 top-6 sm:left-8 sm:top-8">

                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                      HERD DEVELOPMENT
                    </p>

                    <p className="mt-2 text-xs text-white/45">
                      A generational approach
                    </p>

                  </div>


                  <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 sm:inset-x-10">

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">

                      {[
                        ['01', 'DATA'],
                        ['02', 'SELECTION'],
                        ['03', 'BREEDING'],
                      ].map(([number, label]) => (
                        <div
                          key={number}
                          className="rounded-[18px] border border-white/15 bg-white/[0.07] p-4 backdrop-blur-sm sm:p-5"
                        >
                          <p className="text-[8px] font-bold text-[#72B943]">
                            {number}
                          </p>

                          <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.14em] text-white sm:text-[10px]">
                            {label}
                          </p>
                        </div>
                      ))}

                    </div>


                    <div className="mx-auto my-3 flex items-center justify-center">

                      <div className="h-px flex-1 bg-white/15" />

                      <span className="mx-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[8px] text-[#72B943]">
                        →
                      </span>

                      <div className="h-px flex-1 bg-white/15" />

                    </div>


                    <div className="rounded-[20px] border border-[#72B943]/30 bg-[#07100D]/30 p-5 text-center backdrop-blur-sm sm:p-6">

                      <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                        LONG-TERM OUTCOME
                      </p>

                      <p className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                        Genetic Progress
                      </p>

                    </div>

                  </div>


                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8">

                    <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                      TEJAYS AGRI
                    </p>

                    <FaDna className="text-[#72B943]/50" />

                  </div>

                </div>

              </div>

            </div>


            <div
              data-aos="fade-left"
              className="text-center lg:text-left"
            >

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                03 / GENETIC IMPROVEMENT
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                Better
                <br />
                decisions.
                <br />
                <span className="text-[#075b3a] dark:text-[#72B943]">
                  Every generation.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-black/50 sm:text-base sm:leading-8 lg:mx-0 dark:text-white/45">
                A planned genetics programme can combine reproductive
                technologies, animal records and performance data to support
                continuous genetic improvement across the herd.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3 text-left sm:gap-4">

                <div className="rounded-[18px] border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#101c18] sm:p-5">

                  <FaChartLine className="text-lg text-[#075b3a] dark:text-[#72B943]" />

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em]">
                    Performance
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-black/40 dark:text-white/35">
                    Data-informed herd development.
                  </p>

                </div>


                <div className="rounded-[18px] border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#101c18] sm:p-5">

                  <FaDna className="text-lg text-[#075b3a] dark:text-[#72B943]" />

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em]">
                    Genetics
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-black/40 dark:text-white/35">
                    Long-term genetic progress.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ANIMAL HEALTH
      ========================================================== */}
      <section className="bg-[#f0f3ed] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32 dark:bg-[#0d1714]">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <div className="flex items-center justify-center gap-2 lg:justify-start">

                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                  04 / ANIMAL HEALTH
                </p>

              </div>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-8xl">
                Health is
                <br />
                the
                <br />
                <span className="text-[#075b3a] dark:text-[#72B943]">
                  foundation.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-md text-xs leading-6 text-black/45 sm:text-sm sm:leading-7 lg:mx-0 dark:text-white/40">
                Animal health, comfort and responsible care are central to
                developing a resilient and sustainable dairy ecosystem.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {healthSystems.map((item, index) => (
                <article
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="group relative min-h-[190px] overflow-hidden rounded-[20px] border border-black/10 bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#075b3a]/20 hover:bg-[#075b3a] hover:text-white sm:min-h-[215px] sm:rounded-[24px] sm:p-6 dark:border-white/10 dark:bg-[#101c18]"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-[9px] font-bold tracking-[0.2em] text-black/25 group-hover:text-white/45 dark:text-white/25">
                      {item.number}
                    </span>

                    <FaHeartbeat className="text-sm text-[#075b3a] transition group-hover:text-[#72B943] dark:text-[#72B943]" />

                  </div>

                  <h3 className="mt-10 text-lg font-semibold tracking-[-0.04em] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[10px] leading-5 text-black/45 transition group-hover:text-white/65 sm:text-[11px] sm:leading-6 dark:text-white/35">
                    {item.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#72B943] transition-all duration-500 group-hover:w-full" />

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          REPRODUCTIVE MANAGEMENT
      ========================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div
            data-aos="fade-up"
            className="rounded-[28px] border border-black/10 bg-white p-6 sm:rounded-[36px] sm:p-10 lg:p-14 dark:border-white/10 dark:bg-[#101c18]"
          >

            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">

              <div className="text-center lg:text-left">

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                  05 / REPRODUCTIVE MANAGEMENT
                </p>

                <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                  Every
                  <br />
                  generation
                  <br />
                  <span className="text-[#075b3a] dark:text-[#72B943]">
                    matters.
                  </span>
                </h2>

                <p className="mx-auto mt-7 max-w-md text-xs leading-6 text-black/45 sm:text-sm sm:leading-7 lg:mx-0 dark:text-white/40">
                  Reproductive management will form an important part of the
                  planned herd-development strategy, connecting animal health,
                  breeding decisions and long-term genetic progress.
                </p>

              </div>


              <div className="relative">

                <div className="absolute left-6 top-1/2 hidden h-px w-[calc(100%-48px)] -translate-y-1/2 bg-black/10 sm:block dark:bg-white/10" />

                <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    {
                      number: '01',
                      title: 'Health',
                      icon: FaHeartbeat,
                    },
                    {
                      number: '02',
                      title: 'Breeding',
                      icon: FaDna,
                    },
                    {
                      number: '03',
                      title: 'Records',
                      icon: FaChartLine,
                    },
                    {
                      number: '04',
                      title: 'Progress',
                      icon: FaArrowRight,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.number}
                        className="relative z-10 rounded-[20px] border border-black/10 bg-[#f7f7f2] p-5 text-left dark:border-white/10 dark:bg-[#0d1714]"
                      >

                        <span className="text-[8px] font-bold text-[#075b3a]/50 dark:text-[#72B943]/50">
                          {item.number}
                        </span>

                        <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#075b3a]/10 text-[#075b3a] dark:bg-[#72B943]/10 dark:text-[#72B943]">
                          <Icon className="text-sm" />
                        </div>

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em]">
                          {item.title}
                        </p>

                      </div>
                    )
                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CALF DEVELOPMENT
      ========================================================== */}
      <section className="bg-[#075b3a] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">

            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                06 / CALF DEVELOPMENT
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-8xl">
                The next
                <br />
                generation
                <br />
                <span className="text-[#72B943]">
                  starts early.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-md text-xs leading-6 text-white/45 sm:text-sm sm:leading-7 lg:mx-0">
                Early-life development is an important part of building a
                healthy, resilient herd. Dedicated facilities and monitoring
                are planned around this principle.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {calfSystems.map((item, index) => (
                <article
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="min-h-[190px] rounded-[22px] border border-white/10 bg-white/[0.06] p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#72B943]/40 hover:bg-white/[0.1] sm:min-h-[220px] sm:rounded-[26px] sm:p-6 lg:p-7"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#72B943]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <FaSeedling className="text-sm text-[#72B943]/70" />

                  </div>

                  <h3 className="mt-10 text-lg font-semibold tracking-[-0.04em] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[10px] leading-5 text-white/40 sm:text-[11px] sm:leading-6">
                    {item.text}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HERD DATA FLOW
      ========================================================== */}
      <section className="overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="mx-auto max-w-3xl text-center">

            <p
              data-aos="fade-up"
              className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]"
            >
              07 / DATA-DRIVEN HERD
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="80"
              className="mt-5 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-8xl"
            >
              From individual
              <br />
              records to
              <br />
              <span className="text-[#075b3a] dark:text-[#72B943]">
                herd insight.
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="mx-auto mt-7 max-w-2xl text-xs leading-6 text-black/45 sm:text-sm sm:leading-7 dark:text-white/40"
            >
              Connecting animal information across health, reproduction,
              growth and genetics can support more informed herd-level
              decision making.
            </p>

          </div>


          <div
            data-aos="fade-up"
            data-aos-delay="180"
            className="mt-14"
          >

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">

              {lifecycle.map((item, index) => (
                <div
                  key={item}
                  className="group relative min-h-[145px] overflow-hidden rounded-[20px] border border-black/10 bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:bg-[#075b3a] hover:text-white sm:min-h-[165px] sm:rounded-[24px] sm:p-6 dark:border-white/10 dark:bg-[#101c18]"
                >

                  <span className="text-[8px] font-bold tracking-[0.2em] text-black/25 group-hover:text-white/45 dark:text-white/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">

                    <p className="text-xs font-bold uppercase tracking-[0.1em] sm:text-sm">
                      {item}
                    </p>

                    {index < lifecycle.length - 1 && (
                      <span className="mt-4 block text-[#72B943] opacity-60">
                        →
                      </span>
                    )}

                  </div>

                </div>
              ))}

            </div>


            <div className="mt-3 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#075b3a]/20 dark:bg-[#72B943]/30" />

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-black/35 dark:text-white/30">
                CONNECTED HERD DEVELOPMENT
              </p>

              <span className="h-px w-10 bg-[#075b3a]/20 dark:bg-[#72B943]/30" />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RESPONSIBLE DEVELOPMENT
      ========================================================== */}
      <section className="bg-[#e8eee8] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28 dark:bg-[#0d1714]">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">

            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >

              <div className="flex items-center justify-center gap-2 lg:justify-start">

                <FaShieldAlt className="text-sm text-[#075b3a] dark:text-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                  RESPONSIBLE DEVELOPMENT
                </p>

              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-5xl lg:text-6xl">
                Technology should
                <br />
                strengthen
                <br />
                <span className="text-[#075b3a] dark:text-[#72B943]">
                  animal care.
                </span>
              </h2>

            </div>


            <div
              data-aos="fade-left"
              className="border-t border-black/10 pt-7 dark:border-white/10"
            >

              <p className="text-sm leading-7 text-black/55 sm:text-base sm:leading-8 dark:text-white/45">
                TEJAYS AGRI&apos;s approach to genetics is intended to work
                alongside animal welfare, veterinary care and responsible
                herd management. The objective is not simply genetic
                improvement, but a stronger and more sustainable dairy system.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">

                <div className="rounded-[18px] bg-white p-5 text-left dark:bg-[#101c18]">

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075b3a] dark:text-[#72B943]">
                    CARE
                  </p>

                  <p className="mt-3 text-xs font-semibold">
                    Animal welfare
                  </p>

                </div>

                <div className="rounded-[18px] bg-white p-5 text-left dark:bg-[#101c18]">

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075b3a] dark:text-[#72B943]">
                    DATA
                  </p>

                  <p className="mt-3 text-xs font-semibold">
                    Informed decisions
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DEVELOPMENT STATUS
      ========================================================== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="mx-auto max-w-2xl text-center">

            <div className="flex items-center justify-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                DEVELOPMENT STATUS
              </p>

            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Building the
              <br />
              <span className="text-[#075b3a] dark:text-[#72B943]">
                foundation.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-black/45 sm:text-sm sm:leading-7 dark:text-white/40">
              Genetics, reproductive management and veterinary capabilities
              are part of the planned development pathway for the TEJAYS AGRI
              dairy ecosystem.
            </p>

          </div>


          <div
            data-aos="fade-up"
            className="mx-auto mt-12 max-w-5xl rounded-[26px] border border-black/10 bg-white p-5 sm:rounded-[32px] sm:p-8 dark:border-white/10 dark:bg-[#101c18]"
          >

            <div className="grid gap-3 sm:grid-cols-3">

              <div className="rounded-[18px] bg-[#f2f5ef] p-5 text-left dark:bg-[#0d1714]">

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#075b3a] dark:text-[#72B943]">
                  PHASE
                </p>

                <p className="mt-3 text-xl font-semibold tracking-[-0.04em]">
                  Planned
                </p>

                <p className="mt-2 text-[10px] leading-5 text-black/40 dark:text-white/35">
                  Capabilities under development.
                </p>

              </div>


              <div className="rounded-[18px] bg-[#f2f5ef] p-5 text-left dark:bg-[#0d1714]">

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#075b3a] dark:text-[#72B943]">
                  FOCUS
                </p>

                <p className="mt-3 text-xl font-semibold tracking-[-0.04em]">
                  Herd Quality
                </p>

                <p className="mt-2 text-[10px] leading-5 text-black/40 dark:text-white/35">
                  Genetics, health and development.
                </p>

              </div>


              <div className="rounded-[18px] bg-[#075b3a] p-5 text-left text-white">

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                  VISION
                </p>

                <p className="mt-3 text-xl font-semibold tracking-[-0.04em]">
                  Long-Term Progress
                </p>

                <p className="mt-2 text-[10px] leading-5 text-white/50">
                  Building a resilient future herd.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">

        <div
          data-aos="fade-up"
          className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#07100D] px-6 py-12 text-white sm:rounded-[34px] sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        >

          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#72B943]/10 sm:h-[500px] sm:w-[500px]" />

          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-[#72B943]/10 sm:h-[450px] sm:w-[450px]" />

          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#075b3a]/20 to-transparent" />


          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-16">

            <div className="text-center lg:text-left">

              <div className="flex items-center justify-center gap-2 lg:justify-start">

                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                  THE NEXT GENERATION
                </p>

              </div>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl md:text-7xl lg:text-8xl">
                Stronger herds.
                <br />
                <span className="text-[#72B943]">
                  Smarter future.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-xs leading-6 text-white/45 sm:text-sm sm:leading-7 lg:mx-0">
                Developing a healthier, stronger and more sustainable herd
                through planned genetics, responsible animal care and
                data-informed decision making.
              </p>

            </div>


            <div className="text-center lg:text-left">

              <Link
                to="/smart-dairy"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#72B943] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#07100D] transition hover:bg-white"
              >
                Explore Smart Dairy

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <p className="mt-4 text-[8px] uppercase tracking-[0.22em] text-white/25">
                TEJAYS AGRI • GROWING FOR THE FUTURE
              </p>

            </div>

          </div>


          <div className="relative z-10 mt-12 border-t border-white/10 pt-5">

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[7px] font-bold uppercase tracking-[0.25em] text-white/25 lg:justify-start">

              <span>Genetics</span>
              <span>Animal Health</span>
              <span>Reproductive Management</span>
              <span>Calf Development</span>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}