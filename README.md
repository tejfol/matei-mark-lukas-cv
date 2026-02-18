# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Accessibility

The site is built with a11y in mind so reviewers can verify the following:

- **Skip link** — “Skip to main content” (localised) appears on keyboard focus; Tab once from load to focus it, Enter to jump to main content.
- **Semantic structure** — One `<h1>` (name), `<h2>` per section, `<main id="main-content">`, `<nav aria-label="On this page">` for the TOC. Sections use `<section>` with stable IDs for in-page links.
- **Document language** — `<html lang="...">` is set from the current CV locale (en, sv, hu, uk).
- **ARIA** — Decorative icons use `aria-hidden`. Links and buttons have `aria-label` where needed (e.g. email, LinkedIn, theme toggle, locale switch, project cards). The TOC progress bar has `role="progressbar"` and `aria-valuenow` / `aria-valuemin` / `aria-valuemax`.
- **Keyboard** — All interactive elements are focusable. Focus is visible via `:focus-visible` (primary-colored outline). Smooth scrolling is disabled when the user prefers reduced motion.
- **Reduced motion** — If the OS/browser reports `prefers-reduced-motion: reduce`, scroll is instant (no smooth scroll) and the name typewriter animation is disabled (full name and no blinking cursor).
- **Module** — [@nuxt/a11y](https://github.com/nuxt-modules/a11y) is enabled in `nuxt.config.ts` for additional checks and improvements.
