import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaSeedling,
  FaCloudSun,
  FaTint,
  FaTractor,
  FaLeaf,
  FaRecycle,
  FaChartLine,
} from 'react-icons/fa'
import { usePageMeta } from '../hooks/usePageMeta'
import { assetPath } from '../utils/assetPath'

const agricultureImage = assetPath('/images/ecosystem/agriculture.png')

const precisionSystems = [
  {
    number: '01',
    title: 'Fodder Cultivation',
    description:
      'A planned approach to fodder production designed around dependable feed availability and long-term herd nutrition.',
    icon: FaSeedling,
  },
  {
    number: '02',
    title: 'Silage',
    description:
      'Preserving forage as a strategic feed resource to support consistency across changing seasons and farm conditions.',
    icon: FaLeaf,
  },
  {
    number: '03',
    title: 'TMR',
    description:
      'Total Mixed Ration planning can connect crop resources with balanced feeding requirements across the dairy system.',
    icon: FaRecycle,
  },
  {
    number: '04',
    title: 'Soil Monitoring',
    description:
      'Soil information can guide crop planning, nutrient decisions and more efficient agricultural resource management.',
    icon: FaChartLine,
  },
]

const smartFarmSystems = [
  {
    title: 'Weather Stations',
    text: 'Environmental data can support better crop planning, irrigation decisions and farm operations.',
    icon: FaCloudSun,
  },
  {
    title: 'Precision Irrigation',
    text: 'Smarter water management designed to improve efficiency while supporting reliable fodder cultivation.',
    icon: FaTint,
  },
  {
    title: 'Drones',
    text: 'Future aerial monitoring capabilities can help observe crop conditions and identify areas requiring attention.',
    icon: FaLeaf,
  },
  {
    title: 'Farm Machinery',
    text: 'Modern agricultural machinery can improve the efficiency, consistency and scalability of farm operations.',
    icon: FaTractor,
  },
]

const farmCycle = [
  'SOIL',
  'CROP',
  'FEED',
  'COW',
  'MILK',
  'NUTRIENTS',
  'SOIL',
]

const feedSecurity = [
  'Reliable fodder planning',
  'Seasonal feed preparedness',
  'Silage and feed preservation',
  'TMR-based nutrition planning',
  'Crop and soil monitoring',
  'Integrated farm-to-dairy coordination',
]

export default function Agriculture() {
  usePageMeta(
    'Tejays Agri | Agriculture',
    'Precision agriculture, fodder cultivation, silage, TMR, soil monitoring and smart farm systems designed to strengthen long-term dairy feed security.'
  )

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#07100D] text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src={agricultureImage}
            alt="TEJAYS AGRI precision agriculture"
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
                TEJAYS AGRI / PRECISION AGRICULTURE
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
              GROWING
              <br />

              <span className="text-white/25">
                WITH
              </span>

              <br />

              <span className="text-[#72B943]">
                PRECISION.
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
              Building an integrated agricultural ecosystem where soil,
              crops, feed, dairy and nutrients work together to strengthen
              long-term feed security and sustainable farm operations.
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

              <a
                href="#precision-agriculture"
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
                Explore Agriculture

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>


              <Link
                to="/sustainability"
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
                Sustainability

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
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
          INTRO / PRECISION AGRICULTURE
      ========================================================== */}
      <section
        id="precision-agriculture"
        className="bg-[#f7f7f2] px-5 py-16 text-[#0b1210] sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* LEFT */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px]">
                01 / PRECISION AGRICULTURE
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                Feed
                <br />
                starts
                <br />
                <span className="text-[#075b3a]">
                  with soil.
                </span>
              </h2>

            </div>


            {/* RIGHT */}
            <div
              data-aos="fade-left"
              className="flex items-end"
            >

              <div className="max-w-2xl lg:ml-auto">

                <p className="text-xl font-medium leading-8 tracking-[-0.03em] text-black/75 sm:text-2xl sm:leading-9">
                  Agriculture is not a separate layer of the dairy
                  ecosystem. It is the foundation of dependable feed,
                  nutrition and long-term farm resilience.
                </p>

                <p className="mt-7 text-sm leading-7 text-black/45">
                  TEJAYS AGRI's agricultural approach connects soil
                  management, crop cultivation, fodder production and
                  feeding systems into one integrated operating model.
                  The objective is to create stronger coordination between
                  the farm and the dairy.
                </p>

                <div className="mt-10 h-px w-full bg-black/10" />

                <div className="mt-6 flex items-center justify-between gap-6">

                  <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-black/35">
                    SOIL → FEED → DAIRY
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#075b3a]">
                    INTEGRATED SYSTEM
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PRECISION SYSTEMS
      ========================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          {/* HEADER */}
          <div
            data-aos="fade-up"
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px]">
              02 / FARM FOUNDATION
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
              Building feed
              <br />
              <span className="text-[#075b3a]">
                from the ground up.
              </span>
            </h2>

          </div>


          {/* CARDS */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">

            {precisionSystems.map((item, index) => {

              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="
                    group relative min-h-[260px]
                    overflow-hidden rounded-[22px]
                    border border-black/[0.07]
                    bg-[#f7f7f2]
                    p-5 text-left
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:bg-[#075b3a]
                    hover:text-white
                    sm:min-h-[300px] sm:rounded-[26px] sm:p-6
                    lg:min-h-[340px] lg:p-7
                  "
                >

                  <div className="flex items-start justify-between">

                    <span className="text-[9px] font-bold tracking-[0.2em] text-black/25 transition group-hover:text-white/40">
                      {item.number}
                    </span>

                    <Icon className="text-lg text-[#075b3a] transition group-hover:text-[#72B943]" />

                  </div>


                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-7 lg:left-7 lg:right-7">

                    <h3 className="text-xl font-semibold tracking-[-0.05em] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-black/45 transition group-hover:text-white/60 sm:text-sm">
                      {item.description}
                    </p>

                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          FARM CYCLE
      ========================================================== */}
      <section className="overflow-hidden bg-[#0e1915] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">

            {/* TEXT */}
            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                03 / CLOSED-LOOP AGRICULTURE
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                One
                <br />
                connected
                <br />
                <span className="text-[#72B943]">
                  cycle.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/45 lg:mx-0">
                Agriculture becomes more powerful when every stage of the
                ecosystem contributes to the next. Soil supports crops.
                Crops create feed. Feed supports the cow. Milk creates
                nutrients that can ultimately return to agriculture.
              </p>

            </div>


            {/* FLOW */}
            <div
              data-aos="fade-left"
              className="relative"
            >

              <div className="absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-white/10 lg:block" />

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

                {farmCycle.map((item, index) => {

                  const isLast = index === farmCycle.length - 1

                  return (
                    <div
                      key={`${item}-${index}`}
                      className={`
                        relative flex min-h-[145px]
                        flex-col justify-between
                        rounded-[22px]
                        border border-white/10
                        bg-[#07100D]
                        p-5 text-left
                        transition-all duration-500
                        hover:-translate-y-1
                        hover:border-[#72B943]/40
                        hover:bg-[#075b3a]
                        sm:min-h-[165px] sm:rounded-[26px] sm:p-6
                        ${isLast ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''}
                      `}
                    >

                      <span className="text-[8px] font-bold tracking-[0.25em] text-white/25">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div>

                        <p className="text-2xl font-semibold tracking-[-0.06em] sm:text-3xl">
                          {item}
                        </p>

                        <div className="mt-3 h-[2px] w-7 bg-[#72B943]" />

                      </div>

                    </div>
                  )
                })}

              </div>

              <div className="mt-5 flex items-center justify-center gap-3 text-center">

                <span className="h-px w-8 bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/35">
                  SOIL → CROP → FEED → COW → MILK → NUTRIENTS → SOIL
                </p>

                <span className="h-px w-8 bg-[#72B943]" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SMART FARM
      ========================================================== */}
      <section className="bg-[#f7f7f2] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-20">

            {/* HEADER */}
            <div
              data-aos="fade-up"
              className="text-center lg:sticky lg:top-28 lg:text-left"
            >

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px]">
                04 / SMART FARM SYSTEMS
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                Farming
                <br />
                gets
                <br />
                <span className="text-[#075b3a]">
                  smarter.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-md text-xs leading-6 text-black/45 sm:text-sm sm:leading-7 lg:mx-0">
                Future agricultural capabilities can combine field
                observation, environmental information and modern
                machinery to support more precise farm decisions.
              </p>

            </div>


            {/* SYSTEMS */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {smartFarmSystems.map((item, index) => {

                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className="
                      group min-h-[220px]
                      rounded-[22px]
                      border border-black/[0.07]
                      bg-white p-5 text-left
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-[#075b3a]/20
                      hover:shadow-[0_20px_50px_rgba(7,91,58,0.08)]
                      sm:min-h-[250px] sm:rounded-[26px] sm:p-6
                      lg:min-h-[275px] lg:p-7
                    "
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#075b3a]/10 text-[#075b3a] transition group-hover:bg-[#075b3a] group-hover:text-white">

                      <Icon />

                    </div>


                    <div className="mt-12">

                      <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-black/25">
                        FUTURE CAPABILITY
                      </p>

                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.05em] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-black/45 sm:text-sm">
                        {item.text}
                      </p>

                    </div>

                  </article>
                )
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEED SECURITY
      ========================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div
            data-aos="fade-up"
            className="
              relative overflow-hidden
              rounded-[28px]
              bg-[#075b3a]
              px-6 py-10 text-white
              sm:rounded-[34px] sm:px-10 sm:py-14
              lg:px-14 lg:py-16
            "
          >

            {/* DECORATION */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#72B943]/20" />


            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

              {/* LEFT */}
              <div className="text-center lg:text-left">

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                  05 / FEED SECURITY
                </p>

                <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-8xl">
                  Secure
                  <br />
                  the
                  <br />
                  <span className="text-[#72B943]">
                    feed.
                  </span>
                </h2>

                <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/55 lg:mx-0">
                  Reliable dairy development depends on reliable feed.
                  An integrated agricultural model can reduce dependency,
                  improve planning and create greater visibility across
                  the feed chain.
                </p>

              </div>


              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">

                {feedSecurity.map((item, index) => (

                  <div
                    key={item}
                    data-aos="fade-up"
                    data-aos-delay={index * 70}
                    className="
                      rounded-[20px]
                      border border-white/10
                      bg-[#0e1915]/60
                      p-5 text-left
                      transition-all duration-300
                      hover:border-[#72B943]/40
                      hover:bg-[#0e1915]
                      sm:rounded-[24px] sm:p-6
                    "
                  >

                    <span className="text-[8px] font-bold tracking-[0.2em] text-[#72B943]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="mt-8 text-sm font-medium leading-6 text-white/80">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DEVELOPMENT STATUS
      ========================================================== */}
      <section className="bg-[#f7f7f2] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">

            {/* LEFT */}
            <div
              data-aos="fade-up"
              className="text-center lg:text-left"
            >

              <div className="flex items-center justify-center gap-2 lg:justify-start">

                <span className="h-1.5 w-1.5 rounded-full bg-[#72B943]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075b3a] sm:text-[9px]">
                  DEVELOPMENT STATUS
                </p>

              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Agriculture
                <br />
                designed for the
                <br />
                <span className="text-[#075b3a]">
                  future.
                </span>
              </h2>

            </div>


            {/* RIGHT */}
            <div
              data-aos="fade-left"
              className="border-t border-black/10 pt-8"
            >

              <div className="grid gap-7 sm:grid-cols-3">

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075b3a]">
                    PLANNED
                  </p>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Precision agriculture capabilities are being
                    considered as part of the broader integrated
                    dairy ecosystem.
                  </p>

                </div>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075b3a]">
                    FOCUS
                  </p>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Fodder, soil, water, crop monitoring and feed
                    security remain central to the agricultural
                    roadmap.
                  </p>

                </div>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075b3a]">
                    PURPOSE
                  </p>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    Connect agricultural resources with animal
                    nutrition and the wider dairy value chain.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">

        <div
          data-aos="fade-up"
          className="
            relative mx-auto max-w-[1500px]
            overflow-hidden rounded-[28px]
            bg-[#07100D]
            px-6 py-12 text-white
            sm:rounded-[34px] sm:px-10 sm:py-16
            lg:px-14 lg:py-20
          "
        >

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(114,185,67,1)_1px,transparent_1px),linear-gradient(90deg,rgba(114,185,67,1)_1px,transparent_1px)] [background-size:70px_70px]" />

          {/* GLOW */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#72B943]/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-16">

            {/* CONTENT */}
            <div className="text-center lg:text-left">

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943] sm:text-[9px]">
                TEJAYS AGRI / AGRICULTURE
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.075em] sm:text-6xl md:text-7xl lg:text-8xl">
                From
                <br />
                <span className="text-[#72B943]">
                  soil to dairy.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45 lg:mx-0">
                A connected agricultural ecosystem designed to support
                feed security, responsible resource use and the future
                of integrated dairy development.
              </p>

            </div>


            {/* ACTION */}
            <div className="flex justify-center lg:justify-end">

              <Link
                to="/sustainability"
                className="
                  group inline-flex items-center gap-3
                  rounded-full bg-[#72B943]
                  px-7 py-4
                  text-[9px] font-bold uppercase tracking-[0.2em]
                  text-[#07100D]
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-white
                "
              >
                Explore Sustainability

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

          </div>


          {/* FOOTER LINE */}
          <div className="relative z-10 mt-12 flex items-center justify-between border-t border-white/10 pt-5">

            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/25">
              PRECISION AGRICULTURE
            </p>

            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/25">
              GROWING FOR THE FUTURE
            </p>

          </div>

        </div>

      </section>
    </>
  )
}