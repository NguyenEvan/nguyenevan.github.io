// src/pages/Project.jsx
import { useParams, Link } from 'react-router-dom'
import { getProject } from '../data/projects' // export this like getExperience
import '../pages/Projects.css' // uses .projects / .projects-title and your shared .xp-* classes

export default function Project() {
  const { id } = useParams()
  const p = getProject(id)

  if (!p) {
    return (
      <main className="projects">
        <h1 className="projects-title">Project Not Found</h1>
        <p className="xp-caption">No project for “{id}”.</p>
        <p><Link to="/projects" className="link-arrow">← Back</Link></p>
      </main>
    )
  }

  const renderLink = (item) =>
    item.href?.startsWith('http')
      ? <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="course-link">{item.label}</a>
      : <Link key={item.label} to={item.href} className="course-link">{item.label}</Link>

  return (
    <main className="projects">
      <h1 className="projects-title">{p.title}</h1>
      {p.org && <p className="xp-company-line">{p.org}</p>}

      {(p.period || p.location) && (
        <p className="xp-meta">
          {p.period && <strong>{p.period}</strong>}
          {p.period && p.location && ' • '}
          {p.location && <span>{p.location}</span>}
        </p>
      )}

      {p.overview && <p className="xp-overview">{p.overview}</p>}

      {p.bullets?.length > 0 && (
        <>
          <h3 className="xp-subtitle">Highlights</h3>
          <ul className="xp-bullets">
            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </>
      )}

      {p.details && (
        <section className="xp-details">
          <h3 className="xp-subtitle">Details</h3>
          <p className="xp-detail">{p.details}</p>
        </section>
      )}

      {p.stack?.length > 0 && (
        <>
          <h3 className="xp-subtitle">Tech</h3>
          <div className="xp-stack">
            {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </>
      )}

      {p.links?.length > 0 && (
        <section className="xp-details">
          <h3 className="xp-subtitle">Links</h3>
          <ul className="xp-links">
            {p.links.map((lnk, i) => <li key={i}>{renderLink(lnk)}</li>)}
          </ul>
        </section>
      )}

      {/* Optional: lightweight gallery if you provide image URLs */}
      {p.images?.length > 0 && (
        <section className="xp-details">
          <h3 className="xp-subtitle">Gallery</h3>
          <div style={{ display: 'grid', gap: '.75rem' }}>
            {p.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={p.title + ' screenshot ' + (i + 1)}
                style={{ width: '100%', height: 'auto', borderRadius: '10px', border: '1px solid var(--border)' }}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}

      {/* Optional: PDF (e.g., paper) embed if you add p.pdf = { label, href } */}
      {p.pdf?.href && (
        <details style={{ marginTop: '.5rem' }}>
          <summary className="xp-company-line">{p.pdf.label || 'View PDF'}</summary>
          <object
            data={p.pdf.href}
            type="application/pdf"
            width="100%"
            height="900"
            style={{ border: '1px solid var(--border)', marginTop: '.5rem' }}
          >
            <p>Your browser can’t display PDFs. <a href={p.pdf.href} target="_blank" rel="noreferrer">Open the file</a>.</p>
          </object>
        </details>
      )}

      <p style={{ marginTop: '1.25rem' }}>
        <Link to="/projects" className="link-arrow">← Back to Projects</Link>
      </p>
    </main>
  )
}
