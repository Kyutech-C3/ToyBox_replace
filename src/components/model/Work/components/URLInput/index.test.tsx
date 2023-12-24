import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { URLInput } from '.';

const useLinksAndSetLinks = (): [string[], jest.Mock] => {
  const links: string[] = [];
  const setLinks = jest.fn().mockImplementation((newLinks: string[]): void => {
    links.splice(0, links.length);
    links.push(...newLinks);
  });

  return [links, setLinks];
};

describe('model/URLInput', () => {
  it('renders input and added links correctly', async () => {
    const url = 'https://example.com';

    const [links, setLinks] = useLinksAndSetLinks();

    const { container } = render(
      <URLInput links={links} setLinks={setLinks} maxAmount={5} />
    );

    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();

    await userEvent.type(inputElement as HTMLInputElement, `${url}{Enter}`);
    expect(screen.getByText(url)).toBeInTheDocument();
  });

  it('calls setLinks when url value changed', async () => {
    const baseUrl = 'https://example.com';

    const [links, mockSetLinks] = useLinksAndSetLinks();

    const { container } = render(
      <URLInput links={links} setLinks={mockSetLinks} maxAmount={5} />
    );

    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();

    // First url addition
    const firstUrl = `${baseUrl}/1`;
    await userEvent.type(
      inputElement as HTMLInputElement,
      `${firstUrl}{Enter}`
    );

    expect(mockSetLinks).toHaveBeenCalledTimes(1);

    const firstCallArgs: string[][] = mockSetLinks.mock.calls[0] as string[][];
    expect(firstCallArgs[0] as string[]).toEqual([firstUrl]);

    // Second url addition
    const secondUrl = `${baseUrl}/2`;
    await userEvent.type(
      inputElement as HTMLInputElement,
      `${secondUrl}{Enter}`
    );

    expect(mockSetLinks).toHaveBeenCalledTimes(2);

    const secondCallArgs: string[][] = mockSetLinks.mock.calls[1] as string[][];
    expect(secondCallArgs[0] as string[]).toEqual([firstUrl, secondUrl]);

    // Delete first url
    const firstUrlAddedElement = await screen.findByText(firstUrl);
    const parent = firstUrlAddedElement.parentElement;
    expect(parent).not.toBeNull();

    const deleteButton = (parent as HTMLElement).querySelector('svg.lucide-x');
    expect(deleteButton).not.toBeNull();

    await userEvent.click(deleteButton as SVGSVGElement);

    expect(mockSetLinks).toHaveBeenCalledTimes(3);

    const thirdCallArgs: string[][] = mockSetLinks.mock.calls[2] as string[][];
    expect(thirdCallArgs[0] as string[]).toEqual([secondUrl]);
  });

  it('rejects user input when the amount of links reached maxAmount', async () => {
    const baseUrl = 'https://example.com';

    const [links, mockSetLinks] = useLinksAndSetLinks();

    const { container } = render(
      <URLInput links={links} setLinks={mockSetLinks} maxAmount={1} />
    );

    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();

    const firstUrl = `${baseUrl}/1`;
    await userEvent.type(
      inputElement as HTMLInputElement,
      `${firstUrl}{Enter}`
    );
    expect(screen.getByText(firstUrl)).toBeInTheDocument();

    expect(inputElement).toBeDisabled();

    const secondUrl = `${baseUrl}/2`;
    await userEvent.type(
      inputElement as HTMLInputElement,
      `${secondUrl}{Enter}`
    );
    expect(screen.queryByText(secondUrl)).not.toBeInTheDocument();
  });

  it('rejects when duplicate url is tried to be added', async () => {
    const url = 'https://example.com';

    const [links, mockSetLinks] = useLinksAndSetLinks();

    const { container } = render(
      <URLInput links={links} setLinks={mockSetLinks} maxAmount={5} />
    );

    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();

    await userEvent.type(inputElement as HTMLInputElement, `${url}{Enter}`);
    expect(screen.getByText(url)).toBeInTheDocument();

    await userEvent.type(inputElement as HTMLInputElement, `${url}{Enter}`);
    expect(await screen.findAllByText(url)).toHaveLength(1);
    expect((inputElement as HTMLInputElement).value).toBe(url);
  });

  it('rejects when invalid text is tried to be added', async () => {
    const invalidText = 'this text is not a url';

    const [links, mockSetLinks] = useLinksAndSetLinks();

    const { container } = render(
      <URLInput links={links} setLinks={mockSetLinks} maxAmount={5} />
    );

    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();

    await userEvent.type(
      inputElement as HTMLInputElement,
      `${invalidText}{Enter}`
    );
    expect(screen.queryByText(invalidText)).not.toBeInTheDocument();
  });
});
