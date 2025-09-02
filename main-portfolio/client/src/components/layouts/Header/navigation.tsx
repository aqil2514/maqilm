"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { navigationLinks, professions } from "@/lib/data";
import { usePathname as useNextPathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileNavigationBar() {
  const pathName = usePathname();
  const t = useTranslations("Navigation");
  const [open, setOpen] = useState(false);
  const nextPathname = useNextPathname();
  const locale = nextPathname.split("/")[1] as "id" | "en";

  const isActive = (url: string) =>
    pathName === url || pathName.startsWith(`${url}/`);

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50 md:hidden px-4 py-3 flex items-center justify-between">
      <Link href="/" className="text-lg font-semibold font-young-serif">
        Muhamad Aqil Maulana
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button aria-label="Open menu">
            <AiOutlineMenu size={24} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-3/4 sm:w-1/2 bg-blue-900/90 backdrop-blur text-white"
        >
          <SheetTitle className="font-young-serif text-white text-base">Muhamad Aqil Maulana</SheetTitle>
          <nav className="flex flex-col gap-2 mt-8">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/")
                  ? "font-bold text-yellow-400"
                  : "hover:bg-blue-800"
              }`}
              onClick={() => setOpen(false)}
            >
              {t("home")}
            </Link>

            {/* Profile with dropdown */}
            <Accordion type="single" collapsible>
              <AccordionItem value="profile">
                <AccordionTrigger
                  className={`px-3 py-2 text-left w-full ${
                    isActive("/profile") ? "font-bold text-yellow-400" : ""
                  }`}
                >
                  {t("profile")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-4 flex flex-col gap-1">
                    {professions
                      .filter((prof) => prof.fieldid !== "unselected")
                      .map((prof) => {
                        const href = `/profile/${prof.fieldid}`;
                        const active = pathName === href;

                        return (
                          <Link
                            key={prof.fieldid}
                            href={href}
                            className={`block px-3 py-1 rounded-md text-sm transition-colors ${
                              active
                                ? "bg-slate-700 text-yellow-400 font-medium"
                                : "hover:bg-slate-700 hover:text-yellow-400"
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {locale === "en" ? prof.enLabel : prof.idLabel}
                          </Link>
                        );
                      })}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Projects with dropdown */}
              <AccordionItem value="projects">
                <AccordionTrigger
                  className={`px-3 py-2 text-left w-full ${
                    isActive("/projects") ? "font-bold text-yellow-400" : ""
                  }`}
                >
                  {t("projects")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-4 flex flex-col gap-1">
                    {professions
                      .filter((prof) => prof.fieldid !== "unselected")
                      .map((prof) => {
                        const href = `/projects/${prof.fieldid}`;
                        const active = pathName === href;

                        return (
                          <Link
                            key={prof.fieldid}
                            href={href}
                            className={`block px-3 py-1 rounded-md text-sm transition-colors ${
                              active
                                ? "bg-slate-700 text-yellow-400 font-medium"
                                : "hover:bg-slate-700 hover:text-yellow-400"
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {locale === "en" ? prof.enLabel : prof.idLabel}
                          </Link>
                        );
                      })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Contacts */}
            <Link
              href="/contacts"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/contacts")
                  ? "font-bold text-yellow-400"
                  : "hover:bg-blue-800"
              }`}
              onClick={() => setOpen(false)}
            >
              {t("contacts")}
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
