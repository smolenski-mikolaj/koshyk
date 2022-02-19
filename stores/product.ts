import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts(categoryId: number) {
      const { data, error } = await useFetch(`/api/products/${categoryId}`, {
        credentials: "include",
      });

      if (error.value) {
        const router = useRouter();
        router.push("/home");

        return;
      }

      if (data.value) {
        this.products = [...data.value];
      }
    },
  },
});
