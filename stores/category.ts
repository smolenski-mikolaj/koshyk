import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      const { data, error } = await useFetch("/api/categories/", {
        credentials: "include",
      });

      if (error.value) {
        const router = useRouter();
        router.push("/home");

        return;
      }

      if (data.value) {
        this.categories = [...data.value];
      }
    },
  },
});
