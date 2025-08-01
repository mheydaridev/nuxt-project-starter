import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "fa_ir",
    locales: [
      {
        code: "fa_ir",
        name: "Persian",
        file: "fa_ir.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],
});
