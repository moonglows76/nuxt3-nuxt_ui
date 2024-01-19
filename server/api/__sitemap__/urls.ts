import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  // postsはasSitemapUrlを使って正しい型でデータを直接取得しているサンプル
  const posts = await $fetch('/api/posts')
  return [
    // postsはデータの調整は必要なし
    ...posts,
  ]
})