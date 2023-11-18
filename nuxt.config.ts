 // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: "~/plugins/aos.client.js", ssr: false, mode: "client" },
    { src: '~/plugins/widget', ssr: false },
  ],
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Roboto: true,
          'poppins': [100, 200],
           'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
    }],
    'nuxt-aos',
  ],
});