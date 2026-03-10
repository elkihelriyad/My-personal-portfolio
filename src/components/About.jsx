import { motion } from 'framer-motion'
import { Code, Box, BarChart2, BrainCircuit } from 'lucide-react'
import portrait from '../assets/images/riyad-portrait.jpeg'

import IconContainer from './IconContainer'

const motives = [
  {
    title: 'Expérimentation Web',
    desc: 'Apprentissage et création de sites web réactifs et performants.',
    icon: <Code />,
    color: 'blue',
  },
  {
    title: 'Algorithmique',
    desc: 'Solutions logicielles efficaces et bien organisées.',
    icon: <Box />,
    color: 'purple',
  },
  {
    title: 'Analyse de Données',
    desc: 'Insights clairs à partir de données complexes.',
    icon: <BarChart2 />,
    color: 'cyan',
  },
  {
    title: 'IA & Analytics',
    desc: 'Modèles intelligents pour optimiser et prédire.',
    icon: <BrainCircuit />,
    color: 'pink',
  },
]

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[var(--bg-main)] border-t border-[var(--border-subtle)]">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>
      <div className="mx-auto max-w-[1340px] w-[92%] px-4 md:px-0">

        {/* Top: Who am I */}
        <div className="grid gap-12 md:gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative justify-self-center md:justify-self-center lg:justify-self-end mt-8 md:mt-0"
          >
            <div className="relative z-10 w-80 md:w-[22rem] lg:w-[30rem] overflow-hidden rounded-[2rem] shadow-[0_0_40px_rgba(59,130,246,0.15)] ring-1 ring-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:ring-white/20">
              <img src={portrait} alt="Riyad portrait" className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[var(--accent)]/50"></span>
              <p className="text-sm font-mono font-semibold uppercase tracking-widest text-[var(--accent)]">
                A Propos De Moi
              </p>
            </div>

            <h2 className="mt-6 md:mt-8 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-semibold tracking-tight">
              Qui suis-<em className="inline-block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">je?</em>
            </h2>

            <div className="mt-8 md:mt-10 space-y-6 text-[15px] leading-[1.8] max-w-[65ch] text-[var(--text-primary)] md:text-[16px]">
              <p>
                Bonjour, je suis <strong className="font-bold text-[var(--text-primary)]">Riyad El Kihel</strong>, étudiant ingénieur en Génie
                Informatique et Intelligence Artificielle à l'ENSA Safi. Passionné par la
                technologie et l'analyse, je me spécialise progressivement dans
                l'interaction entre les systèmes, les données et les systèmes
                intelligents.
              </p>
              <p>
                À travers mes projets académiques, mes certifications en données et
                en programmation, et ma pratique continue des technologies web et
                analytiques, je m'attache à traduire les concepts théoriques en
                solutions claires, organisées et efficaces. Mon objectif est simple :
                devenir un ingénieur rigoureux, adaptable et innovant.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Motives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-center">
            <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight">
              Ce qui me <em className="inline-block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">motive?</em>
            </h2>
          </div>

          <div className="mt-12 md:mt-20 grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {motives.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-start rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent)] hover:bg-[var(--bg-card)] backdrop-blur-md"
              >
                <div className="mb-5">
                  <IconContainer color={item.color}>
                    {item.icon}
                  </IconContainer>
                </div>
                <h3 className="text-[17px] font-semibold text-[var(--text-primary)] !font-sans">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-muted)]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

      </div>
      {/* Bottom Divider Pattern */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>
    </section>
  )
}

export default About