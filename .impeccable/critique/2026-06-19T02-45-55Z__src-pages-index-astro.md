---
target: home page
total_score: 33
p0_count: 0
p1_count: 2
p2_count: 2
timestamp: 2026-06-19T02-45-55Z
slug: src-pages-index-astro
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Form spinner + inline validation + nav open/close — solid |
| 2 | Match System / Real World | 4 | Nautical language restrained; phone prominent |
| 3 | User Control and Freedom | 4 | Sticky nav, hash links, hamburger X, easy back nav |
| 4 | Consistency and Standards | 4 | Dark/light rhythm; disciplined eyebrow; uniform patterns |
| 5 | Error Prevention | 3 | Inline validation; no honeypot/bot protection |
| 6 | Recognition Rather Than Recall | 4 | One-page; section IDs match nav; phone in hero+footer |
| 7 | Flexibility and Efficiency | 2 | No skip-nav link, no keyboard shortcuts |
| 8 | Aesthetic and Minimalist Design | 3 | Ghost logos in hero/about; generic tagline |
| 9 | Error Recovery | 3 | Inline errors + banner with phone; 404 exists |
| 10 | Help and Documentation | 2 | FAQs good; no "what happens next" after form submit |
| **Total** | | **33/40** | **Good — few remaining gaps** |

#### Anti-Patterns Verdict

**LLM assessment**: Substantially de-slopped. The eyebrow uniformity and anchor emoji — the two loudest AI tells — are gone. What remains is subtler: phantom ghost logos (hero + about) that break the "no decoration that doesn't earn its keep" rule, and a remaining layout animation in the navbar padding transition.

**Deterministic scan**: 4 findings. 2 are documented intentional exceptions (side-tab borders on Contact and Testimonials per DESIGN.md). 2 are genuine: `transition: padding` on Navbar.astro:120 (leftover layout animation) and `transition: min-height` on Contact.astro:200 (error span).

#### Overall Impression

The site went from "Acceptable" (21/40) to "Good" (33/40). The palette, About section, and restrained eyebrow usage are the strongest signals. The remaining drag on the score is decorative elements that don't communicate (ghost logos), missing accessibility basics (skip link), and unprotected form fields.

#### What's Working

1. **Color palette execution.** Channel Deep / Dock Paper / Brass is distinctive and evocative. Dark-light-dark-light alternation creates spatial memory.
2. **About section.** Authentic biography, strong tagline, legible cert badges. Reads as real.
3. **Disciplined eyebrow usage.** Only Hero and FAQs have tracked labels. Restraint makes them intentional.

#### Priority Issues

**[P1] Ghost logos in Hero and About serve no purpose**
- **What**: Hero logo at 0.12 opacity + brightness(10). About badge logo at 0.15 opacity. Both invisible decoration.
- **Why it matters**: DESIGN.md: "no decoration that doesn't earn its keep." On HDR screens they become visible noise. They add bytes, not meaning.
- **Fix**: Remove both elements entirely. Hero typography carries the section. About right column carries the bio.
- **Suggested**: _edit Hero.astro remove `.hero__logo` div; edit About.astro remove `.about__image` div_

**[P2] No skip-to-content link**
- **What**: Keyboard users tab through full navbar (5+ stops) before reaching main content.
- **Why it matters**: WCAG AA requires skip navigation. Inconsistent with the 4.5:1 contrast compliance elsewhere.
- **Fix**: Add `<a href="#main">` as first element after `<body>`, style to appear on focus.
- **Suggested**: _edit Layout.astro add skip link_

**[P2] No bot protection on form**
- **What**: No honeypot field, no rate limiting, no CAPTCHA.
- **Why it matters**: Bot could fire 100+ submissions to Dylan's inbox through Formspree.
- **Fix**: Add hidden honeypot field + JS check before submit.
- **Suggested**: _edit Contact.astro add honeypot_

**[P3] Navbar padding layout animation**
- **What**: `transition: padding` on `.navbar__mobile` still causes layout thrash (overlooked in earlier fix).
- **Why it matters**: Minor — the opacity/scaleY transition is the primary animation, but the padding transition still fires.
- **Fix**: Remove `padding` from the transition property.
- **Suggested**: _edit Navbar.astro remove `padding` from transition_

**[P3] About tagline font mismatch**
- **What**: "Jack of all trades, master of most" uses `font-style: italic` (system-ui) instead of Dancing Script as specified in DESIGN.md.
- **Why it matters**: Minor voice-typography inconsistency.
- **Fix**: Apply Dancing Script to `.about__tagline`.
- **Suggested**: _edit About.astro add Dancing Script to about__tagline_

#### Persona Red Flags

**Jordan (First-Timer)**: Hits hero headline "Comprehensive Marine Care" — sounds corporate, not local. Ghost logo in hero is confusing noise. Scrolls to Services and finds "Highlighted Services" with hedging descriptions. **Red flag**: first three sections (Hero → Services → About) don't clearly say "this is a real local person" until the bio.

**Riley (Stress Tester)**: Form validates input and shows inline errors. Spinner prevents double-click. But no honeypot — can submit 50 valid messages programmatically. **Red flag**: form is bot-vulnerable.

**Sam (Keyboard User)**: No skip-to-content link means tabbing through 5+ navbar elements before reaching any main content. The 404 page exists but no skip link in sight. **Red flag**: unnecessary friction for keyboard navigation.

#### Minor Observations

1. `.about__tagline` uses `font-style: italic` from body stack instead of Dancing Script per DESIGN.md's script font role.
2. Services sub mentions "vision" — "No matter what question, concern, or vision you have for your boat" — aspirational marketing-speak that doesn't fit the Rugged/Reliable/Local voice.
3. Hero subheadline "One call solves it all." in gold at 600w competes visually with the CTA button (also gold, uppercase).

#### Questions to Consider

1. "If the ghost logos serve no purpose, what design insecurity are they covering for?"
2. "Would moving Testimonials to position 2 (right after Hero) convert more leads than the current Services-first order?"
3. "What would the page look like if every section heading carried Dylan's voice instead of template-safe labels?"
