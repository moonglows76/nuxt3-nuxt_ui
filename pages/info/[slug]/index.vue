<template>
  <div>
    <UBreadcrumb :links="links" />
    <article class="post" v-for="post in posts" :key="post.slug">
      <h1 class="post__title text-7xl mt-10 mb-4">{{ post.title.rendered }}</h1>
      <div class="post__content" v-html="sanitizeHTML(post.content.rendered)"></div>
    </article>

  </div>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
import sanitizeHTML from 'sanitize-html';

const { data: posts } = await useFetch(
  "https://" +
  "codingdesign.jp" +
  "/wp-json/wp/v2/posts?slug=" + slug
);

const ogTitle = posts.value[0].title.rendered;
const ogDescription = posts.value[0].title.rendered;
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

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Information',
  to: '/info'
}, {
  label: posts.value[0].title.rendered,
}]
</script>

<style scoped>
.post__content:deep(p) {
  margin: 2rem 0;
  @apply text-lg leading-loose tracking-wide;
}
</style>