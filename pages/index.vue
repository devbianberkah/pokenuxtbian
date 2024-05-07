<script setup lang="ts">
import { useUtils } from '~/composables/useUtils';

useHead({
    title:"Data Posts"
});
// const { sayHello} = useUtils();
// sayHello();

// const { $sayHello } = useNuxtApp();
// $sayHello('okee');

const runtime = useRuntimeConfig()
let pokemonList = Array();
let pokeDetailList = Array();

const handler = {
  get: (target:any, prop:any, receiver:any) => {
    return Reflect.get(target, prop, receiver);
  }
};

const { data:pokemons } = await useFetch(`${runtime.public.baseUrl}pokemon?limit=10`);
const proxy2 = new Proxy(pokemons, handler);
const { results } = proxy2._rawValue;
pokemonList = results;
watch(pokemons, (newPage)=>{
  if(newPage){
    const proxy2 = new Proxy(newPage, handler);
    const { results } = proxy2;
    pokemonList = results;
    }
}, {
    deep: true,
    immediate:true
});

// async function fetchData(){
//   const { data:pokemons } = await useFetch(`${runtime.public.baseUrl}pokemon?limit=10`);
//   const target = { prop1:pokemons };
//   const proxy = new Proxy(target, handler);
//   const { prop1 } = proxy;
//   const { _rawValue } = prop1;
//   const { results} = _rawValue;
//   // pokemonList = _rawValue;
  
//   return results;
// }


// async function fetchDetailData(){
//   for(let pk of pokemonList){
//       const { data:pokeDetail } = await useFetch(pk.url);
//       const target2 = { prop2:pokeDetail };
//       const proxy2 = new Proxy(target2, handler);
//       const { prop2 } = proxy2;
//       pokeDetailList.push(prop2._rawValue)
//       console.log(pokeDetailList);
//       return pokeDetailList;
//   }
// }

// fetchData().
//   then(data=>{
//     pokemonList = data;
//     console.log(pokemonList);
//      fetchDetailData()
//   })
//   .catch(error => console.error(error));


</script>

<template>
    <div class="page-content">
        <div class="grid">
            <div class="column" v-for="(p,index) in pokemonList" :key="index">
                  {{ p.name }}
            </div>
        </div>
    </div>
</template>

<style scoped></style>
<!-- <NuxtLink :to="`pokemon/${p.name}`" class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  <HomeCard :pokemon="p" />
                </NuxtLink>
                <NuxtLink :to="`pokemon/${p.name}`" class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  {{ p.name }}
                </NuxtLink>

                 <div class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  {{ p.name }}
                 </div>

                  <div class="column" v-for="(p,index) in pokeDetailList" :key="index">
                     {{ p.name }} - {{  p.sprites.other['official-artwork'].front_default }}
                     <HomeCard :pokemon="p" />
                  </div>
               -->