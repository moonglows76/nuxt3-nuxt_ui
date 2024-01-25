import { createClient } from 'microcms-js-sdk'
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY
});

export default defineEventHandler(async () => {
  const posts = await client
    .get({
      endpoint: 'blog',
    })
    .then((res) => {
      return res.contents.map((post) => `/blog/${post.id}`)
    })
  return posts
})