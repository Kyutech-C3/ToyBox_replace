---
to: "<%= `src/components/model/${domains}/components/${name}/main.tsx` %>"
---
import type { FC } from 'react';

type Props = {

};

export const <%= name %>: FC = ({}:Props) => {
  return <div>this is <%= name %> </div>;
};
