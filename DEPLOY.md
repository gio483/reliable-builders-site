# DEPLOY — San Diego Landscape Remodeling

Everything you need to take the site from the local repo on your laptop to
`sandiegolandscaperemodeling.com` live on Cloudflare.

Written for you to do on Monday at your desk. Nothing requires you to touch code.

---

## What's done (you don't need to do this)

- 41 pages built and rendering cleanly (10 services, 21 locations, 10 shells)
- Schema.org JSON-LD for LocalBusiness / Service / Place / FAQPage / Breadcrumbs
- Sitemap, robots.txt, OG image, apple-touch-icon, favicon, 404 page
- Privacy policy, terms of use, both CCPA-compliant and legally conservative
- Local git repo initialized with first commit on `main`
- `.gitignore` covers node_modules, dist, `.astro`, `.env`, Cloudflare vars

## What's still open (this document walks you through each one)

1. **Push the repo to GitHub** — 5 min
2. **Connect it to Cloudflare Pages** — 10 min
3. **Point the domain at Cloudflare** — 5 min + DNS propagation
4. **Swap the two Monday placeholders** (Formspree form ID + CSLB license number) — 5 min
5. **Submit the sitemap to Google Search Console** — 10 min
6. **Claim your Google Business Profile** — 20 min (separate, but critical for local SEO)

Total Monday investment: ~1 hour for items 1–5. GBP (item 6) can wait a week.

---

## 1. Push to GitHub

You don't have `gh` (GitHub CLI) installed, so this is done through the web UI
plus a couple of terminal commands.

### 1a. Create the empty repo on GitHub

1. Go to <https://github.com/new>
2. **Repository name:** `sdlr-site`
3. **Description:** `San Diego Landscape Remodeling — editorial marketing site`
4. **Visibility:** Private (you can flip it public later if you want; Cloudflare
   can deploy from either)
5. **Do NOT** initialize with a README, `.gitignore`, or license — the local
   repo already has these. An initialized repo will create conflicts on first push.
6. Click **Create repository**
7. On the next screen, copy the `git remote add origin git@github.com:…/sdlr-site.git`
   line — that's what you paste in the next step

### 1b. Push from your laptop

In a terminal, from the project folder:

```bash
cd /Users/gioazzarello/Projects/sdlr-site

# Paste the remote from GitHub (replace with the exact line GitHub shows you):
git remote add origin git@github.com:YOUR_GH_USERNAME/sdlr-site.git

# First push:
git push -u origin main
```

If SSH complains about authentication, either:
- Use the HTTPS URL GitHub also shows (`https://github.com/…/sdlr-site.git`)
  and sign in with your GitHub username + a personal access token, OR
- Run `ssh-keygen -t ed25519 -C "gio@sandiegolandscaperemodeling.com"` and
  paste the resulting `~/.ssh/id_ed25519.pub` into GitHub → Settings → SSH keys

**Verify:** refresh your GitHub repo page — you should see all 41 pages + the
`src/`, `public/`, and `scripts/` folders.

---

## 2. Connect Cloudflare Pages to the repo

1. Sign in to <https://dash.cloudflare.com/>
2. Left sidebar → **Workers & Pages** → **Create application** → **Pages** tab
   → **Connect to Git**
3. Authorize Cloudflare to read your GitHub account (one-time; GitHub OAuth)
4. Pick the repo: **sdlr-site**
5. **Set up builds and deployments:**
   - **Project name:** `sdlr-site` (this becomes `sdlr-site.pages.dev`)
   - **Production branch:** `main`
   - **Framework preset:** **Astro** (Cloudflare will detect this and pre-fill
     the next two)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** (leave blank / `/`)
   - **Environment variables:** none needed
6. Click **Save and Deploy**

First build takes 90–120 seconds. When it's green, you'll have a preview URL
at `https://sdlr-site.pages.dev` — load it on your phone, check the nav,
a location page, the contact form. Everything except form submissions should
work end-to-end.

**Every future `git push origin main` will auto-deploy.** That's the whole
workflow from here.

---

## 3. Point the domain at Cloudflare

Only do this once you've loaded the `.pages.dev` URL on your phone and
confirmed the site looks right. This is the irreversible-feeling step.

### 3a. Add the domain inside Cloudflare Pages

1. In Cloudflare Pages → **sdlr-site** → **Custom domains** tab
2. **Set up a custom domain**
3. Enter `sandiegolandscaperemodeling.com`
4. Cloudflare will tell you one of two things:

   **(A) If the domain is already on Cloudflare DNS** — it just works.
   Click confirm. Done. SSL is automatic.

   **(B) If the domain is registered elsewhere (GoDaddy, Namecheap, Google
   Domains, Porkbun, etc.)** — Cloudflare will give you two DNS records
   to add at your registrar:
   - A CNAME from `www` → `sdlr-site.pages.dev`
   - An A or CNAME for the apex (`@`) per the exact values Cloudflare shows

   Log in to your registrar's DNS panel, add those records, save. DNS
   propagates in 5 minutes to a few hours — Cloudflare will email you when
   the cert is issued and the domain is live.

5. **Also add** `www.sandiegolandscaperemodeling.com` as a second custom
   domain — Cloudflare auto-redirects `www` to apex (or configure whichever
   direction you prefer under Rules → Redirect Rules).

### 3b. Verify

Once Cloudflare says "Active", pull up `https://sandiegolandscaperemodeling.com`
on your phone in mobile data (not wifi — rules out caching). It should load
with the padlock icon and go straight to the paper-background homepage.

---

## 4. Swap the two Monday placeholders

Both of these are 1-line edits. Do them, commit, push — Cloudflare auto-deploys.

### 4a. Formspree form ID

1. Go to <https://formspree.io/> → sign up / sign in with your office email
2. **New form** → name it `SDLR contact form` → set notifications to
   `office@sandiegolandscaperemodeling.com`
3. Formspree will give you an endpoint like `https://formspree.io/f/xvoqkdpg`
4. Open `src/pages/contact.astro`, find this line (around line 48):

   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

   Replace `YOUR_FORM_ID` with the code Formspree gave you (e.g. `xvoqkdpg`).

5. Save. Commit + push:

   ```bash
   git add src/pages/contact.astro
   git commit -m "Wire Formspree endpoint into contact form"
   git push
   ```

6. When Cloudflare finishes deploying (~2 min), submit a test inquiry from
   your phone. You should get an email. Then tell Formspree the emails are
   legitimate (it'll prompt you once).

**Formspree free tier:** 50 submissions/month. If you're getting more than
that, you're doing well — upgrade to their $10/mo plan.

### 4b. CSLB license number

1. Grab the active CSLB number from Mike's paperwork (or from
   <https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx>
   by searching his name)
2. Open `src/components/Footer.astro`, find line 85:

   ```
   CSLB License #<span class="text-paper/80">[____]</span> · Class B General Contractor ·
   ```

   Replace `[____]` with the actual number (e.g. `1087645`).

3. Commit + push:

   ```bash
   git add src/components/Footer.astro
   git commit -m "Add CSLB license number to footer"
   git push
   ```

**Everywhere else in the copy** ("license number on request", "available on
request") stays as-is. That phrasing is deliberate — we want the footer to
display it but every page body to invite a conversation rather than shout it.

---

## 5. Submit to Google Search Console

Do this the same day the custom domain goes live.

1. Go to <https://search.google.com/search-console>
2. **Add property** → **Domain** (not URL prefix) → enter
   `sandiegolandscaperemodeling.com`
3. Google will give you a TXT record to add to your DNS. Paste it into your
   registrar or Cloudflare DNS, save, wait 5 min, click **Verify**
4. Once verified, left sidebar → **Sitemaps** → paste
   `https://sandiegolandscaperemodeling.com/sitemap-index.xml` → **Submit**
5. Within 24–72 hours Google will have all 40 URLs in its index queue

**Bing** is 20% of the search market and trivial to add — same sitemap URL,
same concept, at <https://www.bing.com/webmasters>.

---

## 6. Claim your Google Business Profile

This is separate from the website but it's the single highest-leverage thing
you can do for local search. Allocate 20 minutes.

1. <https://www.google.com/business/> → **Manage now**
2. Business name: **San Diego Landscape Remodeling**
3. Category: **Landscape designer** (primary). Add **General contractor** and
   **Landscaper** as secondary categories after claim.
4. Address: `9019 Park Plaza Dr, Unit H, La Mesa, CA 91942`
5. Service area: San Diego County (you can pick cities — add all 21 we have
   location pages for: La Mesa, Del Mar, Rancho Santa Fe, Poway, Rancho
   Bernardo, Scripps Ranch, Carmel Valley, La Jolla, Point Loma, Coronado,
   Mission Hills, Kensington, Talmadge, Solana Beach, Encinitas, El Cajon,
   Alpine, Jamul, Eastlake, Santaluz, Rancho San Diego)
6. Phone: `(619) 613-2511`
7. Website: `https://sandiegolandscaperemodeling.com`
8. Verify by postcard (takes 5–14 days — Google mails a code to the address)
9. **After verification:** upload 10–15 photos of completed projects, add
   hours (`By appointment`), paste your positioning statement
   ("By design, not by dispatch.") into the description, set service menu
   items to match the 10 services on the site.

**Ask your first three happy clients for Google reviews.** Don't solicit fake
ones — the platform detects this and will suspend your profile. Just ask the
real ones.

---

## Optional: Cloudflare Web Analytics

Privacy-friendly, no cookies, free, no script-loader overhead. Takes 2 minutes.

1. Cloudflare dash → **Analytics & Logs** → **Web Analytics**
2. **Add a site** → `sandiegolandscaperemodeling.com`
3. Cloudflare gives you a `<script>` tag — paste it into
   `src/layouts/BaseLayout.astro`, inside `<head>`, just above `</head>`
4. Commit + push

You'll have traffic data in ~15 min after first page load.

---

## How to make small content edits later

The copy in every content page lives as Markdown in `src/content/`. So if
you want to tweak the copy on the La Jolla location page:

1. Open `src/content/locations/la-jolla.md` in any text editor
2. Edit the prose
3. Save
4. In terminal:

   ```bash
   git add src/content/locations/la-jolla.md
   git commit -m "Tighten La Jolla location copy"
   git push
   ```

5. Cloudflare redeploys in ~2 min

Shell pages (homepage, about, process, etc.) live in `src/pages/*.astro`.
Same workflow.

To preview a change before pushing:

```bash
export PATH="$HOME/.nvm/versions/node/v24.15.0/bin:$PATH"
npm run dev -- --host
```

Then open `http://192.168.0.56:4321/` on your phone (the terminal will print
the current network URL — your IP can change).

---

## Emergency rollback

If a push breaks production:

```bash
git log --oneline -5       # find the last good commit
git revert HEAD            # creates a NEW commit that undoes the last push
git push                   # Cloudflare redeploys the reverted state
```

Or, faster: in Cloudflare Pages → sdlr-site → **Deployments**, click the last
green deployment → **Rollback to this deployment**. Instant.

---

## Quick reference — file paths for the Monday edits

| Change | File | Line | Find | Replace with |
|---|---|---|---|---|
| Formspree ID | `src/pages/contact.astro` | 48 | `YOUR_FORM_ID` | your Formspree code |
| CSLB number | `src/components/Footer.astro` | 85 | `[____]` | e.g. `1087645` |

---

*Licensed and insured general contractor, operating under Mike's Class B
license — license number on request.*
