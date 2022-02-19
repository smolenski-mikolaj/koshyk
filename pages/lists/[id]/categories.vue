<template>
  <div>
    <Header title="Kategorie" :subtitle="listStore.$state.name"></Header>
    <Content>
      <div class="grid grid-cols-3 gap-3">
        <ButtonPrimary
          v-for="category in categoryStore.$state.categories"
          :key="category.id"
          :icon="category.icon"
          @click="navigateToProducts(category)"
        >
          {{ category.name }}
        </ButtonPrimary>
      </div>
    </Content>
    <Footer>
      <ButtonMain>Pokaż listę</ButtonMain>
    </Footer>
  </div>
</template>

<script lang="ts" setup>
import { useCategoryStore } from "~/stores/category";
import { useListStore } from "~/stores/list";

const categoryStore = useCategoryStore();
const listStore = useListStore();

const navigateToProducts = (category: {}) => {
  listStore.$state.category = category.name;
  listStore.$state.categoryId = category.id;

  const router = useRouter();
  router.push(`/lists/${listStore.$state.id}/products`);
};

if (categoryStore.$state.categories.length === 0) {
  categoryStore.getCategories();
}
</script>
