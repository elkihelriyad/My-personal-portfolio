import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme || 'dark'
  })

  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'skills', label: 'Skills' },
      { id: 'education', label: 'Parcours' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-shell">
      <Navbar sections={sections} theme={theme} onThemeToggle={toggleTheme} />
      <Home />
      <Footer />
    </div>
  )
}

export default App
