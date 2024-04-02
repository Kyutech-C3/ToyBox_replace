import type { ClassAttributes, FC, ImgHTMLAttributes } from 'react';

import type { ExtraProps } from 'react-markdown';

type Props = ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> &
  ExtraProps;
export const Img: FC<Props> = ({ alt, src, ...props }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img alt={alt} src={src} {...props} className="max-w-[1000px] w-4/5 mx-5" />
);
