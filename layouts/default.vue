<script lang="ts" setup></script>

<template>
  <div class="container">
      <div class="app-header">
        <div class="page-title">
          <div class="page-title-text">
            <img class="logo" src="~assets/logo2.png" width="150"/>
          </div>        
          <div class="page-title-avatar">
            <img class="avatar-img" src="~assets/cats.png" width="40"/>
          </div>        
        </div> 
        <div class="search-box-container">
          <input class="search-box" type="text">
          <div class="search-option">
            <img class="search-option-img" src="~assets/optn.png" width="30">
          </div>
        </div>
      </div>
      <div class="page">
        <slot />

      </div>
  </div>
</template>
<style>
body { background-color: lightgray; font-family: 'Quicksand', sans-serif }
</style>