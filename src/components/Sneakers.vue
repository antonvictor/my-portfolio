<script setup>
import HoverVideo from './HoverVideo.vue';
import imagePath from  '../assets/sneakers.png'
import videoPath from '../assets/sneakers.mp4'

</script>


<template>



  <div class="project">

    <h1 class="project-title">Sneakers - E-commerce Homepage</h1>
    <HoverVideo :image-src="imagePath" :video-src="videoPath" />

    <h4 class="project-text">A stylish homepage for a sneaker e-commerce store, built with HTML, CSS, and JavaScript. 
      This landing page showcases products and is designed for a smooth, eye-catching browsing experience.</h4>
      <div class="project-technologies">
        <h2>Technologies Used</h2>
        <div class="project-technologies-icons">
          <img src="@/components/icons/javascript-js.svg" alt="">
          <img src="@/components/icons/html-5.svg" alt="">
          <img src="@/components/icons/css-3.svg" alt="">
        </div>
      </div>
      <div class="project-buttons">
        <button class="source-code"><a href="https://github.com/antonvictor/sneakers" target="_blank">Source Code <img src="@/components/icons/github-white.svg"></a></button> 
        <button class="live-demo"><a href="https://sneakers-av.netlify.app/" target="_blank">Live Demo<img src="@/components/icons/alternate-external-link.svg"></a></button>
        </div>
  </div>




</template>