const visualLines = {
  api: ['POST  /auth/login', 'GET   /products', 'POST  /orders'],
  rag: ['INGEST  document.pdf', 'RETRIEVE top_k=4', 'ANSWER  grounded=true'],
  tracker: ['GET   /api/applications', 'PATCH /api/kanban', 'GET   /api/analytics'],
};

export default function ProjectVisual({ type }) {
  return <div className={`project-visual project-visual-${type}`} aria-hidden="true"><div className="visual-top"><span /><span /><span /></div><div className="visual-lines">{visualLines[type].map((line) => <p key={line}><b>{line.slice(0, 6)}</b>{line.slice(6)}</p>)}</div><div className="visual-grid" /></div>;
}
