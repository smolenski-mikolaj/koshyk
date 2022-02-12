<template>
  <div>
    <Header title="Kategorie" subtitle="Moja lista 1"></Header>
    <Content>
      <div class="grid grid-cols-3 gap-3">
        <CategoryButton
          v-for="category in categoryStore.$state.categories"
          :key="category.id"
          :icon="category.icon"
        >
          {{ category.name }}
        </CategoryButton>
      </div>
    </Content>
    <Footer>
      <Button>Pokaż listę</Button>
    </Footer>
  </div>
</template>

<script lang="ts" setup>
import { useCategoryStore } from "~/stores/category";

const categoryStore = useCategoryStore();

if (categoryStore.$state.categories.length === 0) {
  categoryStore.getCategories();
}
</script>
