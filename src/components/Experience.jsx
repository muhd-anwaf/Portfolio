const engineeringAreas = [
  ['Backend systems', 'Java services, REST endpoints, security configuration, validation, persistence, and exception handling.'],
  ['Data workflows', 'PostgreSQL and SQLite application data, Flyway migrations, JPA persistence, SQL analysis, and vector retrieval.'],
  ['Product engineering', 'Full-stack application interfaces, RAG pipelines, analytics, reporting, and publicly deployed project work.'],
];

export default function Experience() {
  return <section id="experience" className="experience-section" aria-labelledby="experience-heading"><div className="site-container experience-layout"><div className="section-intro"><p className="terminal-label">&gt; engineering_experience</p><h2 id="experience-heading">Project-led engineering experience.</h2><p>My public work is the clearest record of the systems and technologies I have built so far.</p></div><div className="experience-list">{engineeringAreas.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>;
}
