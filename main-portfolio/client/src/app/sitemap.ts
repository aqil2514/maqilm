import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maqilm19.vercel.app";
  const locales = ["en", "id"];

  const paths = ["", "/contacts", "/profile", "/projects"];

  // Generate semua kombinasi path dengan locale
  const urls = locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date().toISOString(),
    }))
  );

  return urls;
}
