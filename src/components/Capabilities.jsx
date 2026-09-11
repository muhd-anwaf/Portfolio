const capabilities = [
  { number: '01', title: 'Design', body: 'API contracts, resource modelling, database migrations, and feature-oriented boundaries for maintainable services.', tags: ['API design', 'Data modelling', 'DBMS'] },
  { number: '02', title: 'Develop', body: 'Java and Spring Boot applications with REST endpoints, validation, persistence, authentication, and full-stack integration.', tags: ['Java', 'Spring Boot', 'REST APIs'] },
  { number: '03', title: 'Deploy', body: 'Public application deployment through Vercel and Streamlit, with project configuration and environment-aware application setup.', tags: ['Vercel', 'Streamlit', 'Git'] },
  { number: '04', title: 'Data', body: 'Relational data workflows using PostgreSQL and SQLite, plus JPA persistence, Flyway migrations, and SQL-based analysis.', tags: ['PostgreSQL', 'SQLite', 'Flyway'] },
];

export default function Capabilities() {
  return <section className="capabilities-section" aria-labelledby="capabilities-heading"><div className="site-container"><div className="section-intro"><p className="terminal-label">&gt; engineering_capabilities</p><h2 id="capabilities-heading">Design <span>→</span> Develop <span>→</span> Deploy.</h2><p>A backend-oriented approach across system design, application development, deployment, and data management.</p></div><div className="capability-grid">{capabilities.map((capability) => <article key={capability.number}><p>{capability.number}</p><h3>{capability.title}</h3><p>{capability.body}</p><ul>{capability.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div></div></section>;
}
