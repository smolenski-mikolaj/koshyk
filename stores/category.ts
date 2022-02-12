import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      const { data: categories } = await useFetch("/api/categories/", {
        credentials: "include",
      });

      if (categories.value) {
        this.categories = [...categories.value];
      }
    },
  },
});
