---
to: src/domains/<%= domains %>/components/<%= name %>/index.stories.tsx
---

<% if (need_loading) {%>import { <%= name %>Loading } from './loading';<% } %>
import { <%= name %> } from './main';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof <%= name %>> = {
  component: <%= name %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {
  args: {},
};

<% if (need_loading) {
%>export const Loading: Story = {
  render: ()=> <<%= name %>Loading />
};<% } %>
