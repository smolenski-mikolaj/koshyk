<template>
  <div
    v-if="modelValue"
    class="fixed left-0 top-0 w-full h-full flex justify-center items-center"
    @click="close"
  >
    <div @click.stop class="w-[300px] p-5 bg-white text-center rounded-xl shadow-xl">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const close = () => {
  emit("update:modelValue", !props.modelValue);
};

const onEscKeyup = (event) => {
  if (event.key === "Escape") {
    close();
  }
};

onMounted(() => {
  document.addEventListener("keyup", onEscKeyup);
});

onUnmounted(() => {
  document.addEventListener("keyup", onEscKeyup);
});
</script>
