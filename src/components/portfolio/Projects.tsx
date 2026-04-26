import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Credit Score Model",
    description:
      "Machine learning model predicting creditworthiness through classification algorithms trained on financial datasets.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    category: "Machine Learning",
    accent: "accent",
  },
  {
    title: "Handwritten Character Recognition",
    description:
      "Computer vision system recognizing handwritten characters with neural network-based classification.",
    stack: ["Python", "TensorFlow", "OpenCV"],
    category: "Deep Learning",
    accent: "mint",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Predictive model trained on medical datasets to assess cardiovascular risk through classification.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    category: "Healthcare AI",
    accent: "mint",
  },
  {
    title: "Pharmacy Management",
    description:
      "Desktop application managing inventory, prescriptions, and sales for a pharmacy workflow.",
    stack: ["JavaFX", "Java", "MySQL"],
    category: "Desktop App",
    accent: "accent",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="surface-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          dark
          number="04"
          label="Projects"
          title="Selected work, from ML models to production apps."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={`group relative rounded-2xl border border-dark-border bg-dark-muted/40 p-8 hover:border-${p.accent}/50 transition-all hover:-translate-y-1`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-2xl rounded-tr-2xl bg-${p.accent}/10 transition-all group-hover:bg-${p.accent}/20`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-mono text-xs uppercase tracking-widest text-${p.accent}`}>
                    {p.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-surface-light/40 group-hover:text-surface-light group-hover:rotate-12 transition-all" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl mb-4 text-surface-light">
                  {p.title}
                </h3>
                <p className="text-surface-light/70 leading-relaxed mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs rounded-full bg-surface-light/5 border border-surface-light/10 text-surface-light/70 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
