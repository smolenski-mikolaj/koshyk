<template>
  <button class="font-semibold relative flex flex-col items-center">
    <div class="absolute w-full h-full flex justify-center items-center -z-10">
      <div class="w-[30px] h-[30px] bg-gray-100 rounded-full"></div>
    </div>
    <img src="~/assets/img/icons/bread.svg" />
    <slot></slot>
  </button>
</template>
