import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    role: "Full Stack & AI Automation Intern",
    company: "Offshore Valley",
    dates: "Feb 2025 — Jul 2025",
    bullets: [
      "Built a CRM-based marketing automation platform using PHP, JavaScript, Smarty, jQuery, and MySQL.",
      "Replaced HubSpot workflows with an internal solution managing email sequences and lead pipelines.",
      "Implemented AI-powered email generation with Mistral LLM and prompt engineering.",
      "Designed RAG-based AI agents to generate personalized content from user data.",
      "Shipped automated tracking for opens, clicks, and engagement across campaigns.",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "LLM", "RAG", "Smarty"],
  },
  {
    role: "Full Stack Engineer Intern",
    company: "Bytebuild",
    dates: "Jan 2024 — May 2024",
    bullets: [
      "Developed a traffic filtering web application based on IP, location, device type, and VPN detection.",
      "Designed UI/UX in Figma and implemented the frontend with React.",
    ],
    stack: ["React", "Node.js", "Figma"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="surface-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="03"
          label="Experience"
          title="Where I've shipped real systems."
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
              >
                {/* dot */}
                <span className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background md:-translate-x-1/2" />

                <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
                    {exp.dates}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-1">{exp.role}</h3>
                  <div className="text-accent font-medium mb-4">{exp.company}</div>
                </div>

                <div className={i % 2 === 0 ? "md:col-start-2 md:pl-12 mt-4 md:mt-0" : "md:col-start-1 md:row-start-1 md:pr-12 md:text-right mt-4 md:mt-0"}>
                  <ul className="space-y-2 text-foreground/75 leading-relaxed">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-left">
                        <span className="text-accent mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs rounded-full border border-border bg-card text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
