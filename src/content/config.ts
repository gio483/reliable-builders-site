import { defineCollection, z } from 'astro:content';

// ---------- blog ----------
// Educational / SEO content hub. /blog/[slug]
// Each post targets one keyword cluster (kitchen / bath / ADU + San Diego) and
// links back to the relevant service page. Education-first, per brand voice.
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

export const collections = { blog };
