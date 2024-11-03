<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const greetings = [
  "Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Olá", "Namaste", 
  "Konnichiwa", "Nǐ hǎo", "Annyeong", " ًمرحبا", "سلام", 
  "Zdravo", "Sveiki", "Ahoj", "Hej", "Sawubona", 
  "Szia", "Aloha", "Yassou", "Selamat", "Sain baina uu", 
  "Kamusta", "Xin chào", "Hallo"
];
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};
const currentGreeting = ref(greetings[0]);
const index = ref(0);
const showAnimation = ref(true);
let interval, timeout;

const cycleGreetings = () => {
  index.value = (index.value + 1) % greetings.length;
  currentGreeting.value = greetings[index.value];
};

onMounted(() => {
  if (!localStorage.getItem("visitedBefore")) {
    // Set localStorage to mark the user as having visited
    localStorage.setItem("visitedBefore", "true");

    // Start cycling greetings every 2 seconds
    interval = setInterval(cycleGreetings, 200);

    // Stop the animation after 10 seconds
    timeout = setTimeout(() => {
      showAnimation.value = false;
      clearInterval(interval);
    }, 5000); // Adjust this duration as needed
    forceRerender()
  } else {
    // If visited before, do not show the animation
    showAnimation.value = false;
  }
});

onBeforeUnmount(() => {
  clearInterval(interval);
  clearTimeout(timeout);
});
</script>

<template>
  <div v-if="showAnimation" class="hello-container">
    <span class="hello-text">{{ currentGreeting }}</span>
  </div>
</template>

<style scoped>
.hello-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 3rem;
  color: #333;
  overflow: hidden;
}




</style>
