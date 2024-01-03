---
to: "<%= `src/components/model/${domains}/components/${name}/presentations/container.tsx` %>"
---
import type { FC } from 'react';


<% if (have_hooks) { %>import { use<%= name %> } from '../hooks';<% } %>

<% if (have_hooks && gen_files.includes("Empty")) { %>import { <%= name %>EmptyPresentation } from './empty';<% } %>
import { <%= name %>Presentation } from './main';

export const <%= name %>Container: FC = () => {
  <% if (have_hooks) { %>const {<% if(gen_files.includes("Empty")){ %> isEmpty <% }%>} = use<%= name %>();<% } %>
  <% if (have_hooks && gen_files.includes("Empty")) { %>if (isEmpty){
    return <<%= name %>EmptyPresentation />;
  }<%} %>
  return <<%= name %>Presentation />
};
