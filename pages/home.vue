<template>
  <main>
    <section class="relative h-[60vh] overflow-hidden">
      <div
        class="absolute w-full h-full -top-14 -z-10 bg-blue scale-125 rounded-b-[200px]"
      ></div>
      <div
        class="absolute w-[200px] h-[200px] -top-14 -left-10 -z-10 bg-blue-light rounded-full"
      ></div>
      <div
        class="absolute w-[200px] h-[200px] -top-32 -right-14 -z-10 bg-blue-light rounded-full"
      ></div>
      <div class="flex flex-col items-center mt-4">
        <img src="~/assets/img/logo/main.svg" class="h-[84px]" />
        <img src="~/assets/img/shopping.png" class="h-[211px] w-[253px] mt-4" />
      </div>
    </section>
    <section class="text-center mt-6">
      <h2 class="font-semibold text-2xl">Planuj i kupuj</h2>
      <p class="mt-4 leading-snug font-light">
        Zarządzaj zakupami <br />szybko, łatwo i przyjemnie
      </p>
      <div id="google-auth-btn" class="flex justify-center mt-8"></div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";

const config = useRuntimeConfig();
const userStore = useUserStore();

const googleAuthSuccess = (googleUser) => {
  const { id_token: idToken } = googleUser.getAuthResponse();
  userStore.googleAuth(config.apiURL, idToken);
};

onMounted(() => {
  setTimeout(() => {
    gapi.signin2.render("google-auth-btn", {
      onsuccess: googleAuthSuccess,
    });
  }, 100);
});
</script>
