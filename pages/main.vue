<template>
  <div>
    <section class="transition-all duration-300" :class="dialog && 'blur-sm'">
      <section class="relative h-[50vh] overflow-hidden">
        <div
          class="absolute w-full h-full -top-14 -z-10 bg-blue scale-125 rounded-b-[200px]"
        ></div>
        <div
          class="absolute w-[200px] h-[200px] -top-14 -left-10 -z-10 bg-blue-light rounded-full"
        ></div>
        <div
          class="absolute w-[200px] h-[200px] -top-32 -right-14 -z-10 bg-blue-light rounded-full"
        ></div>
        <img
          :src="userStore.$state.user.avatar"
          @click="logout"
          alt="avatar"
          class="absolute w-[40px] h-[40px] top-6 right-6 rounded-full"
        />
        <div class="flex flex-col items-center mt-20">
          <img
            src="~/assets/img/shopping.png"
            class="h-[151px] w-[181px] mt-4"
          />
        </div>
      </section>
      <section class="text-center mt-8">
        <h3 class="font-semibold text-xl">Cześć</h3>
        <h2 class="-mt-1 font-bold text-2xl">
          {{ userStore.$state.user.firstname }}!
        </h2>
        <p class="mt-4 leading-snug">
          Dodaj nową listę <br />i zrób pierwsze zakupy
        </p>
      </section>
      <Footer>
        <ButtonMain @click.stop="dialog = true">Nowa lista</ButtonMain>
      </Footer>
    </section>
    <Dialog v-model="dialog">
      <h3 class="font-semibold text-2xl">Nazwa</h3>
      <input
        type="text"
        v-model="listName"
        class="mt-4 p-2 w-full rounded-lg border-dashed border border-black text-center focus:border-blue focus:outline-none"
      />
      <ButtonMain @click="createList" class="mt-10">Dalej</ButtonMain>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/stores/user";
import { useListStore } from "~/stores/list";

definePageMeta({
  middleware: ["check-user-lists"],
});

const userStore = useUserStore();
const listStore = useListStore();
const config = useRuntimeConfig();

const logout = () => userStore.logout(config.googleClientId);

const dialog = ref(false);
const listName = ref(listStore.$state.name);

const createList = () => {
  listStore.createList(listName.value);
};
</script>
