<script setup lang="ts">
const runtime = useRuntimeConfig();

const { pokemon } = defineProps(['pokemon']);
let sprites ="";
let pokedetail = [];
const { data:pokemon_detail } = await useFetch(pokemon.url);
watch(pokemon_detail, (newPage)=>{
    if(newPage){
       pokedetail =  isProxy(newPage) ? toRaw(newPage) : newPage;
       sprites = pokedetail.sprites.other.home.front_default;
    }
}, {
    deep: true,
    immediate:true
});
</script>

<template>
    <div class="grid-item">
        <div class="pokemon-box bg-light bg-light--grass">
            <ul class="pokemon-home-box-content">
                <li class="pokemon-home-box__img-container">
                     <img class="pokemon-home-box__img" :src=sprites> 
                </li>
                <li class="pokemon-home-box__detail-container">
                    <ul class="pokemon-home-box-content">
                        <li>
                            <h1 class="pokemon-box__name">{{ pokedetail.name }}</h1>
                        </li>
                        <li>
                            <p class="pokemon-box-home__number">#{{ pokedetail.id }}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<!--                     <img class="pokemon-home-box__img" v-bind:src="pokemon.sprites.other['official-artwork'].front_default">    
 -->