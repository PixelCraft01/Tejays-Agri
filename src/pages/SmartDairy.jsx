import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { featureCards } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const smartImage = assetPath('/images/smart-dairy.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function SmartDairy() {
  usePageMeta('Tejays Agri | Smart Dairy', 'Explore the future-focused smart dairy ecosystem, herd intelligence, feed systems, and health monitoring concepts.')

  return (
    <>
      <PageHero
        eyebrow="Smart dairy"
        title="SMART DAIRY. INTELLIGENCE AT EVERY LAYER."
        description="A conceptual framework for connected herd management, precision operations, health intelligence, and climate-aware care."
        image={smartImage}
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        <section>
          <SectionHeading eyebrow="Core systems" title="HERD • FEED • HEALTH • MILK • ENVIRONMENT • OPERATIONS" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card, index) => (
              <article key={card.title} className="rounded-[26px] border border-black/5 bg-white p-6 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="inline-flex rounded-full bg-[#72B943]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest dark:text-[#dfe9e4]">{card.badge}</div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[#0b1210] dark:text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4a5b55] dark:text-[#dfe9e4]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-black/5 bg-[#edf3ee] p-8 dark:border-white/10 dark:bg-[#0d1714] lg:p-12">
          <SectionHeading eyebrow="Operating model" title="A future-ready operating architecture." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['Herd', 'Feed', 'Health', 'Milk', 'Environment', 'Operations'].map((layer) => (
              <div key={layer} className="rounded-2xl border border-black/5 bg-white p-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#0b1210] dark:border-white/10 dark:bg-[#0f1d1a] dark:text-[#edf7f2]">
                {layer}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
