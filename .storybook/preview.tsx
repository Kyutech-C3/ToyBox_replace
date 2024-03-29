import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
const client = new QueryClient();
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={client}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default preview;
