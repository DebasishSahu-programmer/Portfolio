import { Link } from 'react-router'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import photo from '../assets/profile.jpg'
import { links, profile, projects } from '../data.js'


const openRoles = ['Software Engineer', 'Associate Software Engineer', 'Software Developer', 'Full-Stack Developer']

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-text">
          <p className="pill"><i /> Open to work: entry-level and associate roles</p>
          <h1>Hi, I'm {profile.name}.</h1>
          <h2>{profile.role}</h2>
          <p className="lead">{profile.intro}</p>
          <div className="role-chips" aria-label="Roles I'm open to">
            {openRoles.map(r => <span key={r} className="tag">{r}</span>)}
          </div>
          <div className="row">
            <Link className="btn primary" to="/projects">View projects <FiArrowRight /></Link>
            <a className="btn" href="/DebasishSahu_Resume.pdf" download><FiDownload /> Resume</a>
            {links.github && <a className="btn square" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>}
            {links.linkedin && <a className="btn square" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>}
          </div>
        </div>
        <div className="hero-photo">
          <img src={photo} alt="Portrait of Debasish Sahu" width="470" height="588" />
          <div className="chip c1">React</div><div className="chip c2">Node.js</div><div className="chip c3">MongoDB</div>
        </div>
      </section>

      <section className="wrap stats">
        <div><b>{projects.length}</b><span>projects built</span></div>
        <div><b>8.65</b><span>B.Tech GPA out of 10</span></div>
        <div><b>MERN</b><span>main stack</span></div>
        <div><b>Agentic AI</b><span>newest thing I'm learning</span></div>
      </section>

      <section className="wrap home-cta">
        <div>
          <h2>Hiring for a software role?</h2>
          <p>I'm ready to start as a Software Engineer or Associate Software Engineer. See my work, or get in touch directly.</p>
        </div>
        <div className="row">
          <Link className="btn primary" to="/contact">Contact me <FiArrowRight /></Link>
          <Link className="btn" to="/about">About me</Link>
        </div>
      </section>
    </>
  )
}