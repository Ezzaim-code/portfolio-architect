import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups = [
  { title: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C#", "PHP"] },
  { title: "Web", items: ["React.js", "Node.js", "Express.js", "Tailwind", "HTML / CSS", "Smarty", "jQuery"] },
  { title: "AI & Automation", items: ["LLM (Mistral)", "Prompt Engineering", "RAG", "AI Agents"] },
  { title: "Data & ML", items: ["Scikit-learn", "TensorFlow", "PyTorch", "Power BI"] },
  { title: "Databases", items: ["MySQL", "PL/SQL", "PostgreSQL"] },
  { title: "Tools & Methods", items: ["Git", "Docker", "Figma", "Agile / Scrum"] },
];

const marquee = [
  "Python", "React", "TypeScript", "LLM", "RAG", "TensorFlow", "PyTorch",
  "Node.js", "MySQL", "Docker", "Mistral", "Prompt Engineering", "AI Agents",
  "Scikit-learn", "Power BI", "PHP",
];

export const Skills = () => {
  return (
    <section id="skills" className="surface-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          dark
          number="02"
          label="Skills"
          title="A toolkit for shipping intelligent software."
        />
      </div>

      {/* Marquee */}
      <div className="relative mb-20 border-y border-dark-border py-6">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-3xl md:text-5xl text-surface-light/30 w-max">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-dark-border bg-dark-muted/40 p-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-display text-xl">{g.title}</h3>
                <span className="font-mono text-xs text-surface-light/40">
                  0{i + 1}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="px-3 py-1.5 rounded-full text-sm bg-surface-light/5 border border-surface-light/10 text-surface-light/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
