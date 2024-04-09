import type { GetWorksQuery } from '../../types';

export const genGetWorkKey = (query: GetWorksQuery): string =>
  `/works/${JSON.stringify(query)}`;
