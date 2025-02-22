"use client";
import { dataMapping } from "@/utils/data-mapping/data-projects-mapping";
import { useTranslations } from "next-intl";
import { notFound, useParams } from "next/navigation";
import { ProjectsList } from "../molecules/list-projects";
import MainContainer from "../organisms/container-main";
import { Suspense } from "react";
import { SelectField } from "../molecules/select-field";
import { fadeUpVariant } from "@/utils/animation/motion-variants";
import { motion } from "framer-motion";

export default function ProjectsProfessionTemplate() {
  const params = useParams();
  const field = params.profession as GenType.FieldId;
  const t = useTranslations();

  if (!dataMapping[field]) {
    return notFound();
  }

  const projects = dataMapping[field];

  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <h3 className="my-auto">{t("Projects.shortGreetings")}</h3>
            <SelectField />
          </div>
        </div>
        <motion.div
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <ProjectsList projects={projects} />
        </motion.div>
      </Suspense>
    </MainContainer>
  );
}
