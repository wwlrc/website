import { spannerPublicApiFetch } from "./api";
import { wwlrcClubId } from "./wwlrc";

export async function getPosts(): Promise<any[]> {
  let data = await spannerPublicApiFetch("news", {
    clubs: wwlrcClubId,
  });

  return data.posts == null ? [] : data.posts;
}
