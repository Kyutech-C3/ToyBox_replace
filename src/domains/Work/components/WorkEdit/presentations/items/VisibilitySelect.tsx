import type { FC } from 'react';

import { Vertical } from '@/components/Layout/Vertical';
import { Typography } from '@/components/ui/Typography';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type Props = {
  handleChangeVisibility: (value: 'public' | 'private') => void;
};
export const VisibilitySelect: FC<Props> = ({ handleChangeVisibility }) => (
  <Vertical className="items-center">
    <div className="w-4 h-4 rounded-full bg-orange-pop" />
    <Typography className="-ml-2">公開範囲設定</Typography>
    <RadioGroup
      defaultValue="public"
      className="flex flex-row gap-8"
      onValueChange={(value) => {
        if (value === 'public' || value === 'private') {
          handleChangeVisibility(value);
        }
      }}
    >
      <Vertical className="items-center gap-1">
        <RadioGroupItem value="public" id="public" />
        <Label className="text-lg cursor-pointer" htmlFor="public">
          public
        </Label>
      </Vertical>
      <Vertical className="items-center gap-1">
        <RadioGroupItem value="private" id="private" />
        <Label className="text-lg cursor-pointer" htmlFor="private">
          private
        </Label>
      </Vertical>
    </RadioGroup>
  </Vertical>
);
