<script setup>
import { ref } from 'vue';

const props = defineProps({
  imageSrc: String,
  videoSrc: String,
});

const isHovered = ref(false);

const toggleHover = (state) => {
  isHovered.value = state;
};
</script>

<template>
    <div @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)">
      <img v-if="!isHovered" :src="imageSrc" alt="Thumbnail"  class="project-media"/>
      <video v-if="isHovered" :src="videoSrc" autoplay muted loop preload="auto" class="project-media"></video>
    </div>
  </template>
  

  