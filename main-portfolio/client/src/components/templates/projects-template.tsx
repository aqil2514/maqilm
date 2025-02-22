"use client";
import { Suspense } from "react";

import { useTranslations } from "next-intl";

import MainContainer from "../organisms/container-main";
import { SelectField } from "../molecules/select-field";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/animation/motion-variants";

export default function ProjectsTemplate() {
  const t = useTranslations();

  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <motion.div
          variants={fadeUpVariant}
          animate="animate"
          initial="initial"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <h3 className="my-auto">{t("Projects.shortGreetings")}</h3>
            <SelectField />
          </div>
          <div>{t("General.unselectedProfession")}</div>
        </motion.div>
      </Suspense>
    </MainContainer>
  );
}
