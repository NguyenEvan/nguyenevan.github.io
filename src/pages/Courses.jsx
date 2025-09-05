import './Courses.css';
import { Link } from 'react-router-dom';

const PLAN = [
  { key: 'f23', title: 'Fall 2023', courses: ['CSE 30', 'CRSN 1', { label: 'CMPM 17', href: '/courses/cmpm-17-f23' }], units: 15, total: '137' },
  { key: 'w24', title: 'Winter 2024', courses: ['CSE 12', 'CSE 16', { label: 'CMPM 17', href: '/courses/cmpm-17-w24' }, 'CMPM 15'], units: 16, total: 'Including Transfer' },
  { key: 's24', title: 'Spring 2024', courses: ['CSE 13S ⭐️', 'AM 30', 'LIT 81I', 'CMPM 118 ⭐️'], units: 22, total: '186' },
  { key: 'f24', title: 'Fall 2024', courses: ['CSE 101 ⭐️', 'CSE 107 ⭐️', 'CSE 120'], units: 15 },
  { key: 'w25', title: 'Winter 2025', courses: ['CSE 114A', 'CSE 130 ⭐️', 'CSE 140 ⭐️', 'COWL 52'], units: 20 },
  { key: 's25', title: 'Spring 2025', courses: ['CSE 102', 'CSE 150 ⭐️', 'ECE 30', 'CMPM 198F'], units: 19 },
  { key: 'f25', title: 'Fall 2025', status: 'Currently', courses: ['CSE 115A', 'CSE 180', 'CSE 132'], units: 15 },
  { key: 'w26', title: 'Winter 2026', status: 'Planned', courses: ['CSE 101M', 'CSE 144', 'CSE 186'], units: 15 },
];

function pad(arr, n) {
  const out = arr.slice();
  while (out.length < n) out.push('');
  return out;
}

// helpers: normalize a course entry, make id, detect star
const STAR_RE = /⭐/u;
function slugify(label) {
  return label
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
function normalizeCourse(entry) {
  if (!entry) return null;

  // support {label, href} objects (if you ever use them)
  if (typeof entry === 'object') {
    const starred = entry.label ? STAR_RE.test(entry.label) : false;
    const clean = entry.label?.replace(/\s*⭐️?|\s*★/g, '').trim() ?? '';
    const id = slugify(clean);
    return { label: entry.label, id, starred, href: entry.href || `/courses/${id}` };
  }

  // plain string like "CSE 101 ⭐️"
  const starred = STAR_RE.test(entry);
  const clean = entry.replace(/\s*⭐️?|\s*★/g, '').trim();
  const id = slugify(clean);
  return { label: entry, id, starred, href: `/courses/${id}` };
}

function renderCourse(entry) {
  if (!entry) return '';
  const c = normalizeCourse(entry);
  if (!c) return '';

  // internal link to /courses/:courseId
  return (
    <Link to={c.href} className="course-link">
      {c.label}
    </Link>
  );
}

export default function Courses() {
  const maxRows = Math.max(...PLAN.map(t => t.courses.length));
  const padded = PLAN.map(t => ({ ...t, courses: pad(t.courses, maxRows) }));

  const NOTES = [
    'Click a course to view its syllabus.',
    'Starred courses include a projects section below the syllabus.',
    'Tested out of CSE 20 and CSE 40.',
    'CMPM 198F: Independent Research.',
    'CMPM 118: Collaborative Research in Engineering.',
    'CMPM 17 (Fall 2023): Intro to Electrical Circuits.',
    'CMPM 17 (Winter 2024): Intro to Hacking Competitions.',
    'GE courses and Linear Algebra taken at community college.',
  ];

  return (
    <main className="courses">
      <h1 className="courses-title">Undergraduate Course List: UCSC</h1>
      <h2 className="courses-subtitle">Degree Plan: Computer Science B.S.</h2>

      <div className="table-wrap">
        <table className="course-table">
          <thead>
            <tr>
              <th className="corner" aria-hidden="true" />
              {padded.map(term => (
                <th key={term.key} scope="col">
                  {term.title}
                  {term.status && <div className="term-status">{term.status}</div>}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: maxRows }).map((_, rowIdx) => (
              <tr key={`row-${rowIdx}`}>
                <th scope="row" className="row-label" />
                {padded.map(term => (
                  <td key={`${term.key}-${rowIdx}`} className="cell">
                    {renderCourse(term.courses[rowIdx])}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="summary">
              <th scope="row" className="row-label">
                Units<br />Completed
              </th>
              {PLAN.map(t => (
                <td key={`${t.key}-units`} className="cell strong">
                  {t.units ?? '—'}
                </td>
              ))}
            </tr>

            <tr className="summary">
              <th scope="row" className="row-label">
                Total<br />Completed
              </th>
              {PLAN.map(t => {
                const val = t.total ?? '';
                const isTransfer = typeof val === 'string' && /including transfer/i.test(val);
                return (
                  <td key={`${t.key}-total`} className={`cell strong`}>
                    {val}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <section className="course-notes">
        <h3 className="courses-title">Notes</h3>
        <ul className="notes-list">
          {NOTES.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      </section>
    </main>
  );
}
