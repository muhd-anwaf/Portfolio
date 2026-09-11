const groups = [
  ['BACKEND', ['Java', 'Spring Boot', 'REST APIs', 'Spring Security', 'JWT']],
  ['DATABASE', ['PostgreSQL', 'SQLite', 'SQL', 'JPA', 'Flyway']],
  ['FRONTEND', ['React', 'Next.js', 'JavaScript', 'Tailwind CSS']],
  ['DEPLOYMENT', ['Vercel', 'Streamlit', 'Git', 'GitHub']],
  ['AI / DATA', ['RAG', 'LangChain', 'FAISS', 'Gemini API', 'Python']],
];

export default function Skills() {
  return <section id="stack" className="stack-section" aria-labelledby="stack-heading"><div className="site-container"><div className="section-intro"><p className="terminal-label">$ stack --list</p><h2 id="stack-heading">Technology stack</h2><p>Technologies visible in the portfolio and its linked public repositories.</p></div><div className="stack-table">{groups.map(([category, items]) => <section key={category}><h3>{category}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div></div></section>;
}
