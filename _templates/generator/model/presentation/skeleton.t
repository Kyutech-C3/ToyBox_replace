---
to: "<%= need_loading ? `src/components/model/${domains}/components/${name}/loading.tsx` : null %>"
---
import type { FC } from 'react';

export const <%= name %>Loading:FC = () => {
  return <>this is <%= name %> component</>;
};
