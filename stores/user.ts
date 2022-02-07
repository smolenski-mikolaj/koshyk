import { defineStore } from "pinia";

interface User {
  id?: number;
  googleId: string;
  email: string;
  firstname: string;
  lastname: string;
  name: string;
  avatar: string;
  lists?: Array<{}>;
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
    async auth(idToken: string) {
      const { data: user } = await useFetch(`http://localhost:4000/users/`, {
        method: "post",
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
    async logout() {
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

      const router = useRouter();
      router.push("/");
      location.reload();
    },
  },
});
