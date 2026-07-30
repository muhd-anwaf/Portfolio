const skillGroups = [
  {
    category: 'Languages',
    items: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & libraries',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
  {
    category: 'Learning now',
    items: ['TypeScript', 'Node.js', 'MongoDB'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white">Skills</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
                {group.category}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-800 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}