import { client } from "../client";
import { urlFor } from "../helper";

export const getPost = async (slug: string) => {
  const groq = `
    *[_type=="post" && slug.current=="${slug}"]{
      title,
      displayTitle,
      slug,
      author,
      mainImage,
      categories,
      publishedAt,
      i18nBlockContent
    }[0]
  `;

  const post = await client.fetch(groq, {}, { cache: "no-store" });

  return post
    ? {
        ...post,
        mainImage: post.mainImage ? urlFor(post.mainImage).url() : null,
      }
    : null;
};
