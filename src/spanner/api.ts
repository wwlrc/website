import { base, ExtractRouteParams, Query, pathcat } from "pathcat";

export const spannerPathCat = base("https://spanner.wwlrc.co.uk");

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

export const spannerApiFetch = wrapWithBase<Promise<any>>(
  "https://spanner.wwlrc.co.uk",
  async (path) => {
    let response = await fetch(path);
    // TODO: probably worth putting some more fancy error handling here
    return response.json();
  },
);
