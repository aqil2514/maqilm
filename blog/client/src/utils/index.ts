import type { InferEntrySchema, RenderedContent } from "astro:content";

interface Blog<T extends "blog" = "blog"> {
  id: string;
  body?: string;
  collection: T;
  data: InferEntrySchema<T>;
  rendered?: RenderedContent;
  filePath?: string;
}

export function getContentCategories(collections: Blog[]) {
  return [
    ...new Set(
      collections.map((article) => article.data.category).filter(Boolean)
    ),
  ] as string[];
}
