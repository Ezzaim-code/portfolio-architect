import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const languages = [
  { name: "Arabic", level: "Native", value: 100 },
  { name: "French", level: "Fluent", value: 90 },
  { name: "English", level: "Fluent", value: 88 },
];

const activities = [
  "Active member of AppsClub",
  "Participant at GITEX Africa",
  "Attended conferences on Cloud, Databases & DevOps",
];

export const Languages = () => {
  return (
    <section className="surface-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          dark
          number="06"
          label="Languages & Activities"
          title="Communication and curiosity, beyond the keyboard."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8">
            {languages.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-2xl text-surface-light">{l.name}</h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-surface-light/50">
                    {l.level}
                  </span>
                </div>
                <div className="h-px bg-dark-border relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-px bg-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-surface-light/50 mb-4">
              Extracurricular
            </div>
            {activities.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-dark-border bg-dark-muted/40"
              >
                <Sparkles className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                <span className="text-surface-light/85">{a}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
