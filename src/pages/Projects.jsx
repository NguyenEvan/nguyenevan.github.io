// src/pages/Projects.jsx
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import './Projects.css' // uses the .projects / .projects-title styles

export default function Projects() {
  return (
    <main className="projects">
      <h1 className="projects-title">Projects</h1>
      <h2 className="xp-role">For projects I made during standard UCSC courses, see {' '}
        <Link to={`/courses`}>Courses.</Link>
      </h2>
 

      <ul className="xp-list">
        {PROJECTS.map(p => (
          <li key={p.id} className="xp-card">
            <h2 className="xp-role">{p.title}</h2>

            <div className="xp-meta">
              {p.org && <span className="xp-company">{p.org}</span>}
              {p.org && (p.period || p.location) && <span className="xp-dot">•</span>}
              {p.period && <><span className="xp-period">{p.period}</span> <span className="xp-dot">•</span> </>}
              {p.location &&  <span>{p.location}</span> }
            </div>

            {p.bullets?.length > 0 && (
              <ul className="xp-bullets">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}

            {p.stack?.length > 0 && (
              <div className="xp-stack">
                {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            )}

            <div className="xp-actions">
              <Link to={`/projects/${p.id}`} className="link-arrow">View details →</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
