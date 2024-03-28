import { defineStore } from "pinia";
import {  reactive } from "vue";

export const useAnimalStore = defineStore("animalStore", () => {
  const animalList = reactive([]);

  const addAnimal = (image, title) => {
    animalList.push({
        title,
        image,
        id: Math.random()
    })
  }

  const deleteAnimal = (index) => {
    animalList.splice(index, 1)
  }

  const updateAnimal = (image, title, index) => {
    animalList[index] = {
        image,
        title,
        id: animalList[index].id
    }
  }

  return { list: animalList, add: addAnimal, delete: deleteAnimal, update: updateAnimal };
});
