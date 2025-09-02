"use client";

// Type

// Modules
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

// Organisms
import MainContainer from "../../layouts/container/ContainerMain";
import ProfessionContainer from "../../layouts/container/ProfessionContainer";

// Molecules
import AnimatedIcons from "../../molecules/Carousel/IconsCarousel";
import { CertificateList } from "../../molecules/Carousel/CertificateCarousel";
import DropdownMenuCategory from "../../molecules/DropdownMenu/DropdownCategory";
import Greetings from "../../molecules/greetings";
import { SelectField } from "../../molecules/Select/select-field";
import { WorkExperienceList } from "../../molecules/Card/WorkExperienceCard";

// Libs
import {
  certificatesMapping,
  newIconsMapping,
  workExperienceMapping,
} from "@/utils/data-mapping/data-profile-mapping";
import { categorySelect } from "@/utils/data-mapping/category-mapping";

export default function ProfileProfessionTemplate() {
  const params = useParams();
  const field = params.profession as GenType.FieldId;
  const t = useTranslations();

  const certificates = certificatesMapping[field] || [];
  const workExperience = workExperienceMapping[field] || [];
  const newIcons = newIconsMapping[field] || {}
  const categories = categorySelect(field)

  return (
    <MainContainer>
      <div>
        <div className="flex flex-col md:flex-row gap-4 mb-4 overflow-hidden">
          <h1 className="my-auto">{t("Profile.shortOpening")}</h1>
          <SelectField />
          {categories && <DropdownMenuCategory categories={categories} />}
        </div>

        <ProfessionContainer>
          <AnimatedIcons<string> categorizedIcons={newIcons} />
          <Greetings key={field} fieldId={field} />
        </ProfessionContainer>
        {certificates.length > 0 && (
          <CertificateList certificates={certificates} />
        )}
        {workExperience.length > 0 && (
          <WorkExperienceList workExperience={workExperience} />
        )}
      </div>
    </MainContainer>
  );
}
