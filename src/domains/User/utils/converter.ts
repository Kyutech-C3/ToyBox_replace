import type { User } from '../types';
import type { User as modelUser } from '@/api/@types';

export const userConverter = (user: modelUser): User => ({
  id: user?.id,
  avatarUrl: user?.avatar_url ?? '',
  displayName: user?.display_name,
});
