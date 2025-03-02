import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface Blog<T extends "blog" = "blog"> {
  id: string;
  body?: string;
  collection: T;
  data: InferEntrySchema<T>;
  rendered?: RenderedContent;
  filePath?: string;
}

export interface PlaceholderBlog {
  id: string;
  data: {
    title: string;
    heroImage: string;
  };
}
