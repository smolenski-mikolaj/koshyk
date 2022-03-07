<template>
  <div
    class="font-semibold flex flex-row justify-between relative w-full text-left"
  >
    <div class="absolute left-0 items-center -z-10">
      <div class="w-[25px] h-[25px] bg-gray-100 rounded-full"></div>
    </div>
    <div class="pl-3" :class="active && 'text-blue'" @click="active = !active">
      <slot />
    </div>
    <div v-if="checkbox">
      <input type="checkbox" v-model="checked" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  checkbox: Boolean,
});

const checked = ref(false);
const active = ref(false);
</script>
