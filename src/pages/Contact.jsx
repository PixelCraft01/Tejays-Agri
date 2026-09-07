// import { useState } from 'react'
// import PageHero from '../components/PageHero'
// import { usePageMeta } from '../hooks/usePageMeta'

// export default function Contact() {
//   usePageMeta('Tejays Agri | Contact', 'Contact Tejays Agri to discuss future dairy, nutrition, technology and sustainability opportunities.')
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     message: ''
//   })
//   const [errors, setErrors] = useState({})
//   const [submitted, setSubmitted] = useState(false)

//   const validate = () => {
//     const nextErrors = {}
//     if (!formData.name.trim()) nextErrors.name = 'Name is required.'
//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Valid email is required.'
//     if (!formData.message.trim()) nextErrors.message = 'Message is required.'
//     return nextErrors
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const nextErrors = validate()
//     setErrors(nextErrors)
//     if (Object.keys(nextErrors).length > 0) {
//       setSubmitted(false)
//       return
//     }
//     setSubmitted(true)
//     setErrors({})
//     setFormData({ name: '', email: '', company: '', phone: '', message: '' })
//   }

//   return (
//     <>
//       <PageHero
//         eyebrow="Contact"
//         title="LET'S BUILD THE FUTURE OF DAIRY."
//         description="Start a conversation about integrated dairy, technology, nutrition, and sustainable growth."
//       />

//       <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
//         <div className="rounded-[30px] border border-black/5 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-[#0f1d1a] lg:p-10">
//           <form onSubmit={handleSubmit} noValidate className="grid gap-6 md:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Name</label>
//               <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
//               {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
//             </div>

//             <div>
//               <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Email</label>
//               <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
//               {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Company</label>
//               <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
//             </div>

//             <div>
//               <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Phone</label>
//               <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
//             </div>

//             <div className="md:col-span-2">
//               <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Message</label>
//               <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="5" className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
//               {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
//             </div>

//             <div className="md:col-span-2">
//               <button type="submit" className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:shadow-soft">
//                 Send Inquiry
//               </button>
//               {submitted && <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-300">Inquiry sent successfully. We will be in touch soon.</p>}
//             </div>
//           </form>
//         </div>
//       </main>
//     </>
//   )
// }




import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#0B1210] dark:bg-[#0B1210] dark:text-[#EDF7F2]">

      {/* =====================================================
          HERO / INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#075B3A] px-6 pb-14 pt-24 text-white sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32">

        {/* =====================================================
      BACKGROUND DETAILS
  ===================================================== */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#72B943]/20 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-black/20 blur-[110px]" />

        <div
          className="
      pointer-events-none
      absolute inset-0
      opacity-[0.07]
      [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
      [background-size:70px_70px]
    "
        />


        {/* =====================================================
      CONTENT
  ===================================================== */}

        <div className="relative mx-auto max-w-[1400px]">

          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* =================================================
          LEFT
      ================================================= */}

            <div data-aos="fade-up">

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#72B943]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#72B943]">
                  CONTACT TEJAYS AGRI
                </span>

              </div>


              <h1
                className="
            max-w-[900px]
            text-[clamp(3rem,7vw,7rem)]
            font-extrabold
            uppercase
            leading-[0.86]
            tracking-[-0.065em]
          "
              >
                LET'S BUILD
                <span className="block text-[#72B943]">
                  WHAT'S NEXT.
                </span>
              </h1>

            </div>


            {/* =================================================
          RIGHT
      ================================================= */}

            <div
              data-aos="fade-left"
              className="max-w-[470px] lg:justify-self-end"
            >

              <div className="border-l-2 border-[#72B943] pl-5">

                <p className="text-sm leading-7 text-white/70 sm:text-[15px]">
                  Have a question, partnership idea or business
                  opportunity? Tell us what you are looking to build
                  and we'll connect you with the right team.
                </p>

              </div>


              {/* Small ecosystem label */}

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">

                <span className="cursor-default text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 underline-offset-4 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#72B943] hover:underline hover:decoration-[#72B943]">
                  DAIRY
                </span>

                <span className="h-1 w-1 rounded-full bg-[#72B943]" />

                <span className="cursor-default text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 underline-offset-4 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#72B943] hover:underline hover:decoration-[#72B943]">
                  TECHNOLOGY
                </span>

                <span className="h-1 w-1 rounded-full bg-[#72B943]" />

                <span className="cursor-default text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 underline-offset-4 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#72B943] hover:underline hover:decoration-[#72B943]">
                  NUTRITION
                </span>

                <span className="h-1 w-1 rounded-full bg-[#72B943]" />

                <span className="cursor-default text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 underline-offset-4 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#72B943] hover:underline hover:decoration-[#72B943]">
                  AGRICULTURE
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
        BOTTOM LINE
    ===================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="180"
            className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
          >

            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/35">
              GROWING FOR THE FUTURE
            </p>

            <p className="text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-right">
              ONE INTEGRATED ECOSYSTEM
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT AREA
      ===================================================== */}

      <section className="px-6 py-4 pb-20 sm:px-8 lg:px-12 lg:pb-28">

        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.7fr_1.3fr]">

          {/* =================================================
              LEFT INFORMATION
          ================================================= */}

          <div
            data-aos="fade-right"
            className="flex flex-col justify-between rounded-[28px] bg-[#075B3A] p-7 text-white sm:p-9 lg:p-10"
          >

            <div>

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#72B943]">
                CONNECT WITH TEJAYS
              </span>

              <h2 className="mt-5 max-w-[400px] text-3xl font-bold uppercase leading-tight tracking-[-0.04em] sm:text-4xl">
                One conversation
                <span className="block text-[#72B943]">
                  can start a new
                </span>
                possibility.
              </h2>

              <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/60">
                Tell us what you are looking for. Our team can
                connect you with the right area of the TEJAYS AGRI
                ecosystem.
              </p>

            </div>


            {/* Contact details */}

            <div className="mt-10 space-y-4">

              <a
                href="mailto:info@tejaysagri.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943]/60 hover:bg-white/[0.08]"
              >

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#72B943] text-[#06120D]">
                  <FaEnvelope className="text-xs" />
                </span>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    EMAIL
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80 group-hover:text-white">
                    info@tejaysagri.com
                  </p>
                </div>

              </a>


              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#72B943]/60 hover:bg-white/[0.08]">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#72B943] text-[#06120D]">
                  <FaPhone className="text-xs" />
                </span>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    PHONE
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80">
                    Available through our team
                  </p>
                </div>

              </div>


              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#72B943]/60 hover:bg-white/[0.08]">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#72B943] text-[#06120D]">
                  <FaMapMarkerAlt className="text-xs" />
                </span>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    LOCATION
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80">
                    India
                  </p>
                </div>

              </div>

            </div>


            {/* Bottom label */}

            <div className="mt-10 border-t border-white/10 pt-5">

              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/30">
                INTEGRATED
                <span className="mx-2 text-[#72B943]">•</span>
                INTELLIGENT
                <span className="mx-2 text-[#72B943]">•</span>
                SUSTAINABLE
              </p>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <div
            data-aos="fade-left"
            className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_80px_rgba(7,91,58,0.06)] sm:p-9 lg:p-12 dark:border-white/10 dark:bg-[#101815] dark:shadow-none"
          >

            {submitted ? (

              /* SUCCESS STATE */

              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#72B943] text-[#06120D] shadow-[0_15px_50px_rgba(114,185,67,0.2)]">
                  <FaCheck className="text-2xl" />
                </div>

                <span className="mt-7 text-[9px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  MESSAGE RECEIVED
                </span>

                <h2 className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] sm:text-4xl">
                  THANK YOU.
                </h2>

                <p className="mt-4 max-w-[430px] text-sm leading-6 text-[#64716B] dark:text-white/50">
                  Your message has been captured. Our team will
                  review your enquiry and connect with you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#075B3A] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#075B3A] transition-all duration-300 hover:bg-[#075B3A] hover:text-white dark:border-[#72B943] dark:text-[#72B943] dark:hover:bg-[#72B943] dark:hover:text-[#06120D]"
                >
                  SEND ANOTHER MESSAGE
                  <FaArrowRight className="text-[8px]" />
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit}>

                {/* Form heading */}

                <div className="mb-8">

                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                    YOUR ENQUIRY
                  </span>

                  <h2 className="mt-3 text-3xl font-bold uppercase tracking-[-0.04em] sm:text-4xl">
                    TELL US
                    <span className="text-[#075B3A] dark:text-[#72B943]">
                      {' '}MORE.
                    </span>
                  </h2>

                  <p className="mt-3 max-w-[520px] text-xs leading-5 text-[#68746E] dark:text-white/40">
                    Fill in the details below and tell us how we
                    can connect.
                  </p>

                </div>


                {/* Inputs */}

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Name */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      FULL NAME
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                  </div>


                  {/* Company */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      COMPANY
                    </label>

                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                  </div>


                  {/* Email */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      EMAIL ADDRESS
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                  </div>


                  {/* Phone */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      PHONE
                    </label>

                    <input
                      type="tel"
                      placeholder="+91"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                  </div>


                  {/* Interest */}

                  <div className="group sm:col-span-2">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      AREA OF INTEREST
                    </label>

                    <select
                      required
                      defaultValue=""
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 focus:border-[#72B943] dark:border-white/15 dark:bg-[#101815] dark:focus:border-[#72B943]"
                    >
                      <option value="" disabled>
                        Select an area
                      </option>
                      <option value="dairy">
                        Smart Dairy
                      </option>
                      <option value="technology">
                        Technology & AI
                      </option>
                      <option value="processing">
                        Processing & Dairy Products
                      </option>
                      <option value="nutrition">
                        Nutrition & Whey
                      </option>
                      <option value="agriculture">
                        Precision Agriculture
                      </option>
                      <option value="partnership">
                        Partnership / Business
                      </option>
                      <option value="other">
                        Other
                      </option>
                    </select>

                  </div>


                  {/* Message */}

                  <div className="group sm:col-span-2">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      MESSAGE
                    </label>

                    <textarea
                      required
                      rows="5"
                      placeholder="Tell us a little about your requirement..."
                      className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-3 text-sm leading-6 outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                  </div>

                </div>


                {/* Submit */}

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-[300px] text-[9px] leading-4 text-[#7B8982] dark:text-white/30">
                    By submitting this form, you agree to be
                    contacted regarding your enquiry.
                  </p>


                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-4 rounded-full bg-[#075B3A] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#064C31] hover:shadow-[0_15px_35px_rgba(7,91,58,0.2)] sm:w-auto"
                  >

                    SEND MESSAGE

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#72B943] text-[#06120D] transition-transform duration-300 group-hover:translate-x-1">
                      <FaArrowRight className="text-[8px]" />
                    </span>

                  </button>

                </div>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <section className="border-t border-black/10 px-6 py-10 dark:border-white/10 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#075B3A]/60 dark:text-white/30">
            TEJAYS AGRI
          </p>

          <p className="max-w-[520px] text-xs leading-5 text-[#68746E] dark:text-white/40">
            Building connected systems for dairy, agriculture,
            food technology and sustainable value creation.
          </p>

          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#075B3A] transition-all duration-300 hover:text-[#72B943] dark:text-[#72B943]"
          >
            BACK TO HOME

            <FaArrowRight className="text-[8px] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

      </section>

    </main>
  )
}