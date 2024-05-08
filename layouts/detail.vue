<script lang="ts" setup></script>

<template>
  <div class="container">
      <div>
        <NuxtLink to="/" >
            <button class="button  button-white" style="z-index: 2  ;" >
                <img src="~assets/back-arrow.png" width="30"/>
            </button>
        </NuxtLink>
        <slot />
      </div>
  </div>
</template>
<style>
body { background-color: lightgray; font-family: 'Quicksand', sans-serif }
</style>