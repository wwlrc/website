export async function getEvents() {
  let res = await fetch(
    "https://spanner.wwlrc.co.uk/api/clubs/c/2/rallies?size=25&page=0&sorts[start_date]=desc",
  );
  let data = await res.json();

  let events = data.rows.sort(function (a: any, b: any): number {
    let aStartDate = new Date(a.start_date);
    let bStartDate = new Date(b.start_date);
    return aStartDate.getTime() - bStartDate.getTime();
  });

  return events;
}
