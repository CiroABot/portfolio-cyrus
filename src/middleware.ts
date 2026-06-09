import { NextRequest, NextResponse } from 'next/server';

const locales = ['pt', 'en'] as const;
// Portuguese is always the default — visitors land on /pt and can switch to /en
// via the language toggle (we intentionally do NOT auto-detect the browser
// language, which was sending English browsers to /en).
const defaultLocale = 'pt';

/* Redirects locale-less URLs (e.g. "/") to the default-locale version. */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the image optimizer, static assets, and metadata files.
  matcher: ['/((?!_next|assets|icon.svg|sitemap.xml|robots.txt|favicon.ico).*)'],
};
