import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { businessStreams } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const businessImage = assetPath('/images/about-vision.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Business() {
  usePageMeta('Tejays Agri | Business', 'Understand the multiple value streams shaping the Tejays Agri ecosystem across dairy, food processing, nutrition, agritech and sustainability.')

  return (
    <>
      <PageHero
        eyebrow="Business"
        title="ONE ECOSYSTEM. MULTIPLE VALUE STREAMS."
        description="A strategic model connecting dairy, food processing, nutrition, agritech and sustainability into broader value creation."
        image={businessImage}
      />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Value streams" title="A platform designed for diversified opportunity." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {businessStreams.map((stream, index) => (
            <div key={stream} className="rounded-[24px] border border-black/5 bg-white p-6 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-up" data-aos-delay={index * 70}>
              <div className="mb-5 h-10 w-10 rounded-full bg-[#72B943]/15 text-center text-base font-semibold leading-10 text-forest dark:text-[#dfe9e4]">{index + 1}</div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#0b1210] dark:text-white">{stream}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
