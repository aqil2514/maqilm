import { client } from "../client"
import { urlFor } from "../helper";

const groq = `
*[_type=="post"]{
  title,
  displayTitle,
  slug,
  author,
  mainImage,
  categories,
  publishedAt,
  i18nBlockContent
}`

export const getAllPost = async () => {
  const posts = await client.fetch(groq);

  return posts.map((post: any) => ({
    ...post,
    mainImage: post.mainImage ? urlFor(post.mainImage).url() : null,
  }));
};