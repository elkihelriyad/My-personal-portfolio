import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[var(--bg-main)] border-t border-[var(--border-subtle)]">
      {/* Bottom Divider Pattern */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>
      <div className="mx-auto max-w-[1340px] w-[92%] px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[var(--accent)]/50"></span>
            <p className="text-sm font-mono font-semibold uppercase tracking-widest text-[var(--accent)]">
              Mes Projets
            </p>
          </div>

          <h2 className="mt-6 md:mt-8 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-semibold tracking-tight">
            Ce que j'ai <em className="inline-block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">développé</em>
          </h2>

          <motion.div layout className="mt-10 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects