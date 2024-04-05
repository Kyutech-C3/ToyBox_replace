import type { FC } from 'react';

import { Button } from '@/components/ui/Button';

const buttonBackgroundColor = 'rgba(242, 163, 44, 0.5)';

type Props = {
  ratio: number;
  disabled: boolean;
};

export const UrlAddButton: FC<Props> = ({ ratio, disabled }: Props) => (
  <Button
    variant="ghost"
    className="h-10 w-16 ml-2 text-black bg-transparent border-2 border-orange-pop"
    disabled={disabled}
    style={{
      backgroundImage: `linear-gradient(to bottom, #fff ${ratio}%, ${buttonBackgroundColor} 0%)`,
    }}
  >
    +追加
  </Button>
);
