"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/routing";
import { usePathname as useNextPathname } from "next/navigation";
import { useTranslations } from "next-intl";
import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function NavigationBar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const nextPathname = useNextPathname();
  const locale = nextPathname.split("/")[1] as "id" | "en";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  return (
    <div
      className={cn(
        "hidden md:flex justify-between p-4 transition-colors duration-300",
        !isHomePage && "w-screen fixed top-0 left-0 z-50",
        isHomePage
          ? scrolled
            ? "bg-gray-900/90 backdrop-blur shadow-md"
            : "bg-transparent"
          : "bg-gray-900/95 backdrop-blur"
      )}
    >
      <Link href="/" className="text-white z-50 font-young-serif">
        Muhamad Aqil Maulana
      </Link>

      <NavigationMenu className="w-screen z-50 text-white">
        <NavigationMenuList className="flex justify-between">
          <NavItem href="/" label={t("home")} />

          <DropdownMenu
            baseHref="/profile"
            label={t("profile")}
            locale={locale}
          />

          <DropdownMenu
            baseHref="/projects"
            label={t("projects")}
            locale={locale}
          />

          <NavItem href="/contacts" label={t("contacts")} />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
