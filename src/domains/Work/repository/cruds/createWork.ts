import type { PostWork, Work } from '@/api/@types';

import { apiClient } from '@/libs/apiClient';

export const createWork = async (
  work: PostWork,
  postDiscord: boolean
): Promise<Work> =>
  await apiClient.api.v1.works.$post({
    body: work,
    query: {
      post_discord: postDiscord,
    },
  });
