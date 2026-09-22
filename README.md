# SDLR Site

Marketing site for **San Diego Landscape Remodeling**.
Astro + Tailwind CSS, deployed to Cloudflare Pages.

## Stack

- **Framework:** Astro 5 (static site, zero JS by default)
- **Styling:** Tailwind CSS + @tailwindcss/typography
- **Fonts:** Cormorant Garamond (display) + Inter (body) — Google Fonts
- **Hosting:** Cloudflare Pages (free tier)
- **Source:** GitHub

## Local development

```bash
# one-time: ensure Node via nvm is active
source ~/.nvm/nvm.sh && nvm use default

# install
npm install

# dev server on http://localhost:4321
npm run dev

# production build
npm run build

# preview built site
npm run preview
```

## Brand palette

- Sage (primary): `#4E5D4A`
- Gold (accent): `#BDA572`
- Paper (cream): `#F5F1E8`
- Ink (body): `#1F1F1F`

## Deployment

Cloudflare Pages auto-deploys on push to `main`. Build command: `npm run build`. Output: `dist/`.

## Hard brand rules

1. **AI-rendered imagery must be labeled "Concept visualization"** — never implied to be a completed SDLR project.
2. **No unsupportable claims** — no "trusted by X homeowners" until we have the homeowners.
3. **Phase 1 geography only** — Bonita, La Mesa, Rancho San Diego. No Phase 2 cities anywhere until Q2.
4. **Credentials are defensible** — every license / insurance / experience claim points to a verifiable source.

## Open pre-launch items

See `/companies/san-diego-landscape-remodeling/website-copy-v1.md` punch list in the Google Drive workspace.
