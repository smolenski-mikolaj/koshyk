import { defineStore } from "pinia";

interface User {
  id?: number;
  googleId: string;
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
      googleId: "",
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
      const { data: user } = await useFetch(`http://localhost:4000/users/`, {
        method: "post",
        body: {
          googleId: userData.googleId,
          email: userData.email,
          firstname: userData.firstname,
          lastname: userData.lastname,
          name: userData.name,
          avatar: userData.avatar,
        },
      });

      const { data: lists } = await useFetch(
        `http://localhost:4000/lists/${user.value.id}`
      );

      this.auth({ ...userData, id: user.value.id });

      console.log(lists.value);

      if (lists.value === "OK") {
        const router = useRouter();
        router.push("main");
      } else {
        // redirect to "lists" in the future
        const router = useRouter();
        router.push("main");
      }
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
    },
  },
});
