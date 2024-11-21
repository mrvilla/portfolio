import { p as projectDetails } from "../../../../chunks/_portfolio.js";
import { e as error } from "../../../../chunks/index2.js";
const load = async ({ params }) => {
  const { slug } = params;
  const project = projectDetails.find((p) => p.slug === slug);
  if (!project) {
    throw error(404, "Project not found");
  }
  return {
    project
  };
};
export {
  load
};
