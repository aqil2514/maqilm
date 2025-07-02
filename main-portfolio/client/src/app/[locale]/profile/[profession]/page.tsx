import MainContainer from "@/components/organisms/container-main";
import ProfileProfessionTemplate from "@/components/templates/profile/ProfileProfessionTemplate";
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
  const profession = params.profession;
  const locale = params.locale;
  const selectedProf = professions.find((prof) => prof.fieldid === profession);

  const title =
    (locale === "en" ? selectedProf?.enLabel : selectedProf?.idLabel) || "Profesi";
  const description =
    (locale === "en"
      ? `Discover more about ${selectedProf?.enLabel} and explore career opportunities.`
      : `Pelajari lebih lanjut tentang ${selectedProf?.idLabel} dan jelajahi peluang karier.`) || 
    "Informasi tentang profesi dan karier.";
  const keywords =
    (locale === "en"
      ? `${selectedProf?.enLabel}, profession, career, jobs`
      : `${selectedProf?.idLabel}, profesi, karier, pekerjaan`) ||
    "profesi, karier, pekerjaan";

  return {
    title: `${title} | Muhamad Aqil Maulana`,
    description,
    keywords,
    robots: "index, follow",
  };
}

export default function Profession() {
  return <ProfileProfessionTemplate />;
}
