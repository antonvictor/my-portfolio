<script setup>
import { RouterView, RouterLink } from 'vue-router'
import HelloAnimation from './components/HelloAnimation.vue' 
import { ref , onMounted , onUnmounted} from 'vue'
import hamburgerMenu from '@/components/icons/menu.svg'

const showHelloAnimation = ref(!localStorage.getItem("visitedBefore"));
const isMenuVisible = ref(window.innerWidth > 900);

function toggleMenu() {
  // Only toggle if the screen width is 900px or less
  if (window.innerWidth <= 900) {
    isMenuVisible.value = !isMenuVisible.value;
  }
}

function checkScreenSize() {
  isMenuVisible.value = window.innerWidth > 900;
}

onMounted(() => {
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize(); // Initialize based on current size
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

</script>

<template>
  <HelloAnimation :key="showHelloAnimation" />
  <div class="grid-layout">
    <button 
     :class="isMenuVisible ? 'menu-open': 'mobile-menu-toggle'"     
     aria-controls="primary-navigation" 
      :aria-expanded="isMenuVisible" 
      @click="toggleMenu">
      <img :src="hamburgerMenu" alt="menu" />
    </button>

    <ul 
      id="primary-navigation" 
      :data-visible="isMenuVisible" 
      class="side-panel" 
      v-show="isMenuVisible">
      
      <RouterLink to="/" class="btn" active-class="btn-active" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/about" class="btn" active-class="btn-active" @click="toggleMenu">About</RouterLink>
      <h1>Personal Projects:</h1>
      <RouterLink to="/space-project" class="btn" active-class="btn-active" @click="toggleMenu">Space Project</RouterLink>
      <RouterLink to="/e-commerce-project" class="btn" active-class="btn-active" @click="toggleMenu">E-commerce Homepage</RouterLink>
      <RouterLink to="/poke-index-project" class="btn" active-class="btn-active" @click="toggleMenu">Poké Index</RouterLink>
      <RouterLink to="/wordle-clone" class="btn" active-class="btn-active" @click="toggleMenu">Wordle Clone</RouterLink>
    </ul>

    <RouterView />
  </div>
</template>
