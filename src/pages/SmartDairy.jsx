import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaHeartbeat,
  FaSeedling,
  FaTint,
  FaLeaf,
  FaMicrochip,
  FaChartLine,
} from 'react-icons/fa'

import { assetPath } from '../utils/assetPath'
import { usePageMeta } from '../hooks/usePageMeta'

const smartImage = assetPath('/images/smart-dairy.svg')

const systems = [
  {
    number: '01',
    title: 'HERD INTELLIGENCE',
    label: 'ANIMAL',
    icon: FaHeartbeat,
    text: 'Identification, activity and health signals designed to create better visibility across the herd.',
  },
  {
    number: '02',
    title: 'PRECISION FEED',
    label: 'NUTRITION',
    icon: FaSeedling,
    text: 'Connected feeding systems focused on nutrition, efficiency and animal performance.',
  },
  {
    number: '03',
    title: 'MILK INTELLIGENCE',
    label: 'MILK',
    icon: FaTint,
    text: 'Monitoring milk performance and quality parameters through connected dairy operations.',
  },
  {
    number: '04',
    title: 'ENVIRONMENT',
    label: 'CLIMATE',
    icon: FaLeaf,
    text: 'Sensor-led visibility into environmental conditions and animal comfort.',
  },
  {
    number: '05',
    title: 'DATA INTELLIGENCE',
    label: 'DATA',
    icon: FaMicrochip,
    text: 'Bringing different operational signals together to support better decisions.',
  },
  {
    number: '06',
    title: 'OPERATIONAL INSIGHT',
    label: 'DECISION',
    icon: FaChartLine,
    text: 'A connected information layer designed to turn signals into useful operational insight.',
  },
]

const technologyCards = [
  {
    title: 'CONNECTED SENSORS',
    text: 'Future-ready sensing across animals, environment and operations.',
  },
  {
    title: 'ANIMAL MONITORING',
    text: 'Continuous visibility designed around animal activity and wellbeing.',
  },
  {
    title: 'COMPUTER VISION',
    text: 'Exploratory vision systems for movement and behavioural insights.',
  },
  {
    title: 'AI ALERTS',
    text: 'A future intelligence layer for patterns, anomalies and early signals.',
  },
]

export default function SmartDairy() {
  usePageMeta(
    'Tejays Agri | Smart Dairy',
    'Explore Tejays Agri’s conceptual smart dairy framework connecting herd, feed, milk, environment and operational intelligence.'
  )

  return (
    <main className="overflow-hidden bg-[#F7F7F2] text-[#0B1210] dark:bg-[#07100D] dark:text-[#EDF7F2]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#07100D] text-white sm:min-h-[600px] lg:min-h-[650px]">

        <div className="absolute inset-0">
          <img
            src={smartImage}
            alt="Tejays Agri smart dairy"
            className="h-full w-full object-cover object-center opacity-55 transition-transform duration-[1800ms] hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-[#07100D]/65" />

          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#050908] via-[#07100D]/95 to-transparent lg:w-[72%]" />

          <div className="absolute inset-y-0 left-[40%] hidden w-[25%] bg-[#07100D]/50 blur-[65px] lg:block" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07100D] to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07100D] to-transparent" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(114,185,67,1)_1px,transparent_1px),linear-gradient(90deg,rgba(114,185,67,1)_1px,transparent_1px)] [background-size:90px_90px]" />
        </div>

        <div className="relative mx-auto flex min-h-[560px] max-w-[1500px] items-center justify-center px-5 py-24 text-center sm:min-h-[600px] sm:px-8 lg:min-h-[650px] lg:justify-start lg:px-12 lg:text-left">

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="w-full max-w-[680px]"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_14px_rgba(114,185,67,0.8)]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/60 sm:text-[9px]">
                Smart Dairy
              </span>
            </div>

            <h1 className="mt-7 text-[clamp(3.1rem,7vw,7.8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              <span className="block text-white">
                A DAIRY.
              </span>

              <span className="block text-white/25">
                THAT
              </span>

              <span className="block text-[#72B943]">
                THINKS.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[560px] text-[13px] leading-6 text-white/55 sm:text-[14px] sm:leading-7 lg:mx-0">
              A conceptual framework connecting animals, nutrition,
              milk, environment and operational intelligence into one
              future-focused dairy system.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/technology"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#72B943] px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#07100D] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(114,185,67,0.18)]"
              >
                Explore technology
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943] hover:bg-[#72B943]/10 hover:text-[#72B943]"
              >
                Start a conversation
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {['Herd', 'Feed', 'Milk', 'Environment', 'Data'].map((item) => (
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
              Future-focused dairy architecture
            </span>

            <span className="h-px w-10 bg-[#72B943]/60" />

            <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#72B943]">
              PROPOSED
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
                The idea
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.3rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
                One dairy.
                <br />
                <span className="text-[#075B3A] dark:text-[#72B943]">
                  many signals.
                </span>
              </h2>
            </div>

            <div
              data-aos="fade-left"
              className="mx-auto max-w-[680px] text-center lg:mx-0 lg:ml-auto lg:text-left"
            >
              <p className="text-sm leading-7 text-[#4F5D56] dark:text-[#C4D1CB] sm:text-base">
                A smart dairy brings biological and operational information
                together instead of treating each activity as an isolated
                process.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#7A867F] dark:text-white/45 sm:text-base">
                The vision is to create a connected environment where the
                right signals become visible at the right time — helping
                teams understand what is happening across the dairy system.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-10 bg-[#72B943]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                  Connected by design
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SYSTEMS
      ========================================================= */}
      <section className="bg-[#F4F6F1] px-5 py-16 dark:bg-[#0D1814] sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div
            data-aos="fade-up"
            className="mx-auto max-w-[900px] text-center"
          >
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075B3A] dark:text-[#72B943]">
              Smart dairy architecture
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              EVERY LAYER
              <br />
              <span className="text-[#075B3A] dark:text-[#72B943]">
                CONNECTS.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[11px] leading-6 text-[#718079] dark:text-white/40">
              Six connected areas form the conceptual operating framework
              behind the TEJAYS AGRI Smart Dairy vision.
            </p>
          </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-2">
  {systems.map((item, index) => {
    const Icon = item.icon

    return (
      <article
        key={item.number}
        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
        data-aos-delay={index * 70}
        className="group overflow-hidden rounded-[20px] border border-[#0B1210]/10 bg-white text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#075B3A] hover:bg-[#075B3A] hover:shadow-[0_22px_55px_rgba(7,91,58,0.12)] sm:rounded-[24px] dark:border-white/10 dark:bg-[#101C18] dark:hover:border-[#72B943]/60 dark:hover:bg-[#075B3A]"
      >
        <div className="p-4 sm:grid sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-5 sm:p-7">

          {/* NUMBER */}
          <div className="flex justify-start">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#075B3A]/10 bg-[#F7F7F2] text-[8px] font-bold text-[#075B3A] transition-all duration-300 group-hover:border-[#72B943] group-hover:bg-[#72B943] group-hover:text-[#07100D] dark:border-white/10 dark:bg-white/5 dark:text-[#72B943]">
              {item.number}
            </span>
          </div>

          {/* CONTENT */}
          <div className="mt-4 text-left sm:mt-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h3 className="text-[10px] font-bold leading-tight tracking-[0.02em] text-[#0B1210] transition-colors duration-300 group-hover:text-white sm:text-sm dark:text-white">
                {item.title}
              </h3>

              <span className="rounded-full border border-[#075B3A]/10 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.16em] text-[#075B3A]/45 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/60 dark:border-white/10 dark:text-white/30">
                {item.label}
              </span>
            </div>

            <p className="mt-2 text-[8px] leading-4 text-[#718079] transition-colors duration-300 group-hover:text-white/65 sm:text-[9px] sm:leading-5 dark:text-white/40">
              {item.text}
            </p>
          </div>

          {/* ICON */}
          <div className="mt-4 flex justify-start sm:mt-0 sm:justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F1] text-[#075B3A] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#72B943] group-hover:text-[#07100D] dark:bg-white/5 dark:text-[#72B943]">
              <Icon className="text-[9px]" />
            </span>
          </div>

        </div>
      </article>
    )
  })}
</div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="bg-[#07100D] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                Technology direction
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.3rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
                From
                <br />
                <span className="text-white/25">
                  signals
                </span>
                <br />
                to insight.
              </h2>

              <p className="mx-auto mt-7 max-w-[430px] text-[11px] leading-6 text-white/40 lg:mx-0">
                Connected technologies can create a clearer picture of the
                dairy environment and support future decision intelligence.
              </p>
            </div>

            <div
              data-aos="fade-left"
              className="grid grid-cols-2 gap-3 sm:grid-cols-2"
            >
              {technologyCards.map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-[20px] border border-white/10 bg-[#0D1814] p-4 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#72B943]/70 hover:bg-[#075B3A] hover:shadow-[0_24px_60px_rgba(114,185,67,0.12)] sm:rounded-[24px] sm:p-6 sm:text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#72B943]">
                      0{index + 1}
                    </span>

                    <FaArrowRight className="text-[9px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#72B943]" />
                  </div>

                  <h3 className="mt-7 text-[14px] font-semibold leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#72B943] sm:mt-10 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[9px] leading-5 text-white/35 transition-colors duration-300 group-hover:text-white/70 sm:text-[10px]">
                    {item.text}
                  </p>

                  <div className="mx-auto mt-6 h-px w-8 bg-[#72B943]/60 transition-all duration-500 group-hover:w-full sm:mx-0 sm:mt-7" />
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          STATUS NOTE
      ========================================================= */}
      <section className="bg-white px-5 py-14 dark:bg-[#0B1511] sm:px-8 lg:px-12">
        <div
          data-aos="zoom-in"
          className="mx-auto max-w-[1050px] rounded-[26px] border border-[#075B3A]/10 bg-[#F4F6F1] px-6 py-8 text-center transition-all duration-500 hover:border-[#72B943] hover:shadow-[0_20px_55px_rgba(7,91,58,0.08)] dark:border-white/10 dark:bg-[#101C18]"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#075B3A]/10 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
              Proposed technology direction
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-[820px] text-[10px] leading-5 text-[#66746C] dark:text-white/45 sm:text-[11px]">
            The systems and capabilities presented on this page represent
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
            Smart Dairy
          </p>

          <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            Smarter dairy.
            <br />
            <span className="text-white/40">
              Connected thinking.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[580px] text-[10px] leading-5 text-white/60">
            Explore the technology and connected systems shaping the
            future-focused Smart Dairy vision.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/technology"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#075B3A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B943] hover:text-[#07100D] sm:w-auto"
            >
              Explore technology

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