import { getCollection } from "astro:content";
import type { Articles, Blog, PlaceholderBlog } from "../@types/General";

export async function getArticles():Promise<Articles[]> {
  const collections = await getCollection("blog");

  collections.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  const publishedArticles = collections.filter((article) => article.data.pubDate < new Date())

  const articles = publishedArticles.map((article) => ({
    title: article.data.title,
    description: article.data.description,
    imageSrc: article.data.heroImage || "/notfound-image.png",
    category: article.data.category || "No Category",
    author: article.data.author || "Anonymous",
    date: article.data.pubDate.toISOString(),
    link: article.id,
  }));

  return articles;
}

export function getContentCategories(collections: Articles[]) {
  return [
    ...new Set(
      collections.map((article) => article.category).filter(Boolean)
    ),
  ] as string[];
}

export function generatePlaceholderPost(
  totalSlots: number,
  articles: Articles[]
): PlaceholderBlog[] {
  const array = Array.from({ length: totalSlots - articles.length }, () => ({
    link:"#",
    title:"Coming Soon...",
    imageSrc: "/notfound-image.png"
  }));

  return array;
}

export const toTitleCase = (str: string) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());
