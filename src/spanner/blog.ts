export async function getPosts() {
    let res = await fetch('https://spanner.wwlrc.co.uk/api/clubs/c/2/blog_posts?size=10&page=0&sorts[created_at]=desc')
    let data = await res.json()
    
    return data.rows
}