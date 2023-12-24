import { useURLInput } from './hooks';
import { URLInputPresentation } from './presentations';

import { URLInput } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof URLInput> = {
  component: URLInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    maxAmount: 5,
  },
};

export default meta;

type Story = StoryObj<typeof URLInput>;

export const Default: Story = {
  args: {},
};

export const Full: Story = {
  args: {
    maxAmount: 3,
  },
  render: function Render(args) {
    const props = useURLInput();
    const links = [
      'https://example.com/1',
      'https://example.com/2',
      'https://example.com/3',
    ];

    return <URLInputPresentation {...props} {...args} links={links} />;
  },
};

export const InvalidUrl: Story = {
  args: {
    maxAmount: 5,
  },
  render: function Render(args) {
    const props = useURLInput();

    return <URLInputPresentation {...props} {...args} invalidUrlWarning />;
  },
};

export const DuplicateUrl: Story = {
  args: {
    maxAmount: 5,
  },
  render: function Render(args) {
    const props = useURLInput();

    return <URLInputPresentation {...props} {...args} duplicateUrlWarning />;
  },
};

export const ResponsiveCheck: Story = {
  args: {},
  render: (args) => (
    <div className="w-[80vw] max-w-[800px]">
      <URLInput {...args} />
    </div>
  ),
};
