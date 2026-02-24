import { client } from "@/sanity/lib/client";
import ClientHome from "./ClientHome";

export const revalidate = 0; // Revalidate the data immediately to reflect Sanity updates

export default async function Page() {
  const query = `*[_type == "project"] {
    title,
    description,
    "imageUrl": image.asset->url,
    tags,
    link
  }`;

  const socialQuery = `*[_type == "social"][0]`;

  const projects = await client.fetch(query);
  const socialLinks = await client.fetch(socialQuery) || {};

  console.log("Fetched Projects:", projects);

  return <ClientHome projects={projects} socialLinks={socialLinks} />;
}
