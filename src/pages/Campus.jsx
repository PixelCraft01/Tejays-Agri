import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { campusFacilities } from '../data/siteData'
import { assetPath } from '../utils/assetPath'

const campusImage = assetPath('/images/about-vision.svg')
import { usePageMeta } from '../hooks/usePageMeta'

export default function Campus() {
  const [activeFacility, setActiveFacility] = useState(campusFacilities[0])
  usePageMeta('Tejays Agri | Campus', 'Explore the conceptual campus masterplan and planned facilities behind the Tejays Agri integrated ecosystem.')

  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="ONE CAMPUS. ONE INTEGRATED ECOSYSTEM."
        description="Explore the infrastructure behind the future of dairy."
        image={campusImage}
      />

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Masterplan" title="Conceptual campus architecture." />

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-[#edf3ee] p-5 shadow-soft dark:border-white/10 dark:bg-[#0d1714]" data-aos="zoom-in">
            <div className="relative h-[620px] overflow-hidden rounded-[24px] border border-black/5 bg-[radial-gradient(circle_at_top,_rgba(46,140,130,0.18),transparent_30%),linear-gradient(135deg,#edf3ee,#dfe9e4)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,_rgba(46,140,130,0.2),transparent_25%),linear-gradient(135deg,#0d1714,#101d1a)]">
              {campusFacilities.map((facility, index) => {
                const positions = [
                  'top-[8%] left-[14%]',
                  'top-[24%] left-[42%]',
                  'top-[13%] right-[12%]',
                  'top-[42%] left-[22%]',
                  'top-[53%] left-[52%]',
                  'top-[34%] right-[16%]',
                  'top-[67%] left-[18%]',
                  'top-[67%] left-[46%]',
                  'top-[58%] right-[18%]',
                  'top-[82%] left-[24%]',
                  'top-[82%] left-[52%]',
                  'top-[70%] right-[12%]',
                  'top-[90%] left-[46%]'
                ]
                return (
                  <button
                    key={facility.id}
                    type="button"
                    onClick={() => setActiveFacility(facility)}
                    className={`absolute ${positions[index]} flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-semibold transition ${activeFacility.id === facility.id ? 'border-[#72B943] bg-[#72B943] text-white shadow-lg' : 'border-[#0b1210]/20 bg-white text-[#0b1210] dark:border-white/20 dark:bg-[#0f1d1a] dark:text-white'}`}
                    aria-label={facility.name}
                  >
                    {index + 1}
                  </button>
                )
              })}

              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-black/5 bg-white/80 px-4 py-3 text-sm text-[#0b1210] backdrop-blur-md dark:border-white/10 dark:bg-[#0f1d1a]/80 dark:text-white">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest dark:text-[#9fd8bc]">Zoom level</span>
                <div className="mt-2 flex gap-2">
                  <button type="button" className="rounded-full border border-black/5 bg-white px-3 py-1 text-xs dark:border-white/10 dark:bg-[#101d1a]">−</button>
                  <button type="button" className="rounded-full border border-black/5 bg-white px-3 py-1 text-xs dark:border-white/10 dark:bg-[#101d1a]">+</button>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[30px] border border-black/5 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-[#0f1d1a]" data-aos="fade-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-forest dark:text-[#9fd8bc]">Facility detail</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#0b1210] dark:text-white">{activeFacility.name}</h3>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4a5b55] dark:text-[#dfe9e4]">Phase-I: {activeFacility.phase}</p>
            <ul className="mt-6 space-y-3 text-sm text-[#4a5b55] dark:text-[#dfe9e4]">
              {activeFacility.details.map((point) => (
                <li key={point} className="flex items-center gap-3 border-b border-black/5 pb-3 dark:border-white/10">
                  <span className="h-2 w-2 rounded-full bg-[#72B943]" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-[#72B943]/25 bg-[#72B943]/10 p-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#123c2d] dark:text-[#dfe9e4]">
              Status: {activeFacility.status}
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
