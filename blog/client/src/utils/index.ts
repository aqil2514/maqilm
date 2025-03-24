import { getCollection } from "astro:content";
import type { Articles, Blog, PlaceholderBlog } from "../@types/General";

export async function getArticles(): Promise<Articles[]> {
  const collections = await getCollection("blog");

  collections.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  const publishedArticles = collections.filter(
    (article) => article.data.pubDate < new Date()
  );

  const articles = publishedArticles.map((article) => ({
    title: article.data.title,
    description: article.data.description,
    imageSrc: article.data.heroImage || "/notfound-image.png",
    category:
      article.data.category && article.data.category.length > 0
        ? article.data.category[0]
        : "No Category",
    subCategory:
      article.data.category && article.data.category.length > 0
        ? article.data.category[1]
        : "No Sub Category",
    author: article.data.author || "Anonymous",
    date: article.data.pubDate.toISOString(),
    link: article.id,
  }));

  return articles;
}

export function getContentCategories(collections: Articles[]) {
  const categoryMap = [
    ...new Set(collections.map((article) => article.category).filter(Boolean)),
  ] as string[];

  return categoryMap;
}

export function getContentSubCategories(collections: Articles[]) {
  const categoryMap = collections.reduce((acc, article) => {
    if (article.category && article.subCategory) {
      if (!acc[article.category]) {
        acc[article.category] = new Set();
      }
      acc[article.category].add(article.subCategory);
    }
    return acc;
  }, {} as Record<string, Set<string>>);

  const result = Object.entries(categoryMap).map(
    ([category, subCategories]) => ({
      category,
      subCategories: Array.from(subCategories),
    })
  );

  return result;
}

export function generatePlaceholderPost(
  totalSlots: number,
  articles: Articles[]
): PlaceholderBlog[] {
  const array = Array.from({ length: totalSlots - articles.length }, () => ({
    link: "#",
    title: "Coming Soon...",
    imageSrc: "/notfound-image.png",
  }));

  return array;
}

export const toTitleCase = (str: string) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const toUriComponents = (str: string) => {
  return encodeURIComponent(str.toLowerCase().replaceAll(" ", "-"));
};
