<script setup lang="ts">
useHead({
    title:"Data Posts"
});


const runtime = useRuntimeConfig()
let pokemonList = Array();
let pokeDetailList = Array();

const handler = {
  get: (target:any, prop:any, receiver:any) => {
    return Reflect.get(target, prop, receiver);
  }
};

console.log("1");
const { data:pokemons } = await useFetch(`${runtime.public.baseUrl}pokemon?limit=10`);
watch(pokemons, (newPage)=>{
  console.log("2");
  if(newPage){
    console.log("3");

    const proxy2 = new Proxy(newPage, handler);
    const { results } = proxy2;
    pokemonList = results;
    for(let pk of pokemonList){
            useFetch(pk.url)
              .then((response)=>{
                console.log("4");
                const target2 = { prop2:response.data };
                const proxy2 = new Proxy(target2, handler);
                const { prop2 } = proxy2;
                pokeDetailList.push(prop2._rawValue)
          });
      }
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
            <div class="column" v-for="(p,index) in pokeDetailList" :key="index">
                  <HomeCard :pokemon="p" />
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
               -->