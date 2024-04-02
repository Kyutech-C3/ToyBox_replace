import { useState } from 'react';

import { useURLInput, warningMessages } from './hooks';
import { URLInputPresentation } from './presentations';

import { URLInput } from '.';

import type { Warning } from './hooks';
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
  render: function Render(args) {
    const [links, setLinks] = useState<string[]>([]);
    return <URLInput {...args} links={links} setLinks={setLinks} />;
  },
};

export const Full: Story = {
  args: {
    maxAmount: 3,
  },
  render: function Render(args) {
    const [links, setLinks] = useState<string[]>([
      'https://example.com/1',
      'https://example.com/2',
      'https://example.com/3',
    ]);

    return <URLInput {...args} links={links} setLinks={setLinks} />;
  },
};

export const InvalidUrl: Story = {
  args: {
    maxAmount: 5,
  },
  render: function Render({ maxAmount }) {
    const [links, setLinks] = useState<string[]>([]);
    const { deleteLink, handleChange, handleSubmit, input, warning } =
      useURLInput({
        links,
        setLinks,
      });

    warning.status = 'invalid';
    warning.message = warningMessages.invalidUrl;

    return (
      <URLInputPresentation
        deleteLink={deleteLink}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
        links={links}
        maxAmount={maxAmount}
        warning={warning}
      />
    );
  },
};

export const DuplicateUrl: Story = {
  args: {
    maxAmount: 5,
  },
  render: function Render({ maxAmount }) {
    const [links, setLinks] = useState<string[]>([]);
    const { deleteLink, handleChange, handleSubmit, input } = useURLInput({
      links,
      setLinks,
    });

    const warning: Warning = {
      status: 'duplicate',
      message: warningMessages.duplicateUrl,
    };

    return (
      <URLInputPresentation
        deleteLink={deleteLink}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
        links={links}
        maxAmount={maxAmount}
        warning={warning}
      />
    );
  },
};

export const ResponsiveCheck: Story = {
  args: {},
  render: function Render(args) {
    const [links, setLinks] = useState<string[]>([]);
    return (
      <div className="w-[80vw] max-w-[800px]">
        <URLInput {...args} links={links} setLinks={setLinks} />
      </div>
    );
  },
};
