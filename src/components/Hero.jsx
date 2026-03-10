import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import cvFile from '../assets/images/CV_Riyad_El_Kihel.pdf'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-[1340px] w-[92%] px-4 md:px-0">
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-4">
            <span className="hidden md:block h-[1px] w-8 bg-[#3b82f6]/50"></span>
            <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-[#5fa5fa] font-mono leading-tight pb-2">
              ELEVE INGENIEUR EN GENIE INFORMATIQUE & INTELLIGENCE ARTIFICIELLE
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-20 md:mt-12 max-w-4xl font-serif leading-[1.05] tracking-tight text-[var(--text-primary)]"
          >
            <span className="block text-[clamp(2.5rem,6vw,5.5rem)] font-medium mb-1">
              Bonjour, je suis
            </span>
            <span className="block text-[clamp(3.5rem,8vw,6.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] uppercase tracking-tighter mb-1">
              EL KIHEL
            </span>
            <span className="inline-block text-[clamp(3.5rem,8vw,6.5rem)] font-light italic text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4 md:pr-4">
              Riyad
            </span>
            <br />
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-10 md:mt-14 max-w-[65ch] mx-auto md:mx-0 text-[16px] leading-[1.8] text-[var(--text-muted)]">
            Étudiant en ingénierie informatique et intelligence artificielle
            à l'ENSA Safi, j'apprends progressivement la
            programmation et l'analyse de données. Attiré par les défis
            technologiques, je m'engage à me former en continu afin
            d'acquérir de solides bases et de devenir un ingénieur
            compétent et polyvalent.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 md:mt-16 flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
            <a
              href={cvFile}
              download
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] px-7 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              Télécharger mon CV
              <Download size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] px-7 py-4 text-sm font-semibold tracking-wide text-[var(--text-primary)] transition-all hover:bg-[var(--bg-card)] shadow-sm"
            >
              Me contacter
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 md:mt-16 w-80 max-w-[85%] border-t border-[var(--accent)] pt-8 md:pt-10 mx-auto md:mx-0">
            <div className="flex justify-center md:justify-start gap-12 md:gap-24">
              <div className="flex flex-col items-center md:items-start text-[var(--text-primary)]">
                <p className="font-serif text-4xl font-light text-[var(--accent)] md:text-5xl leading-tight mb-3">8+</p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Technologies maitrisées
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start text-[var(--text-primary)]">
                <p className="font-serif text-4xl font-light text-[var(--accent)] md:text-5xl leading-tight mb-3 -translate-y-[1px]">4+</p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Certifications professionnelles
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero