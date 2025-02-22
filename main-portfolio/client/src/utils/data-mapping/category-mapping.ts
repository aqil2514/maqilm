import { AdministrationCategory, FullStackCategory, WriterCategory } from "@/lib/data/misc/category";

export function categorySelect(field:GenType.FieldId) {
    let categories:string[];

    if(field === "fullstack-developer") return categories = FullStackCategory
    if(field === "writer") return categories = WriterCategory
    if(field === "staff-administration") return categories = AdministrationCategory
}