<script setup>
import HoverVideo from './HoverVideo.vue';
import imagePath from  '../assets/poke-index.png'
import videoPath from '../assets/poke-index.mp4'

</script>


<template>



  <div class="project">

    <h1 class="project-title">Poké Index</h1>
    <HoverVideo :image-src="imagePath" :video-src="videoPath" />
    <h4 class="project-text">Create your personal list of favorite Pokémon! Add and remove Pokémon names, 
    and each entry comes complete with an image fetched automatically, 
    giving a visual twist to your collection.</h4>
      <div class="project-technologies">
        <h2>Technologies Used</h2>
        <div class="project-technologies-icons">
          <img src="@/components/icons/react.svg" alt="">
          <img src="@/components/icons/html-5.svg" alt="">
          <img src="@/components/icons/css-3.svg" alt="">
        </div>
      </div>
      <div class="project-buttons">
        <button class="source-code"><a href="https://github.com/antonvictor/poke-index" target="_blank">Source Code <img src="@/components/icons/github-white.svg"></a></button> 
        <button class="live-demo"><a href="https://poke-index-av.netlify.app/"  target="_blank">Live Demo<img src="@/components/icons/alternate-external-link.svg"></a></button>
        </div>
  </div>




</template>