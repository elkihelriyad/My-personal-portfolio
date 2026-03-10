import { Github, Mail, Linkedin, CodeXml } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const handleJump = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="relative mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-main)] pt-16 pb-8">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50"></div>

      <div className="mx-auto max-w-[1100px] w-[88%] px-6 md:px-0">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">

          {/* Left Column: Bio */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 md:max-w-sm">
            <h2 className="flex items-center justify-center md:justify-start gap-3 text-xl font-bold !font-mono tracking-tight text-[var(--text-primary)] uppercase">
              <CodeXml className="text-[var(--accent)]" size={20} strokeWidth={2.5} />
              EL KIHEL RIYAD
            </h2>
            <p className="text-[15px] leading-relaxed text-[#8b9bc0]">
              Étudiant ingénieur dédié à l'apprentissage de l'excellence en développement et ingénierie informatique.
            </p>
          </div>

          {/* Middle Column: Nav Links */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start gap-6">
              <h3 className="!font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase opacity-70">
                Plan du site
              </h3>
              <nav className="flex flex-col items-center md:items-start gap-3">
                {[
                  { id: 'hero', label: 'Accueil' },
                  { id: 'about', label: 'À propos' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'education', label: 'Parcours' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleJump(item.id)}
                    className="text-[14px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-hover)]"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column: Socials */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-col gap-6 md:items-end">
              <h3 className="!font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase opacity-70">
                Réseaux sociaux
              </h3>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/elkihelriyad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text-muted)] transition-all hover:scale-110 hover:text-[var(--text-hover)]"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="mailto:elkihelriyad@gmail.com"
                  className="text-[var(--text-muted)] transition-all hover:scale-110 hover:text-[var(--text-hover)]"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
                <a href="https://www.linkedin.com/in/riyad-elkihel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[var(--border-subtle)] pt-8 text-center text-[13px] font-mono text-[var(--text-muted)] opacity-50">
          <p>© {currentYear} EL KIHEL Riyad. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer