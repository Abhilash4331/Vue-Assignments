<script setup>
import { ref } from 'vue';

const newItem = ref('');
const itemList = ref([]);
const editedItem = ref('');
const editIndex = ref(null);
const cart = ref(0);

const addItem = () => {
  if (newItem.value.trim() !== '') {
    itemList.value.push(newItem.value);
    newItem.value = ''; 
  }
};

const deleteItem = (index) => {
  itemList.value.splice(index, 1);
};

const startEdit = (index) => {
  editIndex.value = index;
  editedItem.value = itemList.value[index];
};

const saveEdit = (index) => {
  if (editedItem.value.trim() !== '') {
    itemList.value[index] = editedItem.value;
  }
  cancelEdit();
};

const cancelEdit = () => {
  editIndex.value = null;
  editedItem.value = '';
};

const AddToCart = () => {
  cart.value ++;
}
</script>


<template>
    <div>
      <form @submit.prevent="addItem">
        <label for="inputItem">Add Item:</label>
        <input id="inputItem" type="text" v-model="newItem" />
        <button type="submit">Add</button>
      </form>
      <ul class="item-list">
        <li v-for="(item, index) in itemList" :key="index">
          <div v-if="index !== editIndex">
            {{ item }}
            <button @click="startEdit(index)">Edit</button>
            <button @click="deleteItem(index)">Delete</button>
          </div>
          <div v-else>
            <input type="text" v-model="editedItem" @keydown.enter="saveEdit(index)" @keydown.esc="cancelEditing" />
            <button @click="saveEdit(index)">Save</button>
            <button @click="cancelEdit">Cancel</button>
          </div>
        </li>
      </ul>
    </div>

  <div class="cart">
    <button v-on:click="AddToCart">Add to cart</button>
    <div>
      <p>Cart ({{ cart }})</p>
    </div>
  </div>

  </template>

<style scoped>
.item-list {
  list-style-type: none; /* Remove default list styles */
  padding: 0;
}

.item-list li {
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 4px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-list li button {
  background-color: cyan;
  color: black;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

li{
    border: 1px solid white;
    margin-bottom: 10px;
}

label{
    margin-right: 10px;
}

button{
    margin-left: 10px;
}

.cart{
  border: 1px solid white;
}
</style>