"use client";

import MainContainer from "../organisms/container-main";
import { useTranslations } from "next-intl";
import TypingAnimation from "../molecules/animation-typing";
import ButtonAnimation from "../atoms/button-animation";
import { sosmedIcon } from "@/lib/data";
import ParticlesAnimation from "../atoms/animation-particles";
import SocialMediaList from "../molecules/list-social-media";
import { useRouter } from "@/i18n/routing";

import { motion } from "framer-motion";
import { fadeInVariant } from "@/utils/animation/motion-variants";

export default function HeroTemplate() {
  const t = useTranslations();
  const profession = t.raw("General.professions");
  const router = useRouter();

  return (
    <MainContainer>
      <ParticlesAnimation />
      <motion.div
        variants={fadeInVariant}
        initial="initial"
        animate="animate"
        className="w-full min-h-screen z-30 relative pt-48 px-4 text-center"
      >
        <p>{t("HomePage.greetings")}</p>
        <p className="text-white text-2xl md:text-5xl font-young-serif">
          Muhamad Aqil Maulana
        </p>
        <TypingAnimation text={profession} />
        <div className="flex flex-col md:flex-row md:justify-center md:gap-12">
          <ButtonAnimation onClick={() => router.replace("/profile")}>
            {t("HomePage.aboutCta")}
          </ButtonAnimation>
          {/* <ButtonAnimation>{t("HomePage.downloadCvCta")}</ButtonAnimation> */}
        </div>
        <SocialMediaList dataMediaSocial={sosmedIcon} />
      </motion.div>
    </MainContainer>
  );
}
