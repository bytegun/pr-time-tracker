import type { CookieSerializeOptions } from 'cookie'
import { isDev } from '$lib/config'
import Cookies, { type CookieSetOptions } from 'universal-cookie'


export const names = {
    accessTokenCookieName: 'invoicingAccessToken',
    refreshTokenCookieName: 'invoicingRefreshToken'
}

export function serializeCookie(options?: CookieSerializeOptions): CookieSerializeOptions {
    return {
        path: '/',
        httpOnly: false,
        sameSite: 'lax',
        secure: !isDev,
        ...options
    }
}