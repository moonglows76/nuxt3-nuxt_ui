<template>
  <UCard class="min-h-screen grid grid-rows-[auto_1fr_auto]">
    <template #header>
      <TheHeader />
    </template>

    <UContainer>
      <main>
        <slot />
      </main>
    </UContainer>
    <template #footer>
      <footer class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        @2023 Nuxt UI & Sitemap Test Site
      </footer>
    </template>
  </UCard>
</template>
