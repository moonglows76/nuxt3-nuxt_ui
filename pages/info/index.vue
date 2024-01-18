<template>
  <div>
    <UBreadcrumb :links="links" />
    <h1 class="text-7xl mt-10 mb-4">Information</h1>
    <ul class="grid grid-cols-1 gap-8">
      <li v-for="blog in responses" :key="blog.id">
        <NuxtLink :to="`/info/${blog.slug}`"
          class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6">
          <div class="md:p-2.5 md:pr-0">
            <!-- <img :src="blog._embedded['wp:featuredmedia'][0].source_url"
              v-if="blog._embedded && blog._embedded['wp:featuredmedia']" /> -->
            <div class="mt-2 text-lg font-semibold md:text-xl">
              {{ blog.title.rendered }}
            </div>
            <div class="mt-1 text-sm text-gray-700">
              {{ blog.date }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const ogTitle = "Information";
const ogDescription = "Informationページです";
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

const { data: responses, pending } = await useFetch(
  "https://" +
  "codingdesign.jp" +
  "/wp-json/wp/v2/posts?_embed&orderby=date&per_page=10"
);

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Information',
}]
</script>

<style scoped></style>