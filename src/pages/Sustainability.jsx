import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { sustainabilityFlow } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const sustainabilityImage = assetPath('/images/hero-campus.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Sustainability() {
  usePageMeta('Tejays Agri | Sustainability', 'Learn about the circular dairy ecosystem, renewable energy, water reuse, and waste-to-resource planning.')

  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="THE CIRCULAR DAIRY ECOSYSTEM."
        description="Turning resources into value across dairy, energy, agriculture and nutrition."
        image={sustainabilityImage}
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        <section>
          <SectionHeading eyebrow="Circular system" title="MANURE → BIOGAS → ENERGY → FERTILIZER → AGRICULTURE → FEED → DAIRY" />
          <div className="mt-12 flex flex-wrap justify-center gap-2" data-aos="fade-up">
            {sustainabilityFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className="rounded-full border border-forest/20 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#123c2d] dark:bg-[#0f1d1a] dark:text-[#edf7f2]">
                  {step}
                </div>
                {index < sustainabilityFlow.length - 1 && <span className="text-[#72B943]">↓</span>}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-right">
            <SectionHeading eyebrow="Renewable energy" title="Clean energy pathways." />
            <ul className="mt-7 space-y-3 text-sm text-[#4a5b55] dark:text-[#dfe9e4]">
              <li>Solar</li>
              <li>Biogas</li>
              <li>Energy management</li>
              <li>Potential battery storage</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-[#edf3ee] p-8 dark:border-white/10 dark:bg-[#0d1714]" data-aos="fade-left">
            <SectionHeading eyebrow="Water" title="Resource capture and reuse." />
            <ul className="mt-7 space-y-3 text-sm text-[#4a5b55] dark:text-[#dfe9e4]">
              <li>Rainwater harvesting</li>
              <li>ETP/STP</li>
              <li>Water recycling</li>
              <li>Precision irrigation</li>
            </ul>
          </div>
        </section>

        <section className="rounded-[30px] border border-black/5 bg-[#0b1210] p-8 text-white shadow-soft dark:border-white/10 lg:p-12">
          <SectionHeading eyebrow="From waste to resource" title="Proposed and planned systems for circular value." light />
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
            The sustainability model is designed around circular resource recovery, localized energy generation, water stewardship, and nutrient loops, with a clear emphasis on proposed, planned, and potential future infrastructure.
          </p>
        </section>
      </main>
    </>
  )
}
