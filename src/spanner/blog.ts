import { spannerApiFetch, spannerPathCat } from "./api";
import { wwlrcClubId } from "./wwlrc";

export async function getPosts(): Promise<any[]> {
  let data = await spannerApiFetch("api/clubs/c/:clubId/blog_posts", {
    clubId: wwlrcClubId,
    size: 10,
    page: 0,
    "sorts[created_at]": "desc",
  });

  return data.rows == null ? [] : data.rows;
}
