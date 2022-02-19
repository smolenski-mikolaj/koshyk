import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts(categoryId: number) {
      const { data } = await useFetch(`/api/products/${categoryId}`, {
        credentials: "include",
      });

      if (data.value === "unauthorized") {
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
