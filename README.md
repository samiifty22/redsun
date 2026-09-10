# RedSun Agrochem (BD) Ltd — Website

Modern one-page marketing site for RedSun Agrochem (BD) Ltd, built from the
2026 Company Profile deck.

## Pages

- `/` — the one-page site (all sections).
- `/contact` — the **contact form page**. Submissions post to
  [FormSubmit](https://formsubmit.co) and are emailed to `contactForm.deliverTo`
  in `content.ts` (currently `redsunagro.bd@gmail.com`).
  **One-time setup:** the first submission triggers a confirmation email from
  FormSubmit to that address — click the link in it once, and every later
  message lands in the inbox. To use Formspree / Web3Forms / a real backend
  instead, change the `fetch` URL in `src/components/ContactForm.tsx`.

Routing is client-side (`react-router-dom`). `npm run dev` / `npm run preview`
serve the SPA fallback automatically; for static hosting, `public/_redirects`
covers Netlify — other hosts need an equivalent "rewrite everything to
`index.html`" rule.

## Stack

- **React 19 + TypeScript** (Vite 7), **react-router-dom** for the 2 routes
- **Motion for React** (`motion/react`) — hero word-reveal + image clip-in,
  scroll reveals, parallax, count-up stats, scroll-linked timeline, marquees,
  animated sun mark, scroll-spy nav indicator
- Plain CSS with a small design-token system (`src/index.css`). No UI framework.
- **Fonts** — display + body use **General Sans** (Fontshare CDN), with
  **Hanken Grotesk** (Google Fonts) as the loaded fallback; **Caveat** for the
  handwritten margin notes (`--font-hand` / the `.handnote` class). All `<link>`s
  are in `index.html` and the CSS stacks degrade gracefully if a CDN is blocked.
- **Palette** — cream paper / near-black ink / burnt orange (`--orange`),
  defined once at the top of `src/index.css`.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

## Deploying

1. `npm run build` → deploy the `dist/` folder to any static host.
2. Add an SPA rewrite so `/contact` resolves (Netlify: `public/_redirects` is
   already included; Vercel/others: rewrite all paths to `/index.html`).
3. **Activate the contact form:** submit the form once on the live site, then
   open the confirmation email FormSubmit sends to `redsunagro.bd@gmail.com`
   and click the activation link. Until that's done, submissions won't arrive.
4. Image filenames are case-sensitive on real servers — keep them lowercase.

## Changing the content

**Everything editable lives in one file: [`src/data/content.ts`](src/data/content.ts).**
Text, stats, the timeline, team members, partners, phone numbers, and the
hero photo list are all there. Edit a value, save, and the browser updates
itself while `npm run dev` is running.

- **Text** — change what's between the quotes.
- **Add/remove** a team member, partner, stat, milestone, pill, or hero image
  — copy an existing `{ ... }` block inside the `[ ... ]` list, keep the commas.
- **Photos** — put the image in `public/images/`, then point the `src` (hero)
  or relevant field at `"/images/your-file.jpg"`.
- **Hero** — `hero.images[0]` and `[1]` are the two big angular-cut photos on
  desktop (the "marker" silhouette is in `ShapedPhoto.tsx`); every `hero.images`
  entry also becomes a tile in the phone collage, where `hero.badges` (first 3)
  float as stat chips. `hero.headline` is an array, one item per line.
- **Partner logos** — files in `public/images/partners/`. Point
  `partners.list[].logo` at a new file, or set it `""` to show the name only.

Section-specific layout/animation lives in each `src/components/*.tsx` +
matching `.css` file, but you rarely need to touch those for a copy change.

## Structure

```
src/
  data/content.ts         ← ALL site copy + photo paths (edit here)
  lib/motion.ts           shared easing curve
  pages/
    Home.tsx / ContactPage.tsx
  components/
    Nav / Hero / WhoWeAre / Compliance / Leadership /
    Partners / Contact / ContactForm / Footer
    Reveal.tsx             scroll-in wrapper (respects reduced motion)
    Counter.tsx            in-view number count-up
    SunMark.tsx            animated SVG version of the sun icon
public/images/            logo + hero photography
public/images/team/       leadership portraits (from the deck)
public/images/partners/   partner logos (from the deck)
scripts/shot.mjs          dev-only: screenshot the running site at a width
```

## Content notes / open questions for the client

- **Compliance timeline, 2021 milestone** — the deck's sub-date ("21 June
  2017") did not match the milestone year, so the body copy here is a neutral
  placeholder. Confirm the correct date/description.
- **Team photos** — extracted from the deck into `public/images/team/`. To
  replace one, drop a new portrait (roughly 4:5, head-and-shoulders) at the
  same path, or point `leadership.people[].image` at a new file. Set it to
  `""` to fall back to an initials monogram.
- **Partner logos** — extracted from deck page 23 into
  `public/images/partners/`. `daakpeon.png` is low-resolution in the source;
  a vector/PNG from the partner would sharpen it.
- No social links / website domain were provided.

## Animation

All motion respects `prefers-reduced-motion`. Easing is centralised in
`src/lib/motion.ts`. Marquee and decorative loops fall back to static layouts
when reduced motion is requested.
