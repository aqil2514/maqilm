"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

export default function DropdownMenuCategory({
  categories,
}: {
  categories: string[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryQuery = searchParams.get("category");
  const [categoryIcon, setCategoryIcon] = useState<string>(categoryQuery || "Kategori");

  useEffect(() => {
    if (categoryQuery) {
      setCategoryIcon(categoryQuery);
    }
  }, [categoryQuery]);

  const updateCategory = (newCategory: string) => {
    setCategoryIcon(newCategory);
    router.replace(`?category=${newCategory}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="max-w-[250px] md:min-w-52 md:max-w-full text-left px-4 py-2 bg-zinc-800 border border-zinc-500 rounded-md overflow-hidden text-ellipsis">
        {categoryIcon}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-sm w-full md:max-w-xs lg:max-w-sm">
        <DropdownMenuLabel className="text-sm md:text-base">Kategori</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem key="all" onClick={() => updateCategory("All")}>
          All
        </DropdownMenuItem>
        {categories.map((category) => (
          <DropdownMenuItem
            key={category}
            onClick={() => updateCategory(category)}
            className="truncate"
          >
            {category}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
