import ProjectsTemplate from "@/components/templates/projects-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhamad Aqil Maulana",
};

export default function ProjectsPage() {
  return <ProjectsTemplate />;
}
