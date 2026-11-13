---
name: Obsidian & Slate Portfolio System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#41485e'
  on-tertiary: '#ffffff'
  tertiary-container: '#586076'
  on-tertiary-container: '#d4dbf5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 3.75rem
    fontWeight: '600'
    lineHeight: 4.25rem
    letterSpacing: -0.035em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system expresses the aesthetic of high-craft engineering tools (reminiscent of Linear, Vercel, and Raycast). It communicates precision, technical maturity, intentionality, and relentless attention to micro-details. Tailored for a senior engineering portfolio, the tone is understated yet razor-sharp, prioritizing legible data hierarchy, tactile interactions, and uncompromised clarity over unnecessary ornamentation.

The visual style unites strict **Minimalism** with **Modern Developer-Centric Utility**:
- **Purity of Surface**: Bright white canvases structured with cold slate offsets to define content zones.
- **Micro-Deliberation**: 1px structural hairline borders anchor cards, tables, and split surfaces instead of heavy drop shadows.
- **Engineered Accents**: Electric indigo and crisp cyan deliver surgical focus points, while an inverted dark slate surface provides high-contrast terminal framing against the bright background.

## Colors

The palette leverages a high-contrast slate-and-white tonal spectrum calibrated for clean readability and razor-sharp contrast.

### Palette Architecture
- **Canvas & Primary Surface (`#ffffff` / `#f8fafc`)**: The base foundation. Main reading areas reside on pure `#ffffff`, while foundational viewport backdrops sit at `#f8fafc`.
- **Secondary Containers & Tiers (`#f1f5f9` & `#e2e8f0`)**: Subtle recessed containers, code line highlights, badge foundations, and segmented control wells.
- **Hairline Borders & Dividers (`#e2e8f0` & `#cbd5e1`)**: Structural lines maintain 1px definition, guaranteeing structural hierarchy without visual weight.
- **Typography Matrix**:
  - Primary text / Headings: Deep `#0f172a` (Slate 900) providing AA/AAA compliant contrast.
  - Secondary / Muted copy: Balanced `#475569` (Slate 600) and `#64748b` (Slate 500) for metadata, timestamps, and labels.
- **Accent Tokens**:
  - Focus & Primary Action: `#4f46e5` (Indigo 600) with hover states pushing to `#4338ca`.
  - Secondary Signal / Metric: `#0284c7` (Sky 600) and `#06b6d4` (Cyan 500) for telemetry, git branch tags, and live status signals.
- **Monolithic Terminal Accent (`#0f172a`)**: Reserved specifically for architecture diagrams, interactive shell components, and code previews to punch through the light mode structure with decisive contrast.

## Typography

The typographic hierarchy prioritizes technical legibility and rhythmic cadence:
- **Headings & Display**: Set in **Geist** with subtle negative tracking (`-0.02em` to `-0.035em`) to evoke the dense, crisp feel of contemporary developer infrastructure products.
- **Body & Longform**: Set in **Inter**, providing proven legibility, robust x-height, and neutral optical balance for project case studies and technical documentation.
- **Metadata, Tags & Terminal Code**: Set in **JetBrains Mono** for monospaced precision across commit hashes, tech stack chips, metric figures, and live shell sessions.

## Layout & Spacing

The layout philosophy follows a structured 12-column fixed/fluid hybrid grid model anchored inside a maximum width of `1200px` (or `72rem`):
- **Desktop (>= 1024px)**: 12-column layout with `1.5rem` gutters and generous `3rem` canvas margins. Content modules such as architectural breakdown cards span 4 or 6 columns; flagship case studies span the full 12 columns.
- **Tablet (768px - 1023px)**: 8-column layout with `1.25rem` gutters and `2rem` margins. Complex dual-pane editors stack or shift into vertical stepped flows.
- **Mobile (< 768px)**: 4-column layout with `1rem` gutters and `1.25rem` margins. Interactive code blocks collapse non-essential chrome and enable horizontal drag scrolling on monospaced content.

Padding and gap rhythm strictly conform to an 8-point geometric scale (starting from `0.25rem` up to `4rem`), enforcing consistent vertical cadence across all portfolio blocks.

## Elevation & Depth

Visual hierarchy does not rely on heavy, fuzzy dropshadows. Depth is articulated through **ambient micro-diffusions and structural micro-borders**:

1. **Level 0 (Base Canvas)**: Flat `#f8fafc` or `#ffffff` surface, completely free of elevation.
2. **Level 1 (Cards, Code Blocks & Panels)**: `#ffffff` surface bounded by a crisp `1px solid #e2e8f0` border. Paired with a delicate, high-precision ambient shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
3. **Level 2 (Hover States, Popovers & Context Menus)**: Subtle elevation lift to `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`. Borders transition smoothly from `#e2e8f0` to `#cbd5e1`.
4. **Terminal Inversion (High-Contrast Layer)**: `#0f172a` container floating on the bright canvas, enclosed with a delicate `1px solid rgba(255, 255, 255, 0.1)` internal border to prevent edge bleed.

## Shapes

The design system maintains a **Soft** geometry standard (`roundedness: 1`):
- Standard interactive elements (buttons, inputs, status badges) use `0.25rem` (`4px`) to `0.375rem` (`6px`) radii for an engineered, precise feel.
- Large portfolio panels, system architecture diagrams, and terminal viewports adopt `rounded-lg` (`0.5rem` / `8px`) to prevent visual harshness while avoiding overly playful bubbly forms.
- Pills and circles are strictly limited to status dots (e.g., green CI/CD indicators) and avatar enclosures.

## Components

### Buttons
- **Primary**: Solid deep tone (`#0f172a`) with white text (`#ffffff`), or accent fill (`#4f46e5`) with a 1px inner highlight ring (`inset 0 1px 0 rgba(255, 255, 255, 0.15)`). Hover adds subtle brightness transition; active adds scale depression `scale(0.98)`.
- **Secondary / Outline**: Clean `#ffffff` fill, `1px solid #e2e8f0` border, `#0f172a` text. Hover shifts background to `#f8fafc` and border to `#cbd5e1`.
- **Ghost**: Transparent fill, `#475569` text. Hover shifts to `#f1f5f9` with `#0f172a` text.

### Badges & Technology Chips
- Height `22px` to `24px`, font `label-mono`.
- Container uses `#f1f5f9` fill, bordered with `1px solid #e2e8f0`, text in `#475569`.
- Dynamic status variants feature a 6px pulsating dot (e.g., `#10b981` for active services).

### Cards & Case Study Containers
- Surface is `#ffffff` with a continuous `1px solid #e2e8f0` edge.
- Padding uses `space-lg` (`1.5rem`) on desktop.
- Hover interaction: Hairline border sharpens to `#94a3b8` accompanied by an imperceptible `translateY(-1px)` translation.

### Form Inputs & Command Palette (Cmd+K)
- Input base: `#ffffff` surface, `1px solid #cbd5e1` outline, `rounded-md`, text `#0f172a`, placeholder `#94a3b8`.
- Focus state: `1px solid #4f46e5` border coupled with an outer halo: `0 0 0 2px rgba(79, 70, 229, 0.12)`. No standard browser outline.

### Terminal & Code Blocks
- Dark mode inversion: `#0f172a` background, `JetBrains Mono` font, syntax colored with refined muted hues.
- Window chrome features three minimal dots (`#334155`) or an unobtrusive header displaying filepath and copy button.

### Lists & Key-Value Specs
- Bordered stack lists with `1px solid #e2e8f0` horizontal dividers.
- Clean separation between title, inline tech chips, metrics (e.g., "+340% throughput"), and anchor links.