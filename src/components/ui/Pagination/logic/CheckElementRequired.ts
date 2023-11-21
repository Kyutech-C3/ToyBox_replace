const range = (start: number, end: number): number[] => {
  if (start > end) {
    return [];
  }
  return [...Array<number>(end - start + 1)].map((_, i) => start + i);
};

export const isPageOneRequired = (
  currentPage: number,
  displayRange: number
): boolean => currentPage > displayRange + 1;

export const isLeftDotsRequired = (
  currentPage: number,
  displayRange: number
): boolean => currentPage > displayRange + 2;

export const isTotalPageRequired = (
  currentPage: number,
  totalPage: number,
  displayRange: number
): boolean => currentPage < totalPage - displayRange;

export const isRightDotsRequired = (
  currentPage: number,
  totalPage: number,
  displayRange: number
): boolean => currentPage < totalPage - displayRange - 1 && displayRange >= 0;

export const getMiddleRange = (
  currentPage: number,
  totalPage: number,
  displayRange: number
): number[] =>
  range(
    Math.max(currentPage - displayRange, 1),
    Math.min(totalPage, currentPage + displayRange)
  );
