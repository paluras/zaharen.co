import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-02-02',
    perspective: 'published',
    withCredentials: true,
})

export async function getLatestLandingPost() {
    const post = await client.fetch(`*[_type == "landingPost"] | order(publishedAt desc)[0]{
        title,
        publishedAt,
        body,

    }`)
    return post
}

export async function getPosts() {
    const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
  title,
  publishedAt,
  body[]{
            ...,
            asset->{
                url
            }
        },
}`)
    console.log(posts);

    return posts
}