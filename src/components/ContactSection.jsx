import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Send } from 'lucide-react'
import CountrySelector from './CountrySelector'
import { countries } from '../data/countries'
import '../styles/ContactSection.css'
import IconContainer from './IconContainer'

const initialForm = {
    name: '',
    email: '',
    address: '',
    phone: '',
    subject: '',
    message: '',
}

function ContactSection() {
    const [formData, setFormData] = useState(initialForm)
    const [status, setStatus] = useState('idle') // idle, submitting, success, error
    const [selectedCountry, setSelectedCountry] = useState(
        countries.find(c => c.code === 'MA') || countries[0]
    )

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((previous) => ({ ...previous, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus('submitting')

        // Include country code in phone field for Formspree
        const submissionData = {
            ...formData,
            phone: `${selectedCountry.dial_code} ${formData.phone}`.trim()
        }

        try {
            const response = await fetch('https://formspree.io/f/xreyenyr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(submissionData)
            })

            if (response.ok) {
                setStatus('success')
                setFormData(initialForm)
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="pt-32 pb-24 md:py-32 relative overflow-hidden">
            <div className="mx-auto max-w-[1340px] w-[92%] px-4 md:px-0">

                <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">

                    {/* LEFT SIDE: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-[1px] w-6 bg-[#3b82f6]/50"></span>
                            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#60a5fa]">
                                CONTACTEZ-NOUS
                            </p>
                        </div>

                        <h2 className="mt-4 md:mt-8 font-serif text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-[var(--text-primary)] leading-tight">
                            Discussion <br />
                            <em className="inline-block font-light italic text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">professionnelle</em>
                        </h2>

                        <p className="mt-6 md:mt-8 text-[15px] leading-[1.7] text-[var(--text-muted)] max-w-[65ch]">
                            Ouvert aux opportunités académiques et professionnelles, aux stages, collaborations et échanges techniques. N'hésitez pas à me contacter.
                        </p>

                        <div className="mt-8 md:mt-12 flex flex-col gap-4 md:gap-6">

                            <a href="mailto:elkihelriyad@gmail.com" className="group flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 transition-all hover:bg-[var(--bg-card)] hover:border-[var(--accent)] relative overflow-hidden backdrop-blur-xl shadow-lg">
                                <div className="flex items-center gap-5">
                                    <IconContainer color="blue">
                                        <Mail />
                                    </IconContainer>
                                    <div>
                                        <h4 className="!font-sans text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Email</h4>
                                        <p className="mt-1 text-[15px] font-semibold text-[var(--text-primary)]">elkihelriyad@gmail.com</p>
                                    </div>
                                </div>
                                <span className="text-[#8b9bc0] transition-transform group-hover:translate-x-1 group-hover:text-white">→</span>
                            </a>

                            <a href="tel:+212642202828" className="group flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 transition-all hover:bg-[var(--bg-card)] hover:border-[var(--accent)] relative overflow-hidden backdrop-blur-xl shadow-lg">
                                <div className="flex items-center gap-5">
                                    <IconContainer color="emerald">
                                        <Phone />
                                    </IconContainer>
                                    <div>
                                        <h4 className="!font-sans text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Téléphones</h4>
                                        <p className="mt-1 text-[15px] font-semibold text-[var(--text-primary)]">+212 642-202828</p>
                                    </div>
                                </div>
                                <span className="text-[#8b9bc0] transition-transform group-hover:translate-x-1 group-hover:text-white">→</span>
                            </a>

                            <a href="https://www.linkedin.com/in/riyad-elkihel/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 transition-all hover:bg-[var(--bg-card)] hover:border-[var(--accent)] relative overflow-hidden backdrop-blur-xl shadow-lg">
                                <div className="flex items-center gap-5">
                                    <IconContainer color="blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]">
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    </IconContainer>
                                    <div>
                                        <h4 className="!font-sans text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">LinkedIn</h4>
                                        <p className="mt-1 text-[15px] font-semibold text-[var(--text-primary)]">EL KIHEL RIYAD</p>
                                    </div>
                                </div>
                                <span className="text-[#8b9bc0] transition-transform group-hover:translate-x-1 group-hover:text-white">→</span>
                            </a>

                        </div>

                        <div className="mt-8 rounded-2xl border border-[#10b981]/10 bg-[#064e3b]/10 p-5">
                            <div className="flex items-center gap-3">
                                <div className="status-dot"></div>
                                <h4 className="text-[14px] font-bold text-[var(--text-primary)] !font-sans">Actuellement disponible</h4>
                            </div>
                            <p className="mt-3 text-[12px] leading-relaxed text-[#8b9bc0]">
                                Disponible pour des discussions et collaborations • Réponse garantie sous 48h
                            </p>
                        </div>

                    </motion.div>

                    {/* RIGHT SIDE: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-[32px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 md:p-12 shadow-2xl backdrop-blur-2xl overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--text-primary)]">Envoyez-moi un message</h3>
                            <p className="mt-4 md:mt-6 text-[14px] text-[#8b9bc0]">Une opportunité, une idée ou une question ? Parlons-en.</p>

                            <form onSubmit={handleSubmit} className="mt-8 md:mt-12 grid gap-6 md:gap-8 md:grid-cols-2">

                                <div className="md:col-span-1">
                                    <label className="mb-2 block font-mono text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Nom <span className="text-[#60a5fa]">*</span></label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Votre nom complet"
                                        required
                                        className="contact-input-field"
                                    />
                                </div>

                                <div className="md:col-span-1">
                                    <label className="mb-2 block font-mono text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Email <span className="text-[#60a5fa]">*</span></label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Votre adresse email"
                                        required
                                        className="contact-input-field"
                                    />
                                </div>

                                <div className="md:col-span-1">
                                    <label className="mb-2 block font-mono text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Adresse</label>
                                    <input
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Votre adresse"
                                        className="contact-input-field"
                                    />
                                </div>

                                <div className="md:col-span-1">
                                    <label className="mb-2 block font-mono text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Téléphone</label>
                                    <div className="flex transition-all duration-300 focus-within:ring-2 focus-within:ring-[#60a5fa]/50 focus-within:rounded-xl">
                                        <CountrySelector
                                            selectedCountry={selectedCountry}
                                            onSelect={setSelectedCountry}
                                        />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Votre numéro de téléphone"
                                            className="contact-input-field !rounded-l-none"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="mb-2 block font-mono text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Sujet <span className="text-[#60a5fa]">*</span></label>
                                    <input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Objet de votre message"
                                        required
                                        className="contact-input-field"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="mb-2 block font-mono text-[10px] font-bold tracking-widest text-[#8b9bc0] uppercase">Message <span className="text-[#60a5fa]">*</span></label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Écrivez votre message ici..."
                                        required
                                        rows={4}
                                        className="contact-input-field resize-none"
                                    />
                                </div>

                                <div className="md:col-span-2 mt-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] px-6 py-4 text-[15px] font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
                                        <Send size={18} className={status === 'submitting' ? 'animate-pulse' : ''} />
                                    </button>

                                    {status === 'success' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#10b981]/10 p-4 border border-[#10b981]/20">
                                            <div className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse"></div>
                                            <p className="text-sm font-semibold text-[#10b981]">
                                                Votre message a été envoyé avec succès !
                                            </p>
                                        </motion.div>
                                    )}

                                    {status === 'error' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-red-500/10 p-4 border border-red-500/20">
                                            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                                            <p className="text-sm font-semibold text-red-500">
                                                Erreur lors de l'envoi. Veuillez réessayer.
                                            </p>
                                        </motion.div>
                                    )}
                                </div>

                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection
