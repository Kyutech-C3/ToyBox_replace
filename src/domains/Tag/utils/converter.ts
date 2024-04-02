import type { Tag } from '../types';
import type { GetTag } from '@/api/@types';

export const tagConverter = (tag: GetTag): Tag => ({
  id: tag.id,
  name: tag.name,
  color: tag.color,
  textColor: 'black',
  // NOTE: textColorをサーバーサイドで実装する
});

export const tagsConverter = (tags: GetTag[]): Tag[] => tags.map(tagConverter);
