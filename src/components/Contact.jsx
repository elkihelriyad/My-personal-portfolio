import { useState } from 'react'
import { motion } from 'framer-motion'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [isSent, setIsSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSent(true)
    setFormData(initialForm)
  }

  return (
    <section id="contact" className="pb-24 pt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)]">Contact</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">Let us build something useful</h2>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="input-field"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="input-field"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              rows={5}
              className="input-field md:col-span-2"
            />
            <button
              type="submit"
              className="md:col-span-2 rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Send Message
            </button>
          </form>

          {isSent && <p className="mt-4 text-sm text-[var(--text-muted)]">Message captured. Thanks for reaching out.</p>}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact