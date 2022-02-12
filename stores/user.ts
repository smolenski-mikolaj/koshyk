import { defineStore } from "pinia";
import { User } from "~/types/user";

export const useUserStore = defineStore("users", {
  state: () => ({
    user: <User>{
      id: null,
      googleId: "",
      email: "",
      firstname: "",
      lastname: "",
      name: "",
      avatar: "",
      lists: [],
    },
  }),
  actions: {
    async auth() {
      const { data: user } = await useFetch("/api/users/", {
        credentials: "include",
      });

      const router = useRouter();
      if (user.value) {
        this.user = { ...user.value };

        if (this.user.lists && this.user.lists.length > 0) {
          router.push("/lists");
        } else {
          router.push("/main");
        }
      } else {
        router.push("/home");
      }
    },
    async googleAuth(idToken: string) {
      const { data: user } = await useFetch("/api/users/", {
        method: "post",
        credentials: "include",
        body: { idToken },
      });

      if (!user.value) {
        return;
      }

      this.user = { ...user.value };
      const router = useRouter();

      if (this.user.lists && this.user.lists.length > 0) {
        router.push("/lists");
      } else {
        router.push("/main");
      }
    },
    async logout(clientId: string) {
      await useFetch("/api/users/logout", {
        credentials: "include",
      });

      if (gapi.auth2) {
        const auth2 = gapi.auth2.getAuthInstance();
        await auth2.signOut();

        this.user = {
          id: null,
          googleId: "",
          email: "",
          firstname: "",
          lastname: "",
          name: "",
          avatar: "",
          lists: [],
        };

        location.reload();
      } else {
        gapi.load("auth2", async () => {
          await gapi.auth2.init({ client_id: clientId });
          const auth2 = gapi.auth2.getAuthInstance();
          await auth2.signOut();

          this.user = {
            id: null,
            googleId: "",
            email: "",
            firstname: "",
            lastname: "",
            name: "",
            avatar: "",
            lists: [],
          };

          location.reload();
        });
      }
    },
    async createUserList(listName: string) {
      const router = useRouter();
      router.push("/lists/1/categories");
      // const { data: list } = await useFetch("/api/lists/", {
      //   method: "put",
      //   credentials: "include",
      //   body: { listName },
      // });

      // this.user.lists.push(list.value);
    },
  },
});
