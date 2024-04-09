import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { DateDiffLabel } from '.';

describe('test ui/DateDiffLabel', () => {
  const now = new Date(2023, 5, 15);
  it('should display seconds when difference is less than a minute', () => {
    render(
      <DateDiffLabel date={new Date(2023, 5, 14, 23, 59, 30)} now={now} />
    );
    expect(screen.getByText(/秒前/)).toBeInTheDocument();
  });

  it('should display minutes when difference is less than an hour', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 14, 23, 30)} now={now} />);
    expect(screen.getByText(/分前/)).toBeInTheDocument();
  });

  it('should display hours when difference is less than a day', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 14, 23, 0)} now={now} />);
    expect(screen.getByText(/時間前/)).toBeInTheDocument();
  });

  it('should display days when difference is less than a week', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 14)} now={now} />);
    expect(screen.getByText(/日前/)).toBeInTheDocument();
  });

  it('should display weeks when difference is less than a month', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 8)} now={now} />);
    expect(screen.getByText(/週間前/)).toBeInTheDocument();
  });

  it('should display months when difference is less than a year', () => {
    render(<DateDiffLabel date={new Date(2023, 4, 15)} now={now} />);
    expect(screen.getByText(/ヶ月前/)).toBeInTheDocument();
  });

  it('should display date in YYYY/MM/DD format for dates in a different year', () => {
    render(<DateDiffLabel date={new Date(2022, 11, 25)} now={now} />);
    expect(screen.getByText('2022/12/25')).toBeInTheDocument();
  });
});
