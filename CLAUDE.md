# Loungebird Website

Marketing website for the Loungebird iOS/iPad/Mac app - a real-time lounge occupancy tracker for London Heathrow Terminal 5.

## Project Overview

**App Store Link:** https://apps.apple.com/app/loungebird/id6443610959

**Contact:** info@loungebird.app

**Author:** Merrick Sapsford (https://merrick.dev)

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 7
- **Animations:** Framer Motion 12
- **Styling:** CSS Modules with CSS custom properties
- **Linting:** ESLint 9 with TypeScript support

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Landing hero section with device showcase
│   ├── Features.tsx        # Feature grid (6 features)
│   ├── BentoGrid.tsx       # Screenshot bento grid layout
│   ├── Download.tsx        # CTA download section
│   └── Footer.tsx          # Site footer with links
├── pages/
│   ├── Home.tsx            # Main landing page
│   ├── Terms.tsx           # Terms of Use
│   ├── Privacy.tsx         # Privacy Policy
│   └── Disclaimer.tsx      # Disclaimer page
├── styles/
│   ├── global.css          # Global styles and utility classes
│   └── variables.css       # CSS custom properties (colors, spacing, etc.)
├── App.tsx                 # Root component with routing
└── main.tsx                # Entry point

public/
├── images/
│   ├── app-icon.png        # App icon (used in header, footer, download section)
│   ├── screenshots/
│   │   ├── ios/            # iPhone screenshots (1.png, 2.png, 3.png, 4.png)
│   │   ├── ipad/           # iPad screenshots (1.png)
│   │   └── mac/            # Mac screenshots (1.png)
│   └── og-image.png        # Open Graph image for social sharing
└── .well-known/            # Apple app site association
```

## Design System

### Colors (defined in variables.css)

| Variable                 | Value   | Usage                               |
| ------------------------ | ------- | ----------------------------------- |
| `--color-primary`        | #2B3A67 | Deep navy blue (from app icon)      |
| `--color-primary-dark`   | #1A2544 | Dark mode variant for color primary |
| `--color-accent-gold`    | #B8A080 | Champagne gold (luxury accent)      |
| `--color-background`     | #F8F9FC | Soft off-white                      |
| `--color-text-primary`   | #1A1A2E | Main text                           |
| `--color-text-secondary` | #4A4A6A | Secondary text                      |
| `--color-text-muted`     | #8888A0 | Muted/subtle text                   |

### Gradients

- `--gradient-sky`: Linear gradient for hero background (light purples/blues)
- `--gradient-accent`: Primary to primary-light gradient for text accents
- `--gradient-gold`: Gold gradient for luxury accents

### Typography

- **Font Family:** Inter (Google Fonts)
- **Sizes:** xs (0.75rem) to 6xl (4.5rem)
- Title styling uses `clamp()` for responsive sizing

### Spacing Scale

`--space-xs` (4px) through `--space-4xl` (96px)

### Border Radius

`--radius-sm` (8px) through `--radius-full` (9999px)

### Shadows

Four levels: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

## Components

### Hero (`Hero.tsx`)

- Full viewport height landing section
- Two-column layout: content left, device showcase right
- Device showcase shows iPad with iPhone overlay (framed with dark bezels)
- Animated badge with pulsing green dot ("Live Occupancy Data")
- App Store download button
- Scroll indicator at bottom
- Background: gradient + subtle dot pattern

### Features (`Features.tsx`)

Six features in a responsive grid:

1. Real-Time Updates (primary accent)
2. Historic Trends (gold accent)
3. Home Screen Widgets (primary accent)
4. All T5 Lounges (gold accent)
5. Multi-Platform (primary accent)
6. Privacy First (gold accent)

### BentoGrid (`BentoGrid.tsx`)

Screenshot showcase in bento grid layout:

- Large: Live Occupancy (iOS screenshot)
- Medium: Detailed Insights, Dark Mode
- Wide: Widgets
- Full: Mac App

### Download (`Download.tsx`)

Final CTA section with:

- App icon
- Download headline
- App Store button
- Feature checkmarks (Free, No account, Privacy focused)

### Header (`Header.tsx`)

- Fixed position, becomes blurred/elevated on scroll
- Logo (icon + text) links to home
- Navigation: Features, Screenshots (anchor links), Download (App Store)
- Mobile hamburger menu with AnimatePresence

### Footer (`Footer.tsx`)

- Brand section with tagline
- Link groups: Product, Legal, Contact
- Copyright with author link
- "Not affiliated with British Airways" disclaimer

## Animations

All animations use Framer Motion with consistent easing: `[0.16, 1, 0.3, 1]`

- **Hero content:** Fade in + slide up (0.8s duration)
- **Device showcase:** Fade in + slide up (1s duration, 0.2s delay)
- **Feature cards:** Staggered reveal (0.1s stagger, 0.6s duration)
- **Bento items:** Staggered scale + fade (0.1s stagger)
- **Scroll indicator:** Continuous bounce animation

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Routes

| Path          | Component  | Description       |
| ------------- | ---------- | ----------------- |
| `/`           | Home       | Main landing page |
| `/terms`      | Terms      | Terms of Use      |
| `/privacy`    | Privacy    | Privacy Policy    |
| `/disclaimer` | Disclaimer | Disclaimer        |

## Image Requirements

Screenshots should be placed in:

- `public/images/screenshots/ios/` - iPhone screenshots (1.png through 4.png)
- `public/images/screenshots/ipad/` - iPad screenshots (1.png)
- `public/images/screenshots/mac/` - Mac screenshots (1.png)

The Hero component uses:

- `images/screenshots/ipad/1.png` for iPad frame
- `images/screenshots/ios/1.png` for iPhone frame overlay

## Notes

- Dark mode is supported via `prefers-color-scheme` media query
- All external links use `target="_blank"` with `rel="noopener noreferrer"`
- CSS Modules are used throughout (`.module.css` files)
- The site is responsive with breakpoints at 1024px and 640px
