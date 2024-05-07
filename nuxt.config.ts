// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["~/assets/main.css"],
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  app:{
    head:{
      title:'Pokedex Nuxt',
      meta:[
        {
          name:'description',
          content:'belajar nuxt'
        }
      ],
    }
  },
  runtimeConfig:{
    public:{
      baseUrl:'',
    }
  },
  
});
