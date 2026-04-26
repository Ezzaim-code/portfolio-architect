import { Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="surface-dark border-t border-dark-border py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-display text-2xl text-surface-light">
        <span className="text-accent">O</span>uahiba
        <span className="text-accent">A</span>assime
      </div>

      <div className="flex items-center gap-5 text-surface-light/60">
        <a
          href="mailto:aassimeouahiba@gmail.com"
          className="hover:text-accent transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/ouahiba-aassime"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>

      <p className="text-xs font-mono text-surface-light/40">
        © {new Date().getFullYear()} · Designed & built with care
      </p>
    </div>
  </footer>
);
