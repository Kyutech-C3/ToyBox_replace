import { useMemo } from 'react';

import aspida from '@aspida/fetch';
import qs from 'qs';

import type { FetchConfig } from '@aspida/fetch';

import api from '@/api/$api';
import { BASE_URL } from '@/constants/baseUrl';

export type ApiClient = ReturnType<typeof api<FetchConfig>>;

export const useApiClient = (): { client: ApiClient } => {
  const client = useMemo(
    () =>
      api(
        aspida((...args) => fetch(args[0] as string, args[1]), {
          baseURL: BASE_URL,
          throwHttpErrors: true,
          paramsSerializer: (s) => qs.stringify(s, { arrayFormat: 'brackets' }),
          mode: 'cors',
        })
      ),
    []
  );
  return { client };
};
