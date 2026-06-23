---
name: Tactical Operations Interface
colors:
  surface: '#111316'
  surface-dim: '#111316'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#c3c8c2'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#8d928d'
  outline-variant: '#434844'
  surface-tint: '#b8cbbc'
  primary: '#b8cbbc'
  on-primary: '#233429'
  primary-container: '#2d3e33'
  on-primary-container: '#96a99b'
  inverse-primary: '#516356'
  secondary: '#b5c9d9'
  on-secondary: '#20333f'
  secondary-container: '#384b59'
  on-secondary-container: '#a7bbcb'
  tertiary: '#ffb3ae'
  on-tertiary: '#68000b'
  tertiary-container: '#780812'
  on-tertiary-container: '#ff7c76'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e7d8'
  primary-fixed-dim: '#b8cbbc'
  on-primary-fixed: '#0e1f15'
  on-primary-fixed-variant: '#394b3f'
  secondary-fixed: '#d1e5f6'
  secondary-fixed-dim: '#b5c9d9'
  on-secondary-fixed: '#091e2a'
  on-secondary-fixed-variant: '#364956'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#8b191d'
  background: '#111316'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  command-h1:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  command-h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  command-h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
  data-mono:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  grid-columns: '12'
---

## Brand & Style
The brand personality is defined by discipline, precision, and mission-readiness. This design system is engineered for high-stakes environments where clarity and rapid information processing are paramount. It evokes a sense of authority and reliability, mirroring the structured hierarchy of a "Detasemen" (Detachment) unit.

The visual style is **Corporate / Modern** with heavy **Tactical** influences. It prioritizes data density and situational awareness over decorative elements. The aesthetic is "rugged digital"—functional, structured, and resilient. It avoids softness in favor of rigid alignments and clear visual hierarchies, ensuring that every element on the Command Dashboard serves a specific operational purpose.

## Colors
The palette is optimized for low-light environments and reduced eye strain during extended deployments.
- **Primary (Tactical Olive):** Used for active states, unit identifiers, and primary navigation elements. It represents the "field" and "readiness."
- **Secondary (Slate Blue):** Applied to secondary utility icons, inactive data visualizations, and supporting structural elements.
- **Neutral (Deep Charcoal):** The foundation of the UI. Backgrounds use a true charcoal to maintain high contrast with text while avoiding the harshness of pure black.
- **Status (Alert Orange/Red):** Reserved strictly for mission-critical warnings, unit "No-Go" statuses, and urgent system alerts. These should be used sparingly to maintain their psychological impact.

## Typography
Manrope is utilized for its exceptional legibility and modern, geometric structure. In this design system, typography is treated as a utilitarian tool for relaying orders and data.
- **Headings:** All "Command" level headings must be uppercase with increased letter spacing to mimic military stencil and identification markings.
- **Labels:** Small labels for Personnel Rosters or Equipment IDs use heavy weights (700+) to ensure they remain legible even at reduced scales.
- **Hierarchy:** Use bold weights to differentiate between "Actionable Data" and "Reference Data."

## Layout & Spacing
The layout follows a **Fixed Grid** model to ensure that critical UI components remain in predictable locations—vital for muscle memory in high-stress scenarios.
- **Rhythm:** A strict 4px base unit (0.25rem) governs all spacing.
- **Command Dashboard:** Uses a 12-column grid. Information is grouped into "Operation Modules" (cards) that typically span 3, 4, or 6 columns.
- **Adaptation:** On mobile (field devices), the layout collapses into a single column with "Mission Critical" modules pinned to the top. Gutters are reduced to 12px to maximize screen real estate for data.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than soft shadows, maintaining a flat, rugged aesthetic.
- **Base Level:** Deep Charcoal (#121417) for the primary application canvas.
- **Surface Level:** Slate-tinted charcoal for container backgrounds to separate operational modules.
- **Outlines:** Instead of shadows, use **Low-contrast outlines** (1px solid borders in muted Slate Blue) to define the boundaries of cards and input fields.
- **Active Elevation:** Elements that require interaction or are currently "hot" use a subtle interior glow or a change in border weight (from 1px to 2px) rather than a drop shadow.

## Shapes
The shape language is rigid and structured. **Soft (0.25rem)** roundedness is the maximum allowed to prevent the UI from feeling "consumer-grade" or overly friendly. 
- **Standard UI Elements:** Use the base 0.25rem radius.
- **Specialized Indicators:** Status pips and small alerts may use 0px (Sharp) corners to emphasize a "hardened" hardware feel.
- **Containers:** Large Command Module containers should maintain a disciplined, rectangular profile.

## Components
- **Primary Buttons:** High-contrast Tactical Olive backgrounds with white uppercase text. Borders are sharp and clearly defined.
- **Status Chips:** Used for "Unit Readiness" levels. Green for "Ready," Amber for "Standby," Red for "O.O.S" (Out of Service). These are rectangular with no roundedness.
- **Input Fields:** Darker than the background surface with a 1px Slate Blue border that turns Olive when focused. Use monospaced-style Manrope for numerical data entry.
- **Personnel Roster Lists:** Compact rows with high-contrast labels. Each row should include a "Status Indicator" at the leading edge.
- **Command Cards:** Structured containers with a header area containing an uppercase "Module Title" and an optional "Operational Code."
- **Data Visualizations:** Use "Ghost Borders" and tactical crosshairs for graph intersections to reinforce the mission-critical, technical nature of the system.