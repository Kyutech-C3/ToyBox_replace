import aspida from '@aspida/fetch';
import qs from 'qs';

import { getAccessToken } from './getAccessToken';

import type { FetchConfig } from '@aspida/fetch';

import api from '@/api/$api';
import { BASE_URL } from '@/constants/baseUrl';

export type ApiClient = ReturnType<typeof api<FetchConfig>>;

export const apiClient = api(
  aspida(
    async (...args) => {
      const token = await getAccessToken();
      return fetch(args[0] as string, {
        ...args[1],
        headers: { ...args[1]?.headers, Authorization: `Bearer ${token}` },
      });
    },
    {
      baseURL: BASE_URL,
      throwHttpErrors: true,
      mode: 'cors',
      paramsSerializer: (s): string =>
        qs.stringify(s, { arrayFormat: 'brackets' }),
    }
  )
);
