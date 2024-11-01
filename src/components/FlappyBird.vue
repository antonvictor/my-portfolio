<script setup>
import HoverVideo from './HoverVideo.vue';
import imagePath from  '../assets/flappy-bird.png'
import videoPath from '../assets/flappy-bird.mp4'




</script>


<template>



  <div class="project">

      <h1 class="project-title">Flappy Bird Game Clone</h1>
        <HoverVideo :image-src="imagePath" :video-src="videoPath" />
    <h4 class="project-text">Inspired by the iconic Flappy Bird, this game clone is built with HTML, CSS, and JavaScript. 
      Simple yet addictive gameplay for endless fun and frustration alike!</h4>
      <div class="project-technologies">
        <h2>Technologies Used</h2>
        <div class="project-technologies-icons">
          <img src="@/components/icons/javascript-js.svg" alt="">
          <img src="@/components/icons/html-5.svg" alt="">
          <img src="@/components/icons/css-3.svg" alt="">
        </div>
      </div>
      <div class="project-buttons">
        <button class="source-code"><a href="https://github.com/antonvictor/flappy-bird-clone" target="_blank">Source Code <img src="@/components/icons/github-white.svg"></a></button> 
        <button class="live-demo"><a href="https://flappy-bird-av.netlify.app/" target="_blank">Live Demo<img src="@/components/icons/alternate-external-link.svg"></a></button>
        </div>



  </div>




</template>