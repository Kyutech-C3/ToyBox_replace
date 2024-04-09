---
to: "<%= `src/domains/${domains}/components/${name}/presentations/main.tsx` %>"
---
import type { FC } from 'react';

type Props = {

};

export const <%= name %>Presentation: FC = ({}:Props) => {
  return <div>this is <%= name %> presentation</div>;
};
