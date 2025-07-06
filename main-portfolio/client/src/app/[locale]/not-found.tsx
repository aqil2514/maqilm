"use client";

import MainContainer from "@/components/atoms/container/container-main";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <MainContainer className="flex flex-col items-center justify-center text-center gap-6 min-h-screen">
      <Image
        src="/images/Misc/404-page.png"
        width={300}
        height={300}
        alt="Not Found"
        className="animate-bounce"
      />
      <h1 className="text-4xl font-bold text-sky-300">{t("notFoundAlert")}</h1>
      <p className="text-gray-100 max-w-md">{t("notFoundMessage")}</p>
      <Link
        href="/"
        className="px-6 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-700 transition-all"
      >
        {t("notFoundCta")}
      </Link>
    </MainContainer>
  );
}
