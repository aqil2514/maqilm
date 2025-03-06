import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface Blog<T extends "blog" = "blog"> {
  id: string;
  body?: string;
  collection: T;
  data: InferEntrySchema<T>;
  rendered?: RenderedContent;
  filePath?: string;
}

export interface Articles {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  author: string;
  date: string;
  link: string;
}

export type PlaceholderBlog = Pick<Articles, "link" | "title"| "imageSrc">

