# Trio Clássico — Landing Page Design

## Design Philosophy

**Chosen Approach: Editorial Romantic Elegance**

This landing page embodies a sophisticated, contemporary editorial aesthetic that celebrates live classical music for weddings. The design prioritizes emotional storytelling through generous whitespace, refined typography, and authentic wedding photography. It rejects generic wedding-template clichés (excessive gold, floral ornaments, bright pinks) in favor of a premium, timeless approach.

---

## Core Design Principles

1. **Emotional Authenticity** — Real moments, real musicians, real couples. Photography drives the narrative; design supports it.
2. **Restrained Elegance** — Subtle borders, delicate dividers, controlled color palette. Nothing loud or overwrought.
3. **Editorial Rhythm** — Alternating light and dark sections create visual breathing room. Typography hierarchy guides the eye.
4. **Personalization at Scale** — Every CTA invites customization; the service feels bespoke, not templated.

---

## Color Philosophy

The palette is grounded in nature and warmth, avoiding the typical wedding-industry clichés.

- **Primary / Olive (#5F654A):** Earthy, sophisticated, used for CTAs and interactive elements. Hover state (#4F553D) adds depth.
- **Dark Green (#0D120D):** Replaces pure black for sections and overlays; feels organic and refined.
- **Ivory (#F7F4EE):** Warm, creamy background. The default canvas—never stark white.
- **Warm White (#FFFCF7):** Cards and surface layers. Subtle contrast against ivory.
- **Graphite (#272823):** High-contrast text for headings and body copy. Readable without coldness.
- **Muted Text (#6F7168):** Secondary text, captions, metadata. Recedes gracefully.
- **Accent Gold (#A69772):** Delicate, used sparingly for details and dividers. Never in large areas.
- **Border (#D9D5CB):** Subtle 1px dividers and edges. Barely visible but structurally important.

**Emotional Intent:** Warm, trustworthy, premium, timeless. The palette feels like a luxury wedding invitation—refined, not flashy.

---

## Layout Paradigm

**Asymmetric Editorial Flow**

- Hero section: Full-width cinematic image with dark overlay and left-aligned text.
- About section: Two-column layout (text left, icons right) with generous gutters.
- Video section: Horizontal card carousel over dark background.
- Formations: Four-card grid with overlapping circular badges.
- Ceremony moments: Horizontal timeline with connecting lines (desktop) or stacked sequence (mobile).
- Gallery: Horizontal image carousel with natural, candid photography.
- Testimonials: Three-card carousel with large quotation marks and subtle pagination.
- Process: Four-step timeline with icons and connecting lines.
- Final CTA: Dark cinematic section with instrument imagery and contact shortcuts.
- Footer: Warm light background with organized navigation groups.

**Key Feature:** Sections alternate between light (ivory/warm white) and dark (#0D120D) backgrounds, creating visual rhythm and preventing monotony.

---

## Signature Elements

1. **Delicate Dividers:** 1px borders and subtle SVG wave dividers between sections. Never harsh; always organic.
2. **Circular Icon Badges:** Overlapping the boundary between image and content—a signature visual motif that appears on formation cards and process steps.
3. **Generous Whitespace:** Margins and padding follow an 8px scale (8, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160px). Never cramped.

---

## Interaction Philosophy

- **Smooth Transitions:** All hover states, clicks, and scroll interactions use 200–300ms ease-out timing.
- **Tactile Feedback:** Buttons scale slightly on press (0.97 scale) to confirm interaction.
- **Contextual CTAs:** "Consultar disponibilidade" appears at logical moments (hero, formations, process) without becoming repetitive.
- **Modal Forms:** Contact form opens as a modal overlay, keeping the user in context.
- **Carousel Navigation:** Video gallery, testimonials, and real-wedding gallery use smooth carousel controls with pagination dots.

---

## Animation Guidelines

- **Entrance Animations:** Sections fade in and slide up slightly as they come into view (150–250ms).
- **Hover Effects:** Cards lift slightly with shadow increase on hover. Text links underline smoothly.
- **Button Interactions:** Primary buttons scale down on press, then return to full size. No jarring snaps.
- **Scroll Cues:** Header transitions from transparent (over hero) to semi-opaque white with backdrop blur as the user scrolls.
- **Respect Preferences:** All animations respect `prefers-reduced-motion` media query.

---

## Typography System

**Font Pairings:**
- **Display / Headings:** Cormorant Garamond (400, 500 weights) — elegant, editorial, romantic.
- **Body / Navigation / Buttons:** DM Sans (400, 500, 600 weights) — modern, readable, professional.
- **Fallbacks:** Georgia for headings; Arial/sans-serif for body.

**Hierarchy:**
- **H1 (Display):** 72px / 68px line height / -2% tracking (desktop). Cormorant Garamond 400.
- **H2:** 48px / 52px line height. Cormorant Garamond 400.
- **H3:** 28px / 34px line height. Cormorant Garamond 500.
- **Body Large:** 18px / 30px line height. DM Sans 400.
- **Body:** 16px / 26px line height. DM Sans 400.
- **Body Small:** 14px / 22px line height. DM Sans 400.
- **Label:** 12px / 16px line height / 14% tracking / uppercase. DM Sans 500.
- **Button:** 14px / 20px line height. DM Sans 500.

**Responsive Adjustments:**
- Tablet: H1 reduces to ~56px.
- Mobile: H1 reduces to ~44px with intentional line breaks. Body text remains 16px minimum for legibility.

---

## Brand Essence

**One-Line Positioning:**
*Premium live classical music for wedding ceremonies that transforms moments into lifelong memories.*

**Personality Adjectives:**
- Sophisticated
- Authentic
- Personalized

**Brand Voice:**
Headlines and CTAs sound warm, inviting, and emotionally resonant—never generic or corporate. Microcopy is conversational and human.

**Example Lines:**
- "A trilha sonora do seu melhor momento." (The soundtrack of your best moment.)
- "Vamos emocionar juntos?" (Let's move hearts together?)

**Avoid:**
- "Welcome to our website"
- "Get started today"
- "Click here"
- Generic wedding-industry jargon

---

## Wordmark & Logo

**Concept:** A refined logotype combining the text "Trio Clássico" with a subtle musical motif (three interlocking lines or a stylized trio of instruments). The mark should feel premium and timeless, not playful or trendy.

**Execution:**
- Use Cormorant Garamond for the text portion.
- Add a minimal line-icon element (three vertical lines or a treble clef) to the left or above the text.
- Color: Dark green (#0D120D) on light backgrounds, white on dark backgrounds.
- Maintain clear space and never distort the proportions.

---

## Signature Brand Color

**Olive Green (#5F654A)**

This earthy, sophisticated green is unmistakably Trio Clássico. It appears in:
- Primary CTA buttons
- Active navigation states
- Icon highlights
- Accent details

The color feels premium, natural, and distinctly different from typical wedding-industry purples and golds.

---

## Responsive Behavior

**Desktop (1440px):**
- Full 1240px content width with 32px outer margins.
- 12-column grid with 24px gutters.
- Hero height: 760–820px.
- Four-column card layouts where appropriate.
- Horizontal carousels and timelines.

**Tablet (768px):**
- 8-column grid with 20px gutters, 24px margins.
- Hero height: ~600px.
- Four-column areas convert to two columns.
- H1 reduces to ~56px.
- Carousels remain horizontal but may show 2–3 items per view.

**Mobile (390px):**
- 4-column grid with 16px gutters, 20px margins.
- Hero height: ~500px.
- H1 reduces to ~44px with intentional line breaks.
- All cards stack into one column.
- Carousels become full-width horizontal scrolls.
- Buttons minimum 48px height; touch targets 44x44px.
- Sticky bottom CTA allowed if it doesn't cover content.

---

## Image Direction

**Photography Style:**
- Outdoor wedding ceremonies with warm natural light.
- Real classical musicians performing (violins, cellos, pianos).
- Diverse couples in authentic emotional moments.
- Instruments visible and beautifully lit.
- Candid, unposed moments—no artificial stock-photo poses.
- Consistent warm color grading (golden hour, soft shadows).
- Never mix unrelated photographic styles within the same section.

**Image Treatment:**
- Large, generous image blocks (never tiny thumbnails).
- Subtle overlays (dark green or semi-transparent) for text readability.
- Circular badges overlapping image/content boundaries (formations, process steps).
- Consistent aspect ratios within sections.

---

## Accessibility Standards

- Minimum WCAG AA contrast for all body text.
- No low-contrast text directly over photos (use overlays).
- Visible keyboard focus states on all interactive elements.
- Minimum 16px body text on mobile.
- Meaning never communicated by color alone.
- Alt text annotations on all important images.
- Semantic HTML structure (nav, main, section, article, footer).

---

## Style Decisions

- **Corner Radii:** 0–8px depending on component. Subtle, never overly rounded.
- **Shadows:** Soft, delicate shadows (0 4px 12px rgba(0,0,0,0.08)). Never harsh or heavy.
- **Borders:** 1px solid #D9D5CB. Barely visible but structurally important.
- **Spacing Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160px. Strictly adhered to.
- **Motion Timing:** 200–300ms ease-out for most interactions. 150–250ms for entrance animations.
- **Form Fields:** Subtle borders, soft focus states, clear labels. No heavy shadows or gradients.
- **Buttons:** Olive green primary, white text, subtle hover/active states. Minimum 48px height on mobile.

---

## Final Notes

This design celebrates the beauty of live classical music and the emotional significance of wedding ceremonies. Every element—from typography to color to spacing—serves the narrative of creating unforgettable memories through music. The aesthetic is premium, timeless, and distinctly Trio Clássico.
