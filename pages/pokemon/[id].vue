<script lang="ts" setup>
 const{id} = useRoute().params;
const runtime = useRuntimeConfig();
 const { data:pokemon } = await useFetch(`${runtime.public.baseUrl}pokemon/${id}`);

</script>

<template>
  <div>
    <div class="page-detail">
                 <div class="pokemon-box bg-light bg-light--${pokemon.types} && pokemon.types[0].type.name}">
                    <ul class="pokemon-home-box-content">
                    <li class="pokemon-home-box__detail-container">
                        <NuxtLink to="/" >
                            <button class="button  button-white" >Back</button>
                        </NuxtLink>
                        <ul class="pokemon-home-box-content">
                        <li>
                            <h1 class="pokemon-box__name">{{pokemon.name}}</h1>
                        </li>
                        <li class="">
                            <p class="pokemon-detail-box__number">{{pokemon.id}}</p>
                        </li>
                        </ul>
                        <div class="pokemon-box__types">
                                <ul class="pokemon-types">
                               
                                </ul>
                        </div>
                    </li>
                    </ul>
                    <img class="pokemon-detail-box__img" :src="`${pokemon.sprites.other['official-artwork'].front_default}`" />
                    <ul class="grid">
                        <li class="grid-item">
                            <div class="page-detail__panel">
                                <div class="panel">
                                    <ul class="grid">
                                        <li class="grid-item">
                                        <h1 class="stats-title">Size</h1>
                                            <ul class="stats-compare__bars">
                                                <li class="">
                                                    <p class="size-item-label">Height</p>
                                                    <p>{height/10} m</p>
                                                </li>
                                                <li >
                                                    <p class="size-item-label">Weight</p>
                                                    <p>{weight/10} kg</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="grid-item">
                                            <h1 class="stats-title">Base Stats</h1>
                                            <ul class="base-stats-compare__bars">
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
              </div>
         </div>
  </div>
</template>

<style scoped></style>
