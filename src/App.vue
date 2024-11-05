<script setup>
import { RouterView } from 'vue-router'
import HelloAnimation from './components/HelloAnimation.vue' 
import { ref } from 'vue'

const showHelloAnimation = ref(!localStorage.getItem("visitedBefore"));

</script>

<template>
    <HelloAnimation :key="showHelloAnimation" />
  <div  class="grid-layout">
  <ul class="side-panel">
    <RouterLink to="/" class="btn" active-class="btn-active">Home</RouterLink>
    <RouterLink to="/about" class="btn" active-class="btn-active">About</RouterLink>
    <h1>Personal Projects:</h1>
    <RouterLink to="/space-project" class="btn" active-class="btn-active">Space Project</RouterLink>
    <RouterLink to="/e-commerce-project" class="btn" active-class="btn-active">E-commerce Homepage</RouterLink>
    <RouterLink to="/poke-index-project" class="btn" active-class="btn-active">Poké Index</RouterLink>
    <RouterLink to="/wordle-clone" class="btn" active-class="btn-active">Wordle Clone</RouterLink>
 
 
  </ul>
  <RouterView />
</div>
</template>
