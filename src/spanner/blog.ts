export function getPosts() {
    return fetch('https://spanner.wwlrc.co.uk/api/clubs/c/2/blog_posts?size=10&page=0&sorts[created_at]=desc').then((res) => res.json()).then((res) => { return res.rows })
}