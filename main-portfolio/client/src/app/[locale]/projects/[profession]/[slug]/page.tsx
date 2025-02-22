import { Metadata } from "next";
import ArticleSlugTemplate from "@/components/templates/article-slug-template";
import { getPost } from "@/lib/sanity/queries/getPost";

interface ProjectsProfessionSlugProps {
  params: {
    locale: "en" | "id";
    profession: string;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectsProfessionSlugProps): Promise<Metadata> {
  const post = await getPost(params.slug) as SanitySchema.Post;
  const locale = params.locale;
  const title = post.displayTitle[locale]

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post does not exist.",
    };
  }

  return {
    title: title + " | Muhamad Aqil Maulana",
    description: "Read more about this topic.",
    openGraph: {
      title: post.title + " | Muhamad Aqil Maulana",
      description: "Read more about this topic.",
      images: [
        {
          url: post.mainImage || "/default-image.jpg", // Gambar utama atau default
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: title + " | Muhamad Aqil Maulana",
      description: "Read more about this topic.",
      images: [post.mainImage || "/default-image.jpg"],
    },
  };
}

export default async function ProjectsProfessionSlug({
  params,
}: ProjectsProfessionSlugProps) {
  const post = await getPost(params.slug);
  return <ArticleSlugTemplate post={post} />;
}
