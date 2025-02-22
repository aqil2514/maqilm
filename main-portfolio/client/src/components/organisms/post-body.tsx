import { useArticleData } from "@/providers/article-provider";
import { PortableText } from "next-sanity";
import { useParams } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/helper";
import InteractiveImage from "../atoms/image-interactive";

export default function PostBody() {
  const params = useParams();
  const locale = params.locale as string;

  const { post } = useArticleData();
  const content = post.i18nBlockContent[locale as "en" | "id"] || [];

  return (
    <div className="prose prose-lg max-w-3xl mx-auto p-0 md:p-6 lg:p-8 text-white">
      <PortableText
        value={content}
        components={{
          types: {
            image: ({value}) => <InteractiveImage value={value} />
          },
          marks: {
            strong: ({ children }) => (
              <strong className="font-bold text-white">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-gray-300">{children}</em>
            ),
            link: ({ children, value }) => (
              <a
                href={value.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {children}
              </a>
            ),
          },
          block: {
            h1: ({ children }) => (
              <h1 className="text-2xl md:text-4xl font-bold mt-8">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl md:text-3xl font-semibold mt-6">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg md:text-2xl font-semibold mt-4">{children}</h3>
            ),
            normal: ({ children }) => (
              <p className="leading-relaxed text-gray-300">{children}</p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 px-6 italic text-lg text-gray-20000 dark:text-gray-200 before:text-5xl my-auto font-mono">
                {children}
              </blockquote>
            )
          },
          list: {
            bullet: ({ children }) => (
              <ul className="list-disc list-inside space-y-2">{children}</ul>
            ),
            number: ({ children }) => (
              <ol className="list-decimal list-inside space-y-2">{children}</ol>
            ),
          },
          listItem: {
            bullet: ({ children }) => <li className="ml-4">{children}</li>,
            number: ({ children }) => <li className="ml-4">{children}</li>,
          },
        }}
      />
    </div>
  );
}
