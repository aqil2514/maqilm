"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTranslations } from "next-intl"; // Gunakan next-intl untuk terjemahan
import { navigationLinks } from "@/lib/data";

const ACTIVE_STYLE =
  "after:block after:w-full after:h-[2px] after:bg-white cursor-default";
const HOVER_STYLE =
  "after:duration-200 transition-all after:block after:w-full after:scale-x-0 after:hover:scale-x-100 after:h-[2px] after:bg-white";

const NavigationLink = ({
  isOnPage,
  url,
  label,
  onClick,
}: {
  isOnPage: boolean;
  url: string;
  label: string;
  onClick?: () => void;
}) => {
  if (isOnPage) {
    return (
      <p key={url} className={ACTIVE_STYLE}>
        {label}
      </p>
    );
  }

  return (
    <Link
      key={url}
      href={url}
      className={isOnPage ? ACTIVE_STYLE : HOVER_STYLE}
      onClick={onClick}
      replace
    >
      {label}
    </Link>
  );
};

export default function NavigationBar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full text-white fixed top-0 left-0 z-50 bg-blue-900">
      <div className="flex justify-between items-center px-4 pt-4 pb-4">
        <Link href="/">
          <h1>Muhamad Aqil Maulana</h1>
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        <div className="hidden md:flex gap-4">
          {navigationLinks.map(({ url, key }) => {
            const isOnPage = new RegExp(`^${url}(/|$)`).test(pathName);

            return (
              <NavigationLink
                key={url}
                isOnPage={isOnPage}
                url={url}
                label={t(key)}
              />
            );
          })}
        </div>
      </div>

      {/* Menu untuk layar kecil */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          {navigationLinks.map(({ url, key }) => {
            const isOnPage = new RegExp(`^${url}(/|$)`).test(pathName);

            return (
              <NavigationLink
                key={url}
                isOnPage={isOnPage}
                url={url}
                label={t(key)}
                onClick={toggleMenu}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
