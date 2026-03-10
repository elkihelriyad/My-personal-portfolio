import { motion } from 'framer-motion'
import { Clock, Github, ExternalLink } from 'lucide-react'

function ProjectCard({ project, index }) {
  const badgeColorClass = project.isUpcoming ? 'bg-[#f5c342] text-black' : 'bg-[#7dd3fc] text-black'

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--accent)] hover:bg-[var(--bg-card)] backdrop-blur-md shadow-xl"
    >
      {/* Badge */}
      {project.badge && (
        <span
          className={`absolute right-6 top-6 z-10 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${badgeColorClass}`}
        >
          {project.badge}
        </span>
      )}

      {/* Image / Placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[var(--input-bg)] border border-[var(--border-subtle)]">
        {project.isUpcoming ? (
          <div className="flex h-full w-full items-center justify-center">
            <Clock size={32} className="text-[var(--accent)] opacity-40" strokeWidth={1.5} />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-6 px-2 pb-2">
        <h3 className="text-xl font-semibold tracking-wide text-[var(--text-primary)] !font-sans">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>

        {/* Stack Tags */}
        {project.stack && project.stack.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--input-bg)] px-4 py-1.5 text-xs text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {!project.isUpcoming && (
          <div className="mt-8 flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-1 justify-center rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] py-3 text-[13px] font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95"
            >
              <span>Live App</span>
              <ExternalLink size={14} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] py-3 text-[13px] font-bold text-[var(--text-primary)] transition-all hover:bg-[var(--bg-card)] hover:border-[var(--accent)] active:scale-95"
            >
              <span>Code</span>
              <Github size={14} />
            </a>
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
