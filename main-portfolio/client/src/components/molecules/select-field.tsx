"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/molecules/select";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { professions } from "@/lib/data";
import { useRouter } from "@/i18n/routing";

export function SelectField() {
  const t = useTranslations("General");
  const pathname = usePathname();
  const params = useParams();
  const field = params.profession as string;
  const locale = pathname.split("/")[1];
  const section = pathname.split("/")[2];
  const router = useRouter();

  const changeHandler = (e: string) => {
    if (e === "unselected") return router.replace(`/${section}`);
    return router.replace(`/${section}/${e}`);
  };

  return (
    <Select
      defaultValue={field || "unselected"}
      onValueChange={(e) => changeHandler(e)}
    >
      <SelectTrigger className="w-[250px] bg-zinc-800 border-zinc-500">
        <SelectValue placeholder={t("selectProfession")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("selectProffesionDialogTitle")}</SelectLabel>
          {professions.map((prof) => (
            <SelectItem key={prof.fieldid} value={prof.fieldid}>
              {locale === "en" ? prof.enLabel : prof.idLabel}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
