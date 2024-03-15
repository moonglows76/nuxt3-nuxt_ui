<template>
  <div :class="ui.background">
    <h1>Nuxt UI & Sitemap Test Site</h1>
    <ul>
      <li class="mt-4">
        <UButton icon="i-heroicons-chevron-right-20-solid" size="md" :trailing="false" to="/">
          Home
        </UButton>
      </li>
      <li class="mt-4">
        <UButton icon="i-heroicons-chevron-right-20-solid" size="md" :trailing="false" to="/about">
          About
        </UButton>
      </li>
      <li class="mt-4">
        <UButton icon="i-heroicons-chevron-right-20-solid" size="md" :trailing="false" to="/info">
          Information (as WordPress REST API Data Sample)
        </UButton>
      </li>
      <li class="mt-4">
        <UButton icon="i-heroicons-chevron-right-20-solid" size="md" :trailing="false" to="/blog">
          Blog (as microCMS Data Sample)
        </UButton>
      </li>
    </ul>
  </div>
</template>

<script setup>
const ogTitle = "Nuxt UI & Sitemap Test Site";
const ogDescription = "Nuxt UI & Sitemap Test SiteのTopページです";
useHead({
  title: ogTitle,
  titleTemplate: "",
  meta: [
    { hid: "description", name: "description", content: ogDescription },
    { property: "og:type", content: "article" },
    {
      property: "og:title",
      content: ogTitle,
    },
    { property: "og:description", content: ogDescription },
  ],
});

const ui = /*ui*/ ref({
  background: 'bg-white dark:bg-slate-900'
})

// const posts = await $fetch('/api/posts')
// console.log('posts: ', posts);
// const posts = await $fetch('/api/blog_posts')
// console.log('blog_posts: ', blog_posts);

</script>

<style>
.header__logo {
  display: flex;
  /* df */
  align-items: center;
  /* aic */
  column-gap: 15px;
  /* cg */
}
</style>
