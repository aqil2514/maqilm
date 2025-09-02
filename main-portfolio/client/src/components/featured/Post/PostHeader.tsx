import { useParams } from "next/navigation";
import Image from "next/image";

import { useArticleData } from "@/providers/article-provider";

import moment from "moment";
import "moment/locale/id"; 
import "moment/locale/en-gb"; 

export default function PostHeader() {
  const params = useParams();
  const locale = params.locale as string;

  const { post } = useArticleData();
  const title = post.displayTitle[locale as "en" | "id"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Gambar utama */}
      {post.mainImage && (
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] overflow-hidden rounded-lg">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      )}

      {/* Judul */}
      <div className="mt-6 text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white leading-tight">
          {title}
        </h1>
        
        {/* Format tanggal dengan locale yang sesuai */}
        <em className="my-2">
          {moment(post.publishedAt)
            .locale(locale)
            .format("dddd, D MMMM YYYY, HH:mm:ss")}
        </em>
      </div>
    </div>
  );
}
