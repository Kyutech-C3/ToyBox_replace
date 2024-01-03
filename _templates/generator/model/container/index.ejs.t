---
to: "<%= `src/components/model/${domains}/components/${name}/presentations/index.ts` %>"
---
export * from "./container"

export * from "./main"

<% gen_files.forEach(file=>{%>export { <%= name %><%= file %>Presentation  } from './<%= file.toLowerCase() %>';

<%})%>