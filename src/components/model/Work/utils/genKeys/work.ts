import type { GetWorksQuery } from '../../repository/cruds';

export const genGetWorkKey = (query: GetWorksQuery): string =>
  `/works/${JSON.stringify(query)}`;
