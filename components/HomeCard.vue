<template>
    <div class="grid-item">
        <div class="pokemon-box bg-light bg-light--grass">
            <ul class="pokemon-home-box-content">
                <li class="pokemon-home-box__img-container">
                    <img class="pokemon-home-box__img" :src="`${pokemon.sprites.other.showdown.front_default}`">    
                </li>
                <li class="pokemon-home-box__detail-container">
                    <ul class="pokemon-home-box-content">
                        <li>
                            <h1 class="pokemon-box__name">{{ pokemon.name }}</h1>
                        </li>
                        <li>
                            <p class="pokemon-box-home__number">#{{ pokemon.id }}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const { pokemon } = defineProps(['pokemon']);
</script>