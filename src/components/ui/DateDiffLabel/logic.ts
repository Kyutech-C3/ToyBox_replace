import { DATE_DIFF_LABEL, DAY, HOUR, MINUTE, MONTH, WEEK } from './constant';

export const DateToDiffLabel = (date: Date, now: Date): string => {
  const diffInSeconds = Math.abs(
    Math.floor((now.getTime() - date.getTime()) / 1000)
  );

  if (diffInSeconds < MINUTE)
    return `${diffInSeconds}${DATE_DIFF_LABEL['second']}`;
  if (diffInSeconds < HOUR)
    return `${Math.floor(diffInSeconds / MINUTE)}${DATE_DIFF_LABEL['minute']}`;
  if (diffInSeconds < DAY)
    return `${Math.floor(diffInSeconds / HOUR)}${DATE_DIFF_LABEL['hour']}`;
  if (diffInSeconds < WEEK)
    return `${Math.floor(diffInSeconds / DAY)}${DATE_DIFF_LABEL['day']}`;
  if (diffInSeconds < MONTH)
    return `${Math.floor(diffInSeconds / WEEK)}${DATE_DIFF_LABEL['week']}`;
  if (diffInSeconds <= MONTH * 3)
    return `${Math.floor(diffInSeconds / MONTH)}${DATE_DIFF_LABEL['month']}`;

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
