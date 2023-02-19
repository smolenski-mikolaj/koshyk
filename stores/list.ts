import { defineStore } from "pinia";

export const useListStore = defineStore("list", {
  state: () => ({
    id: 0,
    name: "Moja lista",
    category: "",
    categoryId: 0,
  }),
  actions: {
    createList(listName: string) {
      this.name = listName;

      const router = useRouter();
      router.push("/lists/new/categories");
    },
  },
});
