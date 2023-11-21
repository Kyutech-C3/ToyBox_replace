import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Pagination } from '.';

const testData = {
  totalPage: 10,
  currentPage: 5,
  displayRange: 1,
};

describe('model/Pagination', () => {
  it('renders button correctly', () => {
    render(<Pagination {...testData} handleClick={jest.fn()} />);

    // renders all buttons
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(testData.currentPage - 1)).toBeInTheDocument();
    expect(screen.getByText(testData.currentPage)).toBeInTheDocument();
    expect(screen.getByText(testData.currentPage + 1)).toBeInTheDocument();
    expect(screen.getByText(testData.totalPage)).toBeInTheDocument();

    // not renders out of display range
    expect(() => screen.getByText(testData.currentPage - 2)).toThrow();
    expect(() => screen.getByText(testData.currentPage + 2)).toThrow();
  });

  it('renders and works arrow button correctly', async () => {
    const mockHandleClick = jest.fn();
    const { container } = render(
      <Pagination {...testData} handleClick={mockHandleClick} />
    );

    const leftArrow = container.getElementsByClassName(
      'lucide-chevron-left'
    )[0];
    expect(leftArrow).toBeInTheDocument();
    expect(leftArrow).toBeEnabled();

    const rightArrow = container.getElementsByClassName(
      'lucide-chevron-right'
    )[0];
    expect(rightArrow).toBeInTheDocument();
    expect(rightArrow).toBeEnabled();

    await userEvent.click(leftArrow as Element);
    await userEvent.click(rightArrow as Element);

    expect(mockHandleClick).toHaveBeenCalledTimes(2);
  });

  it('renders disabled left arrow button when currentPage is 1', () => {
    const { container } = render(
      <Pagination {...testData} currentPage={1} handleClick={jest.fn()} />
    );

    const leftArrowSvg = container.getElementsByClassName(
      'lucide-chevron-left'
    )[0];
    const leftArrowButton = leftArrowSvg?.parentElement;
    expect(leftArrowButton).toBeDisabled();
  });

  it('renders disabled right arrow button when currentPage equals totalPage', () => {
    const { container } = render(
      <Pagination
        {...testData}
        currentPage={testData.totalPage}
        handleClick={jest.fn()}
      />
    );

    const rightArrowSvg = container.getElementsByClassName(
      'lucide-chevron-right'
    )[0];
    const rightArrowButton = rightArrowSvg?.parentElement;
    expect(rightArrowButton).toBeDisabled();
  });

  it('works correctly when button clicked', async () => {
    const mockHandleClick = jest.fn();

    render(<Pagination {...testData} handleClick={mockHandleClick} />);

    const button = screen.getByText(testData.currentPage - 1);
    await userEvent.click(button);

    expect(mockHandleClick).toHaveBeenCalled();
  });
});
