<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import "@/assets/css/tailwind.css";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const googleAuthSuccess = (googleUser) => {
  const idToken = googleUser.getAuthResponse().id_token;
  userStore.auth(idToken);
};

onMounted(() => {
  gapi.signin2.render("google-auth-btn", {
    onsuccess: googleAuthSuccess,
  });
});
</script>

<style lang="postcss">
body {
  @apply text-black;
}
</style>
