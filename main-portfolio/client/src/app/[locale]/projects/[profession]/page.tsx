import ProjectsProfessionTemplate from "@/components/templates/projects-profession-template";
import { professions } from "@/lib/data";
import { Metadata } from "next";

interface ProfessionParams {
  params: {
    locale: GenType.Language;
    profession: GenType.Professions["fieldid"];
  };
}

export async function generateMetadata({
  params,
}: ProfessionParams): Promise<Metadata> {
  const { profession, locale } = params;
  const selectedProf = professions.find((prof) => prof.fieldid === profession);

  const title =
    (locale === "en" ? selectedProf?.enLabel : selectedProf?.idLabel) ||
    (locale === "en" ? "Profession" : "Profesi");

  const description =
    locale === "en"
      ? `Explore career opportunities and details about the ${title} profession.`
      : `Jelajahi peluang karir dan detail tentang profesi ${title}.`;

  const keywords = selectedProf
    ? `${title}, career, job opportunities, professional fields`
    : "career, job opportunities, professional fields";

  return {
    title: `${title} | Muhamad Aqil Maulana`,
    description,
    keywords,
    robots: "index, follow",
  };
}

export default function Profession() {
  return <ProjectsProfessionTemplate />;
}
