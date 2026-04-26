import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="surface-dark relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background grid + blobs */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-mint/20 blur-3xl animate-blob [animation-delay:-6s]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 text-sm text-surface-light/70 font-mono"
        >
          <span className="w-8 h-px bg-accent" />
          <span>Portfolio · 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(2.75rem,10vw,9rem)] leading-[0.95] font-light tracking-tight text-balance"
        >
          Ouahiba
          <br />
          <span className="italic text-accent">Aassime</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 grid md:grid-cols-2 gap-8 items-end"
        >
          <p className="text-lg md:text-xl text-surface-light/80 max-w-md leading-relaxed">
            Software Engineer crafting{" "}
            <span className="text-mint">full-stack systems</span> and{" "}
            <span className="text-accent">AI-driven automation</span> that turn
            ideas into shipped products.
          </p>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="inline-flex items-center gap-2 text-sm text-surface-light/60 font-mono">
              <MapPin className="w-4 h-4" />
              Agadir, Morocco · Open to remote
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Ouahiba-Aassime-CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-surface-light/30 text-surface-light hover:bg-surface-light/10 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface-light/50 hover:text-surface-light transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
};
