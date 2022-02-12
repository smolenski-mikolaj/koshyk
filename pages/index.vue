<template>
  <main
    class="absolute h-full w-full bg-blue flex flex-col items-center justify-center"
  >
    <img src="~/assets/img/logo/main.svg" class="h-[84px]" />
  </main>
</template>

<script lang="ts" setup>
import "@/assets/css/tailwind.css";
import { onMounted, nextTick } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

onMounted(() => {
  userStore.auth();
});
</script>
