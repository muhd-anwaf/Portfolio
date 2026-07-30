export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white">About</h2>

        <div className="mt-8 max-w-2xl space-y-4 text-slate-400 leading-relaxed">
          <p>
            I&apos;m a frontend developer based in Kerala. I started out
            curious about how the websites I used every day were actually put
            together, and that curiosity turned into building my own.
          </p>

          <p>
            Most of my work is in React and Next.js. I care about the parts
            people don&apos;t notice — pages that load fast, layouts that
            don&apos;t break on a phone, forms that tell you what went wrong.
            Right now I&apos;m learning{' '}
            <span className="text-cyan-400">TypeScript</span> and getting more
            comfortable with backend work.
          </p>

          <p>
            When I&apos;m not coding, I&apos;m usually reading or out with a
            camera.
          </p>
        </div>
      </div>
    </section>
  );
}