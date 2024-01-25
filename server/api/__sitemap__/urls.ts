import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  // postsはasSitemapUrlを使って正しい型でデータを直接取得しているサンプル
  const posts = await $fetch('/api/posts')
  const blog_posts = await $fetch('/api/blog_posts')
  return [
    // postsはデータの調整は必要なし
    ...posts,
    ...blog_posts,
  ]
})