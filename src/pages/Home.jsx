import './Home.css';

export default function Home() {
  return (
    <main className="site">
      {/* Masthead (like the screenshot) */}
      <section className="masthead">
        <div className="masthead-media">
          {/* Replace src with your own image (ASCII portrait or photo). */}
          <img
            className="portrait"
            src="/P1020066.jpg"
            alt="Evan Nguyen portrait"
          />
        </div>

        <div className="masthead-copy">
          <h1 className="masthead-title">Evan Nguyen</h1>
          <h2 className="masthead-kicker">Landing Page</h2>

          <p className="masthead-lede">
            This website contains up-to-date information on my most recent educational and technical experiences at the University of California, Santa Cruz and other companies.
          </p>


          {/* <a href="#contact" className="cta-btn">Contact Me</a> */}
        </div>
      </section>

      
      {/* Contact */}
<section id="contact" className="section contact">
  <h3 className="section-title">Contact Me</h3>
  <p className="contact-intro">For inquiries, or any other communications:</p>

  <dl className="contact-grid">
    <div className="contact-item">
      <dt>Personal Email</dt>
      <dd>
        <a href="mailto:evanbnguyen@gmail.com" className="contact-link">
          <span className="contact-value">evanbnguyen@gmail.com</span>
        </a>
      </dd>
    </div>

    <div className="contact-item">
      <dt>School Email</dt>
      <dd>
        <a href="mailto:evbnguye@ucsc.edu" className="contact-link">
          <span className="contact-value">evbnguye@ucsc.edu</span>
        </a>
      </dd>
    </div>

    <div className="contact-item">
      <dt>Phone</dt>
      <dd>
        <a href="tel:+16692553984" className="contact-link">
          <span className="contact-value">+1 (669) 255-3984</span>
        </a>
      </dd>
    </div>
  </dl>
</section>

      {/* About */}
      {/* <section className="section about">
        <h3 className="section-title">About Me</h3>
        <p>
          Hi! I’m Evan, a developer with experience in web, mobile, and cloud technologies.
          I love building impactful projects and sharing what I learn.
        </p>
      </section> */}

      {/* Projects */}
      {/* <section className="section projects-preview">
        <h3 className="section-title">Featured Projects</h3>
        <ul className="project-list">
          <li className="project-item">
            <strong>Portfolio Website</strong>
            <p>A modern React portfolio to showcase my work and skills.</p>
          </li>
          <li className="project-item">
            <strong>Course Tracker</strong>
            <p>A web app to track courses and learning progress.</p>
          </li>
        </ul>

        <div className="center">
          <a href="/projects" className="link-arrow">See all projects →</a>
        </div>
      </section> */}

      {/* Contact */}
      {/* <section id="contact" className="section contact">
        <h3 className="section-title">Contact</h3>
        <p>Feel free to reach out for collaboration or just to say hi!</p>
        <a href="mailto:evan@example.com" className="contact-btn">evan@example.com</a>
      </section> */}
    </main>
  );
}
