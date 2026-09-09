import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { usePageMeta } from '../hooks/usePageMeta'
import { assetPath } from '../utils/assetPath'
const products = [
  {
    no: '01', title: 'MILK', subtitle: 'Pure & Precise', description: 'A controlled primary dairy stream built around quality, consistency and traceability.', image: assetPath('/images/ecosystem/milk.png'), link: '/dairy-foods#milk',
  },
  {
    no: '02', title: 'DAIRY PRODUCTS', subtitle: 'Value Added Dairy', description: 'Extending primary milk into differentiated dairy products and everyday food formats.', image: assetPath('/images/ecosystem/dairy-products.png'), link: '/dairy-foods#dairy-products',
  },
  {
    no: '03', title: 'CHEESE', subtitle: 'Premium Dairy', description: 'A higher-value dairy pathway focused on product quality, controlled processing and differentiation.', image: assetPath('/images/ecosystem/cheese.png'), link: '/dairy-foods#cheese',
  },
  {
    no: '04', title: 'WHEY', subtitle: 'High Value Ingredients', description: 'Creating ingredient opportunities from dairy streams for food and nutrition applications.', image: assetPath('/images/ecosystem/whey.png'), link: '/dairy-foods#whey',
  },
  {
    no: '05', title: 'NUTRITION', subtitle: 'Advanced Nutrition', description: 'Exploring dairy-derived nutrition opportunities through ingredients, proteins and future food applications.', image: assetPath('/images/ecosystem/nutrition.png'), link: '/dairy-foods#nutrition',
  },
  {
    no: '06', title: 'PROCESSING', subtitle: 'Modern Infrastructure', description: 'Controlled processing systems designed to support quality, consistency and scalable operations.', image: assetPath('/images/ecosystem/processing.png'), link: '/dairy-foods#processing',
  },
  {
    no: '07', title: 'FOOD INNOVATION', subtitle: 'Future Food Pathways', description: 'Exploring new product formats that connect dairy capability with evolving food and consumer needs.', image: assetPath('/images/ecosystem/dairy-products.png'), link: '/dairy-foods#food-innovation',
  },
  {
    no: '08', title: 'INGREDIENTS', subtitle: 'Dairy Based Value', description: 'Building higher-value ingredient pathways from milk and dairy streams across the wider ecosystem.', image: assetPath('/images/ecosystem/whey.png'), link: '/dairy-foods#ingredients',
  },
]

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

export default function DairyFoods() {
  usePageMeta(
    'Tejays Agri | Dairy & Foods',
    'Discover the planned dairy and value-added food portfolio, from milk through specialty products and nutrition pathways.'
  )

  return (
    <main className="bg-[#f7f7f2] text-[#0b1210] dark:bg-[#0b1210] dark:text-[#edf7f2]">

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative isolate min-h-[570px] overflow-hidden bg-[#07100D] text-white sm:min-h-[620px] lg:min-h-[660px]">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src={assetPath('/images/tejays-agri-hero3.jpg')}
            alt="Tejays Agri dairy and foods ecosystem"
            className="h-full w-full object-cover object-center opacity-45 transition-transform duration-[1800ms] hover:scale-[1.03]"
          />

          {/* Main dark layer */}
          <div className="absolute inset-0 bg-[#07100D]/75" />

          {/* Left content gradient */}
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#040706] via-[#07100D]/96 to-transparent lg:w-[72%]" />

          {/* Soft center transition */}
          <div className="absolute inset-y-0 left-[42%] hidden w-[24%] bg-[#07100D]/50 blur-[70px] lg:block" />

          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07100D] to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07100D] to-transparent" />

          {/* Subtle grid */}
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


          {/* BOTTOM RIGHT STATUS */}
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
    INTRO
====================================================== */}
      <section className="px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1250px]">

          {/* TOP LABEL */}
          <div data-aos="fade-up">
            <p className="text-[9px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943] sm:text-[10px]">
              DAIRY VALUE CREATION
            </p>

            <div className="mx-auto mt-4 h-px w-16 bg-[#075b3a]/30 dark:bg-[#72b943]/30 sm:mt-5 sm:w-24" />

            <p className="mx-auto mt-4 max-w-sm text-[10px] leading-5 text-black/45 dark:text-white/40 sm:mt-5 sm:text-xs sm:leading-6">
              One connected system. Multiple pathways for value.
            </p>
          </div>


          {/* MAIN CONTENT */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto mt-8 max-w-[1050px] sm:mt-10 lg:mt-12"
          >
            <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
              Dairy is not only a product.
              <br />
              It is a{' '}
              <span className="text-[#075b3a] dark:text-[#72b943]">
                value platform.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[11px] leading-6 text-black/60 dark:text-white/55 sm:mt-6 sm:text-sm sm:leading-7 lg:text-base">
              TEJAYS AGRI looks at dairy as an interconnected operating system.
              Milk creates the starting point, while processing, products,
              ingredients and nutrition create additional opportunities across
              the value chain.
            </p>
          </div>

        </div>
      </section>

      {/* ======================================================
          PRODUCT CARDS — NEW DESIGN
      ====================================================== */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1500px]">


          <div className="mb-10 text-center sm:mb-12 lg:mb-14">

            <div data-aos="fade-up">

              <p className="text-[9px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943] sm:text-[10px]">
                PRODUCT PATHWAYS
              </p>

              <div className="mx-auto mt-4 h-px w-16 bg-[#075b3a]/30 dark:bg-[#72b943]/30 sm:mt-5 sm:w-24" />

            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto mt-7 max-w-[900px] sm:mt-8 lg:mt-10"
            >

              <h2 className="text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
                One dairy ecosystem.
                <br />
                Many ways to{' '}
                <span className="text-[#075b3a] dark:text-[#72b943]">
                  create value.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[700px] text-[11px] leading-6 text-black/50 dark:text-white/45 sm:mt-6 sm:text-sm sm:leading-7 lg:text-base">
                From primary milk to higher-value dairy products and ingredients,
                every pathway remains connected to the same ecosystem.
              </p>

            </div>

          </div>




          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <article
                key={product.no}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#075b3a]/30 hover:shadow-[0_14px_35px_rgba(7,91,58,0.10)] dark:border-white/10 dark:bg-[#111813]"
              >
                {/* IMAGE */}
                <div className="relative h-[190px] overflow-hidden sm:h-[250px]">

                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* DARK GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  {/* NUMBER */}
                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-800 text-[8px] font-semibold text-white backdrop-blur-md sm:h-8 sm:w-8 sm:text-[9px]">
                      {product.no}
                    </span>
                  </div>

                  {/* PRODUCT LABEL */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <p className="text-[7px] font-medium uppercase tracking-[0.16em] text-[#ffffff83] sm:text-[8px]">
                      {product.subtitle}
                    </p>

                    <h3 className="mt-1 text-base font-semibold leading-none tracking-[-0.03em] text-white sm:text-xl">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* BODY */}
                <div className="p-3 sm:p-4">

                  <p className="line-clamp-2 text-[9px] leading-[1.55] text-black/55 sm:text-[11px] sm:leading-[1.65] dark:text-white/50">
                    {product.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3 dark:border-white/10">

                    <span className="text-[7px] font-semibold tracking-[0.16em] text-[#075b3a] sm:text-[8px] dark:text-[#72b943]">
                      VALUE PATHWAY
                    </span>

                    <Link
                      to={product.link || '/dairy-foods'}
                      aria-label={`Explore ${product.title}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#075b3a]/15 text-[11px] text-[#075b3a] transition-all duration-300 group-hover:bg-[#075b3a] group-hover:text-white sm:h-8 sm:w-8 dark:border-[#72b943]/20 dark:text-[#72b943] dark:group-hover:bg-[#72b943] dark:group-hover:text-[#07100d]"
                    >
                      ↗
                    </Link>

                  </div>
                </div>
              </article>
            ))}
          </div>


        </div>
      </section>


      {/* ======================================================
          DARK VALUE CHAIN
      ====================================================== */}
      <section className="bg-[#0e1915] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">

            {/* ==================================================
          LEFT — VALUE CHAIN INTRO
      ================================================== */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >
              <p className="text-[9px] font-semibold tracking-[0.28em] text-[#72b943] sm:text-[10px]">
                VALUE CHAIN
              </p>

              <div className="mx-auto mt-4 h-px w-16 bg-[#72b943]/35 sm:mt-5 sm:w-24 lg:mx-0" />

              <h2 className="mt-7 text-3xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                From biological output
                <br />
                to{' '}
                <span className="text-[#72b943]">
                  food value.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[620px] text-[11px] leading-6 text-white/50 sm:mt-6 sm:text-sm sm:leading-7 lg:mx-0 lg:text-base">
                The opportunity is not a single product. It is the ability to
                connect every stage and create more value from the complete
                ecosystem.
              </p>
            </div>


            {/* ==================================================
          RIGHT — VALUE CHAIN STEPS
      ================================================== */}
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

                    {/* NUMBER */}
                    <span className="text-center text-[8px] font-semibold tracking-[0.2em] text-[#72b943]/65 sm:text-[10px]">
                      {item.no}
                    </span>


                    {/* CONTENT */}
                    <div className="text-center lg:text-left">

                      <h3 className="text-sm font-semibold tracking-[-0.02em] sm:text-lg md:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[9px] leading-5 text-white/40 sm:text-xs sm:leading-6">
                        {item.text}
                      </p>

                    </div>


                    {/* ARROW */}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-xs text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#72b943]/45 group-hover:bg-[#72b943]/10 group-hover:text-[#72b943] sm:h-9 sm:w-9 sm:text-sm">
                      →
                    </span>

                  </div>
                ))}

              </div>
            </div>

          </div>


          {/* ==================================================
        BOTTOM STATEMENT
    ================================================== */}
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
          PROCESSING / VISUAL SPLIT
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

            {/* ======================================================
          IMAGE
      ====================================================== */}
            <div
              data-aos="fade-right"
              className="relative h-[330px] overflow-hidden rounded-[2.5rem] sm:h-[420px] lg:h-[460px]"
            >
              <img
                src={assetPath('/images/ecosystem/nutrition.png')}
                alt="Advanced Dairy Nutrition"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* IMAGE CONTENT */}
              <div className="absolute bottom-6 left-5 right-5 text-center sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-8 lg:left-10 lg:right-10 lg:text-left">

                <p className="text-[9px] font-semibold tracking-[0.24em] text-white/65">
                  FUTURE NUTRITION
                </p>

                <p className="mx-auto mt-2 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl lg:mx-0">
                  Dairy can become a platform for next-generation nutrition.
                </p>

              </div>
            </div>


            {/* ======================================================
          CONTENT
      ====================================================== */}
            <div
              data-aos="fade-left"
              className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left"
            >

              {/* LABEL */}
              <p className="text-[10px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943]">
                BEYOND DAIRY
              </p>

              {/* ACCENT */}
              <div className="mx-auto mt-4 h-px w-14 bg-[#075b3a]/30 dark:bg-[#72b943]/30 lg:mx-0" />

              {/* HEADING */}
              <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                From dairy output
                <br />
                to{' '}
                <span className="text-[#075b3a] dark:text-[#72b943]">
                  nutrition value.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-xl text-[11px] leading-6 text-black/60 dark:text-white/50 sm:text-sm sm:leading-7 lg:mt-7">
                Milk and whey can support a wider ingredient and nutrition
                ecosystem. The long-term direction is to create higher-value
                pathways from existing dairy streams.
              </p>


              {/* TAGS */}
              <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
                {['WHEY', 'PROTEIN', 'INGREDIENTS', 'NUTRITION'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-4 py-2 text-[9px] font-semibold tracking-[0.18em] transition duration-300 hover:border-[#075b3a]/40 hover:bg-[#075b3a]/5 dark:border-white/10 dark:hover:border-[#72b943]/40 dark:hover:bg-[#72b943]/5"
                  >
                    {item}
                  </span>
                ))}
              </div>


              {/* CTA */}
              <Link
                to="/nutrition"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#075b3a] px-6 py-3 text-[10px] font-semibold tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#064c31] dark:bg-[#72b943] dark:text-[#07100d] dark:hover:bg-[#86cd55]"
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
          CAPABILITIES
      ====================================================== */}
      <section className="border-y border-black/10 px-5 py-20 dark:border-white/10 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">

            {/* ======================================================
          LEFT CONTENT
      ====================================================== */}
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


            {/* ======================================================
          RIGHT — 2 x 2 CARDS
      ====================================================== */}
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


                  {/* ACCENT */}
                  <div className="mt-5 h-[2px] w-7 bg-[#72b943] transition-all duration-500 group-hover:w-12 sm:mt-7" />

                  {/* TITLE */}
                  <h3 className="mt-4 text-[10px] font-semibold leading-[1.3] tracking-[0.08em] sm:text-sm sm:tracking-[0.1em]">
                    {item.title}
                  </h3>


                  {/* DESCRIPTION */}
                  <p className="mt-3 text-[9px] leading-5 text-black/50 sm:mt-4 sm:text-xs sm:leading-6 dark:text-white/45">
                    {item.description}
                  </p>


                  {/* BOTTOM BRAND */}
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
          NUTRITION CONNECTION
      ====================================================== */}
      <section className="px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12 lg:py-28 lg:text-left">
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

              {/* IMAGE TEXT */}
              <div className="absolute bottom-6 left-5 right-5 text-center sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10 lg:text-left">
                <p className="text-[9px] font-semibold tracking-[0.24em] text-white/65">
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
              className="flex flex-col items-center justify-center lg:items-start lg:justify-center"
            >

              <p className="text-[10px] font-semibold tracking-[0.28em] text-[#075b3a] dark:text-[#72b943]">
                BEYOND DAIRY
              </p>

              {/* CENTER LINE MOBILE/TABLET — ORIGINAL DESKTOP LEFT */}
              <div className="mx-auto mt-4 h-px w-16 bg-[#075b3a]/30 dark:bg-[#72b943]/30 lg:mx-0" />

              <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                From dairy output
                <br />
                to{' '}
                <span className="text-[#075b3a] dark:text-[#72b943]">
                  nutrition value.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[11px] leading-6 text-black/60 dark:text-white/50 sm:text-sm sm:leading-7 lg:mt-7 lg:text-left">
                Milk and whey can support a wider ingredient and nutrition
                ecosystem. The long-term direction is to create higher-value
                pathways from existing dairy streams.
              </p>


              {/* TAGS */}
              <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {['WHEY', 'PROTEIN', 'INGREDIENTS', 'NUTRITION'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3.5 py-2 text-[8px] font-semibold tracking-[0.18em] transition duration-300 hover:border-[#075b3a]/40 hover:bg-[#075b3a]/5 dark:border-white/10 dark:hover:border-[#72b943]/40 dark:hover:bg-[#72b943]/5 sm:px-4 sm:py-2.5 sm:text-[9px]"
                  >
                    {item}
                  </span>
                ))}
              </div>


              {/* BUTTON */}
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
          FUTURE NOTE
      ====================================================== */}
      <section className="px-5 pb-20 text-center sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:text-left">
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
                  The dairy and food capabilities shown here represent planned,
                  conceptual or exploratory directions unless specifically stated
                  otherwise. The long-term objective is to connect production,
                  processing, products and nutrition into one intelligent ecosystem.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          CTA
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

