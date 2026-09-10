import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta(
    'Tejays Agri | Contact',
    'Contact Tejays Agri to discuss future dairy, nutrition, technology and sustainability opportunities.'
  )

  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [field]: '',
    }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Full name is required.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.interest) {
      nextErrors.interest = 'Please select an area of interest.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    const whatsappNumber = '919509612559'

    const whatsappMessage = `
🔔 NEW ENQUIRY — TEJAYS AGRI WEBSITE

Name: ${formData.name.trim()}
Company: ${formData.company.trim() || 'Not provided'}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim() || 'Not provided'}
Area of Interest: ${formData.interest}

Message:
${formData.message.trim()}

━━━━━━━━━━━━━━━━━━
TEJAYS AGRI
GROWING FOR THE FUTURE
━━━━━━━━━━━━━━━━━━
    `.trim()

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setErrors({})
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#0B1210] dark:bg-[#0B1210] dark:text-[#EDF7F2]">

      {/* =====================================================
          HERO / INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#075B3A] px-6 pb-14 pt-24 text-white sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32">

        {/* Background */}
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

        {/* Content */}
        <div className="relative mx-auto max-w-[1400px]">

          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* LEFT */}
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

            {/* RIGHT */}
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

          {/* Bottom line */}
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

              {/* EMAIL */}

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


              {/* PHONE */}

              <a
                href="tel:+919509612559"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943]/60 hover:bg-white/[0.08]"
              >

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#72B943] text-[#06120D]">
                  <FaPhone className="text-xs" />
                </span>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    PHONE
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80 group-hover:text-white">
                    +91 9509612559
                  </p>

                </div>

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/919509612559"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#72B943]/60 hover:bg-white/[0.08]"
              >

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#72B943] text-[#06120D]">
                  <FaWhatsapp className="text-sm" />
                </span>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    WHATSAPP
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/80 group-hover:text-white">
                    Chat with TEJAYS AGRI
                  </p>

                </div>

              </a>


              {/* LOCATION */}

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

              /* =================================================
                 SUCCESS STATE
              ================================================= */

              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#72B943] text-[#06120D] shadow-[0_15px_50px_rgba(114,185,67,0.2)]">
                  <FaCheck className="text-2xl" />
                </div>

                <span className="mt-7 text-[9px] font-bold uppercase tracking-[0.25em] text-[#075B3A] dark:text-[#72B943]">
                  WHATSAPP INQUIRY READY
                </span>

                <h2 className="mt-4 text-3xl font-bold uppercase tracking-[-0.04em] sm:text-4xl">
                  THANK YOU.
                </h2>

                <p className="mt-4 max-w-[430px] text-sm leading-6 text-[#64716B] dark:text-white/50">
                  Your enquiry has been prepared in WhatsApp.
                  Please tap Send in WhatsApp to deliver it to the
                  TEJAYS AGRI team.
                </p>


                {/* WhatsApp button */}

                <a
                  href="https://wa.me/919509612559"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B3A] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#064C31] dark:bg-[#72B943] dark:text-[#06120D]"
                >
                  <FaWhatsapp className="text-sm" />
                  OPEN WHATSAPP
                  <FaArrowRight className="text-[8px]" />
                </a>


                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      interest: '',
                      message: '',
                    })
                  }}
                  className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#075B3A] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#075B3A] transition-all duration-300 hover:bg-[#075B3A] hover:text-white dark:border-[#72B943] dark:text-[#72B943] dark:hover:bg-[#72B943] dark:hover:text-[#06120D]"
                >
                  SEND ANOTHER MESSAGE
                  <FaArrowRight className="text-[8px]" />
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} noValidate>

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

                  {/* NAME */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      FULL NAME
                    </label>

                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        updateField('name', e.target.value)
                      }
                      placeholder="Your name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                    {errors.name && (
                      <p className="mt-2 text-[9px] text-red-500">
                        {errors.name}
                      </p>
                    )}

                  </div>


                  {/* COMPANY */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      COMPANY
                    </label>

                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        updateField('company', e.target.value)
                      }
                      placeholder="Company name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                  </div>


                  {/* EMAIL */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      EMAIL ADDRESS
                    </label>

                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        updateField('email', e.target.value)
                      }
                      placeholder="you@company.com"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                    {errors.email && (
                      <p className="mt-2 text-[9px] text-red-500">
                        {errors.email}
                      </p>
                    )}

                  </div>


                  {/* PHONE */}

                  <div className="group">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      PHONE
                    </label>

                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        updateField('phone', e.target.value)
                      }
                      placeholder="+91"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                  </div>


                  {/* INTEREST */}

                  <div className="group sm:col-span-2">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      AREA OF INTEREST
                    </label>

                    <select
                      required
                      value={formData.interest}
                      onChange={(e) =>
                        updateField('interest', e.target.value)
                      }
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-all duration-300 focus:border-[#72B943] dark:border-white/15 dark:bg-[#101815] dark:focus:border-[#72B943]"
                    >

                      <option value="" disabled>
                        Select an area
                      </option>

                      <option value="Smart Dairy">
                        Smart Dairy
                      </option>

                      <option value="Technology & AI">
                        Technology & AI
                      </option>

                      <option value="Processing & Dairy Products">
                        Processing & Dairy Products
                      </option>

                      <option value="Nutrition & Whey">
                        Nutrition & Whey
                      </option>

                      <option value="Precision Agriculture">
                        Precision Agriculture
                      </option>

                      <option value="Partnership / Business">
                        Partnership / Business
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                    {errors.interest && (
                      <p className="mt-2 text-[9px] text-red-500">
                        {errors.interest}
                      </p>
                    )}

                  </div>


                  {/* MESSAGE */}

                  <div className="group sm:col-span-2">

                    <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#52615A] dark:text-white/40">
                      MESSAGE
                    </label>

                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) =>
                        updateField('message', e.target.value)
                      }
                      placeholder="Tell us a little about your requirement..."
                      className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-3 text-sm leading-6 outline-none transition-all duration-300 placeholder:text-black/25 focus:border-[#72B943] dark:border-white/15 dark:placeholder:text-white/20 dark:focus:border-[#72B943]"
                    />

                    {errors.message && (
                      <p className="mt-2 text-[9px] text-red-500">
                        {errors.message}
                      </p>
                    )}

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