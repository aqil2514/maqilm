import ProjectsTemplate from "@/components/templates/projects/ProjectsTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhamad Aqil Maulana",
};

export default function ProjectsPage() {
  return <ProjectsTemplate />;
}
