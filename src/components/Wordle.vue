<script setup>
import HoverVideo from './HoverVideo.vue';
import imagePath from  '../assets/wordle.png'
import videoPath from '../assets/wordle.mp4'

</script>


<template>



  <div class="project">

      <h1 class="project-title">Wordle Game Clone</h1>
      <HoverVideo :image-src="imagePath" :video-src="videoPath" />

    <h4 class="project-text">A React-based clone of the popular Wordle game, featuring a randomly generated word from an API each time you play. Challenge your vocabulary and try to guess the word within limited attempts!</h4>
      <div class="project-technologies">
        <h2>Technologies Used</h2>
        <div class="project-technologies-icons">
          <img src="@/components/icons/react.svg" alt="">
          <img src="@/components/icons/html-5.svg" alt="">
          <img src="@/components/icons/css-3.svg" alt="">
        </div>
      </div>
      <div class="project-buttons">
        <button class="source-code"><a href="https://github.com/antonvictor/wordle-clone" target="_blank">Source Code <img src="@/components/icons/github-white.svg"></a></button> 
        <button class="live-demo"><a href="https://wordle-av.netlify.app/" target="_blank">Live Demo<img src="@/components/icons/alternate-external-link.svg"></a></button>
        </div>
      
  </div>




</template>