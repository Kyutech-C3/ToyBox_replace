// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { ClassAttributes, FC, HTMLAttributes } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import type { ExtraProps } from 'react-markdown';
type Props = ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps;
export const Script: FC<Props> = (props) => {
  const { children, className, ...rest } = props;
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter {...rest} PreTag="div" language={match[1]}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <pre>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <code className="not-prose">{children?.props.children}</code>
    </pre>
  );
};
