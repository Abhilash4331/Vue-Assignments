<script setup>
import { onUnmounted, ref } from 'vue';
const seconds = ref(0);
let interval;
const startTimer = () => {
    clearInterval(interval);
    interval = setInterval( () => {
        seconds.value++
    },100)
};
const stopTimer = () => {
    clearInterval(interval);
};
const resetTimer = () => {
    clearInterval(interval);
    seconds.value=0;
};

defineEmits(['delete']);

const addZero = (num) => {
    return ("0" + num).slice(-2)
}

const format = () => {

    if(seconds.value < 60){
        return addZero(Math.floor(seconds.value/60)) +  " : " + addZero(seconds.value % 60)
    }
    if(seconds.value < 3600){
        return addZero(Math.floor(seconds.value/60)) +  " : " + addZero(seconds.value % 60)
    }
};

onUnmounted(() => {
    clearInterval(interval)
});
</script>


<template>
  <div class="main">
    <div class="first" style="font-size: 1.4rem;">
        <p> Timer  {{format()}}</p>
    </div>
    <div class="second">
       <button @click="startTimer" class="btn">Start</button>
       <button @click="stopTimer" class="btn">Stop</button>
       <button @click="resetTimer" class="btn">Reset</button>
       <button @click="$emit('delete')" class="btn">Delete</button>
    </div>
  </div>
</template>

<style>

.main{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    border: 1px solid white;
    border-radius: 5px;
}

.first{
    margin-left: 10px;
}

.second{
    margin: 10px;
    margin-right: 10px;
}

.btn{
    color:black;
    background-color: white;
    margin: 10px;
    border-radius: 1rem;
    padding: 0.6em 1.2vh;
}

</style>