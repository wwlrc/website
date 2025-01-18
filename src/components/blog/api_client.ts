export function getPosts() {
    return fetch('https://spanner.wwlrc.co.uk/api/clubs/c/2/blog_posts').then((res) => res.json()).then((res) => { return res.rows })
}