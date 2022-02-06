import { defineStore } from "pinia";

interface User {
  id: number;
  googleId: number;
  email: string;
  firstname: string;
  lastname: string;
  name: string;
  avatar: string;
}

export const useUserStore = defineStore("users", {
  state: () => ({
    user: {
      id: null,
      googleId: null,
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
      await useFetch(`http://localhost:4000/users/`, {
        method: "post",
        body: {
          googleId: userData.id,
          email: userData.email,
          firstname: userData.firstname,
          lastname: userData.lastname,
          name: userData.name,
          avatar: userData.avatar,
        },
      });

      // now check if user has any list saved. If yes, get lists.

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
