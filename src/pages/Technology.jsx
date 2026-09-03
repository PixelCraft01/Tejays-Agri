import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { aiIoT, computerVision, techModules } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const techImage = assetPath('/images/hero-campus.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Technology() {
  usePageMeta('Tejays Agri | Technology', 'See how technology, AI, IoT, computer vision and data systems connect throughout the Tejays Agri ecosystem.')

  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="TECHNOLOGY AT THE HEART OF DAIRY."
        description="Connecting animals, infrastructure, data and intelligence into one integrated ecosystem."
        image={techImage}
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] border border-black/5 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-right">
            <SectionHeading eyebrow="AI & IoT" title="Physical + digital intelligence." />
            <ul className="mt-8 space-y-3 text-sm text-[#4a5b55] dark:text-[#dfe9e4]">
              {aiIoT.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-black/5 pb-3 dark:border-white/10">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#72B943]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-black/5 bg-[#edf3ee] p-8 dark:border-white/10 dark:bg-[#0d1714]" data-aos="fade-left">
            <SectionHeading eyebrow="Computer vision" title="Behaviour and welfare insight." />
            <ul className="mt-8 space-y-3 text-sm text-[#4a5b55] dark:text-[#dfe9e4]">
              {computerVision.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-black/5 pb-3 dark:border-white/10">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#2E8C82]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[32px] border border-black/5 bg-[#0b1210] p-8 text-white shadow-soft dark:border-white/10 lg:p-12">
          <SectionHeading eyebrow="AI command centre" title="A conceptual digital operating dashboard." light />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Herd', '91% signal integrity', 'PROPOSED / FUTURE CAPABILITY'],
                ['Feed', 'Optimization model', 'PROPOSED / FUTURE CAPABILITY'],
                ['Milk', 'Yield insights', 'PROPOSED / FUTURE CAPABILITY'],
                ['Processing', 'Quality mapping', 'PROPOSED / FUTURE CAPABILITY'],
                ['Energy', 'Load balancing', 'PROPOSED / FUTURE CAPABILITY'],
                ['Water', 'Usage insights', 'PROPOSED / FUTURE CAPABILITY'],
                ['Inventory', 'Stock visibility', 'PROPOSED / FUTURE CAPABILITY'],
                ['Logistics', 'Flow orchestration', 'PROPOSED / FUTURE CAPABILITY']
              ].map(([name, metric, status]) => (
                <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-5" data-aos="zoom-in">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9ddcb]">{name}</p>
                  <h4 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">{metric}</h4>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d8d5b4]">{status}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0f1d1a] p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8d5b4]">Live system overview</p>
                <span className="rounded-full bg-[#72B943]/15 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#dfe9e4]">Prototype</span>
              </div>
              <div className="space-y-4">
                {techModules.map((module, index) => (
                  <div key={module}>
                    <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dfe9e4]">
                      <span>{module}</span>
                      <span>{index * 8 + 72}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-forest via-teal to-[#DDA83B]" style={{ width: `${index * 9 + 52}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
