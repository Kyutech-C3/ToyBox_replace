import type { FC } from 'react';

import { Vertical } from '@/components/Layout/Vertical';
import { Typography } from '@/components/ui/Typography';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
  postDiscord: boolean;
  handleChangePostDiscord: (value: boolean) => void;
};
export const ShareDiscordCheckBox: FC<Props> = ({
  postDiscord,
  handleChangePostDiscord,
}) => (
  <Vertical className="items-center">
    <div className="w-4 h-4 rounded-full bg-orange-pop" />
    <Typography className="-ml-2">
      Discordの「みんなの作品」に共有する！
    </Typography>
    <Checkbox
      checked={postDiscord}
      onCheckedChange={(value) => {
        if (typeof value === 'boolean') {
          handleChangePostDiscord(value);
        }
      }}
    />
  </Vertical>
);
