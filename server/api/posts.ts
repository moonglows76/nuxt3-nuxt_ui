export default defineEventHandler(async () => {
  const posts = await $fetch(
    "https://" +
    "codingdesign.jp" +
    "/wp-json/wp/v2/posts?_embed&orderby=date&per_page=10"
  ).then((res) => {
    return res.map((post) => `/info/${post.slug}`)
  })
  console.log(posts)
  return posts
})