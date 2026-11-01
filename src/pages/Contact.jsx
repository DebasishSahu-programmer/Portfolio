import { useState } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin, FiHome, FiCopy, FiCheck, FiArrowUpRight, FiDownload, FiGlobe, FiBriefcase } from 'react-icons/fi'
import { links } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard blocked: the email link still works */ }
  }

  const cards = [
    links.email && { icon: FiMail, title: 'Email', value: links.email, href: `mailto:${links.email}`, action: 'Send email', internal: true },
    links.phone && { icon: FiPhone, title: 'Phone', value: links.phone, href: links.phoneHref, action: 'Call now', internal: true },
    links.linkedin && { icon: FaLinkedinIn, title: 'LinkedIn', value: 'Connect with me', href: links.linkedin, action: 'Open profile' },
    links.github && { icon: FaGithub, title: 'GitHub', value: 'See my code', href: links.github, action: 'Open profile' },
  ].filter(Boolean)

  const addresses = [
    links.currentAddress && { icon: FiMapPin, title: 'Current address', value: links.currentAddress },
    links.permanentAddress && { icon: FiHome, title: 'Permanent address', value: links.permanentAddress },
  ].filter(Boolean)

  return (
    <section className="wrap page">
      <div className="contact-head">
        <h1>Contact-----</h1>
        <p className="lead">I'm looking for a Software Engineer, Associate Software Engineer, Software Developer or Full-Stack Developer role. The fastest way to reach me is phone, email or LinkedIn.</p>
      </div>

      <div className="contact-cards">
        {cards.map(({ icon: Icon, title, value, href, action, internal }) => (
          <a key={title} className="contact-card" href={href}
             {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
            <span className="cc-icon"><Icon /></span>
            <span className="cc-text"><b>{title}</b><span>{value}</span></span>
            <span className="cc-action">{action} <FiArrowUpRight /></span>
          </a>
        ))}
      </div>

      {addresses.length > 0 && (
        <div className="address-grid">
          {addresses.map(({ icon: Icon, title, value }) => (
            <div key={title} className="panel address">
              <span className="cc-icon"><Icon /></span>
              <div><h3>{title}</h3><p>{value}</p></div>
            </div>
          ))}
        </div>
      )}

      <div className="contact-grid">
        <div className="panel">
          <h3>What I'm looking for</h3>
          <ul className="facts">
            <li><FiBriefcase /><span><b>Roles</b>Software Engineer, Associate Software Engineer, Software Developer, Full-Stack Developer</span></li>
            <li><FiGlobe /><span><b>Main stack</b>React, Node.js, Express, MongoDB</span></li>
            <li><FiGlobe /><span><b>Languages</b>English, Hindi, Odia</span></li>
          </ul>
        </div>

        <div className="panel accent">
          <h3>Quick actions</h3>
          <p>Want the full details first? Download my resume, or copy my email to write from your own mail app.</p>
          <div className="row">
            <a className="btn primary" href="/DebasishSahu_Resume.pdf" download><FiDownload /> Download resume</a>
            {links.email && (
              <button className="btn" onClick={copyEmail} type="button">
                {copied ? <><FiCheck /> Copied</> : <><FiCopy /> Copy email</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}