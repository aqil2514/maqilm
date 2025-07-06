import { navigationLinks } from "@/lib/data";
import { cn, isActive } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavigation({ setIsMobileOpen }: Props) {
  const pathname = usePathname();
    const t = useTranslations("Navigation");

  return (
    <div className="flex flex-col gap-2 px-4 pb-4 md:hidden bg-gray-800/95 text-white">
      {navigationLinks.map(({ url, key }) => (
        <Link
          key={url}
          href={url}
          replace
          onClick={() => setIsMobileOpen(false)}
          className={cn(
            "px-2 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
            isActive(url, pathname) && "bg-accent text-accent-foreground"
          )}
        >
          {t(key)}
        </Link>
      ))}
    </div>
  );
}
