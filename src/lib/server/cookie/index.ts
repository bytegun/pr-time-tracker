import type { CookieSerializeOptions } from 'cookie';

import { isDev } from '$lib/config';

export const cookieNames = {
  role: 'invoicingRole',
  accessTokenCookieName: 'invoicingAccessToken',
  refreshTokenCookieName: 'invoicingRefreshToken'
};

export function serializeCookie(options?: CookieSerializeOptions): CookieSerializeOptions {
  return {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    secure: !isDev,
    ...options
  };
}
