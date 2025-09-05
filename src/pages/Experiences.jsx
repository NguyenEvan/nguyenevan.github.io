import { Link } from 'react-router-dom'
import { EXPERIENCES, OTHER_EXPERIENCES } from '../data/experiences'
import './Experiences.css'

export default function Experiences() {
  const renderList = (list) => (
    <ul className="xp-list">
      {list.map(xp => (
        <li key={xp.id} className="xp-card">
          <h2 className="xp-role">{xp.role}</h2>

          <div className="xp-meta">
            <span className="xp-company">{xp.company}</span>
            {(xp.period || xp.location) && <span className="xp-dot">•</span>}
            {xp.period && <span className="xp-period">{xp.period}</span>}
            {xp.location && <> <span className="xp-dot">•</span> <span>{xp.location}</span> </>}
          </div>

          {xp.bullets?.length > 0 && (
            <ul className="xp-bullets">
              {xp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          {xp.stack?.length > 0 && (
            <div className="xp-stack">
              {xp.stack.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          )}

          <div className="xp-actions">
            <Link to={`/experiences/${xp.id}`} className="link-arrow">View details →</Link>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <main className="experiences">
      <h1 className="experiences-title">Work Experiences</h1>
      {renderList(EXPERIENCES)}

      {OTHER_EXPERIENCES?.length > 0 && (
        <>
          <h1 className="experiences-title" style={{ marginTop: '1.5rem' }}>
            Other Experiences
          </h1>
          {renderList(OTHER_EXPERIENCES)}
        </>
      )}
    </main>
  )
}
