<template>
  <div
    class="font-semibold flex flex-row justify-between relative w-full text-left mb-2"
  >
    <div class="absolute left-0 items-center -z-10">
      <div class="w-[25px] h-[25px] bg-gray-100 rounded-full"></div>
    </div>
    <div class="pl-3 flex w-full" @click="dialog = true">
      <slot></slot>
    </div>
    <div class="px-2" v-if="checkbox">
      <input type="checkbox" v-model="checked" />
    </div>
  </div>
  <Dialog v-model="dialog">
    <h3 class="font-semibold text-2xl">{{ productName }}</h3>
    <div class="mt-4">
      <input
        type="number"
        class="p-2 mr-2 w-20 rounded-lg border-dashed border border-black text-center focus:border-blue focus:outline-none"
        placeholder="Ilość"
        ref="inputEl"
      />
      <label>{{ productUnit }}</label>
    </div>
    <ButtonMain class="mt-10">OK</ButtonMain>
  </Dialog>
</template>

<script lang="ts" setup>
defineProps({
  checkbox: Boolean,
  productID: Number,
  productName: String,
  productUnit: String,
});

const checked = ref(false);
const dialog = ref(false);
const inputEl = ref(null);

const emit = defineEmits(["dialogToggle"]);
watch(
  () => dialog.value,
  () => {
    emit("dialogToggle", dialog.value);

    nextTick(() => {
      if (dialog.value && inputEl.value) {
        inputEl.value.focus();
      }
    });
  }
);
</script>
