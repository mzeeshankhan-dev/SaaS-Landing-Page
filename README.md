# SitePilot AI — Marketing Website

A premium, dark-themed SaaS landing page for "SitePilot AI," an AI-powered website growth and optimization platform. Built with React, Tailwind CSS, Framer Motion, and React Three Fiber.

## Stack

- **React 18** + **Vite** — component architecture, fast dev server
- **Tailwind CSS** — design tokens (colors, shadows, radii) defined in `tailwind.config.js`
- **Framer Motion** — scroll reveals, tab transitions, hero parallax, accordion, counters
- **React Three Fiber / drei / three** — ambient AI node field used behind the hero dashboard and final CTA
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/
    ui/Primitives.jsx     # Section, Reveal, SectionHeading, buttons, ScoreRing, MetricBar
    three/AINodeField.jsx # R3F ambient node/ring visualization
    Navbar.jsx
    Hero.jsx               # floating 3D dashboard, mouse parallax
    TrustBand.jsx          # logos + animated counters
    ProblemSolution.jsx    # before/after panels
    ProductShowcase.jsx    # tabbed dashboard (Overview/Performance/SEO/UX/Accessibility/Conversion)
    Scanner.jsx             # interactive AI scanning demo
    FeaturesBento.jsx       # bento grid, 8 features
    Recommendations.jsx     # priority recommendation cards
    Analytics.jsx           # trend charts + date filters
    HowItWorks.jsx          # 4-step timeline
    BeforeAfter.jsx         # draggable comparison slider
    Integrations.jsx
    UseCases.jsx
    Security.jsx
    Testimonials.jsx        # horizontal carousel
    Pricing.jsx              # monthly/yearly toggle, 3 plans
    FAQ.jsx                   # accordion
    FinalCTA.jsx
    Footer.jsx
  App.jsx
  index.css
```

## Design tokens

Defined in `tailwind.config.js`:
- **Background**: `void-950` (#08070C) near-black, with `void-850/800/700` charcoal surfaces
- **Accent**: `violet-500` (#8B5CF6) → `indigo-500` (#6366F1) gradients, `cyan-400` (#22D3EE) highlights
- **Text**: `mist-100…500` neutral scale
- Glass surfaces via the `.glass` utility class in `index.css`

## Notes

- All copy (logos, testimonials, metrics) is placeholder content clearly meant to be replaced with real data.
- Respects `prefers-reduced-motion`.
- The Three.js node field is intentionally subtle and used only in the hero and final CTA, per the brief's "3D supports the story, doesn't distract" guidance.
