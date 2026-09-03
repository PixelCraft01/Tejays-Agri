import { useState } from 'react'
import PageHero from '../components/PageHero'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta('Tejays Agri | Contact', 'Contact Tejays Agri to discuss future dairy, nutrition, technology and sustainability opportunities.')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Valid email is required.'
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'
    return nextErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }
    setSubmitted(true)
    setErrors({})
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="LET'S BUILD THE FUTURE OF DAIRY."
        description="Start a conversation about integrated dairy, technology, nutrition, and sustainable growth."
      />

      <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-black/5 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-[#0f1d1a] lg:p-10">
          <form onSubmit={handleSubmit} noValidate className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Name</label>
              <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
              {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
              {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Company</label>
              <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Phone</label>
              <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a5b55] dark:text-[#dfe9e4]">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="5" className="w-full rounded-2xl border border-black/5 bg-[#f7f7f2] px-4 py-3 text-base text-[#0b1210] outline-none focus:border-forest dark:border-white/10 dark:bg-[#101d1a] dark:text-white" />
              {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:shadow-soft">
                Send Inquiry
              </button>
              {submitted && <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-300">Inquiry sent successfully. We will be in touch soon.</p>}
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
