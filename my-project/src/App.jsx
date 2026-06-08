import './App.css'

const projects = [
  {
    title: 'Food Delivery Platform',
    description:
      'Designed a responsive food delivery system with smart search, user authentication, order management, and payment flow using React, Node.js, Express, and MongoDB.',
    year: '2025',
  },
  {
    title: 'Fashion Nest',
    description:
      'Built a sales prediction model for fashion retail using Python and machine learning to derive customer insights and revenue optimization strategies.',
    year: '2024–25',
  },
  {
    title: 'Bank Management System',
    description:
      'Created a secure Java banking application with MySQL integration, transaction workflows, authentication, and performance-focused queries.',
    year: '2024',
  },
]

const experience = [
  {
    title: 'Thaniya Technologies',
    subtitle: 'Full Stack Intern · Mangalore, India',
    items: [
      'Built responsive frontend interfaces and connected them to scalable backend APIs.',
      'Implemented authentication, database workflows, and user dashboards.',
      'Optimized API flows for performance and smooth user interactions.',
    ],
  },
  {
    title: 'Admar',
    subtitle: 'Internship · Karkala, India',
    items: ['Supported web development tasks and contributed to project delivery across local applications.'],
  },
  {
    title: 'Local Project Internship',
    subtitle: 'Udupi, India',
    items: ['Collaborated on development workflows and learned software engineering best practices.'],
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
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Git',
  'VS Code',
  'Postman',
]

const certifications = [
  'Learn JAVA Data Structures and Algorithms — Udemy',
  'Google Cloud Computing Foundations & Generative AI',
  'Microsoft Certified: AI Fundamentals (AI-900)',
]

const details = [
  { label: 'Location', value: 'Udupi, India' },
  { label: 'Phone', value: '+91 9164208227' },
  { label: 'Education', value: 'NMAMIT • B.E. Information Science & Engineering' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-block">
          <span className="eyebrow">Portfolio</span>
          <div>
            <h1>Pranav Purushotham Nayak</h1>
            <p className="brand-note">Information Science student building modern full stack applications.</p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
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
            <span className="eyebrow">Full Stack Developer</span>
            <h2>Creating polished web experiences with React, Node.js, and clean UI systems.</h2>
            <p>
              I deliver production-ready applications with strong frontend interfaces, stable backend logic, and data-driven workflows.
              My work blends modern design, fast performance, and practical software engineering.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">See Work</a>
              <a className="button secondary" href="#contact">Reach Out</a>
            </div>

            <div className="hero-cards">
              <article className="hero-card">
                <strong>8.58</strong>
                <span>CGPA</span>
              </article>
              <article className="hero-card">
                <strong>Thaniya Technologies</strong>
                <span>Full Stack Intern</span>
              </article>
              <article className="hero-card">
                <strong>3+</strong>
                <span>Major projects</span>
              </article>
            </div>
          </div>

          <aside className="profile-card">
            <div className="profile-visual">
              <div className="profile-avatar">PN</div>
              <div className="profile-label">Web Developer</div>
            </div>
            <div className="profile-content">
              <h3>About my work</h3>
              <p>
                I focus on building intuitive interfaces, efficient APIs, and full-stack solutions that scale.
                I enjoy translating ideas into actionable web platforms.
              </p>
              <div className="profile-details">
                {details.map((item) => (
                  <div key={item.label} className="detail-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span>About</span>
            <h2>Professional profile</h2>
          </div>
          <p className="section-intro">
            I am an Information Science and Engineering student at NMAMIT with internship experience in full stack development.
            My skillset includes web technologies, backend systems, databases, and collaborative product delivery.
          </p>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Internship highlights</h2>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article key={item.title} className="glass-card">
                <h3>{item.title}</h3>
                <p className="item-subtitle">{item.subtitle}</p>
                <ul>
                  {item.items.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span>Projects</span>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-meta">{project.year}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Technical stack</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="section-heading">
            <span>Certifications</span>
            <h2>Verified credentials</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert} className="cert-card">
                {cert}
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Ready to build something together?</h2>
              <p>
                I am available for internships and freelance opportunities. Reach out to discuss your next web or software project.
              </p>
            </div>
            <div className="contact-details">
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
                <p>linkedin.com/in/pranav</p>
              </div>
              <div>
                <strong>GitHub</strong>
                <p>github.com/pranav</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
