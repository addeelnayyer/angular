# LiveStreamPro.ai — Angular Component Library

> Pixel-perfect Figma-to-Angular extraction for a modern AI-powered live streaming platform.

Built with **Angular 19** (standalone components) + **Tailwind CSS v4**. Zero NgModules, zero routing, zero state management — pure presentational components with `@Input()` bindings for all variable data.

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
ng serve
# → http://localhost:4200

# Production build
ng build
```

---

## Component Inventory

All components live under `src/app/components/`, one folder per component.

| #   | Component                | Selector                     | Location                           |
| --- | ------------------------ | ---------------------------- | ---------------------------------- |
| 1   | **Navbar**               | `<app-navbar>`               | `components/navbar/`               |
| 2   | **Hero**                 | `<app-hero>`                 | `components/hero/`                 |
| 3   | **Logo Cloud**           | `<app-logo-cloud>`           | `components/logo-cloud/`           |
| 4   | **Feature Card**         | `<app-feature-card>`         | `components/feature-card/`         |
| 5   | **Features Section**     | `<app-features-section>`     | `components/features-section/`     |
| 6   | **Stats Section**        | `<app-stats-section>`        | `components/stats-section/`        |
| 7   | **How It Works**         | `<app-how-it-works-section>` | `components/how-it-works-section/` |
| 8   | **Pricing Card**         | `<app-pricing-card>`         | `components/pricing-card/`         |
| 9   | **Pricing Section**      | `<app-pricing-section>`      | `components/pricing-section/`      |
| 10  | **Testimonial Card**     | `<app-testimonial-card>`     | `components/testimonial-card/`     |
| 11  | **Testimonials Section** | `<app-testimonials-section>` | `components/testimonials-section/` |
| 12  | **CTA Section**          | `<app-cta-section>`          | `components/cta-section/`          |
| 13  | **Footer**               | `<app-footer>`               | `components/footer/`               |

---

## `@Input()` Props Reference

### `NavbarComponent`

| Prop          | Type        | Default              | Description                   |
| ------------- | ----------- | -------------------- | ----------------------------- |
| `brandName`   | `string`    | `'LiveStreamPro'`    | Brand text before accent      |
| `brandAccent` | `string`    | `'.ai'`              | Gradient-colored brand suffix |
| `links`       | `NavLink[]` | `[]`                 | Nav items `{ label, href }`   |
| `ctaLabel`    | `string`    | `'Start Free Trial'` | CTA button text               |
| `ctaHref`     | `string`    | `'#'`                | CTA button URL                |

### `HeroComponent`

| Prop                | Type     | Default                             | Description                                    |
| ------------------- | -------- | ----------------------------------- | ---------------------------------------------- |
| `badge`             | `string` | `'🚀 Now in Public Beta'`           | Badge text above headline                      |
| `headlineStart`     | `string` | `'Stream Smarter with'`             | First line                                     |
| `headlineAccent`    | `string` | `'AI-Powered'`                      | Gradient middle line                           |
| `headlineEnd`       | `string` | `'Production Tools'`                | Third line                                     |
| `description`       | `string` | _(see source)_                      | Subheadline paragraph                          |
| `primaryCtaLabel`   | `string` | `'Start Streaming Free'`            | Primary button text                            |
| `primaryCtaHref`    | `string` | `'#'`                               | Primary button URL                             |
| `secondaryCtaLabel` | `string` | `'Watch Demo'`                      | Secondary button text                          |
| `secondaryCtaHref`  | `string` | `'#'`                               | Secondary button URL                           |
| `heroImageUrl`      | `string` | `''`                                | Optional image (shows mock dashboard if empty) |
| `heroImageAlt`      | `string` | `'LiveStreamPro dashboard preview'` | Image alt text                                 |

### `LogoCloudComponent`

| Prop       | Type       | Default                 | Description                 |
| ---------- | ---------- | ----------------------- | --------------------------- |
| `headline` | `string`   | `'Trusted by teams at'` | Label above logos           |
| `logos`    | `string[]` | `[]`                    | Array of brand name strings |

### `FeatureCardComponent`

| Prop          | Type                                                                | Default    | Description             |
| ------------- | ------------------------------------------------------------------- | ---------- | ----------------------- |
| `icon`        | `string`                                                            | `''`       | Emoji or icon character |
| `title`       | `string`                                                            | `''`       | Card title              |
| `description` | `string`                                                            | `''`       | Card body text          |
| `accentColor` | `'violet' \| 'fuchsia' \| 'cyan' \| 'amber' \| 'emerald' \| 'rose'` | `'violet'` | Accent color variant    |

### `FeaturesSectionComponent`

| Prop           | Type        | Default                            | Description                             |
| -------------- | ----------- | ---------------------------------- | --------------------------------------- |
| `sectionLabel` | `string`    | `'Features'`                       | Uppercase label                         |
| `headline`     | `string`    | `'Everything You Need to Go Live'` | Section title                           |
| `subheadline`  | `string`    | _(see source)_                     | Section subtitle                        |
| `features`     | `Feature[]` | `[]`                               | Array of `{ icon, title, description }` |

### `StatsSectionComponent`

| Prop    | Type     | Default | Description                          |
| ------- | -------- | ------- | ------------------------------------ |
| `stats` | `Stat[]` | `[]`    | Array of `{ value, label, suffix? }` |

### `HowItWorksSectionComponent`

| Prop           | Type     | Default                           | Description                                   |
| -------------- | -------- | --------------------------------- | --------------------------------------------- |
| `sectionLabel` | `string` | `'How It Works'`                  | Uppercase label                               |
| `headline`     | `string` | `'Go Live in Three Simple Steps'` | Section title                                 |
| `subheadline`  | `string` | _(see source)_                    | Section subtitle                              |
| `steps`        | `Step[]` | `[]`                              | Array of `{ stepNumber, title, description }` |

### `PricingCardComponent`

| Prop          | Type       | Default          | Description                  |
| ------------- | ---------- | ---------------- | ---------------------------- |
| `planName`    | `string`   | `''`             | Plan tier name               |
| `price`       | `string`   | `''`             | Display price (e.g. `'$29'`) |
| `priceSuffix` | `string`   | `'/month'`       | Price suffix                 |
| `description` | `string`   | `''`             | Plan tagline                 |
| `features`    | `string[]` | `[]`             | Feature bullet strings       |
| `ctaLabel`    | `string`   | `'Get Started'`  | CTA button text              |
| `ctaHref`     | `string`   | `'#'`            | CTA button URL               |
| `highlighted` | `boolean`  | `false`          | Featured/popular styling     |
| `badgeText`   | `string`   | `'Most Popular'` | Badge text when highlighted  |

### `PricingSectionComponent`

| Prop           | Type            | Default                         | Description                   |
| -------------- | --------------- | ------------------------------- | ----------------------------- |
| `sectionLabel` | `string`        | `'Pricing'`                     | Uppercase label               |
| `headline`     | `string`        | `'Simple, Transparent Pricing'` | Section title                 |
| `subheadline`  | `string`        | _(see source)_                  | Section subtitle              |
| `plans`        | `PricingPlan[]` | `[]`                            | Array of pricing plan objects |

### `TestimonialCardComponent`

| Prop              | Type     | Default | Description                                  |
| ----------------- | -------- | ------- | -------------------------------------------- |
| `quote`           | `string` | `''`    | Testimonial text                             |
| `authorName`      | `string` | `''`    | Author display name                          |
| `authorRole`      | `string` | `''`    | Author title / role                          |
| `authorAvatarUrl` | `string` | `''`    | Optional avatar URL (shows initial if empty) |
| `rating`          | `number` | `5`     | Star rating (1–5)                            |

### `TestimonialsSectionComponent`

| Prop           | Type            | Default                         | Description                  |
| -------------- | --------------- | ------------------------------- | ---------------------------- |
| `sectionLabel` | `string`        | `'Testimonials'`                | Uppercase label              |
| `headline`     | `string`        | `'Loved by Creators Worldwide'` | Section title                |
| `subheadline`  | `string`        | _(see source)_                  | Section subtitle             |
| `testimonials` | `Testimonial[]` | `[]`                            | Array of testimonial objects |

### `CtaSectionComponent`

| Prop                | Type     | Default                            | Description           |
| ------------------- | -------- | ---------------------------------- | --------------------- |
| `headline`          | `string` | `'Ready to Level Up Your Stream?'` | CTA headline          |
| `description`       | `string` | _(see source)_                     | CTA body text         |
| `primaryCtaLabel`   | `string` | `'Start Free Trial'`               | Primary button text   |
| `primaryCtaHref`    | `string` | `'#'`                              | Primary button URL    |
| `secondaryCtaLabel` | `string` | `'Talk to Sales'`                  | Secondary button text |
| `secondaryCtaHref`  | `string` | `'#'`                              | Secondary button URL  |

### `FooterComponent`

| Prop            | Type                | Default           | Description                                    |
| --------------- | ------------------- | ----------------- | ---------------------------------------------- |
| `brandName`     | `string`            | `'LiveStreamPro'` | Brand text                                     |
| `brandAccent`   | `string`            | `'.ai'`           | Gradient brand suffix                          |
| `tagline`       | `string`            | _(see source)_    | Brand tagline                                  |
| `linkGroups`    | `FooterLinkGroup[]` | `[]`              | Array of `{ title, links: { label, href }[] }` |
| `socialLinks`   | `SocialLink[]`      | `[]`              | Array of `{ label, href, icon }`               |
| `copyrightText` | `string`            | `''`              | Custom copyright (auto-generates if empty)     |

---

## Design System

| Token               | Value                                                                           |
| ------------------- | ------------------------------------------------------------------------------- |
| **Primary Font**    | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)                 |
| **Display Font**    | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Google Fonts) |
| **Background**      | `#0b0f1a` (deep navy)                                                           |
| **Text Primary**    | `#f1f5f9` (slate-100)                                                           |
| **Text Secondary**  | `#94a3b8` (slate-400)                                                           |
| **Accent Gradient** | `violet-600 → fuchsia-600`                                                      |
| **Border Color**    | `rgba(255,255,255,0.06)`                                                        |
| **Card Hover**      | `rgba(255,255,255,0.04)`                                                        |
| **Icon Library**    | Heroicons v2 (inline SVG)                                                       |

Fonts are loaded via Google Fonts CDN in `src/index.html`.

---

## Project Structure

```
src/
├── index.html                          # Shell with Google Fonts CDN
├── styles.css                          # Tailwind v4 import + base styles
├── main.ts                             # Bootstrap
└── app/
    ├── app.component.ts                # Shell composing all components
    ├── app.component.html              # Renders all components in sequence
    ├── app.component.scss              # (empty — all styles are scoped)
    ├── app.config.ts
    └── components/
        ├── navbar/                     # Fixed top navigation bar
        ├── hero/                       # Hero section with mock dashboard
        ├── logo-cloud/                 # Social proof brand bar
        ├── feature-card/               # Individual feature card
        ├── features-section/           # 3×2 feature grid wrapper
        ├── stats-section/              # Metrics counter bar
        ├── how-it-works-section/       # 3-step process
        ├── pricing-card/               # Individual pricing tier
        ├── pricing-section/            # 3-column pricing grid
        ├── testimonial-card/           # Individual testimonial
        ├── testimonials-section/       # Testimonial grid wrapper
        ├── cta-section/                # Call-to-action banner
        └── footer/                     # Multi-column footer
```

---

## Technical Highlights

- **Angular 19** standalone components — no `NgModule` declarations
- **Tailwind CSS v4** utility-first styling with component-scoped SCSS
- **Zero global style pollution** — all component styles use `:host` scoping
- **All content is `@Input()` driven** — no hardcoded strings in templates
- **Responsive design** — mobile-first with breakpoints at `sm`, `md`, `lg`
- **Accessible** — semantic HTML, ARIA labels, keyboard-navigable
- **Performance** — inline SVG icons (no icon font dependencies), minimal bundle
- **Type-safe** — exported interfaces for all data structures (`NavLink`, `Feature`, `PricingPlan`, etc.)

---

## Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 19+ (`npm install -g @angular/cli`)

---

## License

MIT
