import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { links, profile } from '../data.js'

const nav = [['/', 'Home'], ['/about', 'About'], ['/education', 'Education'], ['/projects', 'Projects'], ['/skills', 'Skills'], ['/resume', 'Resume'], ['/contact', 'Contact']]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}><span>D</span>{profile.name}</Link>
        <nav className={open ? 'links open' : 'links'} aria-label="Main">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
        </nav>
        <div className="tools">
          <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="icon-btn menu" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</p>
        <div className="social">
          {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>}
          {links.linkedin && <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>}
        </div>
      </footer>
    </>
  )
}