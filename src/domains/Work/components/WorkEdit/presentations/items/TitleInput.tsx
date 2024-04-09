import type { FC } from 'react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import { Vertical } from '@/components/Layout/Vertical';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';

type Props = {
  titleRegister: UseFormRegisterReturn<'title'>;
  defaultTitle: string;
  titleErrorMessage: string;
};
export const TitleInput: FC<Props> = ({
  titleRegister,
  defaultTitle,
  titleErrorMessage,
}) => (
  <>
    <Vertical className="items-center">
      <Typography className="text-lg font-bold">作品タイトル</Typography>
      <Typography className="text-red-500" variant="body2">
        必須
      </Typography>
      <Typography className="text-red-600">{titleErrorMessage}</Typography>
    </Vertical>
    <Input
      placeholder="タイトルを入力"
      defaultValue={defaultTitle}
      {...titleRegister}
      className="rounded-md relative w-full h-16 text-xl border-2 border-orange-pop"
    />
  </>
);
