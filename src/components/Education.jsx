import { motion } from 'framer-motion'
import { Award, Download, ExternalLink } from 'lucide-react'
import IconContainer from './IconContainer'

// Import PDFs
import cvFile from '../assets/images/CV_Riyad_El_Kihel.pdf'

const education = [
    {
        year: '2026 — PRÉSENT',
        title: "Cycle d'ingénieur — Génie Informatique & Intelligence Artificielle",
        school: 'ENSA Safi',
    },
    {
        year: '2023 — 2025',
        title: 'Cycle préparatoire',
        school: 'ENSA Safi',
    },
    {
        year: '2023',
        title: 'Baccalauréat International — Sciences Physiques',
        school: 'Lycée Qualifiant Les Champions',
    },
]

const certifications = [
    {
        title: 'Python Programmer Bootcamp',
        issuer: '365 Data Science',
        link: 'https://learn.365datascience.com/certificates/CC-00037191E1/',
    },
    {
        title: 'Introduction to Data Science',
        issuer: 'Cisco Networking Academy',
        link: 'https://www.netacad.com/certificates?issuanceId=e221ae08-7eb7-4d6c-b73f-0c12c7e6dc03',
    },
    {
        title: 'Power BI for Beginners',
        issuer: 'Simplilearn',
        link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzg5NjMxNl84MjI0MjUzMTczOTM2NTUxOTg2Ni5wbmciLCJ1c2VybmFtZSI6IlJpeWFkIEVMIEtJSEVMIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F7896316_82242531739365519866.png&_branch_match_id=1559728773940284302&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1ncNjqpMCvesCgtMsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAGZkoGU9AAAA',
    },
    {
        title: 'Business Analytics with Excel',
        issuer: 'Simplilearn',
        link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2NjQiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl83MzIyODQ3XzE3MjQ3MTUzODMucG5nIiwidXNlcm5hbWUiOiJSaXlhZCBFTCBLSUhFTCJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F2738%2FBusiness-Analytics-with-Excel%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1559728773940284302&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd41yTS%2FLMbHI802yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUA7%2BgAJD8AAAA%3D',
    },
]

function Education() {
    return (
        <>
            <section id="education" className="relative py-24 md:py-32 bg-[var(--bg-main)] border-t border-[var(--border-subtle)]">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>
                <div className="mx-auto max-w-[1340px] w-[92%] px-4 md:px-0">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute left-[-45px] top-10 hidden md:block">
                            <div className="h-4 w-4 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-main)] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="h-[1px] w-6 bg-[var(--accent)]/50"></span>
                            <p className="text-sm font-mono font-semibold uppercase tracking-widest text-[var(--accent)]">
                                Formations & Certifications
                            </p>
                        </div>
                    </motion.div>

                    <div className="mt-10 md:mt-16 grid gap-16 md:grid-cols-2">

                        {/* Left: Academic */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="mb-8 md:mb-12 font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight">
                                Mon parcours <em className="inline-block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">académique</em>
                            </h3>
                            <br />

                            <div className="relative border-l border-[var(--border-subtle)] pl-8 space-y-8 md:space-y-12">
                                {education.map((item, i) => (
                                    <div key={i} className="relative group">
                                        {/* Timeline dot */}
                                        <div className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-main)] transition-transform group-hover:scale-125 group-hover:bg-[var(--accent)]"></div>

                                        <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--text-muted)] uppercase">
                                            {item.year}
                                        </span>
                                        <h4 className="mt-2 text-lg font-bold text-[var(--text-primary)] leading-tight !font-sans">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 text-sm text-[var(--text-muted)]">
                                            {item.school}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="mb-8 md:mb-12 font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight">
                                Mes <em className="inline-block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">certifications</em>
                            </h3>
                            <br />

                            <div className="space-y-4 md:space-y-6">
                                {certifications.map((cert, i) => (
                                    <a
                                        key={i}
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex items-center gap-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--accent)] hover:bg-[var(--bg-card)] backdrop-blur-md active:scale-[0.98]"
                                        aria-label={`Voir le certificat ${cert.title}`}
                                    >
                                        <IconContainer color="blue">
                                            <Award className="transition-transform group-hover:scale-110" />
                                        </IconContainer>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-[var(--text-primary)] !font-sans transition-colors group-hover:text-[var(--text-hover)]">{cert.title}</h4>
                                            <p className="mt-1 text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                                        </div>
                                        <ExternalLink
                                            size={16}
                                            className="text-[var(--text-muted)] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
                                        />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
                {/* Bottom Divider Pattern */}
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>
            </section>

            {/* Bottom: Download CV */}
            <section className="py-24 md:py-32">
                <div className="mx-auto max-w-[1340px] w-[92%] px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-semibold tracking-tight">
                            Télécharger mon <em className="inline-block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">CV</em>
                        </h2>
                        <p className="mt-4 md:mt-6 text-[15px] leading-[1.8] max-w-[65ch] mx-auto text-[var(--text-muted)]">
                            Pour plus de détails sur mon parcours, mes compétences et mes
                            certifications, vous pouvez consulter mon CV complet.
                        </p>
                        <a
                            href={cvFile}
                            download
                            className="mt-8 md:mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                        >
                            Télécharger mon CV (PDF)
                            <Download size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Education
