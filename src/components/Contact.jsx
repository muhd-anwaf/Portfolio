import { ArrowUpRight, Code2, Copy, Mail } from 'lucide-react';

export default function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="site-container"><div className="contact-panel"><p className="terminal-label">&gt; initiate_contact</p><h2 id="contact-heading">Building something <em>interesting?</em></h2><p>Let&apos;s talk. I am open to Backend Engineering opportunities across India.</p><div className="contact-actions"><a href="mailto:muhd.anwaf@gmail.com" className="button button-primary"><Mail size={17} aria-hidden="true" /> Email me</a><a href="https://github.com/muhd-anwaf" target="_blank" rel="noreferrer" className="button button-secondary"><Code2 size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a></div><p className="contact-email"><Copy size={14} aria-hidden="true" /> muhd.anwaf@gmail.com</p></div></div></section>;
}
