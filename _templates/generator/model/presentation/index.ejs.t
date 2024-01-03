---
to: "<%= `src/components/model/${domains}/components/${name}/index.ts` %>"
---
export * from './main';

<% if (need_loading) {
%>export * from './loading';
<% } %>