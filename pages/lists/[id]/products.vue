<template>
  <div>
    <Header
      :title="listStore.$state.category"
      :subtitle="listStore.$state.name"
    ></Header>
    <Content>
      <ButtonList
        v-for="product in productStore.$state.products"
        :key="product.id"
        :checkbox="true"
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

productStore.getProducts(listStore.$state.categoryId);
</script>
