import { base, ExtractRouteParams, Query } from "pathcat";

export const spannerPathCat = base("https://spanner.wwlrc.co.uk");

export async function spannerApiFetch<Path extends string>(
  path: Path,
  ...query: [ExtractRouteParams<Path>] extends [never]
    ? [query?: Query<Path>]
    : [query: Query<Path>]
) {
  let response = await fetch(spannerPathCat(path, ...query));
  // TODO: probably worth putting some more fancy error handling here
  return response.json();
}
