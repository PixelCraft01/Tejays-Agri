import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaLeaf,
  FaMicrochip,
  FaRecycle,
  FaPlay,
} from 'react-icons/fa'
import { assetPath } from '../utils/assetPath'

const heroImage = assetPath('/images/tejays-agri-hero3.jpg')

const pillars = [
  {
    title: 'Integrated',
    heading: 'One ecosystem.',
    text: 'Dairy, agriculture, nutrition, processing and technology are designed to work as connected parts of one larger system.',
    icon: FaLeaf,
  },
  {
    title: 'Intelligent',
    heading: 'Decisions with data.',
    text: 'Digital infrastructure is envisioned to connect biological, operational and resource-level information.',
    icon: FaMicrochip,
  },
  {
    title: 'Sustainable',
    heading: 'Resources in a cycle.',
    text: 'The model is built around responsible resource use, recovery and value creation across the ecosystem.',
    icon: FaRecycle,
  },
]

const ecosystem = [
  ['GENETICS', 'Better biological potential'],
  ['FEED', 'Balanced nutrition'],
  ['SMART DAIRY', 'Connected operations'],
  ['PROCESSING', 'Controlled value creation'],
  ['NUTRITION', 'Higher-value pathways'],
]

const visionItems = [
  ['01', 'BIOLOGY', 'Start with the living system.'],
  ['02', 'INTELLIGENCE', 'Make information visible.'],
  ['03', 'VALUE', 'Turn connected operations into value.'],
  ['04', 'FUTURE', 'Build for disciplined, sustainable growth.'],
]

export default function About() {
  return (
    <main className="overflow-hidden bg-[#F7F7F2] text-[#0B1210] transition-colors duration-500 dark:bg-[#07100D] dark:text-[#EDF7F2]">

      {/* HERO */}
      <section className="relative isolate min-h-[520px] overflow-hidden bg-[#07100D] text-white sm:min-h-[550px] lg:min-h-[570px]">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Tejays Agri integrated agricultural ecosystem"
            className="h-full w-full object-cover object-center transition-transform duration-[1800ms] hover:scale-[1.02]"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#07100D]/55" />

          {/* BLACK → BLUR → IMAGE */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[72%] bg-gradient-to-r from-[#050908] via-[#07100D]/95 via-45% to-transparent" />

          {/* BLUR TRANSITION */}
          <div className="absolute inset-y-0 left-[40%] hidden w-[24%] bg-[#07100D]/55 blur-[60px] lg:block" />

          {/* TOP / BOTTOM FADE */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07100D]/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07100D] to-transparent" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(114,185,67,1)_1px,transparent_1px),linear-gradient(90deg,rgba(114,185,67,1)_1px,transparent_1px)] [background-size:90px_90px]" />
        </div>

        {/* CONTENT */}
        <div className="relative mx-auto flex min-h-[520px] max-w-[1460px] items-center justify-center px-5 py-20 sm:min-h-[550px] sm:px-8 sm:py-24 lg:min-h-[570px] lg:justify-start lg:px-12 lg:py-24">

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="w-full max-w-[650px] text-center lg:text-left"
          >

            {/* LABEL */}
            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#72B943] shadow-[0_0_16px_rgba(114,185,67,0.8)]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/60 sm:text-[9px]">
                About Tejays Agri
              </span>
            </div>

            {/* HEADING */}
            <h1 className="mt-6 text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.08em]">
              <span className="block text-white">
                THINK
              </span>

              <span className="block text-white/25">
                BEYOND
              </span>

              <span className="block text-[#72B943]">
                BOUNDARIES.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-6 max-w-[540px] text-[12px] leading-6 text-white/55 sm:text-[14px] sm:leading-7 lg:mx-0">
              TEJAYS AGRI is being shaped around one simple belief:
              stronger outcomes emerge when dairy, agriculture,
              technology, nutrition and sustainability operate as one
              connected system.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">

              <Link
                to="/smart-dairy"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#72B943] px-6 py-3 text-[8px] font-bold uppercase tracking-[0.18em] text-[#07100D] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(114,185,67,0.18)]"
              >
                Explore the ecosystem

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-[8px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943] hover:bg-[#72B943]/10 hover:text-[#72B943]"
              >
                Start a conversation

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

            {/* KEYWORDS */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
              {["Dairy", "Agriculture", "Technology", "Nutrition"].map((item) => (
                <span
                  key={item}
                  className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#72B943]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE MARKER */}
          <div className="pointer-events-none absolute bottom-7 right-6 hidden items-center gap-3 lg:flex xl:right-12">
            <span className="text-[7px] font-bold uppercase tracking-[0.28em] text-white/30">
              Growing for the future
            </span>

            <span className="h-px w-10 bg-[#72B943]/60" />

            <span className="text-[7px] font-bold uppercase tracking-[0.22em] text-[#72B943]">
              TEJAYS AGRI
            </span>
          </div>

        </div>
      </section>
      
      {/* CORE IDEA */}
      <section className="bg-white px-5 py-16 transition-colors duration-500 dark:bg-[#0B1511] sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#075B3A]/55 dark:text-[#72B943]/65">
                The idea
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
                Think in
                <br />
                <span className="text-[#075B3A] dark:text-[#72B943]">
                  systems.
                </span>
              </h2>
            </div>

            <div
              data-aos="fade-left"
              className="mx-auto max-w-[650px] lg:ml-auto"
            >
              <p className="text-center text-sm leading-7 text-[#4F5D56] dark:text-[#C4D1CB] sm:text-base lg:text-left">
                Agriculture and dairy are not separate worlds. They are part
                of one interconnected system — biological, operational,
                technological and economic.
              </p>

              <p className="mt-6 text-center text-sm leading-7 text-[#7A867F] dark:text-white/45 sm:text-base lg:text-left">
                TEJAYS AGRI is being shaped around this principle: connect the
                systems, make information visible, improve resource efficiency
                and create more value from every stage of the ecosystem.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-10 bg-[#72B943]" />
                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#075B3A] dark:text-[#72B943]">
                  Integrated thinking
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-[#F4F6F1] px-5 py-16 transition-colors duration-500 dark:bg-[#0D1814] sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div
            data-aos="fade-up"
            className="mx-auto max-w-[850px] text-center"
          >
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#075B3A] dark:text-[#72B943]">
              Our foundation
            </p>

            <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              THREE PRINCIPLES.
              <br />
              <span className="text-[#075B3A] dark:text-[#72B943]">
                ONE DIRECTION.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative overflow-hidden rounded-[20px] border border-[#0B1210]/10 bg-white p-5 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#075B3A] hover:bg-[#075B3A] hover:shadow-[0_24px_55px_rgba(7,91,58,0.14)] dark:border-white/10 dark:bg-[#101C18] dark:hover:bg-[#075B3A] sm:rounded-[24px] sm:p-7 sm:text-left sm:p-9"
                >
                  {/* ICON + NUMBER */}
                  <div className="flex items-center justify-between sm:items-start">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#075B3A]/10 bg-[#F7F7F2] transition-all duration-300 group-hover:border-[#72B943] group-hover:bg-[#72B943] dark:border-white/10 dark:bg-white/5">
                      <Icon className="text-[12px] text-[#075B3A] transition-colors duration-300 group-hover:text-[#07100D] dark:text-[#72B943]" />
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#075B3A]/35 transition-colors duration-300 group-hover:text-[#72B943] dark:text-white/25">
                      0{index + 1}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <p className="mt-9 text-[8px] font-bold uppercase tracking-[0.22em] text-[#075B3A] transition-colors duration-300 group-hover:text-[#72B943] dark:text-[#72B943] sm:mt-12">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-[17px] font-semibold leading-tight tracking-[-0.04em] text-[#0B1210] transition-colors duration-300 group-hover:text-white sm:text-2xl dark:text-white">
                    {item.heading}
                  </h3>

                  <p className="mt-4 text-[9px] leading-5 text-[#718079] transition-colors duration-300 group-hover:text-white/65 sm:mt-5 sm:text-[10px] dark:text-white/45">
                    {item.text}
                  </p>

                  <div className="mx-auto mt-7 h-px w-10 bg-[#72B943] transition-all duration-500 group-hover:w-full sm:mx-0 sm:mt-8" />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-[#07100D] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/35">
                Connected by design
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
                One chain.
                <br />
                <span className="text-[#72B943]">Many possibilities.</span>
              </h2>

              <p className="mx-auto mt-7 max-w-[430px] text-[11px] leading-6 text-white/40 lg:mx-0">
                Each stage creates the conditions for the next — creating a
                more connected path from biological potential to nutrition
                and value creation.
              </p>
            </div>

            <div
              data-aos="fade-left"
              className="relative"
            >
              <div className="absolute left-[14px] top-4 bottom-4 w-px bg-gradient-to-b from-[#72B943] via-white/10 to-transparent" />

              <div className="space-y-1">
                {ecosystem.map(([title, text], index) => (
                  <div
                    key={title}
                    className="group relative grid grid-cols-[40px_1fr_auto] items-center gap-4 rounded-xl px-2 py-5 transition-all duration-300 hover:bg-white/[0.04]"
                  >
                    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#07100D] text-[7px] font-bold text-[#72B943] transition-all duration-300 group-hover:border-[#72B943] group-hover:bg-[#72B943] group-hover:text-[#07100D]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h3 className="text-sm font-bold tracking-[0.02em] text-white transition-colors duration-300 group-hover:text-[#72B943]">
                        {title}
                      </h3>
                      <p className="mt-1 text-[9px] text-white/30 transition-colors duration-300 group-hover:text-white/55">
                        {text}
                      </p>
                    </div>

                    <FaArrowRight className="text-[9px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#72B943]" />
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-5 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/25">
                  From biology
                </span>
                <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.22em] text-[#72B943] sm:mt-0">
                  To value creation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="bg-white px-5 py-16 transition-colors duration-500 dark:bg-[#0B1511] sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
            <div
              data-aos="fade-right"
              className="text-center lg:text-left"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#075B3A]/55 dark:text-[#72B943]/65">
                Looking ahead
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
                Built for
                <br />
                <span className="text-[#075B3A] dark:text-[#72B943]">
                  what comes next.
                </span>
              </h2>
            </div>

            <div
              data-aos="fade-left"
              className="mx-auto max-w-[520px] border-l-0 pl-0 text-center sm:max-w-[600px] sm:text-center lg:mx-0 lg:max-w-[520px] lg:border-l lg:border-[#075B3A]/15 lg:pl-6 lg:text-left dark:border-white/10 lg:dark:border-[#72B943]/20"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#075B3A]/60 dark:text-[#72B943]/70">
                Long-term vision
              </p>

              <p className="mx-auto mt-5 max-w-[560px] text-sm leading-7 text-[#68756E] dark:text-white/50 lg:mx-0">
                The ambition is not simply to build larger operations, but to build
                smarter and more connected ones — where technology, sustainability
                and food value creation evolve together.
              </p>

              <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-10 bg-[#72B943]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#075B3A] dark:text-[#72B943]">
                  Future ready
                </span>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="mt-14 grid gap-4 sm:grid-cols-3"
          >
            {[
              ['DAIRY', 'Modern biological operations'],
              ['TECHNOLOGY', 'Connected intelligence'],
              ['SUSTAINABILITY', 'Responsible resource systems'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="group rounded-[22px] border border-[#0B1210]/10 bg-[#F7F7F2] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#075B3A] hover:bg-[#075B3A] hover:shadow-[0_18px_40px_rgba(7,91,58,0.1)] sm:text-left dark:border-white/10 dark:bg-[#101C18] dark:hover:bg-[#075B3A]"
              >
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#075B3A] transition-colors duration-300 group-hover:text-[#72B943] dark:text-[#72B943]">
                  {title}
                </p>

                <p className="mt-3 text-xs font-semibold text-[#0B1210] transition-colors duration-300 group-hover:text-white dark:text-white">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#075B3A] px-5 py-14 text-center text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#72B943]/20 blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-black/20 blur-[140px]" />
        </div>

        <div
          data-aos="fade-up"
          className="relative mx-auto max-w-[950px]"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
            Tejays Agri
          </p>

          <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            Growing for
            <br />
            <span className="text-white/45">the future.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-[10px] leading-5 text-white/60">
            Explore the ecosystem, technology and long-term direction behind
            TEJAYS AGRI.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/technology"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#075B3A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B943] hover:text-[#07100D] sm:w-auto"
            >
              Explore technology
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943] hover:bg-white/10 hover:text-[#72B943] sm:w-auto"
            >
              Start a conversation
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mx-auto mt-8 max-w-[760px] border-t border-white/10 pt-5 text-[9px] leading-5 text-white/45">
            The capabilities, infrastructure and technologies presented across
            this website represent planned, conceptual or exploratory
            directions for the future, unless specifically stated otherwise.
          </p>
        </div>
      </section>
    </main>
  )
}
