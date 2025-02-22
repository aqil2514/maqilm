import { projects as administrationProjects } from "@/lib/data/projects/administration";
import { projects as fullStackDeveloperProjects } from "@/lib/data/projects/fullstack-developer";
import { projects as writerProjects } from "@/lib/data/projects/writer";

export const dataMapping: Record<
  GenType.FieldId,
  typeof administrationProjects
> = {
  "fullstack-developer": fullStackDeveloperProjects,
  "staff-administration": administrationProjects,
  unselected: [],
  writer: writerProjects,
};
