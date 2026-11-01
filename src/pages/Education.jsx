import { education } from '../data.js'

export default function Education() {
  return (
    <section className="wrap page narrow">
      <h1>Education</h1>
      <ol className="timeline">
        {education.map(e => (
          <li key={e.school}>
            <time>{e.when}</time>
            <h3>{e.school}</h3>
            <p>{e.degree}</p>
            <p className="meta">{e.place}</p>
            <span className="tag">{e.score}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}