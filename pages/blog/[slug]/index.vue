<template>
  <div>
    <UBreadcrumb :links="links" />
    <template v-if="data">
      <h1 class="text-5xl mt-10 mb-4">
        {{ data.title }}
      </h1>
      <div class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
        <div class="text-sm text-gray-700">
          {{ data.publishedAt }}
        </div>
      </div>
      <div v-html="data.body" class="prose mt-6 md:mt-10"></div>
    </template>

  </div>
</template>

<script setup>
const ogTitle = "blog";
const ogDescription = "blogページです";
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

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail({
  endpoint: "blog",
  contentId: Array.isArray(params.slug) ? params.slug[0] : params.slug,
});

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Blog',
  to: '/blog'
}, {
  label: data.value?.title,
}]

</script>

