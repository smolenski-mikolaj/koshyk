<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import "@/assets/css/tailwind.css";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

onMounted(() => {
  nextTick(() => userStore.auth());
});
</script>

<style lang="postcss">
body {
  @apply text-black;
}
</style>
