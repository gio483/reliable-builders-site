import { defineCollection, z } from 'astro:content';

// ---------- blog ----------
// Educational / SEO content hub. /blog/[slug]
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Cost & Planning',
      'Kitchens',
      'Bathrooms',
      'ADUs',
      'Hiring',
    ]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    excerpt: z.string(),
  }),
});

// ---------- locations ----------
// One page per city/neighborhood we serve. /serving/[slug]
// ~1,500+ words of genuinely local content per market: permitting jurisdiction,
// housing stock & era, ADU rules, neighborhood character. Interlinked to every
// service and to nearby locations (same pattern as the SDLR site).
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    // `slug` is derived from the filename — do NOT declare it here.
    city: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    primaryKeyword: z.string(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    // One-line positioning for cards + the hero.
    tagline: z.string().optional(),
    heroImage: z.string().optional(),
    // Nearby communities for the cross-link block.
    relatedLocations: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, locations };
