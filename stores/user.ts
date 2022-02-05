import { defineStore } from "pinia";

const delay = (t: number) => new Promise((r) => setTimeout(r, t));

interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  name: string;
  avatar: string;
  lists: number;
}

export const useUserStore = defineStore("users", {
  state: () => ({
    user: {
      id: null,
      email: "",
      firstname: "",
      lastname: "",
      name: "",
      avatar: "",
      lists: 0,
    },
  }),
  actions: {
    async login(userData: User) {
      await delay(200);
      // check if user exists in db. If not, create.
      // then check if user has any list saved. If yes, get lists.

      this.auth(userData);
    },
    async logout() {
      const auth2 = gapi.auth2.getAuthInstance();
      await auth2.signOut();

      this.user = {
        id: null,
        email: "",
        firstname: "",
        lastname: "",
        name: "",
        avatar: "",
        lists: 0,
      };

      const router = useRouter();
      router.push("/");

      location.reload();
    },
    auth(userData: User) {
      this.user = {
        id: userData.id,
        email: userData.email,
        firstname: userData.firstname,
        lastname: userData.lastname,
        name: userData.name,
        avatar: userData.avatar,
      };

      const router = useRouter();
      router.push("main");
    },
  },
});
