import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground">
          Projects
        </h2>
        <p className="mt-3 max-w-lg text-muted">
          A few things I&apos;ve built. Each one taught me something I couldn&apos;t
          have learned from a tutorial.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}