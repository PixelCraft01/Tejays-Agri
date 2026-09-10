import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { usePageMeta } from '../hooks/usePageMeta'
import { assetPath } from '../utils/assetPath'

const nutritionImage = assetPath('/images/ecosystem/nutrition.png')
const wheyImage = assetPath('/images/ecosystem/whey.png')
const cheeseImage = assetPath('/images/ecosystem/cheese.png')
const milkImage = assetPath('/images/ecosystem/milk.png')
const processingImage = assetPath('/images/ecosystem/processing.png')

const proteinIngredients = [
  {
    number: '01',
    name: 'WPC',
    fullName: 'Whey Protein Concentrate',
    description:
      'A future protein ingredient pathway built around whey recovery and value creation.',
  },
  {
    number: '02',
    name: 'WPI',
    fullName: 'Whey Protein Isolate',
    description:
      'A future opportunity for higher-purity whey protein ingredient development.',
  },
  {
    number: '03',
    name: 'MILK PROTEINS',
    fullName: 'Dairy Protein Platform',
    description:
      'Exploring milk-derived protein opportunities for future nutrition applications.',
  },
  {
    number: '04',
    name: 'CASEIN',
    fullName: 'Functional Dairy Protein',
    description:
      'A potential future ingredient pathway for functional food and nutrition products.',
  },
]

const nutritionApplications = [
  {
    number: '01',
    title: 'HIGH-PROTEIN DAIRY',
    text: 'Future dairy products designed around increased protein value and evolving nutrition needs.',
  },
  {
    number: '02',
    title: 'PROTEIN BEVERAGES',
    text: 'Future beverage concepts connecting dairy-derived protein ingredients with convenient nutrition.',
  },
  {
    number: '03',
    title: 'SPORTS NUTRITION',
    text: 'Potential applications for protein ingredients across performance and active-nutrition categories.',
  },
  {
    number: '04',
    title: 'FUTURE NUTRITION',
    text: 'Exploring new product formats that connect dairy science, protein technology and consumer nutrition.',
  },
]

const nutritionFlow = [
  {
    number: '01',
    title: 'CHEESE',
    text: 'Value-added dairy processing',
  },
  {
    number: '02',
    title: 'WHEY',
    text: 'Recovery of a valuable dairy stream',
  },
  {
    number: '03',
    title: 'PROTEIN',
    text: 'Ingredient development pathways',
  },
  {
    number: '04',
    title: 'NUTRITION',
    text: 'Future food and beverage applications',
  },
]

const futureSignals = [
  'Protein ingredients',
  'Whey recovery',
  'High-protein dairy',
  'Protein beverages',
  'Sports nutrition',
  'Future formulations',
]

export default function Nutrition() {
  usePageMeta(
    'Tejays Agri | Nutrition',
    'TEJAYS AGRI is building a future-facing nutrition strategy around whey recovery, protein ingredients and next-generation dairy nutrition.'
  )

  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#0b1210] dark:bg-[#0b1210] dark:text-[#edf7f2]">

      {/* =========================================================
          01 — HERO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#07100D] text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src={nutritionImage}
            alt="TEJAYS AGRI Nutrition"
            className="h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-[#07100d]" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07100D] via-[#07100D]/85 to-[#07100D]/20" />

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
                TEJAYS AGRI / NUTRITION
              </span>

            </div>


            {/* HEADING */}
            <h1
              className="
          mt-8
          text-[clamp(3.4rem,8vw,8.5rem)]
          font-semibold leading-[0.82]
          tracking-[-0.085em]
        "
            >
              FROM DAIRY.
              <br />

              <span className="text-white/25">
                TO
              </span>

              <br />

              <span className="text-[#72B943]">
                NUTRITION.
              </span>
            </h1>


            {/* DESCRIPTION */}
            <p
              className="
          mx-auto mt-8 max-w-2xl
          text-sm leading-7 text-white/50
          sm:text-base
          lg:mx-0
        "
            >
              Building a future-facing nutrition ecosystem where cheese,
              whey, protein ingredients and nutrition can become connected
              stages of dairy value creation.
            </p>


            {/* BUTTONS */}
            <div
              className="
          mt-9 flex flex-col items-center justify-center gap-3
          sm:flex-row
          lg:justify-start
        "
            >

              <a
                href="#farm-to-protein"
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
                Explore Nutrition

                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>


              <Link
                to="/contact"
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
                Talk to TEJAYS AGRI

                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

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
    02 — FARM TO PROTEIN
========================================================= */}
      <section
        id="farm-to-protein"
        className="px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-36 lg:text-left"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            {/* LEFT CONTENT */}
            <div
              data-aos="fade-right"
              className="mx-auto w-full max-w-xl lg:mx-0"
            >

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#075b3a] dark:text-[#72B943]">
                01 / FROM FARM TO PROTEIN
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                From
                <br />

                <span className="text-[#075b3a] dark:text-[#72B943]">
                  Farm
                </span>

                <br />

                to Protein.
              </h2>

              <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-black/50 dark:text-white/40 lg:mx-0">
                Nutrition is not a separate destination. It is a future layer
                of the integrated dairy ecosystem — connecting milk,
                processing, cheese, whey and protein.
              </p>

            </div>


            {/* RIGHT FLOW / CARDS */}
            <div
              data-aos="fade-left"
              className="relative"
            >
              {/* FLOW CONNECTOR */}
              <div className="pointer-events-none absolute left-[27px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-[#72B943]/10 via-[#075b3a]/20 to-[#72B943]/10 lg:block" />

              <div className="space-y-3 sm:space-y-4">

                {nutritionFlow.map((item, index) => (
                  <div key={item.number} className="relative">

                    {/* CARD */}
                    <div
                      className="
            group relative overflow-hidden
            rounded-[22px]
            border border-black/[0.07]
            bg-white
            px-4 py-4
            transition-all duration-500
            hover:-translate-y-1
            hover:border-[#72B943]/40
            hover:shadow-[0_20px_55px_rgba(7,91,58,0.09)]
            sm:rounded-[26px]
            sm:px-5 sm:py-5
            lg:grid
            lg:grid-cols-[58px_1fr_auto]
            lg:items-center
            lg:gap-6
            lg:rounded-[28px]
            lg:px-6 lg:py-6
            lg:hover:translate-x-2
            lg:hover:translate-y-0
            dark:border-white/10
            dark:bg-[#0d1814]
          "
                    >

                      {/* NUMBER */}
                      <div className="relative z-10 flex justify-center lg:justify-start">
                        <span
                          className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-[#075b3a]/10
                bg-[#f2f7f3]
                text-[9px] font-bold
                text-[#075b3a]
                transition-all duration-500
                group-hover:border-[#72B943]
                group-hover:bg-[#72B943]
                group-hover:text-[#07100D]
                sm:h-12 sm:w-12
                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-[#72B943]
              "
                        >
                          {item.number}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="mt-3 text-center lg:mt-0 lg:text-left">
                        <p className="mb-1 text-[7px] font-bold uppercase tracking-[0.25em] text-[#075b3a]/35 dark:text-white/25">
                          NUTRITION PATHWAY
                        </p>

                        <h3
                          className="
                text-xl font-semibold
                tracking-[-0.05em]
                text-[#0b1210]
                transition-colors duration-500
                group-hover:text-[#075b3a]
                sm:text-2xl
                lg:text-3xl
                dark:text-white
                dark:group-hover:text-[#72B943]
              "
                        >
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[9px] leading-4 text-black/40 sm:text-[10px] sm:leading-5 dark:text-white/35">
                          {item.text}
                        </p>
                      </div>

                      {/* FLOW ARROW */}
                      <div className="mt-3 flex justify-center lg:mt-0 lg:justify-end">
                        <span
                          className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-black/[0.07]
                text-sm text-[#075b3a]/40
                transition-all duration-500
                group-hover:border-[#72B943]/40
                group-hover:bg-[#72B943]/10
                group-hover:text-[#075b3a]
                dark:border-white/10
                dark:text-white/25
                dark:group-hover:text-[#72B943]
              "
                        >
                          ↗
                        </span>
                      </div>

                      {/* HOVER ACCENT */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#72B943] transition-all duration-500 group-hover:w-full" />

                      {/* BACKGROUND NUMBER */}
                      <span
                        className="
              pointer-events-none absolute
              -right-2 bottom-[-18px]
              select-none
              text-[90px] font-black
              leading-none
              tracking-[-0.12em]
              text-[#075b3a]/[0.025]
              transition-all duration-700
              group-hover:text-[#075b3a]/[0.05]
              dark:text-white/[0.025]
            "
                      >
                        {item.number}
                      </span>

                    </div>

                    {/* MOBILE / TABLET FLOW ARROW */}
                    {index < nutritionFlow.length - 1 && (
                      <div className="flex h-6 items-center justify-center lg:hidden">
                        <span className="text-[11px] text-[#72B943]">
                          ↓
                        </span>
                      </div>
                    )}

                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          03 — WHEY VALUE
      ========================================================= */}
      <section className="bg-[#0e1915] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">

            {/* IMAGE SIDE */}
            <div
              data-aos="zoom-in"
              className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[#07100D] sm:rounded-[34px]">

                <img
                  src={wheyImage}
                  alt="Whey"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07100D] via-[#07100D]/25 to-transparent" />

                {/* TOP LABEL */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.25em] text-white/60 backdrop-blur-sm">
                    02 / VALUE STREAM
                  </span>
                </div>

                {/* IMAGE TEXT */}
                <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-7 sm:right-7">

                  <div className="mb-4 h-[2px] w-10 bg-[#72B943] sm:w-12" />

                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                    WHEY RECOVERY
                  </p>

                  <h3 className="mt-2 text-4xl font-semibold tracking-[-0.07em] sm:text-5xl">
                    WHEY
                  </h3>

                </div>

                {/* CORNER NUMBER */}
                <div className="absolute bottom-5 right-5 text-[70px] font-black leading-none tracking-[-0.12em] text-white/[0.06] sm:bottom-7 sm:right-7 sm:text-[90px]">
                  02
                </div>

              </div>

              {/* SMALL DETAIL BELOW IMAGE */}
              <div className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded-[18px] border border-white/10 bg-white/10">
                <div className="bg-[#101d18] px-3 py-4 text-center">
                  <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-white/25">
                    SOURCE
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-white/65">
                    CHEESE
                  </p>
                </div>

                <div className="bg-[#101d18] px-3 py-4 text-center">
                  <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-white/25">
                    STREAM
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-white/65">
                    WHEY
                  </p>
                </div>

                <div className="bg-[#101d18] px-3 py-4 text-center">
                  <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-white/25">
                    POTENTIAL
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-[#72B943]">
                    PROTEIN
                  </p>
                </div>
              </div>
            </div>


            {/* CONTENT SIDE */}
            <div
              data-aos="fade-left"
              className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left"
            >

              {/* EYEBROW */}
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                  02 / WHEY RECOVERY
                </p>
              </div>


              {/* HEADING */}
              <h2 className="mt-6 text-5xl font-semibold leading-[0.86] tracking-[-0.075em] sm:text-6xl md:text-7xl lg:mt-7 lg:text-8xl">
                A stream
                <br />
                with
                <br />
                <span className="text-[#72B943]">
                  more value.
                </span>
              </h2>


              {/* DESCRIPTION */}
              <p className="mx-auto mt-7 max-w-xl text-[11px] leading-6 text-white/40 sm:text-xs sm:leading-7 md:text-sm lg:mx-0">
                Cheese production creates whey. The nutrition strategy
                explores how recovery and further processing of this stream
                can create a pathway toward protein ingredients and future
                nutrition products.
              </p>


              {/* VALUE PATHWAY */}
              <div className="mx-auto mt-9 max-w-xl lg:mx-0">

                <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4 sm:p-5">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/30">
                      VALUE PATHWAY
                    </p>

                    <span className="text-[9px] text-[#72B943]">
                      01 — 04
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

                    <div className="rounded-[14px] bg-white/[0.04] px-3 py-3 text-left">
                      <span className="text-[7px] font-bold text-[#72B943]">
                        01
                      </span>
                      <p className="mt-1 text-[9px] font-medium leading-4 text-white/65">
                        Cheese production
                      </p>
                    </div>

                    <div className="rounded-[14px] bg-white/[0.04] px-3 py-3 text-left">
                      <span className="text-[7px] font-bold text-[#72B943]">
                        02
                      </span>
                      <p className="mt-1 text-[9px] font-medium leading-4 text-white/65">
                        Whey recovery
                      </p>
                    </div>

                    <div className="rounded-[14px] bg-white/[0.04] px-3 py-3 text-left">
                      <span className="text-[7px] font-bold text-[#72B943]">
                        03
                      </span>
                      <p className="mt-1 text-[9px] font-medium leading-4 text-white/65">
                        Protein ingredients
                      </p>
                    </div>

                    <div className="rounded-[14px] bg-[#72B943]/10 px-3 py-3 text-left">
                      <span className="text-[7px] font-bold text-[#72B943]">
                        04
                      </span>
                      <p className="mt-1 text-[9px] font-semibold leading-4 text-[#72B943]">
                        Nutrition
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* STATUS */}
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">

                <span className="inline-flex items-center gap-2 rounded-full border border-[#72B943]/25 bg-[#72B943]/10 px-4 py-2 text-[7px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />
                  FUTURE STRATEGY
                </span>

                <span className="text-[7px] uppercase tracking-[0.2em] text-white/25">
                  Planned pathway
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          04 — PROTEIN INGREDIENTS
      ========================================================= */}
      <section className="bg-white px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-36 lg:text-left dark:bg-[#0b1210]">

        <div className="mx-auto max-w-[1500px]">

          {/* SECTION HEADER */}
          <div
            data-aos="fade-up"
            className="flex flex-col gap-7 border-b border-black/10 pb-10 lg:flex-row lg:items-end lg:justify-between dark:border-white/10"
          >

            <div className="mx-auto lg:mx-0">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#075b3a] dark:text-[#72B943]">
                03 / PROTEIN INGREDIENTS
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                Building the
                <br />
                <span className="text-[#075b3a] dark:text-[#72B943]">
                  protein platform.
                </span>
              </h2>

            </div>

            <p className="mx-auto max-w-md text-sm leading-7 text-black/45 lg:mx-0 dark:text-white/40">
              Future ingredient possibilities emerging from the dairy and
              whey value chain.
            </p>

          </div>


          {/* PROTEIN CARDS */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">

            {proteinIngredients.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group relative min-h-[245px] overflow-hidden rounded-[20px] border border-black/[0.07] bg-white p-4 text-left shadow-[0_8px_30px_rgba(7,91,58,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#075b3a]/20 hover:bg-[#075b3a] hover:text-white hover:shadow-[0_18px_45px_rgba(7,91,58,0.18)] sm:min-h-[275px] sm:rounded-[24px] sm:p-5 lg:min-h-[300px] lg:p-6 dark:border-white/10 dark:bg-[#0b1210]"
              >

                {/* DECORATIVE GLOW */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#72B943]/10 blur-2xl transition-all duration-500 group-hover:bg-[#72B943]/20" />

                {/* TOP */}
                <div className="relative z-10 flex items-center justify-between">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075b3a]/[0.07] text-[8px] font-bold text-[#075b3a] transition-all duration-500 group-hover:bg-white/10 group-hover:text-[#72B943] dark:bg-white/10 dark:text-[#72B943]">
                    {item.number}
                  </span>

                  <span className="rounded-full border border-[#075b3a]/10 bg-[#075b3a]/[0.035] px-2.5 py-1 text-[6px] font-bold uppercase tracking-[0.16em] text-[#075b3a]/60 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/60 dark:border-white/10 dark:bg-white/5 dark:text-white/35">
                    PLANNED
                  </span>

                </div>

                {/* BIG NUMBER */}
                <div className="pointer-events-none absolute right-[-8px] top-[48px] select-none text-[80px] font-black leading-none tracking-[-0.12em] text-[#075b3a]/[0.035] transition-all duration-700 group-hover:right-[-4px] group-hover:text-white/[0.055] sm:text-[95px]">
                  {item.number}
                </div>

                {/* CONTENT — LEFT ALIGNED */}
                <div className="absolute bottom-4 left-4 right-4 text-left sm:bottom-5 sm:left-5 sm:right-5 lg:bottom-6 lg:left-6 lg:right-6">

                  <div className="mb-3 h-[2px] w-8 rounded-full bg-[#72B943] transition-all duration-500 group-hover:w-14 sm:mb-4 sm:w-10 lg:group-hover:w-20" />

                  <p className="text-[6px] font-bold uppercase tracking-[0.17em] text-black/35 transition-colors group-hover:text-white/45 sm:text-[7px] dark:text-white/30">
                    {item.fullName}
                  </p>

                  <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.065em] transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl lg:text-3xl">
                    {item.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-[9px] leading-4 text-black/40 transition-colors group-hover:text-white/55 sm:text-[10px] sm:leading-5 dark:text-white/40">
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          05 — VISUAL DAIRY CONNECTION
      ========================================================= */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-5">

            {/* MILK */}
            <div
              data-aos="fade-up"
              className="group relative col-span-2 h-[250px] overflow-hidden rounded-[22px] bg-[#0b1210] sm:h-[300px] sm:rounded-[26px] lg:col-span-7 lg:h-[430px]"
            >
              <img
                src={milkImage}
                alt="Milk value creation"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />
                <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/65 sm:text-[8px]">
                  01 / DAIRY INPUT
                </span>
              </div>

              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 lg:bottom-9 lg:left-9">
                <h3 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                  MILK
                </h3>
                <p className="mt-1.5 max-w-xs text-[9px] leading-4 text-white/55 sm:text-[10px]">
                  The foundation of an integrated dairy value chain.
                </p>
              </div>
            </div>


            {/* PROCESSING */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group relative col-span-1 h-[250px] overflow-hidden rounded-[22px] bg-[#0b1210] sm:h-[300px] sm:rounded-[26px] lg:col-span-5 lg:h-[430px]"
            >
              <img
                src={processingImage}
                alt="Dairy processing"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute left-4 top-4 sm:left-5 sm:top-5 lg:left-7 lg:top-7">
                <span className="text-[6px] font-bold uppercase tracking-[0.25em] text-[#72B943] sm:text-[7px]">
                  02 / VALUE CREATION
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 lg:bottom-7 lg:left-7 lg:right-7">
                <h3 className="text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl lg:text-4xl">
                  PROCESSING
                </h3>
                <div className="mt-3 h-px w-full bg-white/15" />
                <p className="mt-2 text-[8px] leading-4 text-white/50 sm:text-[9px]">
                  Turning quality milk into higher-value dairy pathways.
                </p>
              </div>
            </div>


            {/* CHEESE */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="group relative col-span-1 h-[220px] overflow-hidden rounded-[22px] bg-[#0b1210] sm:h-[260px] sm:rounded-[26px] lg:col-span-5 lg:h-[290px]"
            >
              <img
                src={cheeseImage}
                alt="Cheese production"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 lg:bottom-7 lg:left-7">
                <span className="text-[6px] font-bold uppercase tracking-[0.25em] text-[#72B943] sm:text-[7px]">
                  03 / VALUE ADDED
                </span>

                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl lg:text-4xl">
                  CHEESE
                </h3>
              </div>
            </div>


            {/* CONNECTION */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="col-span-2 flex h-[230px] flex-col justify-between rounded-[22px] bg-[#075b3a] p-5 text-left text-white sm:h-[270px] sm:rounded-[26px] sm:p-6 lg:col-span-7 lg:h-[290px] lg:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-[6px] font-bold uppercase tracking-[0.25em] text-[#72B943] sm:text-[7px]">
                  04 / THE CONNECTION
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-xs text-white/70">
                  ↗
                </span>
              </div>

              <div>
                <h3 className="max-w-xl text-xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-2xl lg:text-4xl">
                  Dairy value does not stop at the first product.
                </h3>

                <p className="mt-2 max-w-xl text-[9px] leading-5 text-white/55 sm:mt-3 sm:text-[10px] lg:text-[11px] lg:leading-6">
                  The integrated model creates pathways from milk and processing
                  into cheese, whey, protein ingredients and future nutrition.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          06 — NUTRITION APPLICATIONS
      ========================================================= */}
      <section className="bg-[#e9eee9] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-36 dark:bg-[#101b17]">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* LEFT CONTENT */}
            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                04 / APPLICATIONS
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:mt-6 lg:text-8xl">
                Protein
                <br />
                meets
                <br />
                <span className="text-[#075b3a] dark:text-[#72B943]">
                  possibility.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-md text-xs leading-6 text-black/50 sm:mt-8 sm:text-sm sm:leading-7 lg:mx-0 dark:text-white/40">
                Future nutrition applications can connect dairy-derived
                ingredients with evolving consumer, wellness and performance
                needs.
              </p>
            </div>


            {/* APPLICATION LIST */}
            <div data-aos="fade-left">

              {nutritionApplications.map((item, index) => (
                <div
                  key={item.number}
                  className="group grid grid-cols-[32px_1fr] gap-3 border-t border-black/10 py-5 text-left transition-all duration-300 hover:pl-2 sm:grid-cols-[55px_1fr] sm:gap-5 sm:py-6 md:grid-cols-[65px_1fr] md:py-7 dark:border-white/10"
                >

                  {/* NUMBER */}
                  <span className="pt-1 text-[8px] font-bold tracking-[0.2em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                    {item.number}
                  </span>


                  {/* CONTENT */}
                  <div className="min-w-0">

                    <div className="flex items-start justify-between gap-3 sm:items-center">

                      <h3 className="text-lg font-semibold leading-tight tracking-[-0.04em] sm:text-xl md:text-2xl">
                        {item.title}
                      </h3>

                      <span className="shrink-0 rounded-full border border-black/10 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.16em] text-black/35 sm:px-3 sm:text-[7px] dark:border-white/10 dark:text-white/25">
                        FUTURE
                      </span>

                    </div>

                    <p className="mt-2 max-w-2xl text-[10px] leading-5 text-black/45 sm:mt-3 sm:text-xs sm:leading-6 dark:text-white/40">
                      {item.text}
                    </p>

                  </div>

                </div>
              ))}

              <div className="border-t border-black/10 dark:border-white/10" />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          07 — FUTURE NUTRITION SIGNALS
      ========================================================= */}
      <section className="bg-[#07100D] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">

          {/* MAIN INTRO */}
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">

            {/* LEFT */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                  05 / FUTURE NUTRITION
                </p>
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-5xl md:text-6xl lg:mx-0 lg:mt-7 lg:text-8xl">
                Nutrition
                <br />
                built for
                <br />
                <span className="text-[#72B943]">
                  what comes next.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-lg text-[11px] leading-5 text-white/40 sm:mt-8 sm:text-xs sm:leading-6 md:text-sm md:leading-7 lg:mx-0">
                TEJAYS AGRI's nutrition direction is designed around future
                possibilities in protein technology, dairy ingredients and
                nutrition products.
              </p>

              {/* SMALL LABEL */}
              <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-[#72B943]/50" />
                <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/25">
                  FARM → DAIRY → PROTEIN
                </span>
              </div>
            </div>

            {/* RIGHT — SIGNAL GRID */}
            <div
              data-aos="fade-left"
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
            >
              {futureSignals.map((item, index) => (
                <div
                  key={item}
                  className="group relative min-h-[170px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0d1a15] p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#72B943]/40 hover:bg-[#075b3a] sm:min-h-[190px] sm:rounded-[26px] sm:p-6 lg:min-h-[205px] lg:p-7"
                >
                  {/* SOFT CARD LIGHT */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#72B943]/10 blur-3xl transition-all duration-700 group-hover:bg-[#72B943]/25" />

                  {/* TOP LABEL */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="rounded-full border border-[#72B943]/20 bg-[#72B943]/10 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#72B943]">
                      FUTURE
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[10px] text-white/30 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="relative z-10 mt-10">
                    <div className="mb-4 h-[2px] w-8 rounded-full bg-[#72B943] transition-all duration-500 group-hover:w-14" />

                    <h3 className="max-w-[230px] text-base font-semibold leading-5 tracking-[-0.04em] text-white/85 transition-colors duration-500 group-hover:text-white sm:text-lg sm:leading-6 lg:text-xl">
                      {item}
                    </h3>

                    <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-white/50">
                      NUTRITION PATHWAY
                    </p>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#72B943] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM FEATURE STRIP */}
          <div
            data-aos="fade-up"
            className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 sm:mt-12 sm:grid-cols-3 lg:mt-16"
          >

            {/* ITEM 01 */}
            <div className="bg-[#0b1713] px-5 py-5 text-center sm:px-6 sm:py-6 lg:text-left">
              <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                01 / INGREDIENTS
              </p>
              <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-xs">
                Dairy-derived ingredients and whey recovery pathways.
              </p>
            </div>

            {/* ITEM 02 */}
            <div className="bg-[#0b1713] px-5 py-5 text-center sm:px-6 sm:py-6 lg:text-left">
              <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                02 / TECHNOLOGY
              </p>
              <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-xs">
                Exploring future protein and formulation technologies.
              </p>
            </div>

            {/* ITEM 03 */}
            <div className="bg-[#0b1713] px-5 py-5 text-center sm:px-6 sm:py-6 lg:text-left">
              <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                03 / NUTRITION
              </p>
              <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-xs">
                Building pathways toward future nutrition applications.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          08 — STATUS / TRANSPARENCY
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-[#f4f7f3] p-6 sm:rounded-[34px] sm:p-10 lg:p-14 dark:border-white/10 dark:bg-[#0d1814]"
          >

            {/* SOFT BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#72B943]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#075b3a]/5 blur-3xl dark:bg-[#72B943]/5" />

            <div className="relative z-10">

              {/* HEADER */}
              <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">

                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px] dark:text-[#72B943]">
                    DEVELOPMENT STATUS
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                  Designed for the
                  <br />
                  <span className="text-[#075b3a] dark:text-[#72B943]">
                    future.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-black/45 sm:text-sm sm:leading-7 lg:mx-0 dark:text-white/40">
                  Our nutrition roadmap is being developed through phased
                  capabilities, product opportunities and longer-term innovation.
                </p>

              </div>


              {/* STATUS CARDS */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">

                {/* PLANNED */}
                <div className="group relative min-h-[190px] overflow-hidden rounded-[22px] border border-black/[0.07] bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#72B943]/40 hover:shadow-[0_18px_45px_rgba(7,91,58,0.10)] sm:min-h-[220px] sm:rounded-[26px] sm:p-6 dark:border-white/10 dark:bg-[#101d18]">

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#72B943]/10 blur-2xl transition-all duration-500 group-hover:bg-[#72B943]/20" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="rounded-full bg-[#72B943]/15 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.18em] text-[#075b3a] dark:text-[#72B943]">
                      PLANNED
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-[10px] text-black/25 transition-all duration-500 group-hover:border-[#075b3a]/20 group-hover:text-[#075b3a] dark:border-white/10 dark:text-white/25 dark:group-hover:text-[#72B943]">
                      ↗
                    </span>
                  </div>

                  <div className="relative z-10 mt-10">
                    <div className="mb-4 h-[2px] w-8 rounded-full bg-[#72B943] transition-all duration-500 group-hover:w-14" />

                    <h3 className="text-lg font-semibold tracking-[-0.04em] text-[#0b1210] dark:text-white sm:text-xl">
                      Planned
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-black/45 sm:text-xs sm:leading-6 dark:text-white/40">
                      Future capabilities and ingredient pathways being planned.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#72B943] transition-all duration-500 group-hover:w-full" />
                </div>


                {/* UPCOMING */}
                <div className="group relative min-h-[190px] overflow-hidden rounded-[22px] border border-black/[0.07] bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#075b3a]/25 hover:shadow-[0_18px_45px_rgba(7,91,58,0.10)] sm:min-h-[220px] sm:rounded-[26px] sm:p-6 dark:border-white/10 dark:bg-[#101d18]">

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#075b3a]/5 blur-2xl transition-all duration-500 group-hover:bg-[#075b3a]/10 dark:bg-[#72B943]/5" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.18em] text-black/50 dark:bg-white/5 dark:text-white/40">
                      UPCOMING
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-[10px] text-black/25 transition-all duration-500 group-hover:border-[#075b3a]/20 group-hover:text-[#075b3a] dark:border-white/10 dark:text-white/25 dark:group-hover:text-[#72B943]">
                      ↗
                    </span>
                  </div>

                  <div className="relative z-10 mt-10">
                    <div className="mb-4 h-[2px] w-8 rounded-full bg-[#075b3a]/30 transition-all duration-500 group-hover:w-14 group-hover:bg-[#075b3a] dark:bg-[#72B943]/40 dark:group-hover:bg-[#72B943]" />

                    <h3 className="text-lg font-semibold tracking-[-0.04em] text-[#0b1210] dark:text-white sm:text-xl">
                      Upcoming
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-black/45 sm:text-xs sm:leading-6 dark:text-white/40">
                      Product and processing opportunities for future phases.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#075b3a] transition-all duration-500 group-hover:w-full dark:bg-[#72B943]" />
                </div>


                {/* EXPLORATORY */}
                <div className="group relative col-span-2 min-h-[190px] overflow-hidden rounded-[22px] border border-black/[0.07] bg-white p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#72B943]/30 hover:shadow-[0_18px_45px_rgba(7,91,58,0.10)] sm:min-h-[220px] sm:rounded-[26px] sm:p-6 lg:col-span-1 dark:border-white/10 dark:bg-[#101d18]">

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#72B943]/5 blur-2xl transition-all duration-500 group-hover:bg-[#72B943]/15" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="rounded-full bg-black/[0.045] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.18em] text-black/50 dark:bg-white/5 dark:text-white/40">
                      EXPLORATORY
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-[10px] text-black/25 transition-all duration-500 group-hover:border-[#72B943]/30 group-hover:text-[#075b3a] dark:border-white/10 dark:text-white/25 dark:group-hover:text-[#72B943]">
                      ↗
                    </span>
                  </div>

                  <div className="relative z-10 mt-10">
                    <div className="mb-4 h-[2px] w-8 rounded-full bg-[#72B943]/50 transition-all duration-500 group-hover:w-14 group-hover:bg-[#72B943]" />

                    <h3 className="text-lg font-semibold tracking-[-0.04em] text-[#0b1210] dark:text-white sm:text-xl">
                      Exploratory
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-black/45 sm:text-xs sm:leading-6 dark:text-white/40">
                      Longer-term opportunities under consideration.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#72B943] transition-all duration-500 group-hover:w-full" />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          09 — FINAL CTA
      ========================================================= */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div
          data-aos="fade-up"
          className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#075b3a] px-6 py-10 text-white sm:rounded-[34px] sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full border border-[#72B943]/15" />

          <div className="pointer-events-none absolute right-8 top-8 h-2 w-2 rounded-full bg-[#72B943] shadow-[0_0_25px_rgba(114,185,67,0.8)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-16">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                  TEJAYS AGRI / GROWING FOR THE FUTURE
                </p>
              </div>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl md:text-7xl lg:text-8xl">
                From Farm
                <br />
                <span className="text-[#72B943]">to Protein.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[11px] leading-6 text-white/45 sm:text-xs sm:leading-7 md:text-sm lg:mx-0">
                Exploring the next generation of dairy nutrition through
                connected value creation, whey recovery and protein
                opportunities.
              </p>

            </div>

            {/* RIGHT CTA CARD */}
            <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">

              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-6">

                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/35">
                    NEXT STEP
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm text-[#72B943]">
                    ↗
                  </span>
                </div>

                <div className="my-6 h-px w-full bg-white/10" />

                <p className="text-sm leading-6 text-white/65">
                  Connect with TEJAYS AGRI and explore our future-facing
                  dairy, nutrition and protein ecosystem.
                </p>

                <Link
                  to="/contact"
                  className="group mt-6 flex w-full items-center justify-between rounded-full bg-white px-5 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-[#075b3a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B943] hover:text-[#07100D]"
                >
                  <span>Contact TEJAYS AGRI</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075b3a]/10 transition-all duration-300 group-hover:bg-[#07100D]/10">
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

              </div>

            </div>

          </div>

          {/* Bottom Line */}
          <div className="relative z-10 mt-10 flex items-center justify-center gap-3 border-t border-white/10 pt-5 lg:justify-start">
            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/25">
              FARM
            </span>

            <span className="h-px w-5 bg-[#72B943]/40" />

            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/25">
              DAIRY
            </span>

            <span className="h-px w-5 bg-[#72B943]/40" />

            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/25">
              PROTEIN
            </span>

          </div>

        </div>
      </section>

    </main>
  )
}