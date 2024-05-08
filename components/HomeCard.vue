<script setup lang="ts">
const runtime = useRuntimeConfig();
const { pokemon } = defineProps(['pokemon']);
let sprites="",type = "";
let pokedetail = [];
let pokeTypes = [];
const { data:pokemon_detail } = await useFetch(pokemon.url);
watch(pokemon_detail, (newPage)=>{
    if(newPage){
       pokedetail =  isProxy(newPage) ? toRaw(newPage) : newPage;
      // console.log(pokedetail.types);
       sprites = pokedetail.sprites.other.home.front_default;
       type = pokedetail.types[0].type.name;
       pokeTypes = pokedetail.types;
    }
}, {
    deep: true,
    immediate:true
});

function pokemonColor(){
    return "grass";
}
</script>

<template>
    <div class="grid-item">
        <div :class="`pokemon-card-box bg-light bg-light--${type}`">
            <ul class="pokemon-card-box-content">
                <li class="pokemon-home-box__img-container">
                     <img class="pokemon-home-box__img" :src=sprites> 
                </li>
                <li class="pokemon-card-box__detail-container">
                    <div class="pokemon-card-box-type">
                        <span v-for="(p,index) in pokeTypes" :key="index">
                            <label :class="`type-label bg-dark bg--${type}`">{{ p.type.name }}</label>
                        </span>
                    </div>
                    <h1 class="pokemon-box__name">{{ pokedetail.name }}</h1>
                    <p class="pokemon-box-home__number">#{{ pokedetail.id }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<!--                     <img class="pokemon-home-box__img" v-bind:src="pokemon.sprites.other['official-artwork'].front_default">    
 
  <li class="pokemon-home-box__detail-container">
                    <ul class="pokemon-card-box-content">
                        <li>
                            <h1 class="pokemon-box__name">{{ pokedetail.name }}</h1>
                        </li>
                        <li>
                            <p class="pokemon-box-home__number">#{{ pokedetail.id }}</p>
                        </li>
                    </ul>
                </li>
-->