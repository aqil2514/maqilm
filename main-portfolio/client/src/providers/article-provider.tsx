import { createContext, useContext } from "react";

interface ArticleContextProvider {
  children: React.ReactNode;
  post: SanitySchema.Post;
}

type ArticleContextProps = Omit<ArticleContextProvider, "children">;

const ArticleContext = createContext<ArticleContextProps>(
  {} as ArticleContextProps
);

export default function ArticleProvider({
  children,
  post,
}: ArticleContextProvider) {
  return (
    <ArticleContext.Provider value={{ post }}>
      {children}
    </ArticleContext.Provider>
  );
}

export const useArticleData = () => useContext(ArticleContext);
