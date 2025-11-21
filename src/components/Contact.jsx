import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) {
        setStatus('Thanks — we will reach out within 24h.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Try again?')
      }
    } catch (err) {
      setStatus('Network error. Try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Let’s build</h2>
          <p className="mt-2 text-slate-300/80">Tell us a bit about your Salesforce challenge.</p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input name="name" required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <input name="email" required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <input name="company" placeholder="Company" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40 md:col-span-2" />
          <textarea name="message" required rows="5" placeholder="What do you need?" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40 md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,.35)] hover:opacity-95" type="submit">
              Send message
            </button>
            <span className="text-sm text-slate-300/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
