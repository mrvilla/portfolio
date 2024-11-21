import { Y as slot, X as head, S as bind_props } from "../../../../chunks/index.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function ProjectDetail($$payload, $$props) {
  $$payload.out += `<div class="project-detail"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { project } = data;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(project.title)}</title>`;
  });
  ProjectDetail($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<h2 class="project-detail__headline svelte-1lspznt">${escape_html(project.title)}</h2> <div class="project-detail__content svelte-1lspznt">${html(project.html)}</div>`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data });
}
export {
  _page as default
};
