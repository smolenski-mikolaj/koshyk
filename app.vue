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
  const profile = googleUser.getBasicProfile();
  const userData = {
    googleId: profile.getId(),
    name: profile.getName(),
    firstname: profile.getGivenName(),
    lastname: profile.getFamilyName(),
    avatar: profile.getImageUrl(),
    email: profile.getEmail(),
  };

  userStore.login(userData);
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
