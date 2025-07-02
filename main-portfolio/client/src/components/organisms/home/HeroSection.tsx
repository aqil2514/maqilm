import ButtonAnimation from "@/components/atoms/button-animation";
import TypingAnimation from "@/components/molecules/animation-typing";
import SocialMediaList from "@/components/molecules/list-social-media";
import { sosmedIcon } from "@/lib/data";
import { fadeInVariant } from "@/utils/animation/motion-variants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
export default function HeroSection() {
  const t = useTranslations();
  const profession = t.raw("General.professions");
  const router = useRouter();

  return (
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
      </div>
      <SocialMediaList dataMediaSocial={sosmedIcon} />
    </motion.div>
  );
}
