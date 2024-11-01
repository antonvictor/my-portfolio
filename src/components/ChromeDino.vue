<script setup>
import HoverVideo from './HoverVideo.vue';
import imagePath from  '../assets/Chrome-dino.png'
import videoPath from '../assets/chrome-dino.mp4'
</script>



<template>
  <div class="project">

      <h1 class="project-title">Chrome Dino Game Clone</h1>
      <HoverVideo :image-src="imagePath" :video-src="videoPath" />

    <h4 class="project-text">A recreation of the classic Chrome Dino game using HTML, CSS, and JavaScript. 
      Perfect for a nostalgic run, this version keeps all the charm of the original offline game.</h4>
      <div class="project-technologies">
        <h2>Technologies Used</h2>
        <div class="project-technologies-icons">
          <img src="@/components/icons/javascript-js.svg" alt="">
          <img src="@/components/icons/html-5.svg" alt="">
          <img src="@/components/icons/css-3.svg" alt="">
        </div>
      </div>
      <div class="project-buttons">
        <button class="source-code"><a href="https://github.com/antonvictor/chrome-dino-clone" target="_blank">Source Code <img src="@/components/icons/github-white.svg"></a></button> 
        <button class="live-demo"><a href="https://chrome-dino-av.netlify.app/" target="_blank">Live Demo<img src="@/components/icons/alternate-external-link.svg"></a></button>
        </div>



  </div>
</template>