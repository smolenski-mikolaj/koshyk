<template>
  <div class="h-[100px] bg-blue text-white flex flex-row">
    <img
      @click="$router.back()"
      src="~/assets/img/icons/chevron-left.svg"
      class="p-5 m-3"
    />
    <div class="grow flex flex-col justify-center">
      <p class="text-xs font-light">{{ subtitle }}</p>
      <p class="text-3xl font-semibold">{{ title }}</p>
    </div>
    <NuxtLink to="/main"
      ><img src="~/assets/img/icons/home.svg" class="p-5 m-3"
    /></NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  subtitle: String,
});
</script>
