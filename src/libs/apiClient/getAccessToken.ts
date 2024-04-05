import { getCookie, setCookie } from 'cookies-next';

import type { TokenResponse } from '@/api/@types';

import { BASE_URL } from '@/constants/baseUrl';

export const getAccessToken = async (): Promise<string | null> => {
  const refreshToken = getCookie('refresh-token');
  const accessToken = getCookie('access-token');
  const now = new Date().getTime();
  if (!refreshToken) {
    return null;
  }

  if (accessToken == undefined) {
    const { refresh_token: newRefreshToken, access_token: newAccessToken } =
      await fetchAccessToken(refreshToken);

    setCookie('refresh-token', newRefreshToken, {
      expires: new Date(now + 15 * 24 * 60 * 60 * 1000),
    });

    setCookie('access-token', newAccessToken, {
      expires: new Date(now + 15 * 60 * 1000),
    });
    return newAccessToken;
  }
  return accessToken;
};

const fetchAccessToken = async (
  refreshToken: string
): Promise<TokenResponse> => {
  const res = await fetch(`${BASE_URL}/api/v1/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  const data = (await res.json()) as TokenResponse;
  return data;
};
