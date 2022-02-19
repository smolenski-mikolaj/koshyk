import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware(() => {
  if (useUserStore().$state.user.lists.length > 0) {
    return navigateTo("/lists");
  }
});
