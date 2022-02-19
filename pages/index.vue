<template>
  <div
    class="absolute h-full w-full bg-blue flex flex-col items-center justify-center"
  >
    <img src="~/assets/img/logo/main.svg" class="h-[84px]" />
  </div>
</template>

<script lang="ts" setup>
import "@/assets/css/tailwind.css";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

onMounted(() => {
  userStore.auth();
});
</script>
