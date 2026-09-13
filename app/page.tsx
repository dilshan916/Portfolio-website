import { client } from "@/sanity/lib/client";
import ClientHome from "./ClientHome";

export const revalidate = 60; // Cache page with 60s ISR for instant loads

export default async function Page() {
  const combinedQuery = `{
    "projects": *[_type == "project"] {
      title,
      description,
      "imageUrl": image.asset->url,
      tags,
      link
    },
    "socialLinks": *[_type == "social"][0],
    "resumeData": *[_type == "resume"][0] {
      "cvUrl": cvFile.asset->url
    }
  }`;

  const data = await client.fetch(combinedQuery);
  const projects = data?.projects || [];
  const socialLinks = data?.socialLinks || {};
  const resumeUrl = data?.resumeData?.cvUrl
    ? `${data.resumeData.cvUrl}?dl=Dilshan_CV.pdf`
    : "/dilshan_cv.pdf?v=updated";

  return <ClientHome projects={projects} socialLinks={socialLinks} resumeUrl={resumeUrl} />;
}
