<script lang="ts" setup>
const { appName } = useAppConfig();
useHead({
  title: "portfolio",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
    { name: "description", content: "Portfolio" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});

</script>

<template>
  <Html>
    <Body class="bg-white dark:bg-zinc-950">
      <LayoutCommandConsole />
      <LayoutScrollToTop />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <UNotifications />
    </Body>
  </Html>
</template>