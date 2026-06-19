---
name: Technique Marine
description: Mobile marine service and delivery captain serving Cape Fear, NC
colors:
  primary: "#b78330"
  neutral-bg: "#f4f1e4"
  neutral-surface: "#ffffff"
  ink: "#1e2d3d"
  muted: "#7a9bb5"
typography:
  display:
    fontFamily: "Alkaline, Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.12em"
    textTransform: "uppercase"
  script:
    fontFamily: "'Dancing Script', cursive"
    fontWeight: 700
rounded:
  sm: "4px"
  md: "6px"
spacing:
  sm: "28px"
  md: "48px"
  lg: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
    typography: label
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    opacity: 0.88
  card-service:
    backgroundColor: "{neutral-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    borderTop: "3px solid {colors.primary}"
  card-contact:
    backgroundColor: "{neutral-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    borderLeft: "4px solid {colors.primary}"
  card-testimonial:
    backgroundColor: "{neutral-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    borderLeft: "4px solid {colors.muted}"
  faq-item:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
  form-input:
    backgroundColor: "{neutral-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    border: "1px solid rgba(30, 45, 61, 0.2)"
---

# Design System: Technique Marine

## 1. Overview

**Creative North Star: "The Working Waterfront"**

This is a design system built for a mobile marine service that shows up, knows its craft, and doesn't waste your time. It rejects the polished-corporate marine aesthetic (gold-anchor clipart, rope borders, navy blazer) in favor of something more honest: the textures and tones of an actual working waterfront — diesel-stained concrete, galvanized steel, worn brass fittings, the deep channel at dusk.

The system is **flat by default, tonal by nature**. Depth comes from contrast — navy fields against cream, gold against dark — not from shadows. The palette is constrained: a single saturated accent (Brass) earns its place by scarcity. Typography is muscular (Alkaline display) paired with clean system body text. There is no decoration that doesn't earn its keep.

**Key Characteristics:**
- Dark-on-light section alternation (Channel Deep / Dock Paper) creates rhythm without cards
- Single accent color (Brass) used sparingly for paths and emphasis
- Uppercase tracked labels as a deliberate brand voice, not scaffolding
- Flat surfaces, sharp edges, purposeful restraint
- No nautical kitsch — the work speaks for itself

## 2. Colors: The Working Waterfront Palette

A restrained, three-color system rooted in the Cape Fear working waterfront. Chroma is concentrated in a single accent; neutrals carry the weight.

### Primary
- **Brass** (#b78330): The only saturated color. Used for buttons, accent borders, hover states, and small uppercase labels. Never decorative — always a path, an affordance, or a signal. Appears on roughly 5–10% of any given screen.

### Neutral
- **Channel Deep** (#1e2d3d): Ink, background on alternating sections, navbar, footer. Not quite black, not quite blue — the color of the Cape Fear River at dusk. Carries white/cream text.
- **Dock Paper** (#f4f1e4): The primary light background. A true warm off-white at near-zero chroma — not cream-by-default, but the yellowed tone of a well-used service manual page. Carries Channel Deep text.
- **Weathered Tin** (#7a9bb5): Muted, used for secondary text, subtitles, and decorative dividers. The color of galvanized metal under overcast sky.
- **White** (#ffffff): Card and form backgrounds on Dock Paper sections. Pure white for contrast within the light section.

### Named Rules
**The Brass Rarity Rule.** Brass appears on ≤10% of any given screen. Its scarcity is what gives it weight. If a page has more Brass than Channel Deep, the accent has become the background — pull it back.

**The No-Nautical-Kitsch Rule.** No anchor icons, rope textures, boat-wheel motifs, or anything that reads "decorative marine." Brass is not a "gold" that evokes maritime heritage branding; it's the color of a through-hull fitting.

## 3. Typography

**Display Font:** Alkaline (with Georgia, serif fallback)
**Script Font:** Dancing Script (with cursive fallback)
**Body Font:** system-ui (with -apple-system, sans-serif fallback)
**Label Font:** system-ui (same stack as body)

**Character:** A muscular serif for headings paired with a clean system sans for body. Alkaline has the weight and presence of a carved dock piling — broad, bold, no-nonsense. Dancing Script adds a hand-lettered warmth for taglines and italic emphasis. The system sans stays out of the way and lets the work speak.

### Hierarchy
- **Display** (700, clamp(2rem, 5vw, 3.25rem), 1.15): Hero headline only. Set in Alkaline. Reserved for the one big statement per page.
- **Headline** (700, clamp(1.75rem, 3vw, 2.5rem), 1.2): Section titles. Alkaline, letter-spacing: normal. `text-wrap: balance`.
- **Body** (400, 1rem, 1.6–1.8): Running text. system-ui. Line length capped at 65–75ch on prose sections.
- **Label / Eyebrow** (600, 0.8rem, 1.4, 0.12em letter-spacing, uppercase): Small uppercase labels above section headings. Brass color. Used deliberately as a brand voice element — not on every section by default. `text-wrap: pretty`.
- **Script** (700, 1rem, 1.6): Italic accent lines, taglines, pull quotes. Dancing Script.

### Named Rules
**The Alkaline Rule.** Alkaline is for headings only. Never use it for body copy, captions, or labels. Its weight demands breathing room.

**The Uppercase Discipline.** The tracked uppercase label is a deliberate brand element, not default section grammar. Currently used on the hero (location tagline) and FAQs ("Got questions?") only. Every other section lets the heading stand alone.

## 4. Elevation

The system is **flat by default** — surfaces sit at the same depth. Depth is communicated through tonal contrast (Channel Deep against Dock Paper, White cards on Dock Paper) rather than through shadows. This is a working waterfront brand: nothing floats, everything sits solid.

On interactive surfaces (cards), a subtle translateY(-4px) + ambient shadow (0 8px 24px rgba(30,45,61,0.1)) signals hover state — a momentary lift, not a permanent shadow. The rest state is always flat.

### Named Rules
**The Flat-By-Default Rule.** Surfaces have no shadow at rest. Elevation appears only as a response to interaction (card hover, button press). A static shadow on every card reads as "shipping crate," not "designed."

## 5. Components

### Buttons
- **Shape:** Sharp, slight rounding (4px radius)
- **Primary:** Brass (#b78330) background, Channel Deep (#1e2d3d) text. Uppercase, 0.04em letter-spacing, 600 weight, 0.875rem. Padding: 12px 28px.
- **Hover:** Opacity reduces to 0.88. No lift, no shadow — just a deliberate dimming.
- **Focus:** Same gold border treatment as form inputs. Consistent accent response.
- **Voice:** "Solid and purposeful" — the button an owner-operator would actually press.

### Cards / Containers
- **Services cards:** White background, Dock Paper section. Subtle border (rgba of Channel Deep at 10%), gold top border (3px) as the accent flag. 6px radius. Hover lifts 4px with ambient shadow. No icon — the heading and description carry the content.
- **Contact cards:** Vertical layout with gold left border (4px). Hover slides right (translateX(4px)) — directional, indicating a link affordance.
- **Testimonial cards:** Steel left border (4px) instead of gold — the secondary accent. Italic quote, right-aligned attribution.
- **Padding:** 28–36px internal on cards; 24px around edges.

### Inputs / Fields
- **Style:** Dock Paper background, subtle border (rgba Channel Deep at 20%), 4px radius. 1rem body text.
- **Focus:** Border shifts to Brass (#b78330). No glow, no ring — a crisp swap.
- **Labels:** Uppercase, 0.85rem, 600 weight, 0.04em letter-spacing, Channel Deep color. Positioned above the field.
- **Error / Disabled:** (Not yet implemented — placeholders for future refinement.)

### Navigation
- **Style:** Channel Deep background, gold bottom border (2px). Fixed/sticky at top (z-index: 100).
- **Typography:** Uppercase, 0.9rem, 0.05em letter-spacing, cream color. Gold on hover.
- **Mobile:** Hamburger toggle at ≤768px. Slide-down accordion menu, cream links with subtle dividers.

### FAQ Accordion
- **Style:** Subtle white-on-navy item (rgba white at 5% bg, 10% border), 6px radius. Gold "+" indicator rotates 45° on open.
- **Open state:** Gold border highlight.

## 6. Do's and Don'ts

### Do:
- **Do** use Brass sparingly — ≤10% of any screen. Its rarity is its power.
- **Do** alternate Channel Deep and Dock Paper as the rhythm of the page. Dark section, light section, dark, light.
- **Do** keep surfaces flat at rest. Depth comes from tonal contrast, not shadows.
- **Do** set body text at Channel Deep (#1e2d3d) on Dock Paper or White backgrounds. Verify ≥4.5:1 contrast.
- **Do** use Alkaline for headings only — it needs room to breathe.
- **Do** let the work speak. No decoration that doesn't earn its place.

### Don't:
- **Don't** use anchor icons, rope borders, boat-wheel motifs, or any decorative nautical kitsch. This is a working waterfront, not a themed restaurant.
- **Don't** use side-stripe borders (>1px) on cards as a decorative accent — unless it's the deliberate gold/steel left/top accent system documented above. Random side-stripes are the AI tell.
- **Don't** use gradient text, glassmorphism, or bounce/elastic easing.
- **Don't** default to editorial-magazine aesthetics (italic serif display, ruled columns, drop caps) — this isn't a broadsheet.
- **Don't** use Weathered Tin (#7a9bb5) for body text — it fails contrast minimums on Dock Paper. Reserve it for secondary metadata, captions, and dividers.
- **Don't** nest cards inside cards. One layer of containment is the limit.
- **Don't** give every section a tracked uppercase eyebrow. Currently used on Hero and FAQs only — any new section must earn its eyebrow.
- **Don't** use corporate-polished or "nautical bank" design language. This brand is Rugged, Reliable, Local — not a marine-finance brochure.
- **Don't** ship pure black (#000) or pure gray (#808080). Always tint toward the palette.
- **Don't** use bounce or elastic easing. Stick to ease-out-quart / quint for motion.
