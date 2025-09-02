import { pathcat, Query } from "pathcat";

const spannerBase = "https://spanner.wwlrc.co.uk";

export function pathWildcat(template: string, query?: Query<string>): string {
  if (!query) {
    return pathcat(spannerBase, template);
  }

  return pathcat(spannerBase, template, query);
}

export function spannerApiFetch(
  template: string,
  query?: Query<string>,
): Promise<any> {
  const url = pathWildcat(template, query);
  let p = fetch(url);
  // TODO: probably worth putting some more fancy error handling here
  return p.then((response) => response.json());
}
