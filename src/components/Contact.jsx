"use client";

import { useState } from "react";
import { Mail, Code2, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORM_ID",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 snap-start px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground">
          Get in touch
        </h2>

        <p className="mt-3 max-w-lg text-muted">
          I&apos;m looking for junior developer roles and open to
          freelance work. Drop me a message and I&apos;ll get back
          to you.
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-muted-foreground"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-muted-foreground"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-muted-foreground"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full resize-none rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />

              {status === "sending"
                ? "Sending..."
                : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-400" role="status">
                Thanks — your message came through. I&apos;ll reply
                soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400" role="status">
                Something went wrong. You can email me directly at
                you@example.com.
              </p>
            )}
          </form>

          <div className="space-y-4">
            <p className="text-sm text-muted">
              Or find me here:
            </p>

            <a
              href="mailto:you@example.com"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <Mail size={18} />
              you@example.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <Code2 size={18} />
              github.com/yourusername
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <ExternalLink size={18} />
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}