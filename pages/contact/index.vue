<template>
  <div>
    <UBreadcrumb :links="links" />
    <h1 class="text-7xl mt-10 mb-4">Contact</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quam? Quam perspiciatis non ipsa. Molestiae odio
      exercitationem voluptates cumque harum corrupti quae porro quis? Sunt cumque rem quasi minima tenetur.</p>
  </div>
</template>

<script setup>
const ogTitle = "Contact";
const ogDescription = "Contactページです";
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
  label: 'About',
}]
</script>
