import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/") {
    return;
  }

  if (useUserStore().$state.user.id === null) {
    return navigateTo("/");
  }
});
