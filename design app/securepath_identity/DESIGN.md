---
name: SecurePath Identity
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
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#4849da'
  primary: '#4343d5'
  on-primary: '#ffffff'
  primary-container: '#5d5fef'
  on-primary-container: '#faf7ff'
  inverse-primary: '#c1c1ff'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#62fae3'
  on-secondary-container: '#007165'
  tertiary: '#7f4f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a06500'
  on-tertiary-container: '#fff7f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c1c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2e2bc2'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered for a high-security, enterprise-grade biometric attendance environment. It prioritizes utility, speed of recognition, and role-based clarity. The visual direction is **Corporate / Modern** with subtle **Minimalist** influences, focusing on clear data visualization and foolproof user journeys for diverse user groups: Admins, Members (Anggota), and Leadership (Pimpinan).

The emotional response should be one of reliability and precision. By using a structured layout and a refined color-coding system derived from the process flowchart, users can immediately identify their context within the application. The system balances the technical nature of "Face Recognition" with an approachable, human-centric interface that reduces friction during the daily clock-in/out ritual.

## Colors

The palette uses role-based color signaling to define the user experience. 
- **Admin (Primary Blue):** Used for management tasks, data entry, and system configuration. It signifies control and technical stability.
- **Member (Secondary Teal):** Used for the active attendance flow. Teal is chosen for its association with "go" and freshness, making the daily check-in feel positive.
- **Leadership (Tertiary Orange):** Used for dashboards, rankings, and high-level reports. It provides a distinct visual break from the operational blue/teal.
- **System Automatis (Gold/Tan):** Neutralized gold tones are used for background processing steps and automated data calculations (like SAW Method results).

The default mode is **Light**, utilizing a clean white and slate-gray base to ensure maximum legibility and a professional "office" feel.

## Typography

This design system employs a dual-font strategy:
- **Manrope** for headlines: Its geometric yet modern construction provides a sense of technological sophistication and authority.
- **Inter** for body and UI elements: Chosen for its exceptional legibility at small sizes, particularly critical for data-heavy tables and SAW calculation breakdowns.

Hierarchy is strictly enforced. Large headlines are reserved for dashboard titles and status results (e.g., "Face Recognized"). Labels are often used in uppercase with slightly increased tracking to distinguish metadata from content.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop, collapsing to a **single column** for mobile attendance views. 

- **Rhythm:** An 8px linear scale (with a 4px step for tight UI) governs all padding and margins.
- **Dashboards:** Use a "Card-on-Canvas" approach where the background is a subtle gray (`#F8FAFC`) and content is grouped in white cards with 24px internal padding.
- **Attendance Flow:** Centrally aligned layouts for the camera interface to focus the user’s attention on the recognition frame.
- **Data Tables:** High-density spacing (12px vertical padding) to allow for the viewing of large datasets like "Rekapitulasi Data Kehadiran."

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

- **Level 0 (Canvas):** Background layer, slightly tinted to reduce eye strain.
- **Level 1 (Cards):** Main content areas use a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) to lift them slightly from the canvas.
- **Level 2 (Modals/Popovers):** Used for face registration previews and detailed report views. These use a more pronounced shadow and a 20% opacity black backdrop blur.
- **Interaction:** Buttons use a subtle "press" effect, moving from Level 1 to Level 0 on active state, providing tactile feedback without skeuomorphism.

## Shapes

The design system adopts a **Rounded** (Level 2) shape language. 
- Standard components (buttons, inputs) feature an 8px (`0.5rem`) corner radius.
- Larger containers like data cards use 16px (`1rem`) for a softer, more modern enterprise look.
- **The Camera Viewfinder:** Uses a specialized "Squircle" or heavily rounded frame to signify the face-scanning area, distinguishing it from standard UI containers.

## Components

### Buttons
- **Primary:** Solid fill using the role color (Blue for Admin, Teal for Member). 
- **Secondary:** Outlined with a 1px border of the role color.
- **Ghost:** No border or fill, used for low-priority actions like "Cancel."

### Attendance Viewfinder
A specialized component featuring a 1:1 or 3:4 aspect ratio box with animated corner brackets. When a face is detected, the brackets should transition from Neutral to the Member Teal color.

### Data Chips (Status Badges)
Small, pill-shaped indicators for status:
- "Hadir": Teal background (10% opacity) with Teal text.
- "Terlambat": Orange background (10% opacity) with Orange text.
- "Ditolak": Red background (10% opacity) with Red text.

### Input Fields
Clean, bordered inputs with 1px Slate-200 borders. On focus, the border transitions to the Admin Blue. Labels are placed above the field in `label-md` style.

### Ranking Cards
Used for the "Hasil Ranking Kedisplinan." These include a large numeric rank on the left, the member's photo in a circular mask, and a sparkline representing their attendance trend over the last 30 days.