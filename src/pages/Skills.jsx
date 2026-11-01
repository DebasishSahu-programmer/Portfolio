import { skillGroups, learning } from '../data.js'

export default function Skills() {
  return (
    <section className="wrap page">
      <h1>Skills</h1>
      {skillGroups.map(g => (
        <div key={g.title} className="group">
          <h3>{g.title}</h3>
          <div className="skills">
            {g.items.map(([name, Icon, color]) => (
              <div key={name} className="skill"><Icon style={{ color }} aria-hidden="true" /><span>{name}</span></div>
            ))}
          </div>
        </div>
      ))}
      <div className="note learn">
        <h3>Currently learning: Agentic AI</h3>
        <p>An agent is an AI model that can decide on steps and use tools, such as search or an API, to finish a task. I'm a beginner here, so this is my learning path, not a list of things I've mastered.</p>
        <ul>
          {learning.map(([t, s]) => <li key={t}><span className={`status ${s.toLowerCase()}`}>{s}</span>{t}</li>)}
        </ul>
      </div>
    </section>
  )
}