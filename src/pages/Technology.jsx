import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaMicrochip,
  FaNetworkWired,
  FaRobot,
  FaChartLine,
  FaSatelliteDish,
  FaShieldAlt,
} from 'react-icons/fa'

import { assetPath } from '../utils/assetPath'
import { usePageMeta } from '../hooks/usePageMeta'

const technologyImage = assetPath('/images/tejays-agri-hero3.jpg')

const technologySystems = [
  {
    number: '01',
    title: 'CONNECTED DATA',
    label: 'DATA',
    icon: FaNetworkWired,
    text: 'Connecting information from dairy, agriculture, environment and operations into one intelligent information layer.',
  },
  {
    number: '02',
    title: 'AI & ANALYTICS',
    label: 'INTELLIGENCE',
    icon: FaMicrochip,
    text: 'Future AI capabilities can help identify patterns, generate insights and support better operational decisions.',
  },
  {
    number: '03',
    title: 'AUTOMATION',
    label: 'OPERATIONS',
    icon: FaRobot,
    text: 'Technology-led automation designed to improve consistency, visibility and operational efficiency.',
  },
  {
    number: '04',
    title: 'REAL-TIME MONITORING',
    label: 'MONITORING',
    icon: FaChartLine,
    text: 'Connected monitoring systems designed to make important operational signals visible in real time.',
  },
  {
    number: '05',
    title: 'SMART CONNECTIVITY',
    label: 'CONNECTIVITY',
    icon: FaSatelliteDish,
    text: 'Digital connectivity linking infrastructure, devices and information across the wider ecosystem.',
  },
  {
    number: '06',
    title: 'SECURE INFRASTRUCTURE',
    label: 'SECURITY',
    icon: FaShieldAlt,
    text: 'A technology foundation designed around reliable systems, controlled access and secure data movement.',
  },
]

const technologyCards = [
  {
    title: 'AI COMMAND CENTRE',
    text: 'A future intelligence layer designed to bring operational data together for faster visibility and decision support.',
  },
  {
    title: 'IOT & SENSORS',
    text: 'Connected devices can capture signals across animals, equipment, environment and resource systems.',
  },
  {
    title: 'COMPUTER VISION',
    text: 'Exploratory vision systems for movement, behaviour and operational observations.',
  },
  {
    title: 'PREDICTIVE INSIGHTS',
    text: 'Future analytics capabilities designed to move from reactive monitoring toward earlier insights.',
  },
]

const technologyFlow = [
  'COLLECT',
  'CONNECT',
  'ANALYSE',
  'PREDICT',
  'DECIDE',
]

export default function Technology() {
  usePageMeta(
    'Tejays Agri | Technology',
    'Explore TEJAYS AGRI technology concepts across AI, connected data, automation, monitoring and intelligent agriculture.'
  )

  return (
    <main className="overflow-hidden bg-[#F7F7F2] text-[#0B1210] dark:bg-[#07100D] dark:text-[#EDF7F2]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate min-h-[570px] overflow-hidden bg-[#07100D] text-white sm:min-h-[620px] lg:min-h-[660px]">

        <div className="absolute inset-0">
          <img
            src={technologyImage}
            alt="Tejays Agri technology ecosystem"
            className="h-full w-full object-cover object-center opacity-45 transition-transform duration-[1800ms] hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-[#07100D]/75" />

          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#040706] via-[#07100D]/96 to-transparent lg:w-[72%]" />

          <div className="absolute inset-y-0 left-[42%] hidden w-[24%] bg-[#07100D]/50 blur-[70px] lg:block" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07100D] to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07100D] to-transparent" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(114,185,67,1)_1px,transparent_1px),linear-gradient(90deg,rgba(114,185,67,1)_1px,transparent_1px)] [background-size:88px_88px]" />
        </div>

        <div className="relative mx-auto flex min-h-[570px] max-w-[1500px] items-center justify-center px-5 py-24 text-center sm:min-h-[620px] sm:px-8 lg:min-h-[660px] lg:justify-start lg:px-12 lg:text-left">

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="w-full max-w-[720px]"
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_15px_rgba(114,185,67,0.8)]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-[9px]">
                Technology
              </span>
            </div>

            <h1 className="mt-7 text-[clamp(3rem,7vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              <span className="block text-white">
                FROM DATA.
              </span>

              <span className="block text-white/25">
                TO
              </span>

              <span className="block text-[#72B943]">
                INTELLIGENCE.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[590px] text-[13px] leading-6 text-white/55 sm:text-[14px] sm:leading-7 lg:mx-0">
              Technology is envisioned as the digital layer connecting
              biological systems, operational information, automation
              and future decision intelligence across TEJAYS AGRI.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#72B943] px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#07100D] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(114,185,67,0.18)]"
              >
                Start a conversation

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/smart-dairy"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943] hover:bg-[#72B943]/10 hover:text-[#72B943]"
              >
                Explore Smart Dairy

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {[
                'AI',
                'IoT',
                'Automation',
                'Data',
                'Connectivity',
              ].map((item) => (
                <span
                  key={item}
                  className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#72B943]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-7 right-6 hidden items-center gap-3 lg:flex xl:right-12">
            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/25">
              Technology direction
            </span>

            <span className="h-px w-10 bg-[#72B943]/60" />

            <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#72B943]">
              FUTURE READY
            </span>
          </div>

        </div>
      </section>


      {/* =========================================================
          CORE IDEA
      ========================================================= */}
      <section className="bg-white px-5 py-16 transition-colors duration-500 dark:bg-[#0B1511] sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075B3A]/55 dark:text-[#72B943]/65">
                The technology idea
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.4rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
                Connect
                <br />
                <span className="text-[#075B3A] dark:text-[#72B943]">
                  everything.
                </span>
              </h2>
            </div>

            <div
              data-aos="fade-left"
              className="mx-auto max-w-[680px] text-center lg:mx-0 lg:ml-auto lg:text-left"
            >
              <p className="text-sm leading-7 text-[#4F5D56] dark:text-[#C4D1CB] sm:text-base">
                Technology becomes more valuable when information from
                different parts of the ecosystem can work together.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#7A867F] dark:text-white/45 sm:text-base">
                The TEJAYS AGRI vision is to build a connected technology
                layer where data can be collected, understood and used
                to support smarter operations.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-10 bg-[#72B943]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                  Intelligent infrastructure
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          TECHNOLOGY FLOW
      ========================================================= */}
      <section className="bg-[#F4F6F1] px-5 py-16 dark:bg-[#0D1814] sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div
            data-aos="fade-up"
            className="text-center"
          >
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075B3A] dark:text-[#72B943]">
              Intelligence workflow
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              DATA
              <br />
              <span className="text-[#075B3A] dark:text-[#72B943]">
                BECOMES INTELLIGENCE.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-[#0B1210]/10 bg-[#0B1210]/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-5">

            {technologyFlow.map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="group relative bg-white p-5 text-center transition-all duration-500 hover:bg-[#075B3A] dark:bg-[#101C18] dark:hover:bg-[#075B3A]"
              >
                <span className="text-[8px] font-bold text-[#075B3A]/40 transition-colors duration-300 group-hover:text-[#72B943] dark:text-white/25">
                  0{index + 1}
                </span>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0B1210] transition-colors duration-300 group-hover:text-white dark:text-white">
                  {item}
                </p>

                {index < technologyFlow.length - 1 && (
                  <FaArrowRight className="mx-auto mt-4 hidden text-[8px] text-[#075B3A]/20 group-hover:text-[#72B943] sm:block" />
                )}
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          SYSTEM ARCHITECTURE
      ========================================================= */}
      <section className="bg-white px-5 py-16 dark:bg-[#0B1511] sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div
            data-aos="fade-up"
            className="mx-auto max-w-[900px] text-center"
          >
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075B3A] dark:text-[#72B943]">
              Technology architecture
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              SIX SYSTEMS.
              <br />
              <span className="text-[#075B3A] dark:text-[#72B943]">
                ONE DIGITAL LAYER.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-3">

            {technologySystems.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="group rounded-[22px] border border-[#0B1210]/10 bg-[#F7F7F2] p-5 text-left transition-all duration-500 hover:-translate-y-2 hover:border-[#075B3A] hover:bg-[#075B3A] hover:shadow-[0_22px_55px_rgba(7,91,58,0.12)] dark:border-white/10 dark:bg-[#101C18] dark:hover:border-[#72B943] dark:hover:bg-[#075B3A] sm:rounded-[24px] sm:p-7"
                >

                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold tracking-[0.2em] text-[#075B3A]/40 transition-colors duration-300 group-hover:text-[#72B943] dark:text-white/25">
                      {item.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#075B3A] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#72B943] group-hover:text-[#07100D] dark:bg-white/5 dark:text-[#72B943]">
                      <Icon className="text-[10px]" />
                    </span>
                  </div>

                  <p className="mt-7 text-[8px] font-bold uppercase tracking-[0.2em] text-[#075B3A] transition-colors duration-300 group-hover:text-[#72B943] dark:text-[#72B943]">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-[14px] font-semibold leading-tight tracking-[-0.02em] text-[#0B1210] transition-colors duration-300 group-hover:text-white sm:text-lg dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[9px] leading-5 text-[#718079] transition-colors duration-300 group-hover:text-white/65 sm:text-[10px] dark:text-white/40">
                    {item.text}
                  </p>

                  <div className="mt-7 h-px w-8 bg-[#72B943] transition-all duration-500 group-hover:w-full" />

                </article>
              )
            })}

          </div>
        </div>
      </section>


      {/* =========================================================
          AI / TECHNOLOGY
      ========================================================= */}
      <section className="bg-[#07100D] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                Future intelligence
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.3rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
                See more.
                <br />
                <span className="text-white/25">
                  decide
                </span>
                <br />
                better.
              </h2>

              <p className="mx-auto mt-7 max-w-[430px] text-[11px] leading-6 text-white/40 lg:mx-0">
                Future AI and connected technology capabilities can help
                transform fragmented information into more useful
                operational intelligence.
              </p>
            </div>

            <div
              data-aos="fade-left"
              className="grid grid-cols-2 gap-3"
            >
              {technologyCards.map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-[22px] border border-white/10 bg-[#0D1814] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#72B943]/70 hover:bg-[#075B3A] hover:shadow-[0_24px_60px_rgba(114,185,67,0.12)] sm:rounded-[24px] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold text-[#72B943]">
                      0{index + 1}
                    </span>

                    <FaArrowRight className="text-[9px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#72B943]" />
                  </div>

                  <h3 className="mt-8 text-[12px] font-semibold leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#72B943] sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[9px] leading-5 text-white/35 transition-colors duration-300 group-hover:text-white/70 sm:text-[10px]">
                    {item.text}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#72B943]/60 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          PROPOSED NOTE
      ========================================================= */}
      <section className="bg-white px-5 py-14 dark:bg-[#0B1511] sm:px-8 lg:px-12">
        <div
          data-aos="zoom-in"
          className="mx-auto max-w-[1050px] rounded-[26px] border border-[#075B3A]/10 bg-[#F4F6F1] px-6 py-8 text-center transition-all duration-500 hover:border-[#72B943] hover:shadow-[0_20px_55px_rgba(7,91,58,0.08)] dark:border-white/10 dark:bg-[#101C18]"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#075B3A]/10 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
              Proposed technology
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-[820px] text-[10px] leading-5 text-[#66746C] dark:text-white/45 sm:text-[11px]">
            The technology capabilities presented across this page represent
            planned, conceptual or exploratory directions for the future
            unless specifically stated otherwise.
          </p>
        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#075B3A] px-5 py-16 text-center text-white sm:px-8 sm:py-20 lg:px-12">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#72B943]/20 blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-black/20 blur-[140px]" />
        </div>

        <div
          data-aos="fade-up"
          className="relative mx-auto max-w-[950px]"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
            TEJAYS AGRI
          </p>

          <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            Technology
            <br />
            <span className="text-white/40">
              that connects.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[580px] text-[10px] leading-5 text-white/60">
            Explore the wider TEJAYS AGRI ecosystem and see how technology
            connects dairy, agriculture, nutrition and sustainability.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/smart-dairy"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#075B3A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B943] hover:text-[#07100D] sm:w-auto"
            >
              Explore Smart Dairy

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943] hover:bg-white/10 hover:text-[#72B943] sm:w-auto"
            >
              Start a conversation

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>

      </section>

    </main>
  )
}