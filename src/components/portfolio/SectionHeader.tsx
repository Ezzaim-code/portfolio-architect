import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  number: string;
  label: string;
  title: string;
  dark?: boolean;
}

export const SectionHeader = ({ number, label, title, dark }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="mb-14 md:mb-20"
  >
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-mono uppercase tracking-widest mb-6",
        dark ? "text-surface-light/50" : "text-foreground/50"
      )}
    >
      <span className="text-accent">{number}</span>
      <span className="w-8 h-px bg-current opacity-30" />
      <span>{label}</span>
    </div>
    <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-balance max-w-4xl">
      {title}
    </h2>
  </motion.div>
);
