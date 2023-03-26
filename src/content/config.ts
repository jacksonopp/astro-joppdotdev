// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string().optional(),
    oneword: z.string(),
    summary: z.string().optional(),
    published: z.string().optional(),
    heroSide: z.union([z.literal("left"), z.literal("right")]).optional(),
  }),
  /* ... */
});

const heroCollection = defineCollection({});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  hero: heroCollection,
};
