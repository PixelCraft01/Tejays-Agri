import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { nutritionProducts } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const nutritionImage = assetPath('/images/hero-campus.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Nutrition() {
  usePageMeta('Tejays Agri | Nutrition', 'Explore the next-generation nutrition strategy designed around protein, WPC, WPI and whey-based product innovation.')

  return (
    <>
      <PageHero
        eyebrow="Nutrition"
        title="ENGINEERING THE NEXT GENERATION OF NUTRITION."
        description="A premium nutrition strategy built around protein, whey and future formulation pathways for performance-oriented dairy innovation."
        image={nutritionImage}
      />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Focus areas" title="Protein. WPC. WPI. Whey-based nutrition." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {nutritionProducts.map((item, index) => (
            <div key={item.name} className="rounded-[26px] border border-black/5 bg-white p-6 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-up" data-aos-delay={index * 90}>
              <div className="mb-5 h-24 rounded-[18px] bg-gradient-to-br from-[#edf3ee] via-[#dff3ec] to-[#f6e7b6] dark:from-[#0f1d1a] dark:via-[#122620] dark:to-[#1a241d]" />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#0b1210] dark:text-white">{item.name}</h3>
                <span className="rounded-full bg-[#72B943]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-forest dark:text-[#dfe9e4]">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
