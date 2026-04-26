import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, Linkedin, Send, Loader2, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message can't be empty").max(1000, "Message is too long (max 1000 chars)"),
});

type ContactPayload = { name: string; email: string; message: string };

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      parsed.error.issues.forEach((issue) => {
        const k = issue.path[0] as keyof typeof form;
        if (k && !fieldErrors[k]) fieldErrors[k] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data as ContactPayload);
    setLoading(false);

    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }

    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="surface-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          number="07"
          label="Contact"
          title={
            <>
              Let's build something{" "}
              <em className="font-display italic text-accent not-italic">together</em>.
            </>
          }
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-lg text-foreground/75 leading-relaxed">
              I'm currently looking for software engineering roles — full-stack, AI engineering, or
              automation. Drop me a line and I'll respond within a day or two.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:aassimeouahiba@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="text-foreground group-hover:text-accent transition-colors">
                  aassimeouahiba@gmail.com
                </span>
              </a>

              <a href="tel:+212628548133" className="flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="text-foreground group-hover:text-accent transition-colors">
                  +212 628 548 133
                </span>
              </a>

              <a
                href="https://linkedin.com/in/ouahiba-aassime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </span>
                <span className="text-foreground group-hover:text-accent transition-colors">
                  linkedin.com/in/ouahiba-aassime
                </span>
              </a>

              <div className="flex items-center gap-4 text-foreground/60">
                <span className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                Agadir, Morocco · Open to remote
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-10 space-y-5"
          >
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-foreground/60 mb-2">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-destructive mt-2">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-foreground/60 mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors"
                placeholder="you@company.com"
              />
              {errors.email && <p className="text-xs text-destructive mt-2">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-foreground/60 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-foreground placeholder:text-foreground/30 transition-colors resize-none"
                placeholder="Tell me about the role or project…"
              />
              {errors.message && <p className="text-xs text-destructive mt-2">{errors.message}</p>}
              <p className="text-xs text-foreground/40 mt-2 text-right font-mono">
                {form.message.length}/1000
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-dark text-surface-light hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
