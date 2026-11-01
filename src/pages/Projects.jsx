import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import Art from '../components/Art.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="wrap page">
      <h1>Projects</h1>
      <p className="lead">Four projects, each deployed or open on GitHub.</p>
      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.title} className={i % 2 ? 'project flip' : 'project'}>
            <Art type={p.art} />
            <div className="body">
              <p className="meta">{p.type}</p>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
              <div className="tags">{p.stack.map(s => <span key={s} className="tag">{s}</span>)}</div>
              <div className="row">
                {p.live && <a className="btn primary" href={p.live} target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live demo</a>}
                {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer"><FaGithub /> Source code</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}