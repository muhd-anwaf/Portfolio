import { ArrowUpRight, Code2 } from 'lucide-react';
import { allProjects, selectedProjects } from '@/data/projects';
import ProjectVisual from './ProjectVisual';

function ProjectLinks({ project }) {
  return <div className="project-links"><a href={project.repositoryUrl} target="_blank" rel="noreferrer"><Code2 size={15} aria-hidden="true" /> Repository <ArrowUpRight size={14} aria-hidden="true" /></a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} aria-hidden="true" /></a>}</div>;
}

export default function Projects() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="site-container">
        <div className="section-intro"><p className="terminal-label">&gt; selected_work</p><h2 id="work-heading">Engineering work, <em>grounded in implementation.</em></h2><p>Three projects selected for their backend, data, and system-oriented engineering work.</p></div>
        <div className="selected-projects">
          {selectedProjects.map((project) => <article className="selected-project" key={project.slug}>
            <div className="project-meta"><span>{project.number} / PROJECT</span><span>{project.category}</span></div>
            <div className="selected-project-grid"><div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p className="stack-label">STACK</p><ul className="project-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><ProjectLinks project={project} /></div><ProjectVisual type={project.visual} /></div>
            <ul className="project-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>)}
        </div>
      </div>
      <div className="all-projects-section" aria-labelledby="all-projects-heading"><div className="site-container"><div className="all-projects-header"><div><p className="terminal-label">&gt; repository_index</p><h2 id="all-projects-heading">All projects</h2></div><p className="scroll-hint">← SCROLL / SWIPE →</p></div><div className="all-projects-track" role="list" aria-label="All public projects" tabIndex={0}>{allProjects.map((project, index) => <article className="all-project-card" role="listitem" key={project.repositoryUrl}><p className="card-number">{String(index + 4).padStart(2, '0')} / REPOSITORY</p><h3>{project.title}</h3><p>{project.description}</p>{project.technologies.length > 0 && <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}<a href={project.repositoryUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>{project.archived && <span className="archived-label">ARCHIVED</span>}</article>)}</div></div></div>
    </section>
  );
}
