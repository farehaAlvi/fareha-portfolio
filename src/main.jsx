import React from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Mail, ArrowUpRight, Download, Code2, Layers3, Gauge, ShieldCheck } from 'lucide-react';
import './styles.css';

const skills = {
  Frontend: ['Vue.js', 'Vue 3', 'Composition API', 'React.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'],
  State: ['Pinia', 'Vuex', 'Redux Toolkit'],
  Architecture: ['Reusable Components', 'REST APIs', 'Microservices', 'Modular Architecture', 'Performance Optimization'],
  Quality: ['Jest', 'React Testing Library', 'Jasmine', 'Karma', 'SonarQube', 'ESLint'],
  DevOps: ['Azure DevOps', 'Azure Repos', 'Azure Pipelines', 'Jenkins', 'Webpack', 'Vite']
};

const projects = [
  {
    title: 'Netflix Clone',
    tag: 'React.js',
    description: 'Responsive movie discovery application with dynamic TMDB data, routing and Firebase authentication.',
    highlights: ['TMDB API', 'React Router', 'Firebase Auth', 'Responsive UI'],
    live: 'https://netflix-gpt-gilt-nu.vercel.app/',
    code: 'https://github.com/fareha0402/netflix-gpt'
  },
  {
    title: 'Food Ordering App',
    tag: 'React.js',
    description: 'Mobile-first food ordering experience with API-driven menus, cart functionality and reusable components.',
    highlights: ['API Integration', 'Cart Management', 'Reusable Components', 'Mobile First'],
    live: '#',
    code: '#'
  },
  {
    title: 'Automation Marketplace',
    tag: 'Vue.js',
    description: 'Enterprise marketplace application built with Vue.js and PrimeVue, focused on scalable frontend architecture.',
    highlights: ['Vue.js', 'PrimeVue', 'Pinia', 'Lazy Loading'],
    metric: '30% performance improvement'
  }
];

function App() {
  return (
    <div>
      <header className="nav">
        <a className="brand" href="#home">FS<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/Fareha_Sameet_Senior_Frontend_Engineer_Resume.pdf" download>Resume <Download size={15}/></a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">SENIOR FRONTEND ENGINEER</p>
            <h1>Building <em>scalable</em> web experiences that feel effortless.</h1>
            <p className="lead">
              9 years of frontend engineering experience across Vue.js, React.js and JavaScript,
              with a strong focus on enterprise applications, performance, testing and maintainable architecture.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">View my work <ArrowUpRight size={17}/></a>
              <a className="button secondary" href="mailto:alvifareha04@gmail.com">Let's connect <Mail size={17}/></a>
            </div>
            <div className="socials">
              <a href="https://github.com/fareha0402" target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-top"><span>PROFILE</span><span className="status">● Open to opportunities</span></div>
            <div className="profile-monogram">FS</div>
            <h2>Fareha Sameet</h2>
            <p>Senior Frontend Developer</p>
            <div className="stats">
              <div><strong>9+</strong><span>Years</span></div>
              <div><strong>Vue</strong><span>Primary</span></div>
              <div><strong>React</strong><span>Strong</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <div>
              <h2>Frontend engineering with a product mindset.</h2>
            </div>
            <div className="about-copy">
              <p>
                I build responsive, reliable and maintainable web applications with a strong emphasis
                on component architecture, state management, performance and code quality.
              </p>
              <p>
                My professional experience includes enterprise banking applications, legacy
                AngularJS-to-Vue.js modernization, team leadership, CI/CD and automated testing.
              </p>
            </div>
          </div>
          <div className="principles">
            <div><Code2/><h3>Clean Engineering</h3><p>Reusable components, modular design and practical SOLID/SRP principles.</p></div>
            <div><Layers3/><h3>Scalable UI</h3><p>Architecture that stays maintainable as features, teams and users grow.</p></div>
            <div><Gauge/><h3>Performance</h3><p>Lazy loading, efficient state management and measurable frontend improvements.</p></div>
            <div><ShieldCheck/><h3>Quality</h3><p>Automated testing, code quality checks and reliable delivery pipelines.</p></div>
          </div>
        </section>

        <section id="experience" className="section dark-section">
          <div className="section-label">02 / EXPERIENCE</div>
          <h2>9 years of building for enterprise.</h2>
          <div className="timeline">
            <article><div className="year">2024 — Present</div><div><h3>Senior Frontend Developer / IT Analyst</h3><p>Tata Consultancy Services</p><ul><li>Led a cross-functional team of 5 developers.</li><li>Delivered enterprise Vue.js applications using PrimeVue.</li><li>Achieved 90% Jest unit-test coverage and maintained zero critical SonarQube issues.</li><li>Managed Azure DevOps-based frontend deployments.</li></ul></div></article>
            <article><div className="year">2023 — 2024</div><div><h3>IT Analyst</h3><p>Tata Consultancy Services</p><ul><li>Built an Automation Marketplace using Vue.js and PrimeVue.</li><li>Implemented Pinia and lazy loading, improving performance by approximately 30%.</li></ul></div></article>
            <article><div className="year">2021 — 2022</div><div><h3>IT Analyst — ABN AMRO Bank</h3><p>Tata Consultancy Services</p><ul><li>Developed banking interfaces using Vue.js.</li><li>Migrated legacy AngularJS applications to Vue.js.</li><li>Integrated REST APIs and achieved 80%+ Jest coverage.</li></ul></div></article>
            <article><div className="year">2017 — 2021</div><div><h3>System Engineer → Assistant System Engineer</h3><p>Tata Consultancy Services</p><ul><li>Built enterprise UIs using Angular, Vue.js, HTML and CSS.</li><li>Created reusable UI modules and supported legacy modernization.</li></ul></div></article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">03 / SKILLS</div>
          <h2>Tools I use to turn ideas into products.</h2>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}><h3>{group}</h3><div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div></div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-label">04 / PROJECTS</div>
          <div className="projects-head"><h2>Selected work.</h2><p>A mix of enterprise experience and hands-on React projects.</p></div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project" key={p.title}>
                <div className="project-number">0{i+1}</div>
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-highlights">{p.highlights.map(h => <span key={h}>{h}</span>)}</div>
                {p.metric && <strong className="metric">{p.metric}</strong>}
                <div className="project-links">
                  {p.live && p.live !== '#' && <a href={p.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={15}/></a>}
                  {p.code && p.code !== '#' && <a href={p.code} target="_blank" rel="noreferrer">Code <Github size={15}/></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Let's build something great.</h2>
          <p>I'm interested in Senior Frontend Engineer and Lead Frontend opportunities.</p>
          <a className="button primary" href="mailto:alvifareha04@gmail.com">Email me <Mail size={17}/></a>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Fareha Sameet</span><span>Vue.js · React.js · JavaScript</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
