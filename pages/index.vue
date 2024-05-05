<script setup lang="ts">
useHead({
    title:"Data Posts"
});
const router= useRouter();
const route= useRoute();
const runtime = useRuntimeConfig()
let pokemonList = Array();
let pokeDetailList = Array();

const handler = {
  get: (target:any, prop:any, receiver:any) => {
    return Reflect.get(target, prop, receiver);
  }
};

const { data:pokemons } = await useFetch(`${runtime.public.baseUrl}pokemon?limit=10`);
const target = { prop1:pokemons };
const proxy = new Proxy(target, handler);
const { prop1 } = proxy;

// const targetRawValue = {prop2:prop1._rawValue};
// const proxyRawValue = new Proxy(targetRawValue, handler);
// const { prop2 } = proxyRawValue;
// // console.log(prop2.results);
// pokemonList = prop2.results;

// for(let pk of pokemonList){
//   const { data:pokeDetail } = await useFetch(pk.url);
//   const target2 = { prop2:pokeDetail };
  
//   const proxy2 = new Proxy(target2, handler);
//   const { prop2 } = proxy2;
//   pokeDetailList.push(prop2._rawValue);
// }
</script>

<template>
    <div class="page-content">
        <div class="grid">
       
        </div>
    </div>
</template>

<style scoped></style>
<!-- <NuxtLink :to="`pokemon/${p.name}`" class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  <HomeCard :pokemon="p" />
                </NuxtLink>
               -->