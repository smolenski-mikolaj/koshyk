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
      const { data } = await useFetch("/api/users/", {
        credentials: "include",
      });

      if (data.value) {
        this.user = { ...data.value };
      } else {
        const router = useRouter();
        router.push("/home");
      }
    },
    async googleAuth(idToken: string) {
      const { data } = await useFetch("/api/users/", {
        method: "post",
        credentials: "include",
        body: { idToken },
      });

      if (!data.value) {
        return;
      }

      this.user = { ...data.value };
      const router = useRouter();
      router.push("/main");
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

        setTimeout(() => {
          location.reload();
        }, 100);
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

          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    },
  },
});
