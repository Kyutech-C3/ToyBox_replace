import { SearchWorkPalettePresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchWorkPalettePresentation> = {
  component: SearchWorkPalettePresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchWorkPalettePresentation>;

export const Default: Story = {
  args: {
    handleChangeKeyword: () => {},
    handleChangeTag: () => {},
    handleChangeVisibility: () => {},
    query: {
      searchWord: '',
      tagNames: [],
      tagIds: ['1', '10'],
      visibility: undefined,
      page: 1,
      limit: 10,
    },
    tags: [
      {
        id: '1',
        name: 'tag1',
        color: 'red',
        textColor: 'white',
      },
      {
        id: '2',
        name: 'tag2',
        color: 'blue',
        textColor: 'white',
      },
      {
        id: '3',
        name: 'tag3',
        color: 'green',
        textColor: 'white',
      },
      {
        id: '4',
        name: 'tag4',
        color: 'yellow',
        textColor: 'black',
      },
      {
        id: '5',
        name: 'tag5',
        color: 'purple',
        textColor: 'white',
      },
      {
        id: '6',
        name: 'tag6',
        color: 'orange',
        textColor: 'black',
      },
      {
        id: '7',
        name: 'tag7',
        color: 'pink',
        textColor: 'black',
      },
      {
        id: '8',
        name: 'tag8',
        color: 'gray',
        textColor: 'black',
      },
      {
        id: '9',
        name: 'tag9',
        color: 'black',
        textColor: 'white',
      },
      {
        id: '10',
        name: 'tag10',
        color: 'white',
        textColor: 'black',
      },
    ],
  },
};
