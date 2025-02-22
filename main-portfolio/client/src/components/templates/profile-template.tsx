"use client"
import { useTranslations } from "next-intl";
import MainContainer from "../organisms/container-main";
import { SelectField } from "../molecules/select-field";
import { Suspense } from "react";

import {motion} from "framer-motion"
import { fadeUpVariant } from "@/utils/animation/motion-variants";

export default function ProfileTemplate() {
  const t = useTranslations();
  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <motion.div variants={fadeUpVariant} animate="animate" initial="initial">
          <div className="flex flex-col md:flex-row gap-4 mb-4 overflow-hidden">
            <h1 className="my-auto">{t("Profile.shortOpening")}</h1>
            <SelectField />
          </div>
          <motion.div variants={fadeUpVariant} animate="animate" initial="initial">{t("General.unselectedProfession")}</motion.div>
        </motion.div>
      </Suspense>
    </MainContainer>
  );
}
