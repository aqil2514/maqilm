"use client";

import Button from "@/components/atoms/Button/BuiltInButton";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { fadeUpVariant } from "@/utils/animation/motion-variants";

export const CertificateList: React.FC<{
  certificates: GenType.CardImage[];
}> = ({ certificates }) => {
  const pathname = usePathname();
  const t = useTranslations("Profile");
  const locale = pathname.split("/")[1] as GenType.Language;

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="initial"
      animate="animate"
      className="w-full"
    >
      <h3 className="text-3xl font-bold text-center text-sky-400 mb-6">
        {t("certificates")}
      </h3>
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[1000px] p-4 mx-auto"
      >
        <CarouselContent>
          {certificates.map((certificate) => (
            <CarouselItem
              key={certificate.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-[480px] py-4 overflow-y-scroll no-scrollbar bg-slate-800 px-2 border-double border-8 border-sky-400">
                <CardTitle className="text-center text-white font-young-serif">
                  {certificate.name}
                </CardTitle>
                <CardDescription className="text-sm text-center mt-2 font-poppins text-slate-50">
                  {certificate.imageCapt}
                </CardDescription>
                <CardContent className="font-poppins text-gray-100">
                  <figure className="flex flex-col gap-2 items-center justify-center">
                    <Image
                      alt={certificate.imageAlt}
                      src={certificate.imageSrc}
                      width={320}
                      height={160}
                    />
                  </figure>
                  <p className="font-sans text-base">
                    {certificate.desc[locale]}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link
                    href={certificate.ctaLink ? certificate.ctaLink : "#"}
                    target="_blank"
                  >
                    {certificate.ctaLink && certificate.ctaText && (
                      <Button styleTemplate="yuhomyan" styleNumber={1}>
                        {`${t("viewCertificates", {
                          ctaText: certificate.ctaText[locale],
                        })}`}
                      </Button>
                    )}
                  </Link>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </motion.div>
  );
};
