import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { assetPath } from '../utils/assetPath'

const geneticsImage = assetPath('/images/about-vision.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Genetics() {
  usePageMeta('Tejays Agri | Genetics', 'Understand the planned genetics strategy, breeding direction, animal health focus, and herd development framework.')

  return (
    <>
      <PageHero
        eyebrow="Genetics"
        title="BUILDING THE FOUNDATION OF A BETTER HERD."
        description="A conceptual genetics and herd development model focused on resilient breeding, data-driven selection, and animal health optimization."
        image={geneticsImage}
      />

      <main className="mx-auto max-w-7xl space-y-16 px-4 py-20 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-2">
          {['Genetics', 'Breeding', 'Animal Health', 'Herd Development', 'Data-driven Selection'].map((item, idx) => (
            <div key={item} className="rounded-[26px] border border-black/5 bg-white p-7 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-up" data-aos-delay={idx * 60}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest dark:text-[#9fd8bc]">{idx + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[#0b1210] dark:text-white">{item}</h3>
              <p className="mt-4 text-base leading-7 text-[#4a5b55] dark:text-[#dfe9e4]">
                Conceptual planning in this area focuses on long-term herd quality, animal welfare, and selection frameworks built around data-informed decisions.
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-[30px] border border-black/5 bg-[#edf3ee] p-8 dark:border-white/10 dark:bg-[#0d1714] lg:p-12">
          <SectionHeading eyebrow="Strategic direction" title="Future-focused herd intelligence." />
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#4a5b55] dark:text-[#dfe9e4]">
            The genetics strategy is designed to connect breeding decisions, health insights, and animal performance into a measurable framework for better herd development over time.
          </p>
        </section>
      </main>
    </>
  )
}
