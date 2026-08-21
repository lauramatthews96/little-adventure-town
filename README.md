# Little Adventure Town

Static website for the indoor adventure play café on Newgate Street, Bishop Auckland.

## Edit business details

All prices, hours, phone, email, address, social URLs and the Bookwhen URL live in one file:

`src/config/site.ts`

Anything still unknown is `TO_CONFIRM` and shows as a yellow **To confirm** marker on the site. Replace those values before launch — do not invent them in page copy.

## Photos

Drop photographs here, then set the matching `image` path on each zone in `src/config/site.ts`:

`public/images/zones/under-the-sea.jpg` (1600 × 1000, or similar landscape)

Same pattern for `the-beach`, `dinosaur`, `the-castle`, `the-farm`, `space`.

Until then, labelled SVG placeholders are shown on purpose.

## Bookwhen

Set `booking.pageUrl` (for example `https://bookwhen.com/your-slug`). The embed on `/book` is isolated in `src/components/BookwhenEmbed.astro`.

## Local development

Needs Node 22+.

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Deploy

Netlify, connected to GitHub, builds on push (`netlify.toml`). Forms on Contact and Parties use Netlify Forms — enable form detection on the site.
