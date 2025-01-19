export async function getEvents() {
    let res = await fetch('https://spanner.wwlrc.co.uk/api/clubs/c/2/rallies?size=10&page=0&sorts[start_date]=desc')
    let data = await res.json()
    
    return data.rows
}