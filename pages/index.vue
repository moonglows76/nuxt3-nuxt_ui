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
const ogTitle = "Top";
const ogDescription = "Topページです";
useHead({
  title: ogTitle,
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

const posts = await $fetch('/api/posts')
console.log('posts: ', posts);

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
