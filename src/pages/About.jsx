import { Link } from 'react-router'
import { FiBriefcase, FiCode, FiCpu, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { profile } from '../data.js'

const roles = [
  ['Software Engineer', 'Build and ship features across the frontend and backend.'],
  ['Associate Software Engineer', 'Learn from a team, take on tasks and grow quickly.'],
  ['Software Developer', 'Write clean, working code for real products.'],
  ['Full-Stack Developer', 'Work on React interfaces and Node.js APIs together.'],
]

const strengths = [
  [FiCode, 'Full-stack projects', 'Four apps built with React, Node.js, Express and MongoDB.'],
  [FiCheckCircle, 'Secure by default', 'JWT login in HTTP-only cookies and protected routes.'],
  [FiCpu, 'Learning agentic AI', 'Just started. I am studying how AI agents use tools.'],
]

export default function About() {
  return (
    <section className="wrap page">
      <div className="narrow">
        <h1>About me</h1>
        <p className="lead">I'm a B.Tech Computer Science graduate from {profile.location}. I like turning an idea into a working web app that people can open and use.</p>
        <p>My projects cover the full MERN stack: REST APIs with Node.js and Express, JWT authentication stored in HTTP-only cookies, MongoDB schemas with Mongoose, and responsive React interfaces with Redux Toolkit and Tailwind CSS. I test my APIs in Postman before connecting the frontend.</p>
        <p>I use AI tools such as Claude, ChatGPT and GitHub Copilot while I build, to speed up component work and code review. I still read and understand the code I ship.</p>
      </div>

      <div className="about-strengths">
        {strengths.map(([Icon, title, text]) => (
          <div key={title} className="panel">
            <span className="cc-icon"><Icon /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className="open-roles">
        <h2><FiBriefcase /> Open to these roles</h2>
        <p className="lead">I'm looking for my first full-time software role and can join as soon as the right team is ready.</p>
        <div className="roles-grid">
          {roles.map(([title, text]) => (
            <div key={title} className="role-card">
              <b>{title}</b>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div className="row">
          <Link className="btn primary" to="/contact">Get in touch <FiArrowRight /></Link>
          <Link className="btn" to="/resume">View resume</Link>
        </div>
      </div>

      <div className="narrow">
        <div className="note">
          <h3>Now learning: Agentic AI</h3>
          <p>I only just started. So far I'm learning what an AI agent is and how it uses tools. My plan is to build a small agent with JavaScript once the basics are clear. You can follow my progress on the <Link to="/skills">Skills page</Link>.</p>
        </div>
        <p className="meta">Languages I speak: English, Hindi, Odia.</p>
      </div>
    </section>
  )
}