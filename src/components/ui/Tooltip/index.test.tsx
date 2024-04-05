import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '.';

// TooltipContentコンポーネントの基本的なレンダリングをテストします
describe('ui/Tooltip', () => {
  it('renders the component with default props', async () => {
    const { getByText } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    await userEvent.hover(getByText('Hover me'));
    await waitFor(() =>
      expect(screen.getAllByText(/Tooltip Text/)[0]).toBeInTheDocument()
    );
  });

  it('applies a custom class name', async () => {
    const customClass = 'custom-tooltip';
    const { getByText } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent className={customClass}>Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    await userEvent.hover(getByText('Hover me'));
    await waitFor(() =>
      expect(screen.getAllByText(/Tooltip Text/)[0]).toHaveClass(customClass)
    );
  });
});
