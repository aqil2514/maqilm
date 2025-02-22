import { createClient } from "next-sanity";

export const dataset = "production";
export const projectId = "5jkamrnf";

export const client = createClient({
  dataset,
  projectId,
  useCdn: true,
  apiVersion: "2021-08-31"
});
