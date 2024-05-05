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

async function fetchData(){
  const { data:pokemons } = await useFetch(`${runtime.public.baseUrl}pokemon?limit=10`);
  const target = { prop1:pokemons };
  const proxy = new Proxy(target, handler);
  const { prop1 } = proxy;
  const { _rawValue } = prop1;
  const { results} = _rawValue;
  // pokemonList = _rawValue;
  return results;
}

async function fetchDetailed(pk:any){
  const { data:pokeDetail } = await useFetch(pk.url);
      const target2 = { prop2:pokeDetail };
      const proxy2 = new Proxy(target2, handler);
      const { prop2 } = proxy2;
      return prop2._rawValue
}

function fetchDetailData(){
  for(let pk of pokemonList){
        fetchDetailed(pk)
        .then(data=>{
            pokeDetailList.push(data)
            console.log(data)
          }
        )
        .catch(error=>console.error(error));
  }
}

fetchData().
  then(data =>{ 
    pokemonList = data;
    fetchDetailData()
})
  .catch(error => console.error(error));


// const targetRawValue = {prop2:prop1._rawValue};
// const proxyRawValue = new Proxy(targetRawValue, handler);
// const { prop2 } = proxyRawValue;
// pokemonList = prop2.results;
// console.log(pokemonList);


</script>

<template>
    <div class="page-content">
        <div class="grid">
             <NuxtLink :to="`pokemon/${p.name}`" class="column" v-for="(p,index) in pokeDetailList" :key="index">
                {{ p.name  }}
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped></style>
<!-- <NuxtLink :to="`pokemon/${p.name}`" class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  <HomeCard :pokemon="p" />
                </NuxtLink>
               -->