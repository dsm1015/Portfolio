export default defineNuxtConfig({

    typescript: {
      typeCheck: true,
    },

    app: {
      layoutTransition: {
        name: "fade",
        mode: "out-in",
      },
      pageTransition: {
        name: "fade",
        mode: "out-in",
      },
    },
  
    routeRules: {
      "/": { isr: true, prerender: true },
    },
  
    css: ["~/assets/style/main.scss"],
  
    imports: {
    },
  
    devtools: { enabled: true },

    runtimeConfig: {
    },
  
    modules: [
      "nuxt-headlessui",
      "@vueuse/nuxt",
      "@pinia/nuxt",
      "@nuxt/ui",
      "nuxt-svgo",
      "@nuxt/image",
    ],
  
    colorMode: {
      preference: 'system',
      fallback: 'dark',
      storageKey: 'nuxt-starter-color-mode',
    },
  
    image: {
      format: ["webp"],
    },
  
    nitro: {
      prerender: {
        crawlLinks: true,
        routes: ["/sitemap.xml"],
      },
    },
  
    svgo: {
      autoImportPath: "./assets/logo/",
    },
  
    plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  });