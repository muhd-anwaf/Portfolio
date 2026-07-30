import Image from "next/image";
import { ExternalLink,Code } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, description, image, tags, liveUrl, codeUrl } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-cyan-500/50 dark:hover:border-cyan-400/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-slate-200/80 px-2 py-1 text-xs text-cyan-700 dark:bg-slate-700/50 dark:text-cyan-400"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-4 border-t border-border pt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <ExternalLink size={15} />
              Live demo
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <Code size={15} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}