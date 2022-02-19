import { defineNuxtPlugin } from "#app";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";
import Cookies from "js-cookie";
import cookie from "cookie";

export default defineNuxtPlugin(({ $pinia, ssrContext }) => {
  $pinia.use(
    createPersistedStatePlugin({
      storage: {
        getItem: (key) => {
          if (process.server) {
            const parsedCookies = cookie.parse(ssrContext.req.headers.cookie);
            return parsedCookies[key];
          } else {
            return Cookies.get(key);
          }
        },
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 365, secure: false }),
        removeItem: (key) => Cookies.remove(key),
      },
    })
  );
});
