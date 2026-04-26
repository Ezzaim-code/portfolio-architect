import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "2025", label: "ENSA Graduate" },
  { value: "2", label: "Internships" },
  { value: "4+", label: "ML Projects" },
  { value: "3", label: "Languages" },
];

export const About = () => {
  return (
    <section id="about" className="surface-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="01"
          label="About"
          title={
            <>
              A builder at the intersection of{" "}
              <em className="font-display italic text-accent not-italic">software</em>{" "}
              and <em className="font-display italic text-accent not-italic">intelligence</em>.
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="aspect-square w-full max-w-[260px] rounded-2xl bg-surface-dark text-surface-light flex items-center justify-center font-display text-8xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-40" />
              <span className="relative z-10">
                O<span className="text-accent">A</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-5 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              I'm a recent State Engineer in Computer Science from{" "}
              <span className="text-foreground font-medium">ENSA</span>, with hands-on experience designing
              full-stack web applications and AI-powered automation systems.
            </p>
            <p>
              I love the moment a model, an interface, and a database all click together — when
              messy real-world workflows become quiet, reliable software. Recently, I replaced
              HubSpot workflows with an internal CRM, built RAG-based AI agents to personalize
              outreach, and shipped traffic-filtering tools used in production.
            </p>
            <p className="text-foreground/60">
              Currently looking for opportunities where I can keep learning at the edge of
              <span className="text-accent"> AI engineering</span> and product craft.
            </p>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border rounded-xl p-5 bg-card"
              >
                <div className="font-display text-3xl text-foreground">{s.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-foreground/50 mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
