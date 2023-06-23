// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    typescript: {
        typeCheck: true,
        strict: true,
    },
    
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

  
})
