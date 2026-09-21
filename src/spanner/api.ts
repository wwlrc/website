import { base, ExtractRouteParams, Query, pathcat } from "pathcat";

// Always the real site: account links (spannerPathCat) must stay pointed here
// even in dev, since the local stub only serves the API, not HTML pages.
const spannerBase = "https://spanner.wwlrc.co.uk";

export const spannerPathCat = base(spannerBase);

// The API origin, on the other hand, is swapped in dev: the "dev" script
// points it at the local stub server, "build" sets it to spannerBase — see
// package.json. No fallback here on purpose, so a missing value fails loudly
// instead of silently doing the wrong thing.
if (!process.env.NEXT_PUBLIC_SPANNER_API_URL) {
  throw new Error(
    'NEXT_PUBLIC_SPANNER_API_URL is not set — see the "dev" and "build" scripts in package.json.',
  );
}

const spannerApiOrigin = process.env.NEXT_PUBLIC_SPANNER_API_URL;

function wrap<R>(
  fn: (path: string) => R,
): <Path extends string>(
  base: string,
  path: Path,
  ...query: [ExtractRouteParams<Path>] extends [never]
    ? [query?: Query<Path>]
    : [query: Query<Path>]
) => R {
  return (base, path, ...query): R => fn(pathcat(base, path, ...query));
}

function wrapWithBase<R>(
  base: string,
  fn: (path: string) => R,
): <Path extends string>(
  path: Path,
  ...query: [ExtractRouteParams<Path>] extends [never]
    ? [query?: Query<Path>]
    : [query: Query<Path>]
) => R {
  return (path, ...query): R => wrap(fn)(base, path, ...query);
}

// Public, unauthenticated endpoints (rallies, news) live under /api/public/v1.
// Their CORS response is a bare wildcard origin, which browsers reject
// outright alongside a credentialed request, so this must stay plain fetch.
export const spannerPublicApiFetch = wrapWithBase<Promise<any>>(
  `${spannerApiOrigin}/api/public/v1`,
  async (path) => {
    let response = await fetch(path);
    // TODO: probably worth putting some more fancy error handling here
    return response.json();
  },
);

// /me needs a real logged-in session and isn't under the public/v1 prefix.
// credentials: "include" is what actually gets the SameSite=Lax session
// cookie sent on this cross-origin request — fetch() otherwise defaults to
// same-origin and silently drops it.
export const spannerApiFetch = wrapWithBase<Promise<any>>(
  `${spannerApiOrigin}/api`,
  async (path) => {
    let response = await fetch(path, { credentials: "include" });
    // TODO: probably worth putting some more fancy error handling here
    return response.json();
  },
);
