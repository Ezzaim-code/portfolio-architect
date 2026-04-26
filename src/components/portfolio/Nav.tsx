import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface-dark/80 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between text-surface-light">
        <a href="#top" className="font-display text-xl tracking-tight">
          <span className="text-accent">O</span>uahiba<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-surface-light/70 hover:text-surface-light transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Ouahiba-Aassime-CV.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" /> CV
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-surface-light"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn("h-px bg-current transition-transform", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-px bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("h-px bg-current transition-transform", open && "-translate-y-[7px] -rotate-45")} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface-dark border-t border-dark-border text-surface-light">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-surface-light/80">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Ouahiba-Aassime-CV.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
