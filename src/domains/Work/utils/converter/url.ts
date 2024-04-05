import type { URL } from '../../types';
import type { BaseUrlInfo, UrlInfo } from '@/api/@types';

export const urlConverter = (url: UrlInfo): URL => ({
  url: url.url,
  urlType: url.url_type,
});

export const urlsConverter = (urls: UrlInfo[]): URL[] =>
  urls.map((url) => urlConverter(url));

export const urlConverterToBaseURLInfo = (url: URL): BaseUrlInfo => ({
  url: url.url,
  url_type: url.urlType,
});

export const urlsConverterToBaseURLInfo = (urls: URL[]): BaseUrlInfo[] =>
  urls.map((url) => urlConverterToBaseURLInfo(url));
