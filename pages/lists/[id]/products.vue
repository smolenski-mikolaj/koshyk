<template>
  <div class="transition-all duration-300" :class="dialog && 'blur-sm'">
    <Header
      :title="listStore.$state.category"
      :subtitle="listStore.$state.name"
    ></Header>
    <Content>
      <ButtonList
        v-for="product in productStore.$state.products"
        :key="product.id"
        :checkbox="true"
        :productID="product.id"
        :productName="product.name"
        :productUnit="product.unit.value"
        @dialogToggle="handleDialogToggle"
      >
        {{ product.name }}
      </ButtonList>
    </Content>
    <Footer>
      <ButtonMain>Pokaż listę</ButtonMain>
    </Footer>
  </div>
</template>

<script lang="ts" setup>
import { useListStore } from "~/stores/list";
import { useProductStore } from "~/stores/product";

const listStore = useListStore();
const productStore = useProductStore();
const dialog = ref(false);

productStore.getProducts(listStore.$state.categoryId);

const handleDialogToggle = (isVisible: boolean) => {
  dialog.value = isVisible;
};
</script>
