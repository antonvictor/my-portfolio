<script setup>
import HoverVideo from './HoverVideo.vue';
import imagePath from  '../assets/space-explore.png'
import videoPath from '../assets/space-explore.mp4'

</script>


<template>



  <div class="project">

      <h1 class="project-title">Space Project</h1>
      <HoverVideo :image-src="imagePath" :video-src="videoPath" />

    <h4 class="project-text">An imaginative website for a fictional space travel company offering tickets to space. 
      Built with React, it’s a fun showcase site designed to spark curiosity and a sense of adventure.</h4>
      <div class="project-technologies">
        <h2>Technologies Used</h2>
        <div class="project-technologies-icons">
          <img src="@/components/icons/react.svg" alt="">
          <img src="@/components/icons/html-5.svg" alt="">
          <img src="@/components/icons/css-3.svg" alt="">
        </div>
      </div>
      <div class="project-buttons">
        <button class="source-code"><a href="https://github.com/antonvictor/space-exploration" target="_blank">Source Code <img src="@/components/icons/github-white.svg"></a></button> 
        <button class="live-demo"><a href="https://space-explore-av.netlify.app/" target="_blank">Live Demo<img src="@/components/icons/alternate-external-link.svg"></a></button>
        </div>
  </div>




</template>