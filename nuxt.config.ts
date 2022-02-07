import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: ["@nuxtjs/svg", "@pinia/nuxt"],
  publicRuntimeConfig: {
    apiURL: process.env.API_URL || "http://localhost:4000",
  },
  meta: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "theme-color", content: "#2788E1" },
      { name: "description", content: "Aplikacja ułatwiająca zakupy" },
      { name: "keywords", content: "zakupy, koszyk" },
      { name: "google-signin-scope", content: "profile email" },
      {
        name: "google-signin-client_id",
        content: process.env.GOOGLE_CLIENT_ID,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    script: [
      {
        src: "https://apis.google.com/js/platform.js",
        defer: true,
        async: true,
      },
    ],
  },
});
