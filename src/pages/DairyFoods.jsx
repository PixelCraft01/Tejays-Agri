import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { dairyProducts } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const dairyImage = assetPath('/images/hero-campus.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function DairyFoods() {
  usePageMeta('Tejays Agri | Dairy & Foods', 'Discover the planned dairy and value-added food portfolio, from milk through specialty products and nutrition pathways.')

  return (
    <>
      <PageHero
        eyebrow="Dairy & foods"
        title="FROM MILK TO VALUE-ADDED FOODS."
        description="An integrated product strategy designed to unlock premium dairy and food innovation across quality, processing, and future value streams."
        image={dairyImage}
      />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Product portfolio" title="Premium dairy products designed for future value." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dairyProducts.map((item, index) => (
            <article key={item.name} className="rounded-[26px] border border-black/5 bg-white p-6 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="mb-5 h-28 rounded-[20px] bg-gradient-to-br from-[#edf3ee] to-[#d7ebdf] dark:from-[#101d1a] dark:to-[#0d1714]" />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#0b1210] dark:text-white">{item.name}</h3>
                <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${item.accent}`}>
                  {item.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
