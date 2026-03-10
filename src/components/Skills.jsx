import { motion } from 'framer-motion'
import { Code, AppWindow, Database, Terminal } from 'lucide-react'
import { skillsByCategory } from '../data/projects'
import IconContainer from './IconContainer'

const getIconDataForCategory = (category) => {
  switch (category) {
    case 'programming':
      return { icon: <Code />, color: 'blue' }
    case 'web':
      return { icon: <AppWindow />, color: 'purple' }
    case 'data':
      return { icon: <Database />, color: 'cyan' }
    case 'tools':
      return { icon: <Terminal />, color: 'rose' }
    default:
      return { icon: <Code />, color: 'default' }
  }
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Bottom Divider Pattern */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>
      <div className="mx-auto max-w-[1340px] w-[92%] px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[var(--accent)]/50"></span>
            <p className="text-sm font-mono font-semibold uppercase tracking-widest text-[var(--accent)]">
              Compétences & Technologies
            </p>
          </div>

          <h2 className="mt-6 md:mt-8 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-semibold tracking-tight max-w-2xl leading-tight">
            Les fondations techniques de mon <em className="inline-block font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8] px-4 pb-3 overflow-visible -mx-4">parcours.</em>
          </h2>

          <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-2">
            {skillsByCategory.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group flex flex-col rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface)] p-8 transition-all hover:border-[var(--accent)] hover:bg-[var(--bg-card)] backdrop-blur-md"
              >
                <div className="mb-5">
                  {((iconData) => (
                    <IconContainer color={iconData.color}>
                      {iconData.icon}
                    </IconContainer>
                  ))(getIconDataForCategory(group.iconCategory))}
                </div>

                <h3 className="text-[17px] font-bold !font-sans tracking-wide text-[var(--text-primary)]">{group.title}</h3>

                <div className="mt-6 md:mt-8 flex flex-wrap gap-2.5 md:gap-4">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--input-bg)] px-4 py-2 text-[13px] text-[var(--text-muted)] transition hover:-translate-y-0.5 hover:text-[var(--text-hover)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills