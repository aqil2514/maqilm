import { getCollection } from "astro:content";
import type { Blog, PlaceholderBlog } from "../@types/General";

export async function getArticles() {
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

export function getContentCategories(collections: Blog[]) {
  return [
    ...new Set(
      collections.map((article) => article.data.category).filter(Boolean)
    ),
  ] as string[];
}
export function generatePlaceholderPost(
  totalSlots: number,
  articles: Blog[]
): PlaceholderBlog[] {
  const array = Array.from({ length: totalSlots - articles.length }, () => ({
    id: "#",
    data: {
      title: "Coming Soon...",
      heroImage: "/notfound-image.png",
    },
  }));

  return array;
}

export const toTitleCase = (str: string) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());
