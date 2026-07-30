# Lucía Alegria Portfolio

Lucía Alegria Talon's portfolio, built with Astro.

## Requirements

- Node.js 20 or later
- npm

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run check
npm run build
```

## Contact Form

The contact form uses `PUBLIC_FORMSPREE_ENDPOINT` when configured. Without it, the form falls back to a `mailto:` submission.

Copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` to the production URL before deploying. Set the real Formspree endpoint before deploying with the contact form enabled.
