---
to: "<%= need_loading ? `src/domains/${domains}/components/${name}/loading.tsx` : null %>"
---
import type { FC } from 'react';

export const <%= name %>Loading:FC = () => {
  return <>this is <%= name %> component</>;
};
