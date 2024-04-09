import { MarkdownViewer } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MarkdownViewer> = {
  component: MarkdownViewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MarkdownViewer>;

export const Default: Story = {
  args: {
    children: `
# Title
## Subtitle
### h3
#### h4
##### h5
###### h6

- list1
- list2
- list3

1. list1
2. list2
3. list3

\`\`\`js
console.log('Hello, World!');
\`\`\`

\`\`\`css
body {
  background-color: #fff;
}
\`\`\`


\`inline code\`

> blockquote

[link](https://google.com)

![image](https://avatars.githubusercontent.com/u/1?v=4)

**bold**

*italic*

---

`,
  },
};
