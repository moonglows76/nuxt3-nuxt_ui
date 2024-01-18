<template>
  <div>
    <UBreadcrumb :links="links" />
    <h1 class="text-7xl mt-10 mb-4">Blog</h1>
    <ul class="grid grid-cols-1 gap-8">
      <li v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink :to="`/blog/${blog.id}`"
          class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6">
          <div class="md:p-2.5 md:pr-0">
            <div class="mt-2 text-lg font-semibold md:text-xl">
              {{ blog.title }}
            </div>
            <div class="mt-1 text-sm text-gray-700">
              {{ blog.publishedAt }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const ogTitle = "Blog";
const ogDescription = "Blogページです";
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

const { data } = await useMicroCMSGetList({
  endpoint: "blog",
});

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Blog',
}]
</script>

