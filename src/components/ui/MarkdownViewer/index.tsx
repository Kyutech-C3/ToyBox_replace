import { memo } from 'react';
import type { FC } from 'react';

import { BlockQuote } from './components/blockQuote';
import { H123, H456 } from './components/header';
import { Img } from './components/img';
import { P } from './components/p';
import { Script } from './components/script';

import Markdown from '@/libs/Markdown';

type Props = {
  children: string;
};

export const MarkdownViewer: FC<Props> = memo(({ children }) => (
  <Markdown
    className="prose w-4/5"
    components={{
      pre(props) {
        return <Script {...props} />;
      },
      img(props) {
        return <Img {...props} />;
      },
      code(props) {
        return <BlockQuote {...props} />;
      },
      p(props) {
        return <P {...props} />;
      },
      h1: (props) => <H123 {...props} />,
      h2: (props) => <H123 {...props} />,
      h3: (props) => <H123 {...props} />,
      h4: (props) => <H456 {...props} />,
      h5: (props) => <H456 {...props} />,
      h6: (props) => <H456 {...props} />,
    }}
  >
    {children}
  </Markdown>
));

MarkdownViewer.displayName = 'MarkdownViewer';
