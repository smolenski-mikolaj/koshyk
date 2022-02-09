import { defineStore } from "pinia";

interface User {
  id?: number;
  googleId: string;
  email: string;
  firstname: string;
  lastname: string;
  name: string;
  avatar: string;
  lists?: Array<{
    id: number;
    name: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
}

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
    async auth(apiURL: string) {
      const { data: user } = await useFetch(`${apiURL}/users/`, {
        credentials: "include",
      });

      if (user.value) {
        this.user = { ...user.value };

        const router = useRouter();
        if (this.user.lists && this.user.lists.length > 0) {
          router.push("lists");
        } else {
          router.push("main");
        }
      }

      return user.value;
    },
    async googleAuth(apiURL: string, idToken: string) {
      const { data: user } = await useFetch(`${apiURL}/users/`, {
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
        router.push("lists");
      } else {
        router.push("main");
      }
    },
    async logout(apiURL: string, clientId: string) {
      await useFetch(`${apiURL}/users/logout`, {
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
    async createUserList(apiURL: string, listName: string) {
      const { data: list } = await useFetch(`${apiURL}/lists/`, {
        method: "put",
        credentials: "include",
        body: { listName },
      });

      console.log(list.value);
      this.user.lists.push(list.value);
    },
  },
});
