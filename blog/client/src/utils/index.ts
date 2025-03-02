import type { Blog, PlaceholderBlog } from "../@types/General";

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
