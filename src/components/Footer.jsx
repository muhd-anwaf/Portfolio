export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}