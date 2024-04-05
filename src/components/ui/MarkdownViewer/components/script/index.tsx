import { lazy } from 'react';
import type { ClassAttributes, FC, HTMLAttributes } from 'react';

const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

import type { ExtraProps } from 'react-markdown';
type Props = ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps;
export const Script: FC<Props> = (props) => {
  const { children, className } = props;
  const match = /language-(\w+)/.exec(className || '');
  if (!children || typeof children !== 'object') {
    return (
      <code className="not-prose" {...props}>
        {children}
      </code>
    );
  }
  const childType = 'type' in children ? children.type : '';
  if (childType !== 'code' || !match) {
    return (
      <code className="not-prose" {...props}>
        {children}
      </code>
    );
  }
  return (
    <SyntaxHighlighter language={match[1]}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};
