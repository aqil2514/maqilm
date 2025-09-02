"use client";

import { Suspense } from "react";
import { notFound } from "next/navigation";

import ArticleProvider from "@/providers/article-provider";

import MainContainer from "../layouts/container/ContainerMain";
import PostHeader from "../featured/Post/PostHeader";
import PostBody from "../featured/Post/PostBody";

interface ArticleSlugTemplateProps {
  post?: SanitySchema.Post;
}

export default function ArticleSlugTemplate({
  post,
}: ArticleSlugTemplateProps) {
  if (!post) return notFound();

  return (
    <MainContainer>
      <ArticleProvider post={post}>
        <article className="max-w-3xl mx-auto py-8 px-4 md:px-6 text-white">
          <Suspense fallback={<div>Loading header...</div>}>
            <PostHeader />
          </Suspense>

          <Suspense fallback={<div>Loading content...</div>}>
            <PostBody />
          </Suspense>
        </article>
      </ArticleProvider>
    </MainContainer>
  );
}
