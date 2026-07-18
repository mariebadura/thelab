# The Lab — waitlist site

The public waitlist / early-access page for an unannounced app for UK solopreneurs.

**The product's working name is deliberately not mentioned anywhere in this repo.** Publicly
the project is just "The Lab" — keep it that way in code, copy, and commit messages.

Next.js 16 (App Router) + Tailwind 4, static export.

## Run locally

```bash
npm run dev        # http://localhost:3000
npm run lint
npm run build      # static export → out/
```

## Deploying

Push to `main` — the GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the
static export and publishes it to GitHub Pages at https://thelab.mariebadura.com.

Config lives in `site.config.ts`: Formspree form ID, GoatCounter site code (analytics stay
disabled while it's empty), `siteUrl` (used for Open Graph tags), and the contact email.

## Structure

- `app/page.tsx` — the page: hero, wedge section, how-it-works steps, three feature cards,
  deadlines section, waitlist form, footer
- `components/screens.tsx` + `components/PhoneFrame.tsx` — the mocked app screens shown in
  the phone frames (gallery at `/screens`, unlinked)
- `components/WaitlistForm.tsx` — client component; Formspree POST, honeypot,
  idle/submitting/success/error states, fires the `waitlist-submit` GoatCounter event
- `app/privacy/page.tsx` — GDPR privacy page (required from visitor one)
- `app/globals.css` — design tokens (Sora/Inter, coral `#F4845F`, gradient
  coral→pink→grape used once per page)
- `app/icon.svg` — favicon: lab flask on the brand gradient
- `site.config.ts` — every value that changes at launch, in one place
