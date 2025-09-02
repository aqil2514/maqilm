import WorkExperienceContainer from "@/components/layouts/container/WorkExperienceContainer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import React from "react";

export function WorkExperienceList({
  workExperience,
}: {
  workExperience: GenType.WorkExperience[];
}) {
  return (
    <WorkExperienceContainer>
      <h2 className="font-young-serif my-4">Pengalaman Kerja</h2>
      {workExperience.map((work) => (
        <div
          key={work.companyName}
          className="flex flex-col gap-4 bg-zinc-800 md:max-w-[580px] rounded-xl p-4"
        >
          {/* Gambar dan detail singkat */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Gambar logo perusahaan */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={work.companyLogo}
                alt={`logo ${work.companyName}`}
                sizes="auto"
                fill
              />
            </div>
            {/* Nama perusahaan, posisi, deskripsi singkat, lokasi */}
            <div>
              <p className="text-center md:text-left">
                {work.companyName}{" "}
                <span className="italic hidden md:inline">
                  ({work.duration.startDate} s/d{" "}
                  {work.duration.endDate === "present"
                    ? "Sekarang"
                    : work.duration.endDate}
                  )
                </span>{" "}
              </p>
              {/* Mobile Version */}
              <p className="block md:hidden text-center">
                ({work.duration.startDate} s/d{" "}
                {work.duration.endDate === "present"
                  ? "Sekarang"
                  : work.duration.endDate}
                )
              </p>
              {/* Badge */}
              <div className="flex justify-center gap-2 my-4">
                <Badge>{work.position}</Badge>
                <Badge>{work.location}</Badge>
              </div>
              {/* Deskripsi pekerjaa */}
              <p>{work.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <WorkList title="Tanggung Jawab" list={work.responsibilities} />
            <WorkList title="Teknologi" list={work.technologies} />
            <WorkList title="Skill" list={work.skills} />
          </div>
        </div>
      ))}
    </WorkExperienceContainer>
  );
}

const WorkList: React.FC<{ list?: string[]; title: string }> = ({
  list,
  title,
}) => {
  if (!list) return <></>;

  return (
    <section>
      <h4 className="font-mono">{title}</h4>
      <ul className="md:grid md:grid-cols-2 pl-4">
        {list.map((l) => (
          <li className="text-sm list-disc font-poppins" key={l}>
            {l}
          </li>
        ))}
      </ul>
    </section>
  );
};
