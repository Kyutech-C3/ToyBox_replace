import { isValidUrl } from '.';

describe('isValidUrl', () => {
  it('returns true when its called with valid url', () => {
    const url = 'https://example.com';
    expect(isValidUrl(url)).toBe(true);
    expect(isValidUrl(`${url}/`)).toBe(true);
    expect(isValidUrl(`${url}/?foo=bar`)).toBe(true);
  });

  it('returns false when its called with invalid string', () => {
    const notUrl = 'foobar';
    expect(isValidUrl(notUrl)).toBe(false);
    expect(isValidUrl(`${notUrl}/`)).toBe(false);
    expect(isValidUrl(`${notUrl}/?foo=bar`)).toBe(false);
  });

  it('returns false when its called with only protocol', () => {
    const protocol = 'https://';
    expect(isValidUrl(protocol)).toBe(false);
    expect(isValidUrl(`${protocol}/`)).toBe(false);
    expect(isValidUrl(`${protocol}/?foo=bar`)).toBe(false);
  });

  it('returns false when its called with non-alphabetic hostname', () => {
    const susUrl = 'https://ーーー';
    expect(isValidUrl(susUrl)).toBe(false);
    expect(isValidUrl(`${susUrl}/`)).toBe(false);
    expect(isValidUrl(`${susUrl}/?foo=bar`)).toBe(false);
  });

  it('returns false when its called with hostname without dot', () => {
    const susUrl = 'https://hostname/';
    expect(isValidUrl(susUrl)).toBe(false);
    expect(isValidUrl(`${susUrl}/`)).toBe(false);
    expect(isValidUrl(`${susUrl}/?foo=bar`)).toBe(false);
  });
});
