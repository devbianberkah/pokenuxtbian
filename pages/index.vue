<script setup>
useHead({
    title:"Data Posts"
});
const router= useRouter();
const route= useRoute();
const runtime = useRuntimeConfig()
let pokemonList = [];
let pokeDetailList = Array();

const { data:pokemons } = await useFetch(`${runtime.public.baseUrl}pokemon?limit=10`);
console.log(pokemons);
pokemonList = pokemons._rawValue.results;

for(let pk of pokemonList){
  const { data:pokeDetail } = await useFetch(pk.url);
  console.log(pokeDetail);
  pokeDetailList.push(pokeDetail._rawValue); 
}
</script>

<template>
    <div class="page-content">
        <div class="grid">
                <div class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  {{ p.name }}
                </div>
        </div>
    </div>
</template>

<style scoped></style>
<!-- <NuxtLink :to="`pokemon/${p.name}`" class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  <HomeCard :pokemon="p" />
                </NuxtLink>
               -->