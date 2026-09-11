import { ArrowDownRight, ArrowUpRight, Code2, FileDown, Mail } from 'lucide-react';

const profileData = [
  ['ROLE', 'Backend Engineer'],
  ['FOCUS', 'APIs / DBMS / Deployment'],
  ['LOCATION', 'India'],
  ['STATUS', 'Open to opportunities'],
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="home-heading">
      <div className="site-container hero-grid">
        <div className="hero-content">
          <p className="terminal-label enter enter-1">&gt; whoami</p>
          <p className="hero-name enter enter-1">MUHAMMED ANWAF</p>
          <h1 id="home-heading" className="hero-title enter enter-2">Backend engineer <span>building reliable systems</span> from design to deployment.</h1>
          <p className="hero-copy enter enter-3">I design, develop, and deploy backend systems and full-stack applications with a focus on clean APIs, databases, and maintainable engineering.</p>
          <p className="availability enter enter-3"><span className="status-dot" /> Open to Backend Engineering opportunities across India.</p>
          <div className="hero-actions enter enter-4">
            <a href="#work" className="button button-primary">View projects <ArrowDownRight size={17} aria-hidden="true" /></a>
            <a href="#contact" className="button button-secondary">Contact me <Mail size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-links enter enter-4" aria-label="Professional links">
            <a href="https://github.com/muhd-anwaf" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume <FileDown size={14} aria-hidden="true" /></a>
            <span><Code2 size={14} aria-hidden="true" /> /backend</span>
          </div>
        </div>
        <aside className="profile-panel enter enter-5" aria-label="Professional profile metadata">
          <div className="panel-heading"><span>profile.status</span><i /></div>
          <dl>
            {profileData.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
          <p className="panel-command">$ build --focus=backend</p>
        </aside>
      </div>
    </section>
  );
}
