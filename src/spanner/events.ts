import { spannerApiFetch } from "./api";
import { wwlrcClubId } from "./wwlrc";

export async function getEvents() {
  let data = await spannerApiFetch("api/clubs/c/:clubId/rallies", {
    clubId: wwlrcClubId,
    size: 25,
    page: 0,
    "sorts[start_date]": "desc",
  });

  let events = data.rows == null ? [] : data.rows;
  events.sort(function (a: any, b: any): number {
    let aStartDate = new Date(a.start_date);
    let bStartDate = new Date(b.start_date);
    return aStartDate.getTime() - bStartDate.getTime();
  });

  return events;
}
