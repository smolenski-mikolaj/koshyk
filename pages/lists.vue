<template>
  <main>
    <section class="transition-all duration-300" :class="dialog && 'blur-sm'">
      <section class="relative h-[20vh] overflow-hidden">
        <div
          class="absolute w-full h-full -top-14 -z-10 bg-blue scale-150 rounded-b-[200px]"
        ></div>
        <div
          class="absolute w-[200px] h-[200px] -top-32 -left-10 -z-10 bg-blue-light rounded-full"
        ></div>
        <div
          class="absolute w-[200px] h-[200px] -top-40 -right-14 -z-10 bg-blue-light rounded-full"
        ></div>
        <!-- <img
          src="~/assets/img/icons/chevron-left.svg"
          class="absolute w-[40px] h-[40px] top-6 left-4"
        /> -->
        <div class="absolute left-0 top-0 w-full h-full flex justify-center items-center">
          <img src="~/assets/img/logo/main.svg" class="h-[60px] mb-5" />
        </div>
        <img
          :src="userStore.$state.user.avatar"
          @click="logout"
          alt="avatar"
          class="absolute w-[40px] h-[40px] top-6 right-6 rounded-full"
        />
      </section>
      <section class="h-[80vh] py-10 px-16">
        <div v-for="list in user.lists" :key="list.id" class="mb-6">
          <div class="flex flex-row justify-between">
            <Text>{{ list.name }}</Text>
            <p class="font-light text-gray-400">
              {{ list.updatedAt.split("T")[0] }}
            </p>
          </div>
        </div>
      </section>
      <Footer>
        <Button @click.stop="dialog = true">Nowa lista</Button>
      </Footer>
    </section>
    <Dialog v-model="dialog">
      <h3 class="font-semibold text-2xl">Nazwa</h3>
      <input
        type="text"
        v-model="listName"
        class="mt-4 p-2 w-full rounded-lg border-dashed border border-black text-center focus:border-blue focus:outline-none"
      />
      <Button @click="createUserList" class="mt-10">Dalej</Button>
    </Dialog>
  </main>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const config = useRuntimeConfig();

const user = userStore.$state.user;
const logout = () => userStore.logout(config.apiURL, config.googleClientId);

const dialog = ref(false);
const listName = ref("Moja lista");

const createUserList = () => {
  userStore.createUserList(config.apiURL, listName.value);
};
</script>
