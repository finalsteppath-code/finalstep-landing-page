# FINAL STEP — Landing Page: Agent Guide (v2.1)

> **Read this file first, before writing any code.**
> Source documents live in `assets/docx/` (see §0 for all project folders):
> - `_Brand_identity_.docx` → brand, philosophy, services, contact
> - `PFE_Supervision_Agency_Action.docx` → plan, launch date, status of tasks
> - `Landing_Page_infos_.docx` → **landing page brief: design system, structure, copy, mockups (most specific source for this task)**
>
> Priority when sources differ: `Landing_Page_infos_.docx` > this file > other `assets/docx/` docs.
> If something is missing everywhere, **ask the user. Never invent it.**

---

## 0. Project folders (where everything is)

Project root (user's machine): `C:\Users\DELL\Desktop\Laststep\finalstep-landing-page\`

In code, **always use relative paths** (e.g. `assets/logo/...`). Never write the absolute Windows path in any file.

| Folder | What is inside | How the agent must use it |
|---|---|---|
| `assets/docx/` | The Word documents (brand identity, agency plan, landing page brief + mockups) | **Source of truth** for copy, brand facts, design system and structure. Read-only: never edit, rename or move these files. |
| `assets/img/` | Real photos of **our own formations / trainings** | Use for the **Projects / "Our work" gallery** (§6E). These are the only real photos available. Keep originals untouched; create optimized copies (WebP/AVIF, resized) for the site. |
| `assets/inspiration/` | **Posters** (past events/formations) | **Visual inspiration only** (layout, hierarchy, mood). Do not paste them on the page as content and do not copy their text or third-party logos. Only use one in the gallery if the user explicitly says so. |
| `assets/logo/` | **Logo files and the watermark** | Use these exact files for the header, footer, favicon and social/OG image. Never redraw, recolor, stretch or screenshot a logo. Details in §5. |

**First task for the agent:** list the contents of each folder (file names, types, sizes) and report back before building. The guide was written without seeing the individual file names, so don't assume them.

---

## 1. Project in one paragraph

**Final Step (آخر خطوة)** is an online PFE (final-year graduation project) supervision program for IT students, based in **Gafsa, Tunisia**. Students do the work; Final Step guides them from the first idea to the defense (soutenance). Planned launch: **January 2027**.

- **Landing page goal:** explain the main concepts of the project and push visitors to **pre-register via the Google Form** (CTA: «احكيلنا على مشروعك»).
- **Audience:** Tunisian university students preparing or developing their PFE.
- **Differentiator:** "You build it. We guide you." Students must understand, explain and defend their own project.

---

## 2. Brand facts (do not alter)

| Item | Value |
|---|---|
| Name | Final Step (آخر خطوة) |
| Slogan 1 | "You build it. We guide you" |
| Slogan 2 | "Your PFE. Your Project. Our Guidance" |
| Email | finalstep.path@gmail.com |
| Phone / WhatsApp | +216 48 106 919 |
| Location | Gafsa, Tunisia |
| Launch | January 2027 |
| Price | **750 TND (DT)** — payment facilities possible (details not defined yet) |
| Schedule | Still in progress — not final |

### Social links (all pages exist, status "Done" in `assets/docx/`)

| Platform | Value | Status |
|---|---|---|
| Instagram | @final_step_tn → `https://www.instagram.com/final_step_tn/` | ✅ |
| WhatsApp | +216 48 106 919 → `https://wa.me/21648106919` | ✅ |
| YouTube | `https://www.youtube.com/@FinalStep-s2e` | ✅ |
| GitHub | `https://github.com/finalsteppath-code` | ✅ |
| Facebook | "Final Step Facebook Page" | ⚠️ **URL missing** — ask user |
| LinkedIn | "Final Step LinkedIn Page" | ⚠️ **URL missing** — ask user |

Put every URL in one config file (`config.js` / `site.config.json`). For missing URLs use `null` and **hide the icon** until provided (no dead `#` links). All external links: `target="_blank" rel="noopener noreferrer"` + accessible label.

### Registration form
`https://forms.gle/Qhaknq3dhDyMXV2t5`
⚠️ The landing doc says this form link is **still in progress**, so it may change. Define it **once** as `REGISTRATION_URL` in the config and reuse it for every CTA.

### Philosophy (copy source)
Your project should be yours. You do the work, we guide you, so you can understand it, explain it, and present it with confidence. Support continues after graduation (free training).

---

## 3. Language & tone (important change from v1)

- **Language:** **Tunisian Darja written in Arabic script, mixed naturally with French/English technical terms** (conception, développement, documentation, soutenance, PFE, React.js…). Not Modern Standard Arabic, not a translation.
- **Direction:** the page is **RTL** (`<html lang="ar" dir="rtl">`). Latin technical terms stay LTR inline (wrap with `<bdi>` or `dir="auto"` where needed so punctuation doesn't jump).
- **Tone:** friendly, supportive, professional, technically credible.
- **Content rules:** short and scannable. **Avoid unsupported claims** (no guarantees, no invented numbers).
- Use the Darja strings from `assets/docx/` **verbatim**. Do not "improve" or re-translate them. For any new Darja copy, mark it `// NEEDS REVIEW by native speaker` in the content file and tell the user.
- No separate FR/EN versions are requested. Build copy into one content file anyway (easy to add languages later).

---

## 4. Design system (from `Landing_Page_infos_.docx`)

### 4.1 Colors

Official suggestion from the brief:

| Token | HEX | Usage |
|---|---|---|
| `--fs-blue` | `#2563EB` | Primary: CTA buttons, links, icons, highlights, logo icon |
| `--fs-navy` | `#0F172A` | Dark sections (trust strip, How It Works, final CTA, footer), headings |
| `--fs-blue-50` | `#EFF6FF` | Light section backgrounds |
| `--fs-white` | `#FFFFFF` | Cards, page background |

Additional shades **observed in the mockups** (use them to match the design):

| Token | HEX | Usage |
|---|---|---|
| `--fs-navy-card` | `#18243D` | Cards on navy sections |
| `--fs-cyan` | `#22D3EE` | Small accent on navy sections only (step numbers, thin lines, icons) |
| `--fs-blue-100` | `#DBEAFE` | Light blue borders/chips |
| `--fs-slate` | `#334155` | Body text on light backgrounds |
| `--fs-muted` | `#64748B` | Secondary text (derived, check contrast) |

```css
:root {
  --fs-blue: #2563EB;
  --fs-navy: #0F172A;
  --fs-blue-50: #EFF6FF;
  --fs-white: #FFFFFF;

  --fs-navy-card: #18243D;
  --fs-cyan: #22D3EE;
  --fs-blue-100: #DBEAFE;
  --fs-slate: #334155;
  --fs-muted: #64748B;
}
```

### 4.2 ⚠️ Conflict with the brand identity doc (ask the user)
`_Brand_identity_.docx` shows a logo in navy `#14296B` + cyan `#00B8D9`, but the landing brief and its mockups use `#2563EB` / `#0F172A`, and the navbar mockup shows a **blue stair-step icon logo**, not the navy/Arabic-wordmark logo. The brand doc itself says the palette is "to be defined".
**Decision for now: follow the landing brief (§4.1).** Do not mix `#14296B` / `#00B8D9` into the page. Ask the user to confirm which logo is final (see §5).

### 4.3 Typography
- **Inter** → French/English/Latin text
- **IBM Plex Sans Arabic** → Darja (Arabic script)
- Fallbacks: `system-ui, sans-serif`. `display=swap`, load only used weights.

### 4.4 Style
Clean tech/SaaS look, **rounded cards**, **subtle shadows**, **generous whitespace**. Alternating light (`#EFF6FF`/white) and dark (`#0F172A`) sections.
Signature details seen in the mockups:
- Small **section eyebrows** in Latin caps, e.g. `01 / THE PFE PACK`, `02 / HOW IT WORKS`, `03 / BEYOND THE PFE`, `04 / GOOD QUESTIONS`, `05 / YOUR FINAL STEP STARTS HERE`
- Light-blue icon tiles on cards, checklist items with small check icons
- Hero visual: laptop with a code editor + a phone mockup with a project dashboard (blue/navy UI), small floating chip "AI, when it fits." and caption "Your idea. Your code. Your next step."
- **Avoid:** purple gradients, emojis as icons, stock photos of smiling students, fake stats.

---

## 5. Logo & watermark (folder: `assets/logo/`)

- The logo and the **watermark** are in `assets/logo/`. Inspect the folder first and report which files exist (full logo, icon-only, light/dark versions, watermark, formats).
- Header: **Final Step logo + name, with «آخر خطوة»**. The landing brief says: *"Use the selected logos in the social media pages."* The navbar mockup shows a rounded blue square with a stair/step icon + "Final Step" (Inter) + small Arabic "آخر خطوة" under it.
- Use SVG when available (PNG as fallback). Icon-only version → favicon + Open Graph image.
- Never redraw, recolor, stretch, rotate or add effects to the logo. Never crop it from a mockup/screenshot.
- ⚠️ `_Brand_identity_.docx` shows a navy/cyan logo, while the landing mockup shows a blue stair-icon logo. If `assets/logo/` contains both, **ask the user which one is final** before using any of them.
- **Watermark:** it is meant for the user's own photos. Default: do **not** burn it into the original files. If the user wants it on the gallery photos, apply it as a subtle overlay (corner, ~30–40% opacity, never covering faces) or in the optimized copies only. Never use the watermark as the main logo.

---

## 6. Page structure and content

### A. Header / Navigation (sticky)
- Logo + name.
- Links: **Home, Services, How It Works, Career Support, FAQ, Contact, Testimonial** (the brief lists "Testimonial" at the end; place it where the Projects section sits).
- Main button: «احكيلنا على مشروعك» → `REGISTRATION_URL`.
- Mobile: **hamburger menu** (accessible: button, `aria-expanded`, focus trap, Esc to close).

### B. Hero
- Badge: `PFE PACK · MADE FOR YOUR NEXT STEP`
- Headline: «عندك PFE ومش عارف منين تبدأ؟» (the words «منين تبدأ؟» highlighted in `--fs-blue`)
- Supporting line: «من الفكرة للـ soutenance، Final Step معاك خطوة بخطوة.»
- Short description: «نعاونـوك في conception، développement، documentation، والتحضير للمناقشة.»
- Buttons: primary «احكيلنا على مشروعك», secondary «اكتشف الخدمات» (scroll to Services)
- Visual: laptop/code editor + mobile device illustration (build in HTML/CSS/SVG, no external image dependency)
- Dark **trust strip** under the hero with 3 short items (mockup): «من الفكرة للمناقشة» · «مشروعك، خدمتك، قرارك» · «نفهم كل خطوة». Keep these claim-free.

### C. Services — six cards (eyebrow `01 / THE PFE PACK`)
Mockup title: «كلّ اللي يلزمك، في طريق واحد.» (verify wording against the mockup in `assets/docx/Landing_Page_infos_.docx`). Card titles stay in English as in the brief.

| Service | Content to show |
|---|---|
| **Project Analysis & Design** | PFE subject analysis, requirements, application architecture, database design, UI/UX, wireframes and mockups. |
| **Web & Mobile Development** | React.js, Node.js/Express.js, PostgreSQL, and React Native when required; AI integration when relevant. |
| **Implementation & Technical Support** | Project setup, starter templates, coding guidance, testing, debugging, and support during development. |
| **Report & Documentation** | Report structure and writing guidance, technical diagrams, documentation, review, and feedback. |
| **Final Presentation & Defense** | Presentation slides, application demo preparation, oral defense practice, and guidance. |
| **Free Career Support** | Free training sessions for LinkedIn profile, CV, portfolio, and Indeed/job search. (Mark with a small "FREE BONUS" tag.) |

Each card: icon tile, title, one-line Darja description, 3 short checklist items (see mockup). A note bar below (mockup): each project gets its own scope and technologies, defined before starting.

### D. How It Works (dark section, eyebrow `02 / HOW IT WORKS`)
Mockup title: «أربع خطوات. وإنت ديما في الصورة.» Four numbered cards (01–04):
1. Discuss the student's PFE idea, current progress, and needs.
2. Define requirements and a suitable project roadmap.
3. Develop the project with technical guidance, testing, and debugging support.
4. Prepare the report, presentation, demo, and defense.

### E. Projects / Testimonial section (NEW — improvise from the design system)
The brief says this section is missing from the doc and the content will come later (*"najmou nzidou section feha les projects eli khdemnahom… tawn nab3ethlk des projet"*).
- Build a **"Our work" / Projects gallery** that fits the design system: responsive grid of rounded cards (image + short caption), plus a lightbox if simple.
- Use the photos in **`assets/img/`** (our own formations/trainings). The 6 sample photos that appeared in the brief look like past training sessions and workshops in Gafsa (e.g. Arduino & IoT formation, a Digital Marketing workshop, classroom sessions). Present all of them honestly as **"formations & ateliers"**, not as PFE projects or as student testimonials.
- The posters in `assets/inspiration/` are **inspiration only** (see §0): use them to inspire the card style, not as gallery content, unless the user says otherwise.
- Keep the content in the content file as an array (`projects: [{image, title, caption}]`) so the user can add real PFE projects later without touching components.
- **No fake testimonials, quotes, names, ratings or counts.** If no testimonials exist, show only the projects/work gallery and leave a commented slot for testimonials.
- ⚠️ Some images show identifiable people and third-party logos (e.g. partner/institution logos on posters). **Ask the user to confirm they have permission to publish them**, and don't imply any partnership or endorsement beyond what the poster itself says.
- Optimize: export to WebP/AVIF, set `width/height`, `loading="lazy"`, meaningful Darja `alt` text.

### F. Extra benefits / Career Support (eyebrow `03 / BEYOND THE PFE`)
Mockup title: «الـ PFE يوفى. طموحك لا.»
- **Career Support — GRATUIT:** LinkedIn, CV, portfolio, and Indeed/job-search training (mockup shows a card "YOUR NEXT CHAPTER · FREE SUPPORT" listing these 4).
- **Attestation de stage:** **mention clearly that Final Step provides an attestation de stage** as part of the offer (give it its own visible line/card next to Career Support, with a document/badge icon). Keep the brief's caveat in the wording: it is delivered **subject to the applicable internship arrangements**. Do not use words like "automatic", "guaranteed" or "100%", and don't describe conditions or steps that aren't in `assets/docx/`. Suggested Darja (`NEEDS REVIEW`): «تحصل على attestation de stage، حسب ترتيبات التربص المعمول بيها.»

### G. FAQ (eyebrow `04 / GOOD QUESTIONS`)
Mockup title: «مازال عندك سؤال؟». **Accordion**, short clear answers **in Tunisian Darja**, proper ARIA (`button[aria-expanded]`, `aria-controls`, region). Questions (from the brief):
1. Who can benefit from the PFE Pack?
2. Can I contact you if I only have an idea?
3. Which technologies do you use?
4. Is career support free?
5. Is there an attestation de stage? (the brief's wording: "Is the internship certificate guaranteed?") → **Yes, Final Step provides an attestation de stage**, subject to the applicable internship arrangements. Keep the answer short; no unconditional guarantee wording.
6. How do I get started? → fill the pre-registration form / contact us.

Write the Darja Q&A yourself (mark `NEEDS REVIEW`). Answers must be consistent with §2 and §7. Cost answer: the price is **750 DT** with payment facilities possible, details discussed on contact. Schedule answer: announced soon.

### H. Contact (eyebrow `05 / YOUR FINAL STEP STARTS HERE`)
Simple and clear. A **hub CTA** redirecting to the Google Form for pre-registration. Mockup headline: «الفكرة عندك. الخطوة الجاية معانا.» with 3 reassurance check items and a dark card. Also show WhatsApp, email and location as secondary contact options. Add one small **price line** near the CTA: «750 DT · تسهيلات في الخلاص ممكنة» (Darja wording `NEEDS REVIEW`), with a short note that details are discussed on contact. Price comes from the config (§7).

### I. Footer
Final Step name/logo, short description, section links, social links (only those with a URL), copyright `© Final Step 2026`.

---

## 7. Price, schedule and what NOT to invent

### Price (confirmed by the user)
- **Price: 750 TND (shown as "750 DT")** — the currency is assumed to be the Tunisian dinar; the user should confirm.
- **Payment facilities are possible** ("possibilité de faciliter"). State only that, in simple words (e.g. «تسهيلات في الخلاص ممكنة»). **Do not invent** the terms: no number of installments, no dates, no discounts, no deposit amounts. Say the details are discussed when the student contacts us.
- Show the price in **one place only**, small and clear (see §6H Contact and the FAQ answer about cost). Do **not** build a big pricing table, "most popular" badges, or fake promotions.
- Keep the amount in the config file (`PRICE = { amount: 750, currency: "DT" }`) so it can be changed in one place.

### Schedule
- ❌ Still **in progress**. Do not publish dates other than "Launch: January 2027". Say the schedule is announced soon / shared after contact.

### Never invent
- ❌ Team member names/photos (none provided).
- ❌ Testimonials, student names, quotes, ratings.
- ✅ **Attestation de stage:** it exists and **must be mentioned** (see §6F). Only avoid presenting it as automatic/unconditional, and don't invent its conditions.
- ❌ The Google Drive "info sessions" presentation link (internal).
- General rule from the brief: **avoid unsupported claims**. Only state what is written in `assets/docx/`.

---

## 8. Technical requirements

- **Mobile-first** (360 / 768 / 1280px). Most users are on phones.
- **RTL done properly:** logical CSS properties (`margin-inline-start`, `padding-inline`, `inset-inline-end`, `text-align: start`), mirrored icons/arrows where directional, correct hamburger side, test with real Darja text, no `left/right` hacks.
- **Performance:** Lighthouse ≥ 90, optimized images, lazy loading, minimal JS, fonts subsetted/limited weights.
- **Accessibility:** semantic HTML, one `<h1>`, visible focus, contrast ≥ 4.5:1 (check `#22D3EE` and `#64748B` on their backgrounds; white on `#2563EB` is OK for large/bold text, verify for small text), keyboard navigation, `prefers-reduced-motion`.
- **SEO:** `<title>`, meta description (Darja), Open Graph/Twitter, `lang="ar"`, favicon, JSON-LD `EducationalOrganization` (Gafsa, Tunisia).
- **Analytics:** leave a marked slot; track CTA clicks.
- **Stack:** not specified — ask. Defaults: plain HTML/CSS/JS, or React + Vite + Tailwind, deployable on a free static host. (React/Node/PostgreSQL in the Services cards describe what *students* use, not the landing stack.)
- **Folder structure** (keep `assets/` as is; add the code beside it):
  ```
  finalstep-landing-page/
  ├─ assets/
  │  ├─ docx/          Word docs (source of truth, read-only)
  │  ├─ img/           our formation photos (originals, untouched)
  │  ├─ inspiration/   posters (visual inspiration only)
  │  └─ logo/          logo + watermark
  ├─ public/images/    optimized copies used by the site (WebP/AVIF) — generated from assets/img
  ├─ public/logo/      web-ready copies of the logo files used by the site
  ├─ content/          all copy + config (REGISTRATION_URL, PRICE, socials)
  ├─ src/              page code (or root files for plain HTML)
  └─ FINALSTEP_AGENT_GUIDE.md
  ```
  Originals in `assets/` are never modified or deleted. The site only references the optimized copies.

---

## 9. Working rules for the AI agent

1. Read this file and all docs in `assets/docx/` (including the mockup screenshots inside `Landing_Page_infos_.docx`) before starting. Then inspect `assets/img/`, `assets/inspiration/` and `assets/logo/` (see §0).
2. Ask before assuming: logo files, Facebook/LinkedIn URLs, final form link, stack, image permissions.
3. Never fabricate facts, numbers, testimonials or quotes.
4. All copy in one content file; no lorem ipsum, no hardcoded hex values (use the variables in §4.1).
5. Use the Darja strings from `assets/docx/` verbatim; flag any new Darja as `NEEDS REVIEW`.
6. Work in small steps and show the result after each section.
7. Run the checklist in §12 before finishing.
8. **Assets:** never modify, move or delete anything inside `assets/`. Produce optimized copies elsewhere (§8). Use relative paths only (§0).
9. If a file you expect is missing from `assets/`, say so and ask. Don't substitute a placeholder silently or pull images from the web.

---

## 10. Ready-to-use prompts

### Prompt 0 — Onboarding
```
Read FINALSTEP_AGENT_GUIDE.md and every document in assets/docx, including the mockup images
inside Landing_Page_infos_.docx. Then list the contents of assets/img, assets/inspiration and
assets/logo (file names, types, sizes) and tell me what you found. Summarize in 10 lines: what Final Step is, the audience,
the language/tone (Tunisian Darja, RTL), the design tokens, and the page sections.
List what you still need from me (which logo is final, Facebook/LinkedIn URLs, final form link,
stack, image permissions, currency confirmation). Do not write code yet.
```

### Prompt 1 — Foundation + RTL
```
Set up the project per section 8 of the guide. Create the structure, global CSS with the
variables from 4.1, Inter + IBM Plex Sans Arabic, html lang="ar" dir="rtl", and a content/config
file holding REGISTRATION_URL and the social links (null when missing). Use logical CSS
properties only. Build the sticky header (logo placeholder, nav, CTA, accessible hamburger menu)
and the footer shell. Explain the stack you chose.
```

### Prompt 2 — Hero
```
Build the Hero (section 6B): badge, headline with the highlighted words, supporting line,
description, two buttons, and the laptop + phone illustration built in HTML/CSS/SVG,
plus the dark trust strip. Match the mockup in the brief. Verbatim Darja from the guide.
Check it at 360 / 768 / 1280px in RTL.
```

### Prompt 3 — Services
```
Build the Services section (6C): eyebrow, title, six cards with icon tile, Darja one-liner and
3 checklist items each, "FREE BONUS" tag on Career Support, and the note bar below.
Use the exact service content from the guide. One icon set (Lucide).
```

### Prompt 4 — How It Works
```
Build the dark How It Works section (6D): four numbered cards in --fs-navy-card on --fs-navy,
cyan accent only for numbers/lines. RTL order must read 01 → 04 from right to left.
```

### Prompt 5 — Projects / Testimonial
```
Build the Projects section (6E) from the design system: responsive card grid with the 6 provided
photos, optimized to WebP, lazy-loaded, with Darja alt texts. Present them as formations & ateliers,
not as PFE projects or testimonials. Drive it from a projects array in the content file so I can
add PFE projects later. Add a commented slot for real testimonials. No fake quotes or numbers.
```

### Prompt 6 — Career Support + FAQ + Contact + Footer
```
Build section 6F (Career Support, plus a clear mention of the attestation de stage, subject to applicable internship arrangements), 6G (accessible FAQ
accordion with the 6 questions answered in Tunisian Darja, marked NEEDS REVIEW), 6H (Contact hub
CTA to REGISTRATION_URL + small price line "750 DT · payment facilities possible" from the config + WhatsApp/email/location) and finish the footer (6I) with only the
social links that have a URL.
```

### Prompt 7 — Polish
```
Review the whole page: subtle scroll animations (respect prefers-reduced-motion), RTL bugs,
responsive issues, color contrast (check cyan and muted text), keyboard navigation and focus states.
List what you changed.
```

### Prompt 8 — SEO + performance
```
Add title, Darja meta description, Open Graph/Twitter tags, favicon, JSON-LD
(EducationalOrganization, Gafsa, Tunisia), and an analytics slot with CTA click tracking.
Optimize images and fonts and report Lighthouse results.
```

### Prompt 9 — Final audit
```
Run the checklist in section 12 against the current page. Report each item pass/fail with a fix.
```

---

## 11. Open questions for the user (agent must ask, not guess)

1. **Logo:** the files are in `assets/logo/`. Which one is final: the blue stair-icon logo (navbar mockup / social pages) or the navy/cyan Arabic wordmark (brand doc)? Is there an SVG? Should the **watermark** be applied on the gallery photos, or kept out?
2. **Palette:** confirm the landing blue (`#2563EB` / `#0F172A`) replaces the brand doc's navy/cyan.
3. **Facebook and LinkedIn URLs** (only the labels were provided).
4. **Registration form:** is `https://forms.gle/Qhaknq3dhDyMXV2t5` final? (brief says "still in progress")
5. **Gallery photos (`assets/img/`):** permission to publish people's faces and any partner/institution logos visible in them? Any real PFE projects or testimonials to add now? Should any poster from `assets/inspiration/` be shown on the page, or inspiration only?
6. **Stack / hosting** preference.
7. **Price:** confirm the currency is **TND (DT)** and the exact wording of the payment facilities. **Schedule:** keep as "announced soon" until it is final?

---

## 12. Final checklist

- [ ] Colors come only from the CSS variables in §4.1
- [ ] Page is RTL, Darja copy verbatim from `assets/docx/`, new Darja flagged `NEEDS REVIEW`
- [ ] Header, Hero, Services (6), How It Works (4), Projects, Career Support, FAQ (6), Contact, Footer all present
- [ ] Every CTA uses `REGISTRATION_URL`; external links use `rel="noopener noreferrer"`
- [ ] Only socials with a real URL are shown
- [ ] Price shown as 750 DT with "payment facilities possible" only (no invented installment terms), from the config
- [ ] No schedule dates other than "January 2027"; no testimonial, team member or unsupported claim
- [ ] Attestation de stage is clearly mentioned (Extra benefits + FAQ), worded "subject to the applicable internship arrangements", never "automatic/guaranteed"
- [ ] Logo is a real asset (or clearly a placeholder), never a cropped screenshot
- [ ] Mobile-first, tested at 360 / 768 / 1280px, hamburger works
- [ ] Contrast ≥ 4.5:1, one `<h1>`, alt texts, visible focus, reduced-motion respected
- [ ] Lighthouse performance and accessibility ≥ 90
- [ ] SEO tags, favicon, JSON-LD in place
