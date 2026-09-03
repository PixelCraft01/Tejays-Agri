import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { roadmap } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const aboutImage = assetPath('/images/about-vision.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function About() {
  usePageMeta('Tejays Agri | About', 'Learn about Tejays Agri’s integrated dairy ecosystem, vision, mission, and long-term scalability approach.')

  return (
    <>
      <PageHero
        eyebrow="Tejays Agri"
        title="BUILDING A MORE INTEGRATED FUTURE."
        description="A future-oriented ecosystem designed to connect dairy, technology, agriculture, nutrition, and sustainability around a shared platform of intelligence and long-term value."
        image={aboutImage}
      />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-2">
          <div data-aos="fade-right">
            <SectionHeading eyebrow="Vision" title="A connected model for the next generation of dairy." />
          </div>
          <div data-aos="fade-left" className="text-lg leading-8 text-[#4a5b55] dark:text-[#dfe9e4]">
            Tejays Agri is imagined as an integrated agritech platform that links biology, infrastructure, intelligence, and sustainability into a single long-range strategy. The ambition is to design a dairy value chain where every layer—from genetics to nutrition and resource recovery—works together coherently.
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div data-aos="fade-right" className="rounded-[28px] border border-black/5 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-[#0f1d1a]">
            <SectionHeading eyebrow="Mission" title="Create the infrastructure for resilient dairy value creation." />
            <p className="mt-6 text-base leading-7 text-[#4a5b55] dark:text-[#dfe9e4]">
              The mission is to shape a scalable, future-facing ecosystem that supports intelligent herd development, sustainable resource management, and high-value nutrition products through integrated systems and data-driven planning.
            </p>
          </div>
          <div data-aos="fade-left" className="rounded-[28px] border border-black/5 bg-[#edf3ee] p-8 dark:border-white/10 dark:bg-[#0d1714]">
            <SectionHeading eyebrow="Our approach" title="Designing system-level coordination." />
            <p className="mt-6 text-base leading-7 text-[#4a5b55] dark:text-[#dfe9e4]">
              This approach emphasizes infrastructure, operational intelligence, nutrition, and circularity rather than isolated inputs. Each layer is evaluated within the larger ecosystem to support long-term resilience and adaptability.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Integrated ecosystem" title="A full-stack dairy strategy." description="The platform is designed to connect living systems, operational frameworks, data systems, and value creation pathways in one coherent architecture." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {roadmap.map((item, index) => (
              <div key={item} className="rounded-[28px] border border-black/5 bg-white p-6 text-center shadow-card dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#72B943]/15 text-lg font-semibold text-forest dark:text-[#dfe9e4]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.12em] text-[#0b1210] dark:text-white">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-black/5 bg-[#0b1210] p-8 text-white shadow-soft dark:border-white/10 lg:p-12">
          <SectionHeading eyebrow="Long-term scalability" title="A structure designed for expansion." light />
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
            Tejays Agri is conceptually structured around phased capacity, modular infrastructure, and integrative planning. The design intent is to create room for future expansion across dairy operations, food processing, nutrition, renewable energy, and sustainable resource loops.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/campus" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10">Campus vision</Link>
            <Link to="/technology" className="inline-flex items-center justify-center rounded-full border border-[#72B943]/50 bg-[#72B943] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0b1210] transition hover:-translate-y-1">Technology approach</Link>
          </div>
        </section>
      </main>
    </>
  )
}
