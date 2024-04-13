import type { ReactNode } from 'react';

import { Screen } from '@/components/page/TopPage';

const TopPage = ({
  searchParams,
}: {
  searchParams: { page?: number };
}): ReactNode => <Screen page={searchParams.page ?? 1} />;

export default TopPage;
