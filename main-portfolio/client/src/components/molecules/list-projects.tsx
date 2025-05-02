import { Badge } from "@/components/atoms/badge";
import Button from "@/components/atoms/button-built-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/molecules/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const ProjectsList: React.FC<{ projects: GenType.CardImage[] }> = ({
  projects,
}) => {
  const t = useTranslations("Projects");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] as GenType.Language;

  return (
    <>
      {projects.map((project) => {
        const isOtherHost = project.slug?.startsWith("https");

        return (
          <Card
            key={project.id}
            className="h-[480px] py-4 overflow-y-scroll no-scrollbar bg-slate-800 px-2 border-double border-8 border-sky-400"
          >
            <figure className="relative h-60 w-full overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="object-cover rounded-md duration-200 hover:scale-110"
              />
            </figure>
            <CardTitle className="text-white font-young-serif font-normal my-2">
              {project.name}
            </CardTitle>
            <CardDescription className="flex flex-wrap gap-2 mb-2">
              {project.group!.map((category, i) => (
                <Badge key={i}>{category}</Badge>
              ))}
            </CardDescription>
            <CardContent className="font-poppins text-white">
              {project.desc[locale]}
            </CardContent>
            <CardFooter className="flex gap-4">
              <Link href={`${project.ctaLink}`} target="_blank">
                <Button styleTemplate="yuhomyan" styleNumber={1}>
                  {project.ctaText ? project.ctaText[locale] : "No Setting"}
                </Button>
              </Link>
              {project.downloadLink && project.downloadText && (
                <Link href={`${project.downloadLink}`} download>
                  <Button styleTemplate="yuhomyan" styleNumber={1}>
                    {project.downloadText[locale]}
                  </Button>
                </Link>
              )}
              {project.repoLink && project.repoText && (
                <Link href={`${project.repoLink}`}>
                  <Button styleTemplate="yuhomyan" styleNumber={1}>
                    {project.repoText[locale]}
                  </Button>
                </Link>
              )}
              {project.slug && (
                <Link
                  href={
                    isOtherHost ? project.slug : `${pathname}/${project.slug}`
                  }
                  target={isOtherHost ? "_blank" : "_self"}
                >
                  <Button styleTemplate="yuhomyan" styleNumber={1}>
                    {t("seeArticle")}
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
