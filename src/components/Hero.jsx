import Image from "next/image";
import { ArrowDown, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl snap-start flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:justify-between">
      {/* Text column */}
      <div className="flex-1 text-center md:text-left">
        <p className="mb-3 text-sm font-medium tracking-wide text-cyan-600 dark:text-cyan-400">
          Hi, my name is
        </p>

        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Your Name
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-muted sm:text-3xl">
          I build things for the web.
        </h2>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted md:mx-0">
          Frontend developer based in Kerala, focused on React and Next.js.
          Currently looking for junior developer roles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-cyan-400"
          >
            View my work
            <ArrowDown size={16} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>
      </div>

      {/* Photo column */}
      <div className="flex-shrink-0">
        <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-border sm:h-64 sm:w-64">
          <Image
            src="/profile.jpg"
            alt="Portrait of Your Name"
            fill
            sizes="(max-width: 640px) 192px, 256px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}