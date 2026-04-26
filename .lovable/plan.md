## Portfolio for Ouahiba Aassime — Software Engineer & AI Developer

A bold, **bicolor creative** portfolio in **English**, alternating dark and light sections for visual rhythm, with a confident accent color system. Designed to position Ouahiba as a Full Stack & AI engineer ready for international opportunities.

---

### Visual direction

- **Bicolor system**: deep midnight navy (`#0B1220`) paired with warm off-white (`#F7F4EE`), sections alternating top-to-bottom for a magazine-like rhythm.
- **Accent palette**: electric coral (`#FF5B49`) as primary accent + soft mint (`#7FE7C4`) as secondary highlight. Used sparingly on numbers, underlines, project tags, and CTAs.
- **Typography pair**: large editorial serif/display for headings (e.g. Fraunces or Instrument Serif) + clean geometric sans (Inter) for body. Oversized numerals as section markers (01, 02, 03…).
- **Motion**: subtle fade-in + slide-up on scroll, magnetic hover on CTAs, animated gradient blobs in the hero, smooth section transitions.
- **Layout DNA**: generous whitespace, asymmetric grids, large hero name treatment, ticker-style skill marquee.

---

### Sections (single-page scroll with sticky nav)

**1. Hero (dark)**
- Massive name "Ouahiba Aassime" as the visual anchor.
- Tagline: *Software Engineer · Full Stack & AI Developer*.
- Location chip (Agadir, Morocco · Open to remote).
- Two CTAs: **Download CV** (serves the uploaded PDF) and **Get in touch** (scrolls to contact).
- Animated background: subtle grid + drifting coral/mint blobs.
- Scroll indicator at bottom.

**2. About (light)**
- Short editorial paragraph expanding the professional summary.
- Side stat cards: *2025 ENSA Graduate · 2 internships · 4+ ML projects · 3 languages*.
- Monogram "OA" mark in coral as visual anchor (no photo).

**3. Skills (dark)**
- Grouped into clear categories: Languages, Web, AI & Automation, Data & ML, Databases, Tools, Methods.
- Each skill as a refined pill/chip; category headers with oversized numerals.
- Horizontal auto-scrolling marquee of core technologies near the top for kinetic feel.

**4. Experience (light)**
- Vertical timeline, two entries:
  - Offshore Valley — Full Stack & AI Automation Intern (Feb–Jul 2025)
  - Bytebuild — Full Stack Engineer Intern (Jan–May 2024)
- Each card: role, company, dates, bullet achievements, tech stack tags.

**5. Projects (dark)**
- Asymmetric grid of 4 project cards with hover lift:
  - Credit Score Model
  - Handwritten Character Recognition
  - Heart Disease Prediction
  - Pharmacy Management Application
- Each: title, short description, stack tags, accent corner detail.

**6. Education (light)**
- Three-step horizontal timeline: ENSA · Prépa Okba Ibn Nafea · Mohamed VI High School (Honors).

**7. Languages & Extracurricular (dark)**
- Languages: Arabic (Native), French (Fluent), English (Fluent) with proficiency bars.
- Activities: AppsClub member, GITEX Africa participant, Cloud/DB/DevOps conferences.

**8. Contact (light)**
- Functional contact form (name, email, message) with **zod validation** and toast feedback.
- Submissions stored in Lovable Cloud + sent via email to `aassimeouahiba@gmail.com`.
- Direct contact links: email, phone, LinkedIn.
- Footer with monogram, copyright, social links.

**Sticky top nav**: minimal, transparent over hero, solid on scroll, with smooth-scroll links and a persistent **Download CV** button.

---

### Technical details

- **Stack**: React + Vite + Tailwind + shadcn/ui (existing), `framer-motion` for scroll/hover animations, `lucide-react` icons.
- **Design system**: extend `index.css` with HSL tokens for the bicolor palette + accent colors; extend `tailwind.config.ts` with semantic tokens (no hardcoded colors in components). Add display font via Google Fonts in `index.html`.
- **Assets**: copy uploaded PDF to `public/Ouahiba-Aassime-CV.pdf` and link from the Download CV buttons.
- **Page composition**: `src/pages/Index.tsx` orchestrates section components in `src/components/portfolio/` (Hero, About, Skills, Experience, Projects, Education, Languages, Contact, Nav, Footer).
- **Contact form backend** (Lovable Cloud):
  - `contact_messages` table with RLS (anon insert allowed, no public read).
  - Edge function `send-contact-email` using Resend to forward submissions; trigger from the form after DB insert.
  - Client uses `zod` schema (name ≤100, email valid ≤255, message ≤1000) before submit.
- **Accessibility**: semantic landmarks, focus-visible states, color contrast checked on both bicolor surfaces, reduced-motion support.
- **Responsive**: mobile-first; hero name scales fluidly, marquee pauses on touch, timeline collapses to single column.

---

### Out of scope (for now)

- Multilingual switch, blog, CMS, analytics, profile photo upload (placeholders kept clean without a photo per your choice).
