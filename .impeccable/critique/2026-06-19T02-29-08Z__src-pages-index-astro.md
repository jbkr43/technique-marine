---
target: home page
total_score: 21
p0_count: 0
p1_count: 2
p2_count: 3
timestamp: 2026-06-19T02-29-08Z
slug: src-pages-index-astro
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Form submit has no loading state; no inline validation feedback |
| 2 | Match System / Real World | 3 | Domain language spot-on for boat owners; phone prominent |
| 3 | User Control and Freedom | 3 | Simple single-page nav; hamburger lacks close affordance |
| 4 | Consistency and Standards | 3 | Very consistent patterns; eyebrow on every section is the exception |
| 5 | Error Prevention | 2 | Basic `required` attrs; no format validation on email/phone |
| 6 | Recognition Rather Than Recall | 3 | Everything on one page; clear nav labels |
| 7 | Flexibility and Efficiency | 1 | No shortcuts; fine for a marketing site but minimal |
| 8 | Aesthetic and Minimalist Design | 2 | Repetitive section structure; anchor emoji is noise |
| 9 | Error Recovery | 1 | Formspree handles errors externally; no inline error display |
| 10 | Help and Documentation | 1 | Phone + email always visible; no inline help |
| **Total** | | **21/40** | **Acceptable — significant improvements available** |

#### Anti-Patterns Verdict

**Does this look AI-generated? Partially.** The site has real craft in its color palette, font choices, and typographic voice. But several patterns are tells:

**LLM assessment**: The site suffers most from the **uniform eyebrow pattern** — every single section starts with a small uppercase tracked label ("Cape Fear, NC", "What we do", "About the tech", "What customers say", "Got questions?", "Get in touch"). The SKILL.md's absolute bans call this out by name, and your own DESIGN.md's "Uppercase Discipline" rule says to use them sparingly. Currently, the eyebrow is section grammar, not a brand voice element.

The **services card grid** is the iconic+heading+body card pattern repeated identically — another AI tell. The ⚓ anchor emoji as the icon contradicts the brand's explicit anti-kitsch stance. The **side-stripe borders** on contact and testimonial cards are the most widely recognized AI tell of 2026, even though your DESIGN.md carves out exceptions for them.

**Deterministic scan (detect.mjs)**: 4 findings
- `About.astro:121` — border-radius 2px (outside DESIGN.md scale) — advisory
- `Contact.astro:113` — side-tab accent border (gold left, 4px) — warning
- `Testimonials.astro:62` — side-tab accent border (steel left, 4px) — warning
- `Navbar.astro:105` — layout property animation (max-height) — warning

The side-tab findings for Contact and Testimonials are **intentional exceptions** documented in DESIGN.md. The navbar layout animation (max-height + padding transition) is a real jank risk on lower-end mobile. The 2px radius on `.about__cert` badges is a genuine scale violation worth standardizing.

**Visual overlays**: Dev server running at `http://localhost:4322/`. No browser injection was attempted.

#### Overall Impression

"Technique Marine" is a solid local-business site with a real point of view — the Working Waterfront palette (Channel Deep, Brass, Dock Paper) is distinctive and miles above the average AI-generated marine template. The design decisions around color and typography show intent. The weakness is structural: the **same section pattern repeated six times** (eyebrow + Alkaline heading + content) creates a predictable, template-like rhythm that undermines the bespoke feel. The site needs variation in how sections introduce themselves.

#### What's Working

1. **Color palette execution.** Channel Deep on Dock Paper with Brass accents is genuine — it reads as "working waterfront" not "marine template." The restraint of a single accent color is rare in AI-generated work and carries real brand weight.

2. **Typography pairing.** Alkaline as a muscular display serif paired with system sans is clean and confident. The Alkaline weight and cut carry the "rugged, reliable" brief well.

3. **Alternating section rhythm.** The dark/light section alternation (navy/cream/navy/cream) works as a navigation signal and keeps the scroll from feeling monotonous. The visual pacing is good.

#### Priority Issues

**[P1] Uniform section pattern (eyebrow + heading + content) repeated 6 times**
- **What**: Every section opens with the same formula: gold uppercase tracked label → Alkaline heading → body content. Hero (location tagline), Services ("What we do"), About ("About the tech"), Testimonials ("What customers say"), FAQs ("Got questions?"), Contact ("Get in touch").
- **Why it matters**: This is the single strongest "AI made this" signal on the page. The skill's absolute bans explicitly call this out. Even though the DESIGN.md claims it as deliberate, having it on every section makes it scaffolding, not voice.
- **Fix**: Vary the cadence. Drop the eyebrow entirely on 2-3 sections. Let the heading stand alone. Use a different opener for at least one section (a pull quote, a visual, a bold statement without a label). The About section could lead with the bio directly. Testimonials could lead with the strongest quote.
- **Suggested command**: `/impeccable distill` or `/impeccable polish`

**[P1] Anchor emoji (⚓) in Services cards**
- **What**: The three service cards use ⚓ as their icon. The brand bans "nautical kitsch" (anchors, rope, boat wheels) explicitly in PRODUCT.md's anti-references and DESIGN.md's No-Nautical-Kitsch Rule.
- **Why it matters**: It directly contradicts the brand identity you established — this is exactly the "overly nautical" aesthetic the brief rejected.
- **Fix**: Replace with a meaningful visual. Options: no icon at all, a subtle SVG icon from a non-marine metaphor (a wrench, a gear, a signal wave), or let the heading/description stand alone without decoration.
- **Suggested command**: `/impeccable polish services`

**[P2] Form has no inline validation or submit feedback**
- **What**: The contact form has `required` attributes but no inline validation messages, no format checking on email/phone fields, no loading state on the submit button, and no server-side error handling on the page itself (Formspree handles failures externally).
- **Why it matters**: A user who types their email as "name@domain" (missing .com) gets no feedback until Formspree rejects it. A user on a slow connection who taps "Send" twice may accidentally double-submit. The thank-you page is the only success signal.
- **Fix**: Add HTML5 validation with custom messages, show inline errors, add a disabled/loading state on the button during submission, handle fetch errors gracefully with an inline error banner.
- **Suggested command**: `/impeccable harden contact`

**[P2] Layout animation on navbar mobile menu**
- **What**: The mobile menu animates `max-height` and `padding` (`.navbar__mobile { transition: max-height 0.3s ease, padding 0.3s ease; }`). The detector flagged this correctly.
- **Why it matters**: `max-height` animation causes layout thrash — the browser must recalculate layout on every frame of the transition. On low-end mobile devices this produces visible jank.
- **Fix**: Replace with `transform: scaleY(1/0)` + `opacity`, or use a `grid-template-rows` animation, or toggle `display` and animate `opacity`.
- **Suggested command**: `/impeccable polish navbar`

**[P2] Footer copyright text contrast risk**
- **What**: `.footer__copy` is set at `color: var(--color-steel)` (#7a9bb5) with `opacity: 0.6` on navy (#1e2d3d). The effective contrast ratio is approximately 3.4:1 — fails WCAG AA for small text.
- **Why it matters**: Copyright text at 0.78rem is small and already visually secondary; further reducing its contrast makes it genuinely hard to read for anyone with less-than-perfect vision.
- **Fix**: Remove the opacity, or use a lighter tint of the navy (e.g., #4a5764 from the Channel Deep tonal ramp) instead of muting Weathered Tin.
- **Suggested command**: `/impeccable audit`

**[P3] About cert badges have 2px border-radius outside scale**
- **What**: `.about__cert` uses `border-radius: 2px`. The DESIGN.md scale starts at `sm: 4px`. The detector flagged this.
- **Why it matters**: Minor inconsistency. 2px is close enough that most viewers won't notice, but it's a drift from the system.
- **Fix**: Change to 4px to match the sm scale.
- **Suggested command**: `/impeccable polish about`

#### Persona Red Flags

**Jordan (First-Timer)**: Arrives needing marine service. The hero clearly communicates "call us" and the phone is visible. The rest of the page scrolls well. But Jordan hits the repeated eyebrow and wonders: "Is this a template site?" The anchor emoji confirms that concern. The "Let's Connect" CTA in the nav is warm and direct — good. The form asks for "Phone" as optional — Jordan might skip it and then miss a call-back. **Red flag**: repeated eyebrow pattern undermines trust; optional phone could delay the response an urgent customer needs.

**Riley (Stress Tester)**: Riley submits the form with "test" as the name, no phone, email "notanemail" — the browser catches the missing `@` via HTML5 validation, but there's no custom message. Then Riley submits twice fast — no debounce on the button. Then Riley navigates to a non-existent page — there's no 404 handler. **Red flags**: double-submit risk, brittle form, no 404 page.

**Casey (Mobile User)**: The site is responsive. The hamburger menu opens the mobile nav. But the mobile nav uses max-height animation (jank on low-end devices). The contact form fields are full-width and usable. Touch targets (buttons at 44px+) are adequate. **Red flag**: layout-animated mobile menu.

**Dylan (Owner-Operator, project-specific)**: The business owner whose name is on the site. Wants to look professional but not corporate. The site nails the color and typography. But Dylan might not notice the eyebrow repetition or the anchor emoji until someone points it out — then it bothers him. **Red flag**: the subtle "template feel" from the uniform section pattern may undermine the bespoke impression he wants to project.

#### Minor Observations

- The hero eyebrow reads "Cape Fear, NC" — this is the most defensible eyebrow since it reads as a location tagline, not AI scaffolding. OK to keep.
- The contact form misses `autocomplete` attributes (`tel`, `email`, `name`) — easy addition for mobile users.
- The "thank-you" page has no `noindex` meta — search engines may index it.
- The Services section has an empty `.services__cta` div — unused markup.
- About eyebrow says "About the tech" — feels slightly off. "About" or "The Tech" would be clearer.
- No favicon is set beyond the default Astro one (there are favicon files in public/ but no `<link>` tag in Layout.astro).

#### Questions to Consider

- "What if 2-3 sections dropped their eyebrow entirely — would the page feel more confident?"
- "Does the ⚓ anchor emoji undercut the brand more than it helps? What if the services cards had no icon at all?"
- "What if the form had a loading spinner on the button so users know the message is sending?"
