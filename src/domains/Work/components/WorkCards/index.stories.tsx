import { WorkCardsContainer, WorkCardsPresentation } from './presentations';
import { WorkCardsEmptyPresentation } from './presentations/empty';
import { WorkCardsErrorPresentation } from './presentations/error';
import { WorkCardsLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WorkCardsContainer> = {
  component: WorkCardsContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkCardsContainer>;

export const Default: Story = {
  render: () => (
    <WorkCardsPresentation
      currentPage={1}
      totalPage={10}
      handleNextPage={() => {}}
      works={[
        {
          id: '2',
          thumbnailUrl: 'https://placehold.jp/150x150.png',
          creator: {
            id: '1',
            avatarUrl: 'https://placehold.jp/150x150.png',
            displayName: 'Creator1',
          },
          isPublic: true,
          createdAt: '2024-03-29T12:46:20.461Z',
          title: 'Title2',
          tags: [
            {
              id: '1',
              name: 'tag1',
              color: 'red',
              textColor: 'white',
            },
          ],
        },
        {
          id: '1',
          thumbnailUrl: 'https://placehold.jp/150x150.png',
          creator: {
            id: '1',
            avatarUrl: 'https://placehold.jp/150x150.png',
            displayName: 'Creator1',
          },
          isPublic: true,
          createdAt: '2024-03-29T12:46:20.461Z',
          title: 'Title1',
          tags: [
            {
              id: '1',
              name: 'tag1',
              color: 'red',
              textColor: 'white',
            },
          ],
        },
        {
          id: '3',
          thumbnailUrl: 'https://placehold.jp/150x150.png',
          creator: {
            id: '1',
            avatarUrl: 'https://placehold.jp/150x150.png',
            displayName: 'Creator1',
          },
          isPublic: true,
          createdAt: '2024-03-29T12:46:20.461Z',
          title: 'Title3',
          tags: [
            {
              id: '1',
              name: 'tag1',
              color: 'red',
              textColor: 'white',
            },
          ],
        },
        {
          id: '4',
          thumbnailUrl: 'https://placehold.jp/150x150.png',
          creator: {
            id: '1',
            avatarUrl: 'https://placehold.jp/150x150.png',
            displayName: 'Creator1',
          },
          isPublic: true,
          createdAt: '2024-03-29T12:46:20.461Z',
          title: 'Title4',
          tags: [
            {
              id: '1',
              name: 'tag1',
              color: 'red',
              textColor: 'white',
            },
          ],
        },
      ]}
    />
  ),
};

export const Empty: Story = {
  render: () => <WorkCardsEmptyPresentation />,
};

export const Error: Story = {
  render: () => <WorkCardsErrorPresentation />,
};

export const Loading: Story = {
  render: () => <WorkCardsLoadingPresentation />,
};
