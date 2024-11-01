<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid-layout">
  <ul class="side-panel">
    <RouterLink to="/" class="btn" active-class="btn-active">Home</RouterLink>
    <RouterLink to="/about" class="btn" active-class="btn-active">About</RouterLink>
    <h1>Personal Projects:</h1>
    <RouterLink to="/e-commerce-project" class="btn" active-class="btn-active">E-commerce Homepage</RouterLink>
    <RouterLink to="/space-project" class="btn" active-class="btn-active">Space Project</RouterLink>
    <RouterLink to="/wordle-clone" class="btn" active-class="btn-active">Wordle Clone</RouterLink>
    <RouterLink to="/poke-index-project" class="btn" active-class="btn-active">Poké Index</RouterLink>
 

  </ul>
  <RouterView />
</div>
</template>

