"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { FaGithub, FaSitemap, FaGlobe } from "react-icons/fa";
import { usePathname, useRouter } from "@/i18n/routing";

export default function Footer() {
  const years = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Daftar bahasa yang tersedia
  const locales = [
    { code: "en", label: "English" },
    { code: "id", label: "Bahasa Indonesia" },
  ];

  // Fungsi untuk mengganti bahasa
  const changeLanguage = (lang: string) => {
    if (lang !== currentLocale) {
      router.replace(pathname, { locale: lang });

    }
  };

  return (
    <footer className="w-full bg-sky-900 text-white py-4 px-6">
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm sm:text-base text-center">
          © {years} Muhamad Aqil Maulana - All rights reserved
        </p>

        <div className="w-full max-w-xs border-t border-sky-200 my-2" />

        <div className="flex gap-4">
          <Link
            href="https://github.com/aqil2514/main-portfolio"
            target="_blank"
            className="flex items-center gap-1 hover:text-sky-300 transition"
          >
            <FaGithub className="text-lg" />
            <span>Source Code</span>
          </Link>

          <Link
            href="/sitemap.xml"
            target="_blank"
            className="flex items-center gap-1 hover:text-sky-300 transition"
          >
            <FaSitemap className="text-lg" />
            <span>Sitemap</span>
          </Link>
        </div>

        <div className="relative">
          <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
          <select
            value={currentLocale}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-sky-700 text-white py-1 pl-8 pr-3 rounded-md border border-sky-500 focus:outline-none cursor-pointer"
          >
            {locales.map((locale) => (
              <option key={locale.code} value={locale.code}>
              {locale.label}
            </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
}
