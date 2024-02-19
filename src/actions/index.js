'use server'

export async function getPosts() {
    const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    return posts
}