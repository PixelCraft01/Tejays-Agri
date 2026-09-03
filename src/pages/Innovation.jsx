import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { innovationAreas } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const innovationImage = assetPath('/images/about-vision.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Innovation() {
  usePageMeta('Tejays Agri | Innovation', 'Explore the innovation pillars behind Tejays Agri: AI, IoT, automation, food technology, nutrition, and sustainability.')

  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title="INNOVATION BUILT INTO THE ECOSYSTEM."
        description="Research, intelligent systems, automation, nutrition, and sustainability work together within one strategic platform."
        image={innovationImage}
      />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Innovation areas" title="Technology, food science, and sustainability working as one." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {innovationAreas.map((area, index) => (
            <div key={area} className="rounded-[26px] border border-black/5 bg-white p-7 shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#72B943]/15 text-lg font-semibold text-forest dark:text-[#dfe9e4]">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#0b1210] dark:text-white">{area}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
