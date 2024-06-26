// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
const frontmatterSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  image: z.optional(
    z.object({
      url: z.string(),
      alt: z.string(),
    }),
  ),
  tags: z.array(z.string()),
});
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: frontmatterSchema,
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};

export type Frontmatter = z.infer<typeof frontmatterSchema> & {
  lastModified: Date;
};
