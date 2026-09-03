import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { assetPath } from '../utils/assetPath'

const agricultureImage = assetPath('/images/hero-campus.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Agriculture() {
  usePageMeta('Tejays Agri | Agriculture', 'See how agriculture, feed, dairy and nutrition are designed to work together in one connected resource flow.')

  return (
    <>
      <PageHero
        eyebrow="Agriculture"
        title="FROM AGRICULTURE TO DAIRY. ONE CONNECTED SYSTEM."
        description="A circular connection from agricultural production to feed systems, dairy operations, processing, and the nutrition lifecycle."
        image={agricultureImage}
      />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Value chain" title="AGRICULTURE → FEED → DAIRY → PROCESSING → NUTRITION" />
        <div className="mt-12 flex flex-wrap justify-center gap-3" data-aos="fade-up">
          {['Agriculture', 'Feed', 'Dairy', 'Processing', 'Nutrition'].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className="rounded-full border border-forest/20 bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#123c2d] dark:bg-[#0f1d1a] dark:text-[#edf7f2]">{item}</div>
              {index < 4 && <span className="text-[#72B943]">→</span>}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]">
            <SectionHeading eyebrow="Feed ecosystem" title="Resource optimization across the cycle." />
            <p className="mt-6 text-base leading-7 text-[#4a5b55] dark:text-[#dfe9e4]">
              The agricultural layer is planned as a strategic feed and resource foundation for dairy operations, with efficiency and circularity guiding how nutrient flows, inputs, and outputs are managed.
            </p>
          </div>
          <div className="rounded-[28px] border border-black/5 bg-[#edf3ee] p-8 dark:border-white/10 dark:bg-[#0d1714]">
            <SectionHeading eyebrow="Circular agriculture" title="Integrated planning for resource performance." />
            <p className="mt-6 text-base leading-7 text-[#4a5b55] dark:text-[#dfe9e4]">
              Circular agriculture connects land, feed resources, waste streams, and dairy value creation into a coherent system for resilience and low-friction operational planning.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
