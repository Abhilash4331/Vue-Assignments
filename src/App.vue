<script setup>
import { ref } from 'vue'

import baseButton from './components/baseButton.vue'
const buttonName = ref('Click here')

const handleClicked = () => {
    alert('Button Clicked')
  };

  const reverse = () => {
    buttonName.value = buttonName.value.split('').reverse().join('');
  }

</script>

<template>
<div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />  
</div>
<baseButton color="red" backgroundColor="blue"/> 
<baseButton @click="handleClicked"/>
<baseButton @click="reverse" :value="buttonName" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #054f2eaa);
}
</style>
