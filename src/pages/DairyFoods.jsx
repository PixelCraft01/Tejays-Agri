import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { usePageMeta } from '../hooks/usePageMeta'
import { assetPath } from '../utils/assetPath'

const capabilities = [
  {
    no: '01',
    title: 'CONTROLLED PROCESSING',
    description:
      'Modern processing pathways designed for hygiene, consistency and scalable future operations.',
  },
  {
    no: '02',
    title: 'PRODUCT DEVELOPMENT',
    description:
      'Building value-added dairy formats instead of depending only on primary commodity output.',
  },
  {
    no: '03',
    title: 'TRACEABLE VALUE',
    description:
      'Connecting production, processing and product information across the wider dairy ecosystem.',
  },
  {
    no: '04',
    title: 'RESOURCE EFFICIENCY',
    description:
      'Using connected systems to improve the relationship between food, agriculture and resources.',
  },
]

const valueChain = [
  {
    no: '01',
    title: 'MILK',
    text: 'Primary dairy output',
  },
  {
    no: '02',
    title: 'PROCESSING',
    text: 'Controlled transformation',
  },
  {
    no: '03',
    title: 'PRODUCTS',
    text: 'Value-added pathways',
  },
  {
    no: '04',
    title: 'INGREDIENTS',
    text: 'Cheese, whey & nutrition',
  },
]

const processingPoints = [
  'Quality & consistency',
  'Controlled transformation',
  'Value-added opportunities',
  'Future product development',
]

const nutritionTags = [
  'WHEY',
  'PROTEIN',
  'INGREDIENTS',
  'NUTRITION',
]

export default function DairyFoods() {
  usePageMeta(
    'Tejays Agri | Dairy & Foods',
    'Discover the planned dairy and value-added food portfolio, from milk through specialty products and nutrition pathways.'
  )

  return (
    <main className="bg-[#f7f7f2] text-[#0b1210] dark:bg-[#0b1210] dark:text-[#edf7f2]">

      {/* ======================================================
          01 — HERO
      ====================================================== */}
      <section
        id="dairy-foods-hero"
        className="relative isolate min-h-[570px] overflow-hidden bg-[#07100D] text-white sm:min-h-[620px] lg:min-h-[660px]"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src={assetPath('/images/tejays-agri-hero3.jpg')}
            alt="Tejays Agri dairy and foods ecosystem"
            className="h-full w-full object-cover object-center opacity-45 transition-transform duration-[1800ms] hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-[#07100D]/75" />

          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#040706] via-[#07100D]/96 to-transparent lg:w-[72%]" />

          <div className="absolute inset-y-0 left-[42%] hidden w-[24%] bg-[#07100D]/50 blur-[70px] lg:block" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07100D] to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07100D] to-transparent" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(114,185,67,1)_1px,transparent_1px),linear-gradient(90deg,rgba(114,185,67,1)_1px,transparent_1px)] [background-size:88px_88px]" />

        </div>


        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[570px] max-w-[1500px] items-center justify-center px-5 py-24 text-center sm:min-h-[620px] sm:px-8 lg:min-h-[660px] lg:justify-start lg:px-12 lg:text-left">

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="w-full max-w-[720px]"
          >

            {/* EYEBROW */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">

              <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_15px_rgba(114,185,67,0.8)]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-[9px]">
                Dairy & Foods
              </span>

            </div>


            {/* HEADING */}
            <h1 className="mt-7 text-[clamp(3rem,7vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">

              <span className="block text-white">
                FROM MILK.
              </span>

              <span className="block text-white/25">
                TO
              </span>

              <span className="block text-[#72B943]">
                VALUE.
              </span>

            </h1>


            {/* DESCRIPTION */}
            <p className="mx-auto mt-7 max-w-[590px] text-[13px] leading-6 text-white/55 sm:text-[14px] sm:leading-7 lg:mx-0">
              Building a connected dairy and food ecosystem where primary
              production moves into processing, products, ingredients and
              future nutrition opportunities.
            </p>


            {/* BUTTONS */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">

              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#72B943] px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#07100D] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(114,185,67,0.18)] sm:w-auto"
              >
                Start a conversation

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/nutrition"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943] hover:bg-[#72B943]/10 hover:text-[#72B943] sm:w-auto"
              >
                Explore Nutrition

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>


            {/* TAGS */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">

              {[
                'Milk',
                'Processing',
                'Cheese',
                'Whey',
                'Nutrition',
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


          {/* STATUS */}
          <div className="pointer-events-none absolute bottom-7 right-6 hidden items-center gap-3 lg:flex xl:right-12">

            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/25">
              Dairy & Foods direction
            </span>

            <span className="h-px w-10 bg-[#72B943]/60" />

            <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#72B943]">
              VALUE CREATION
            </span>

          </div>

        </div>
      </section>


      {/* ======================================================
          02 — DAIRY VALUE CREATION
      ====================================================== */}
      <section
        id="dairy-value"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">

            {/* LEFT — MAIN MESSAGE */}
            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >

              <div className="flex items-center justify-center gap-3 lg:justify-start">

                <span className="h-1.5 w-1.5 rounded-full bg-[#72b943]" />

                <p className="text-[9px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943] sm:text-[10px]">
                  DAIRY VALUE CREATION
                </p>

              </div>

              <div className="mx-auto mt-5 h-px w-16 bg-[#075b3a]/30 dark:bg-[#72b943]/30 sm:w-20 lg:mx-0" />

              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Dairy is not only
                <br />
                a product.
                <br />
                It is a{' '}
                <span className="text-[#075b3a] dark:text-[#72b943]">
                  value platform.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-[650px] text-[11px] leading-6 text-black/55 dark:text-white/45 sm:text-sm sm:leading-7 lg:mx-0 lg:text-base">
                TEJAYS AGRI looks at dairy as an interconnected operating
                system. Milk creates the starting point, while processing,
                products, ingredients and nutrition create additional
                opportunities across the value chain.
              </p>

              <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">

                <span className="text-[7px] font-semibold tracking-[0.2em] text-black/30 dark:text-white/25 sm:text-[8px]">
                  ONE SYSTEM
                </span>

                <span className="h-px w-8 bg-[#075b3a]/25 dark:bg-[#72b943]/30" />

                <span className="text-[7px] font-semibold tracking-[0.2em] text-[#075b3a] dark:text-[#72b943] sm:text-[8px]">
                  MULTIPLE PATHWAYS
                </span>

              </div>

            </div>


            {/* RIGHT — VALUE FLOW */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="border-t border-black/10 pt-8 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            >

              <div className="mb-7 text-center lg:text-left">

                <p className="text-[8px] font-semibold tracking-[0.25em] text-black/35 dark:text-white/30">
                  VALUE CREATION FLOW
                </p>

                <p className="mx-auto mt-2 max-w-lg text-[10px] leading-5 text-black/45 dark:text-white/35 lg:mx-0 sm:text-xs">
                  One connected pathway from primary dairy to higher-value
                  opportunities.
                </p>

              </div>


              <div className="mx-auto max-w-[560px] lg:mx-0">

                {[
                  {
                    no: '01',
                    title: 'PRIMARY DAIRY',
                    text: 'Quality, consistency and controlled primary output.',
                  },
                  {
                    no: '02',
                    title: 'PROCESSING',
                    text: 'Transformation into controlled and differentiated streams.',
                  },
                  {
                    no: '03',
                    title: 'VALUE-ADDED PRODUCTS',
                    text: 'Creating new product opportunities beyond primary milk.',
                  },
                  {
                    no: '04',
                    title: 'INGREDIENTS & NUTRITION',
                    text: 'Higher-value pathways through whey, ingredients and future nutrition.',
                  },
                ].map((item, index) => (
                  <div key={item.no} className="relative">

                    <div className="group flex items-center gap-4 py-4 sm:gap-5 sm:py-5">

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[8px] font-semibold tracking-[0.12em] text-[#075b3a] transition-all duration-300 group-hover:border-[#72b943] group-hover:bg-[#72b943] group-hover:text-[#07100d] sm:h-9 sm:w-9 sm:text-[9px] dark:border-white/10 dark:text-[#72b943]">
                        {item.no}
                      </span>

                      <div className="flex-1 text-center lg:text-left">

                        <h3 className="text-[10px] font-semibold tracking-[0.09em] sm:text-sm">
                          {item.title}
                        </h3>

                        <p className="mx-auto mt-1 max-w-[430px] text-[9px] leading-5 text-black/45 dark:text-white/40 sm:text-xs sm:leading-6 lg:mx-0">
                          {item.text}
                        </p>

                      </div>

                      <span className="hidden text-lg text-black/15 transition duration-300 group-hover:translate-x-1 group-hover:text-[#075b3a] sm:block dark:text-white/15 dark:group-hover:text-[#72b943]">
                        →
                      </span>

                    </div>

                    {index !== 3 && (
                      <div className="ml-4 h-5 border-l border-dashed border-[#075b3a]/20 dark:border-[#72b943]/20 sm:ml-[18px]" />
                    )}

                  </div>
                ))}

              </div>


              <div className="mt-7 flex items-center justify-center gap-3 border-t border-black/10 pt-5 dark:border-white/10 lg:justify-start">

                <span className="text-[7px] font-semibold tracking-[0.2em] text-black/30 dark:text-white/25">
                  DAIRY
                </span>

                <span className="h-px w-5 bg-black/10 dark:bg-white/10" />

                <span className="text-[7px] font-semibold tracking-[0.2em] text-[#075b3a] dark:text-[#72b943]">
                  VALUE
                </span>

                <span className="h-px w-5 bg-black/10 dark:bg-white/10" />

                <span className="text-[7px] font-semibold tracking-[0.2em] text-black/30 dark:text-white/25">
                  NUTRITION
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          03 — VALUE CHAIN
      ====================================================== */}
      <section
        id="value-chain"
        className="bg-[#0e1915] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">

            {/* LEFT */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <p className="text-[9px] font-semibold tracking-[0.28em] text-[#72b943] sm:text-[10px]">
                VALUE CHAIN
              </p>

              <div className="mx-auto mt-4 h-px w-16 bg-[#72b943]/35 sm:w-24 lg:mx-0" />

              <h2 className="mt-7 text-3xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                From biological output
                <br />
                to{' '}
                <span className="text-[#72b943]">
                  food value.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[620px] text-[11px] leading-6 text-white/50 sm:text-sm sm:leading-7 lg:mx-0 lg:text-base">
                The opportunity is not a single product. It is the ability to
                connect every stage and create more value from the complete
                ecosystem.
              </p>

            </div>


            {/* RIGHT */}
            <div
              data-aos="fade-up"
              data-aos-delay="120"
              className="w-full"
            >

              <div className="border-y border-white/10">

                {valueChain.map((item) => (
                  <div
                    key={item.no}
                    className="group grid grid-cols-[34px_1fr_auto] items-center gap-3 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[50px_1fr_auto] sm:gap-5 sm:py-6"
                  >

                    <span className="text-center text-[8px] font-semibold tracking-[0.2em] text-[#72b943]/65 sm:text-[10px]">
                      {item.no}
                    </span>

                    <div className="text-center lg:text-left">

                      <h3 className="text-sm font-semibold tracking-[-0.02em] sm:text-lg md:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[9px] leading-5 text-white/40 sm:text-xs sm:leading-6">
                        {item.text}
                      </p>

                    </div>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-xs text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#72b943]/45 group-hover:bg-[#72b943]/10 group-hover:text-[#72b943] sm:h-9 sm:w-9 sm:text-sm">
                      →
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* BOTTOM STATEMENT */}
          <div
            data-aos="fade-up"
            data-aos-delay="180"
            className="mt-10 max-w-[760px] text-center sm:mt-12 lg:ml-auto lg:text-right"
          >

            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-end">

              <span className="h-px w-8 bg-[#72b943]/40 sm:w-10" />

              <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#72b943]/70 sm:text-[9px]">
                CONNECTED SYSTEM
              </p>

            </div>

            <p className="text-xs leading-6 text-white/45 sm:text-sm sm:leading-7">
              Every stage contributes to the next — creating a more connected
              dairy and food ecosystem.
            </p>

          </div>

        </div>
      </section>


      {/* ======================================================
          04 — MODERN PROCESSING
      ====================================================== */}
      <section
        id="processing"
        className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1250px]">

          <div
            data-aos="fade-up"
            className="overflow-hidden rounded-[2rem] bg-[#dfe8e0] dark:bg-[#13221c]"
          >

            <div className="grid lg:grid-cols-[1fr_1fr]">

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden sm:h-[400px] lg:h-[520px]">

                <img
                  src={assetPath('/images/ecosystem/processing.png')}
                  alt="Dairy Processing"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-5 right-5 text-center sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-8 lg:left-10 lg:right-10 lg:text-left">

                  <p className="text-[8px] font-semibold tracking-[0.24em] text-[#72b943] sm:text-[9px]">
                    PROCESSING
                  </p>

                  <h3 className="mx-auto mt-2 max-w-xl text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-3xl lg:mx-0 lg:text-4xl">
                    Turning primary dairy into controlled value streams.
                  </h3>

                </div>

              </div>


              {/* CONTENT */}
              <div className="flex items-center justify-center p-7 text-center sm:p-10 lg:justify-start lg:p-14 lg:text-left">

                <div className="w-full max-w-xl">

                  <p className="text-[9px] font-semibold tracking-[0.25em] text-[#075b3a] dark:text-[#72b943] sm:text-[10px]">
                    MODERN PROCESSING
                  </p>

                  <div className="mx-auto mt-4 h-px w-14 bg-[#075b3a]/30 dark:bg-[#72b943]/30 lg:mx-0" />

                  <h2 className="mt-6 text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                    Better products begin with better systems.
                  </h2>

                  <p className="mt-5 text-[11px] leading-6 text-black/60 dark:text-white/50 sm:text-sm sm:leading-7">
                    Processing is treated as part of the larger ecosystem
                    rather than an isolated downstream activity. It connects
                    dairy production with product quality, ingredients and
                    future nutrition pathways.
                  </p>


                  {/* POINTS */}
                  <div className="mx-auto mt-7 max-w-md lg:mx-0">

                    {processingPoints.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-center gap-3 border-b border-black/10 py-3.5 last:border-b-0 dark:border-white/10 lg:justify-start"
                      >

                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#075b3a]/10 text-[7px] font-semibold text-[#075b3a] dark:bg-[#72b943]/10 dark:text-[#72b943]">
                          {index + 1}
                        </span>

                        <span className="text-[10px] font-medium sm:text-xs">
                          {item}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          05 — FUTURE NUTRITION
      ====================================================== */}
      <section
        id="nutrition"
        className="px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12 lg:py-28 lg:text-left"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

            {/* IMAGE */}
            <div
              data-aos="fade-right"
              className="relative h-[330px] overflow-hidden rounded-[2rem] sm:h-[420px] lg:h-[460px]"
            >

              <img
                src={assetPath('/images/ecosystem/nutrition.png')}
                alt="Advanced Dairy Nutrition"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-5 right-5 text-center sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10 lg:text-left">

                <p className="text-[9px] font-semibold tracking-[0.24em] text-[#72b943]">
                  FUTURE NUTRITION
                </p>

                <p className="mx-auto mt-2 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl lg:mx-0">
                  Dairy can become a platform for next-generation nutrition.
                </p>

              </div>

            </div>


            {/* CONTENT */}
            <div
              data-aos="fade-left"
              className="flex flex-col items-center justify-center lg:items-start"
            >

              <p className="text-[10px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943]">
                BEYOND DAIRY
              </p>

              <div className="mx-auto mt-4 h-px w-14 bg-[#075b3a]/30 dark:bg-[#72b943]/30 lg:mx-0" />

              <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                From dairy output
                <br />
                to{' '}
                <span className="text-[#075b3a] dark:text-[#72b943]">
                  nutrition value.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[11px] leading-6 text-black/60 dark:text-white/50 sm:text-sm sm:leading-7 lg:mt-7">
                Milk and whey can support a wider ingredient and nutrition
                ecosystem. The long-term direction is to create higher-value
                pathways from existing dairy streams.
              </p>


              {/* TAGS */}
              <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">

                {nutritionTags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3.5 py-2 text-[8px] font-semibold tracking-[0.18em] transition duration-300 hover:border-[#075b3a]/40 hover:bg-[#075b3a]/5 dark:border-white/10 dark:hover:border-[#72b943]/40 dark:hover:bg-[#72b943]/5 sm:px-4 sm:py-2.5 sm:text-[9px]"
                  >
                    {item}
                  </span>
                ))}

              </div>


              {/* CTA */}
              <Link
                to="/nutrition"
                className="group mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#075b3a] px-6 py-3 text-[9px] font-semibold tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#064c31] dark:bg-[#72b943] dark:text-[#07100d] dark:hover:bg-[#86cd55] sm:mt-8 sm:px-7 sm:py-3.5 sm:text-[10px]"
              >
                EXPLORE NUTRITION

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          06 — OUR DIRECTION
      ====================================================== */}
      <section
        id="our-direction"
        className="border-y border-black/10 px-5 py-20 dark:border-white/10 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">

            {/* LEFT CONTENT */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <p className="text-[9px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943] sm:text-[10px]">
                OUR DIRECTION
              </p>

              <div className="mx-auto mt-4 h-px w-16 bg-[#075b3a]/30 dark:bg-[#72b943]/30 sm:mt-5 sm:w-24 lg:mx-0" />

              <h2 className="mt-6 text-3xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                Building a more connected
                <br />
                <span className="text-[#075b3a] dark:text-[#72b943]">
                  food business.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-[11px] leading-6 text-black/50 dark:text-white/45 sm:mt-6 sm:text-sm sm:leading-7 lg:mx-0">
                Our long-term direction connects food production, processing,
                ingredients and resource systems into one more intelligent and
                connected ecosystem.
              </p>

              <div className="mt-7 flex justify-center gap-2 lg:justify-start">

                <span className="h-1.5 w-8 rounded-full bg-[#075b3a] dark:bg-[#72b943]" />

                <span className="h-1.5 w-2 rounded-full bg-black/10 dark:bg-white/10" />

                <span className="h-1.5 w-2 rounded-full bg-black/10 dark:bg-white/10" />

              </div>

            </div>


            {/* RIGHT — 2 x 2 CARDS */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">

              {capabilities.map((item, index) => (
                <div
                  key={item.no}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  className="group relative min-h-[190px] overflow-hidden border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#075b3a]/30 hover:shadow-[0_18px_45px_rgba(7,91,58,0.08)] sm:min-h-[220px] sm:p-6 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-[#72b943]/30"
                >

                  {/* TOP */}
                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-semibold tracking-[0.2em] text-[#075b3a] dark:text-[#72b943] sm:text-[9px]">
                      {item.no}
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-xs text-black/25 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#075b3a]/30 group-hover:text-[#075b3a] sm:h-8 sm:w-8 dark:border-white/10 dark:text-white/20 dark:group-hover:border-[#72b943]/30 dark:group-hover:text-[#72b943]">
                      →
                    </span>

                  </div>


                  {/* ACCENT — LEFT ALIGNED EVERYWHERE */}
                  <div className="mt-5 h-[2px] w-7 bg-[#72b943] transition-all duration-500 group-hover:w-12 sm:mt-7" />


                  {/* TITLE */}
                  <h3 className="mt-4 text-[10px] font-semibold leading-[1.3] tracking-[0.08em] sm:text-sm sm:tracking-[0.1em]">
                    {item.title}
                  </h3>


                  {/* DESCRIPTION */}
                  <p className="mt-3 text-[9px] leading-5 text-black/50 sm:mt-4 sm:text-xs sm:leading-6 dark:text-white/45">
                    {item.description}
                  </p>


                  {/* BRAND */}
                  <div className="absolute bottom-3 left-4 sm:bottom-5 sm:left-6">
                    <span className="text-[6px] font-semibold tracking-[0.18em] text-black/25 sm:text-[7px] dark:text-white/20">
                      TEJAYS AGRI
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          07 — PROPOSED DIRECTION
      ====================================================== */}
      <section
        id="future-ready"
        className="px-5 pb-20 text-center sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:text-left"
      >
        <div className="mx-auto max-w-[1250px]">

          <div
            data-aos="fade-up"
            className="rounded-[2rem] border border-black/10 bg-white p-7 sm:p-10 md:p-12 lg:p-14 dark:border-white/10 dark:bg-white/[0.035]"
          >

            <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:gap-10">

              {/* LABEL */}
              <div>

                <p className="text-[9px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943] sm:text-[10px]">
                  PROPOSED DIRECTION
                </p>

                <div className="mx-auto mt-4 h-px w-16 bg-[#075b3a]/30 dark:bg-[#72b943]/30 sm:mt-5 sm:w-24 lg:mx-0" />

                <p className="mt-4 text-xs font-semibold tracking-[0.04em] text-black/75 dark:text-white/75 sm:mt-5 sm:text-sm">
                  FUTURE-READY DAIRY & FOODS
                </p>

              </div>


              {/* DESCRIPTION */}
              <div>

                <p className="mx-auto max-w-4xl text-sm leading-7 tracking-[-0.015em] text-black/65 dark:text-white/55 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                  The dairy and food capabilities shown here represent
                  planned, conceptual or exploratory directions unless
                  specifically stated otherwise. The long-term objective is to
                  connect production, processing, products and nutrition into
                  one intelligent ecosystem.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          08 — FINAL CTA
      ====================================================== */}
      <section className="bg-[#075b3a] px-5 py-16 text-center text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24 lg:text-left">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">

          {/* CONTENT */}
          <div
            data-aos="fade-up"
            className="w-full max-w-3xl"
          >

            <p className="text-[9px] font-semibold tracking-[0.28em] text-white/55 sm:text-[10px]">
              DAIRY & FOODS
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
              Building more value
              <br />
              from every dairy stream.
            </h2>

          </div>


          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex w-full justify-center lg:w-auto lg:justify-end"
          >

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[9px] font-semibold tracking-[0.14em] text-[#075b3a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#edf7f2] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] sm:px-7 sm:py-3.5 sm:text-[10px]"
            >
              START A CONVERSATION

              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}