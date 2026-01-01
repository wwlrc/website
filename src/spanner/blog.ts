import { spannerApiFetch } from "./api";
import { wwlrcClubId } from "./wwlrc";

export async function getPosts(): Promise<any[]> {
  let data = await spannerApiFetch("news", {
    clubs: wwlrcClubId,
  });

  return data.posts == null ? [] : data.posts;
}
