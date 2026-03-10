import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, MoonStar, SunMedium, X, CodeXml, Github, Linkedin, Download } from 'lucide-react'

function Navbar({ sections, theme, onThemeToggle }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => {
      const target = document.getElementById(section.id)
      if (target) observer.observe(target)
    })

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto'
  }, [mobileOpen])

  const handleJump = (id) => {
    const target = document.getElementById(id)
    if (!target) return

    const offset = 86
    const y = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="glass-nav">
        <button
          type="button"
          className="flex items-center gap-3 md:gap-4 text-[16px] md:text-[17px] tracking-wide"
          onClick={() => handleJump('hero')}
        >
          <CodeXml className="text-[#60a5fa]" size={20} strokeWidth={2.5} />
          <span className="font-bold text-[var(--text-primary)] uppercase !font-mono tracking-tight">EL KIHEL RIYAD</span>
        </button>

        <ul className="hidden flex-1 items-center justify-center gap-6 xl:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => handleJump(section.id)}
                className={`px-4 py-2 text-[15px] font-semibold transition ${activeSection === section.id
                  ? 'text-[var(--text-hover)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-hover)]'
                  }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 xl:gap-8">
          <div className="hidden xl:flex items-center gap-6">
            <a href="https://github.com/elkihelriyad" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] transition hover:text-[var(--text-hover)]" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/riyad-elkihel/" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] transition hover:text-[var(--text-hover)]" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={onThemeToggle}
            aria-label="Toggle color mode"
            className="text-[var(--text-muted)] transition hover:text-[var(--text-hover)]"
          >
            {theme === 'dark' ? <SunMedium size={20} /> : <MoonStar size={20} />}
          </button>

          <button
            type="button"
            className="text-[var(--text-muted)] transition hover:text-[var(--text-hover)] xl:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-6 top-[100px] z-40 rounded-2xl border border-[var(--border-subtle)] bg-[var(--nav-bg)] p-4 md:p-8 shadow-2xl backdrop-blur-2xl xl:hidden"
          >
            <ul className="flex flex-col gap-3 md:gap-5">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => handleJump(section.id)}
                    className={`w-full rounded-xl px-6 py-4 md:py-6 text-center text-[16px] md:text-[18px] tracking-wide font-semibold transition-all active:scale-[0.98] ${activeSection === section.id
                      ? 'bg-[var(--accent)] text-white shadow-lg shadow-blue-500/20'
                      : 'text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-hover)]'
                      }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar