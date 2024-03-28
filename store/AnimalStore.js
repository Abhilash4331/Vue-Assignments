import { defineStore } from "pinia";
import {  reactive } from "vue";

export const useAnimalStore = defineStore("animalStore", () => {
  const animalList = reactive([]);

  const addAnimal = (image, title, type) => {
    animalList.push({
        title,
        type,
        image,
        id: Math.random()
    })
  }

  const deleteAnimal = (index) => {
    animalList.splice(index, 1)
  }

  const updateAnimal = (image, title, type, index) => {
    animalList[index] = {
        image,
        title,
        type,
        id: animalList[index].id
    }
  }

  return { list: animalList, add: addAnimal, delete: deleteAnimal, update: updateAnimal };
});
