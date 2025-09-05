import { useParams, Link } from 'react-router-dom'
import { getExperience } from '../data/experiences'
import '../pages/Experiences.css'

export default function Experience() {
  const { id } = useParams()
  const xp = getExperience(id)

  if (!xp) {
    return (
      <main className="experiences">
        <h1 className="experiences-title">Experience Not Found</h1>
        <p className="xp-caption">No experience for “{id}”.</p>
        <p><Link to="/experiences" className="link-arrow">← Back</Link></p>
      </main>
    )
  }

  const renderCourseLink = (c) =>
    c.href?.startsWith('http')
      ? <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="course-link">{c.label}</a>
      : <Link key={c.label} to={c.href} className="course-link">{c.label}</Link>

  const renderImages = (imgs) => {
    if (!imgs?.length) return null
    return (
      <section className="xp-details">
        <h3 className="xp-subtitle">Images</h3>
        <div className="xp-images">
          {imgs.map((img, i) => {
            const isObj = typeof img === 'object'
            const src = isObj ? img.src : img
            const alt = isObj ? (img.alt || '') : ''
            const caption = isObj ? img.caption : ''
            return (
              <figure className="xp-figure" key={i}>
                <img className="xp-img" src={src} alt={alt} loading="lazy" />
                {caption ? <figcaption className="xp-figcap">{caption}</figcaption> : null}
              </figure>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <main className="experiences">
      <h1 className="experiences-title">{xp.role}</h1>
      <p className="xp-company-line">{xp.company}</p>

      <p className="xp-meta">
        <strong>{xp.period}</strong>{xp.location && <> • {xp.location}</>}
      </p>

      {xp.overview && <p className="xp-overview">{xp.overview}</p>}

      <h3 className="xp-subtitle">Highlights</h3>
      <ul className="xp-bullets">{xp.bullets.map((h,i)=><li key={i}>{h}</li>)}</ul>

      {xp.details && (
        <section className="xp-details">
          <h3 className="xp-subtitle">Details</h3>
          <p className="xp-detail">{xp.details}</p>
        </section>
      )}

      {/* NEW: Images (only if provided) */}
      {renderImages(xp.images)}

      {xp.coursesTutored?.length > 0 && (
        <section className="xp-details">
          <h3 className="xp-subtitle">Courses Tutored</h3>
          <ul className="xp-links">
            {xp.coursesTutored.map((c, i) => <li key={i}>{renderCourseLink(c)}</li>)}
          </ul>
        </section>
      )}

      {xp.coursesGraded?.length > 0 && (
        <section className="xp-details">
          <h3 className="xp-subtitle">Courses Graded</h3>
          <ul className="xp-links">
            {xp.coursesGraded.map((c, i) => <li key={i}>{renderCourseLink(c)}</li>)}
          </ul>
        </section>
      )}

      <h3 className="xp-subtitle">Skills</h3>
      <div className="xp-stack">
        {xp.stack.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      {xp.certificate && 
        <details style={{ marginTop: '.5rem' }}>
          <summary className="xp-company-line">Certificate of Leadership</summary>
          <object
            data={xp.certificate.href}
            type="application/pdf"
            width="100%"
            height="1000"
            style={{ border: '1px solid var(--border)', marginTop: '.5rem' }}
          >
            <p>Your browser can't display PDFs. <a href={xp.certificate.href} target="_blank" rel="noreferrer">Open the file</a>.</p>
          </object>
        </details>
      }

      <p style={{ marginTop: '1.25rem' }}>
        <Link to="/experiences" className="link-arrow">← Back to Experiences</Link>
      </p>
    </main>
  )
}
