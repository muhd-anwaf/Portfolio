import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="h-screen snap-y snap-proximity overflow-y-auto scroll-smooth">
      <section
        id="home"
        className="min-h-screen snap-start"
      >
        <Hero />
      </section>

      <section
        id="about"
        className="min-h-screen snap-start scroll-mt-16"
      >
        <About />
      </section>

      <section
        id="projects"
        className="min-h-screen snap-start scroll-mt-16"
      >
        <Projects />
      </section>

      <section
        id="skills"
        className="min-h-screen snap-start scroll-mt-16"
      >
        <Skills />
      </section>

      <section
        id="contact"
        className="min-h-screen snap-start scroll-mt-16"
      >
        <Contact />
      </section>
    </main>
  );
}