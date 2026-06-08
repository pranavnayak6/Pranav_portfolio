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
    year: '2024–2025',
  },
  {
    title: 'Bank Management System',
    description:
      'Designed a secure banking application with user authentication and transaction controls, optimizing MySQL queries for performance.',
    year: '2024',
  },
]

const skills = [
  'C',
  'C++',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Git',
  'VS Code',
  'Postman',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>Pranav Purushotham Nayak</h1>
          <p className="subtitle">Information Science Engineering student building modern web experiences.</p>
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
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack Developer</p>
            <h2>Building responsive web applications with clean UX and scalable backend systems.</h2>
            <p>
              I am a dedicated Information Science and Engineering student from NMAMIT, focused on delivering
              practical software solutions through modern web technologies and strong engineering fundamentals.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <span>Education</span>
              <p>NMAM Institute of Technology</p>
              <strong>B.E. in Information Science and Engineering</strong>
              <p>CGPA: 8.58</p>
            </div>
            <div className="panel-card">
              <span>Internship Experience</span>
              <p>Thaniya Technologies — Full Stack Intern</p>
              <p>Mangalore, India | Oct 2025–Dec 2025</p>
            </div>
          </div>
        </section>

        <section className="section-grid" id="about">
          <div className="section-card">
            <h3>About Me</h3>
            <p>
              Passionate about frontend and backend development, I enjoy creating clean interfaces, efficient APIs,
              and data-driven applications. I bring strong problem-solving skills and practical experience
              from internships and academic projects.
            </p>
          </div>
          <div className="section-card">
            <h3>Education</h3>
            <ul>
              <li>NMAM Institute of Technology — B.E. Information Science and Engineering</li>
              <li>Poorna Prajna Pre-University College — Science (PCM + CS)</li>
              <li>Saint Francis English Medium School — State Board</li>
            </ul>
          </div>
        </section>

        <section className="section-block" id="experience">
          <h2>Internship Experience</h2>
          <div className="experience-list">
            <article>
              <h3>Thaniya Technologies</h3>
              <p className="meta">Mangalore, India — Full Stack Intern</p>
              <ul>
                <li>Developed responsive web applications with frontend interfaces and efficient backend logic.</li>
                <li>Built core platform features including user authentication, database modules, and components.</li>
                <li>Optimized API communication for reliable performance and seamless data flow.</li>
              </ul>
            </article>
            <article>
              <h3>Admar</h3>
              <p className="meta">Karkala, India — Internship</p>
              <ul>
                <li>Worked on practical software tasks and supported development activities across web projects.</li>
              </ul>
            </article>
            <article>
              <h3>Local Project Internship</h3>
              <p className="meta">Udupi, India</p>
              <ul>
                <li>Gained early exposure to development workflows, collaboration, and project delivery.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-block" id="projects">
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

        <section className="section-block" id="skills">
          <h2>Technical Skills</h2>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-block" id="certifications">
          <h2>Certifications</h2>
          <ul className="cert-list">
            <li>Learn JAVA Data Structures and Algorithms (Udemy)</li>
            <li>Google Cloud Computing Foundations &amp; Generative AI</li>
            <li>Microsoft Certified: AI Fundamentals (AI-900)</li>
          </ul>
        </section>

        <section className="section-block contact-block" id="contact">
          <h2>Contact</h2>
          <p>Based in Udupi, India. Ready to collaborate on web development and software engineering projects.</p>
          <div className="contact-grid">
            <div>
              <strong>Phone</strong>
              <p>+91 9164208227</p>
            </div>
            <div>
              <strong>Email</strong>
              <p>Gmail address available on request</p>
            </div>
            <div>
              <strong>LinkedIn</strong>
              <p><a href="#" aria-label="LinkedIn profile">LinkedIn profile</a></p>
            </div>
            <div>
              <strong>GitHub</strong>
              <p><a href="#" aria-label="GitHub profile">GitHub profile</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
