"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import "@/styles/animation.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/molecules/carousel";

import { useAnimatedIcons } from "@/hooks/use-animated-icons";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

type AnimatedIconsProps<T extends string> = {
  icons?: GenType.Icon[];
  categorizedIcons?: Record<T, GenType.IconSkill[]>;
};

export const AnimatedIcons = <T extends string>({
  icons,
  categorizedIcons,
}: AnimatedIconsProps<T>) => {
  const { windowWidth } = useAnimatedIcons();
  const searchParams = useSearchParams();
  const category = (searchParams.get("category") || "All") as T;
  const isMobile = useMemo(() => windowWidth < 768, [windowWidth]);

  if (icons) {
    if (isMobile)
      return (
        <Carousel>
          <CarouselContent>
            {icons.map((i) => (
              <CarouselItem key={i.id} className="basis-1/3">
                <figure className="relative max-w-32 max-h-32 flex flex-col justify-center items-center my-2 gap-2 fadeIn">
                  <Image alt={i.alt} src={i.src} height={64} width={64} />
                  <figcaption className="text-center">{i.name}</figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      );

    return (
      <div className="grid gap-4 grid-cols-4 max-h-[300px]">
        {icons.map((i) => (
          <figure
            key={i.id}
            className="w-20 h-20 flex flex-col justify-center items-center my-2 gap-2 fadeIn"
          >
            <Image alt={i.alt} src={i.src} height={64} width={64} />
            <figcaption className="text-center">{i.name}</figcaption>
          </figure>
        ))}
      </div>
    );
  } else if (categorizedIcons) {
    const allCategories = Object.values(
      categorizedIcons
    ).flat() as GenType.IconSkill[];
    const categoryIcons =
      category === "All"
        ? allCategories
        : categorizedIcons[category as keyof typeof categorizedIcons] || [];

    // **Maksimal ikon per slide**
    const maxIconsPerSlide = isMobile ? 9 : 12;

    // **Grupkan ikon dalam slide**
    const groupedIcons = [];
    for (let i = 0; i < categoryIcons.length; i += maxIconsPerSlide) {
      groupedIcons.push(categoryIcons.slice(i, i + maxIconsPerSlide));
    }

    if (categoryIcons.length > maxIconsPerSlide)
      return (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination
          autoplay={{ pauseOnMouseEnter: true, delay: 2000 }}
          slidesPerView={1}
          className="w-full"
        >
          {groupedIcons.map((icons, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`grid ${
                  isMobile ? "grid-cols-3 grid-rows-3" : "grid-cols-4 grid-rows-3"
                } gap-4`}
              >
                {icons.map((i) => (
                  <figure
                    key={i.id}
                    role="img"
                    className="w-20 h-20 flex flex-col justify-center items-center my-2 gap-2 fadeIn"
                  >
                    <HoverCard>
                      <HoverCardTrigger className="flex flex-col items-center">
                        <Image
                          alt={i.alt}
                          src={i.src}
                          height={64}
                          width={64}
                          className="opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain"
                        />
                      </HoverCardTrigger>
                      <HoverCardContent className="p-2 bg-white shadow-lg rounded-lg">
                        <figcaption className="text-center text-sm font-medium text-gray-800">
                          {i.name}
                        </figcaption>
                      </HoverCardContent>
                    </HoverCard>
                  </figure>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );

    return (
      <div className={`grid ${isMobile ? "grid-cols-3 grid-rows-3" : "grid-cols-4"} gap-4`}>
        {categoryIcons.map((i) => (
          <figure
            key={i.id}
            role="img"
            className="w-20 h-20 flex flex-col justify-center items-center my-2 gap-2 fadeIn"
          >
            <HoverCard>
              <HoverCardTrigger className="flex flex-col items-center">
                <Image
                  alt={i.alt}
                  src={i.src}
                  height={64}
                  width={64}
                  className="opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain"
                />
              </HoverCardTrigger>
              <HoverCardContent className="p-2 bg-white shadow-lg rounded-lg">
                <figcaption className="text-center text-sm font-medium text-gray-800">
                  {i.name}
                </figcaption>
              </HoverCardContent>
            </HoverCard>
          </figure>
        ))}
      </div>
    );
  }

  return null;
};

export default AnimatedIcons;
