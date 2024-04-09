import type { FC } from 'react';

import {
  Bold,
  Code,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline,
} from 'lucide-react';

import { Vertical } from '@/components/Layout/Vertical';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

type Props = {
  handleEdit: (text: string) => void;
  handleChangeCursor: (cursor: number) => void;
  description: string;
};

export const EditToolBar: FC<Props> = ({
  handleEdit,
  handleChangeCursor,
  description,
}) => (
  <Vertical className="gap-1">
    <Button
      onClick={() => {
        handleEdit('**bold**');
        handleChangeCursor(description.length + 8 - 2);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <Bold size={16} />
    </Button>
    <Button
      onClick={() => {
        handleEdit('*italic*');
        handleChangeCursor(description.length + 8 - 1);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <Italic size={16} />
    </Button>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200 cursor-pointer">
          <Heading size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            handleEdit('# ');
            handleChangeCursor(description.length);
          }}
        >
          <Heading1 size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleEdit('## ');
            handleChangeCursor(description.length + 3);
          }}
        >
          <Heading2 size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleEdit('### ');
            handleChangeCursor(description.length + 4);
          }}
        >
          <Heading3 size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleEdit('#### ');
            handleChangeCursor(description.length + 5);
          }}
        >
          <Heading4 size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleEdit('##### ');
            handleChangeCursor(description.length + 6);
          }}
        >
          <Heading5 size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleEdit('###### ');
            handleChangeCursor(description.length + 7);
          }}
        >
          <Heading6 size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <Separator orientation="vertical" decorative={false} />
    <Button
      onClick={() => {
        handleEdit('++underline++');
        handleChangeCursor(description.length + 13 - 2);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <Underline size={16} />
    </Button>
    <Button
      onClick={() => {
        handleEdit('~~strikethrough~~');
        handleChangeCursor(description.length + 17 - 2);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <Strikethrough size={16} />
    </Button>
    <Separator orientation="vertical" decorative={false} />

    <Button
      onClick={() => {
        handleEdit('> quote');
        handleChangeCursor(description.length + 7);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <Quote size={16} />
    </Button>
    <Button
      onClick={() => {
        handleEdit('1.');
        handleChangeCursor(description.length + 2);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <ListOrdered size={16} />
    </Button>
    <Button
      onClick={() => {
        handleEdit('- ');
        handleChangeCursor(description.length + 2);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <List size={16} />
    </Button>
    <Separator orientation="vertical" decorative={false} />
    <Button
      onClick={() => {
        handleEdit('```\n```');
        handleChangeCursor(description.length + 7 - 4);
      }}
      className="bg-transparent text-gray-500 w-8 h-8 border-none p-0 hover:bg-gray-200"
    >
      <Code size={16} />
    </Button>
  </Vertical>
);
