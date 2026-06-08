import './App.css'

const projects = [
  {
    title: 'Food Delivery Platform',
    description:
      'Built a complete platform with smart search filters, user authentication, cart workflows, and payment integration using Node.js, Express, MongoDB, and React.',
    year: '2025',
  },
  {
    title: 'Fashion Nest',
    description:
      'Analyzed fashion retail datasets to forecast sales trends with regression models and deliver business optimization insights using Python and ML.',
    year: '2024–25',
  },
  {
    title: 'Bank Management System',
    description:
      'Designed a secure banking application with user authentication and transaction controls, optimizing MySQL queries for performance.',
    year: '2024',
  },
]

const skills = [
  'C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript',
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
  'PostgreSQL', 'Git', 'VS Code', 'Postman',
]

const experience = [
  {
    company: 'Thaniya Technologies',
    meta: 'Mangalore, India · Full Stack Intern',
    points: [
      'Developed responsive web applications with frontend interfaces and efficient backend logic.',
      'Built core platform features including user authentication, database modules, and UI components.',
      'Optimised API communication for reliable performance and seamless data flow.',
    ],
  },
  {
    company: 'Admar',
    meta: 'Karkala, India · Internship',
    points: ['Worked on practical software tasks and supported development activities across web projects.'],
  },
  {
    company: 'Local Project Internship',
    meta: 'Udupi, India',
    points: ['Gained early exposure to development workflows, collaboration, and project delivery.'],
  },
]

function App() {
  return (
    <div className="page-shell">

      <header className="topbar">
        <div>
          <span className="eyebrow">Portfolio</span>
          <h1>Pranav Purushotham Nayak</h1>
        </div>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        {/* Hero */}
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack Developer</p>
            <h2>
              Building responsive web apps with{' '}
              <em>clean UX</em> &amp; scalable backends.
            </h2>
            <p>
              Information Science and Engineering student from NMAMIT, Nitte.
              I craft practical software through modern web technologies and
              strong engineering fundamentals.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects</a>
              <a className="button secondary" href="#contact">Contact Me</a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <span>Education</span>
              <strong>NMAM Institute of Technology</strong>
              <p>B.E. in Information Science &amp; Engineering</p>
              <div className="cgpa">CGPA 8.58</div>
            </div>
            <div className="panel-card">
              <span>Internship</span>
              <strong>Thaniya Technologies</strong>
              <p>Full Stack Intern · Mangalore</p>
              <p style={{ marginTop: 6, fontSize: '0.8rem' }}>Oct 2025 – Dec 2025</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section-grid" id="about">
          <div className="section-card">
            <h3>About Me</h3>
            <p>
              Passionate about frontend and backend development, I enjoy creating
              clean interfaces, efficient APIs, and data-driven applications. I bring
              strong problem-solving skills and practical experience from internships
              and academic projects.
            </p>
          </div>
          <div className="section-card">
            <h3>Education</h3>
            <ul>
              <li>NMAM Institute of Technology — B.E. Information Science &amp; Engineering</li>
              <li>Poorna Prajna Pre-University College — Science (PCM + CS)</li>
              <li>Saint Francis English Medium School — State Board</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="section-block" id="experience">
          <p className="section-label">Work</p>
          <h2>Internship Experience</h2>
          <div className="experience-list">
            {experience.map((exp) => (
              <article key={exp.company}>
                <div className="exp-meta">
                  <h3>{exp.company}</h3>
                  <p className="meta">{exp.meta}</p>
                </div>
                <div className="exp-body">
                  <ul>
                    {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section-block" id="projects">
          <p className="section-label">Work</p>
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-tag">{project.year}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="section-block" id="skills">
          <p className="section-label">Stack</p>
          <h2>Technical Skills</h2>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="section-block" id="certifications">
          <p className="section-label">Credentials</p>
          <h2>Certifications</h2>
          <ul className="cert-list">
            <li>Learn JAVA Data Structures and Algorithms — Udemy</li>
            <li>Google Cloud Computing Foundations &amp; Generative AI</li>
            <li>Microsoft Certified: AI Fundamentals (AI-900)</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="section-block" id="contact">
          <div className="contact-block">
            <h2>Let's work together.</h2>
            <p>Based in Udupi, India. Open to web development and software engineering projects.</p>
            <div className="contact-grid">
              <div>
                <strong>Phone</strong>
                <p>+91 9164208227</p>
              </div>
              <div>
                <strong>Email</strong>
                <p>Available on request</p>
              </div>
              <div>
                <strong>LinkedIn</strong>
                <a href="#" aria-label="LinkedIn profile">linkedin.com/in/pranav</a>
              </div>
              <div>
                <strong>GitHub</strong>
                <a href="#" aria-label="GitHub profile">github.com/pranav</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App