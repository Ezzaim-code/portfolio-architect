import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    period: "2020 — 2025",
    title: "State Engineer Degree in Computer Science",
    place: "National School of Applied Sciences (ENSA)",
  },
  {
    period: "2020 — 2022",
    title: "Preparatory Classes — Math & Physics",
    place: "Okba Ibn Nafea, Dakhla",
  },
  {
    period: "2019 — 2020",
    title: "High School Diploma — Physical Sciences (Honors)",
    place: "Mohamed VI High School",
  },
];

export const Education = () => {
  return (
    <section id="education" className="surface-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="05"
          label="Education"
          title="Five years building the foundations."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="font-mono text-xs text-foreground/50">{it.period}</span>
              </div>
              <h3 className="font-display text-xl leading-snug text-foreground">{it.title}</h3>
              <p className="text-sm text-foreground/60 mt-auto">{it.place}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
