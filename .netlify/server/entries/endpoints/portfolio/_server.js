import { p as projectDetails } from "../../../chunks/_portfolio.js";
async function GET() {
  const contents = JSON.stringify(
    projectDetails.map((project) => ({
      title: project.title,
      subtitle: project.subtitle,
      shortDesc: project.shortDesc,
      link: project.link,
      slug: project.slug,
      projectHref: project.projectHref,
      projectLink: project.projectLink
    }))
  );
  return new Response(contents, {
    headers: { "Content-Type": "application/json" }
  });
}
export {
  GET
};
