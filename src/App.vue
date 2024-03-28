

<template>
  <main>
    <!-- Header -->
    <header>
      <img src="./assets/logo/logo/down.jpeg" alt="Logo" />
      <h1>Animal kingdom</h1>
    </header>
    <div class="btn-div">
    <button class="btn" @click="isPopupVisible = true">Create</button>
    <popUp
      v-if="isPopupVisible"
      :active="updateAnimalIndex"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </div>
    <!-- <createBtn :index="updateAnimalIndex" @close="updateAnimalIndex = -1" /> -->
    <div class="main" >
      <card v-for="(animal, index) in animalStore.list" :key="animal.id" :animal="animal"
        @delete="animalStore.delete(index)" @update="updateAnimalIndex = index,isPopupVisible=true"/>
    </div>
  </main>
</template>

<script setup>
import card from "./components/card.vue"
import popUp from "./components/popUp.vue";
import { useAnimalStore } from "../store/AnimalStore";

import { ref } from 'vue'

const animalStore = useAnimalStore()

const updateAnimalIndex = ref(-1)
const isPopupVisible = ref(false)

const handleConfirm = (data) => {
  if (updateAnimalIndex.value == -1) {
    animalStore.add(data.image, data.title);
  } else {
    animalStore.update(data.image, data.title, updateAnimalIndex.value);
    updateAnimalIndex.value = -1;
  }
  isPopupVisible.value = false;
};

const handleCancel = () => {
  isPopupVisible.value = false;
  updateAnimalIndex.value = -1;
};
</script>

<style>
@import './assets/logo/main1.css';
.btn-div {
  width: 100%;
  padding: 0 1rem;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  margin-top: 1rem;
}
.btn {
  padding: 0.6rem 1rem;
  font-size: larger;
  border: 1px solid green;
  border-radius: 0.5rem;
  color: darkgreen;
  cursor: pointer;
}
</style>