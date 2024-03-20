<script setup>

import {ref} from 'vue'

    const firstName = ref('');
    const lastName = ref('');
    const address = ref('');
    const entries = ref([])    
    const addEntry = () => {
        entries.value.push({
            firstName : firstName.value,
            lastName : lastName.value,
            address : address.value,
            color: ref('')
        });
        firstName.value = '';
        lastName.value = '';
        address.value = '';
    }    
    const deleteEntry = (index) => {
        entries.value.splice(index, 1);
    };

</script>

<template>
    <div class="customerDetails">
        <form @submit.prevent="addEntry" style="min-width: 350px;">
            <h2>Create a new entry</h2>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" v-model="firstName" required><br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" v-model="lastName" required><br>
            <label for="address">Address:</label>
            <input type="text" id="address" v-model="address" required><br>
            <button type="submit">Add</button>
        </form>

        <table style=" border: 1px solid wheat; margin: 5px;">
            
            <thead>
                <tr>
                    <th style="border: 1px solid whitesmoke;">FirstName</th>
                    <th style="border: 1px solid whitesmoke;">LastName</th>
                    <th style="border: 1px solid whitesmoke;">Address</th>
                    <th style="border: 1px solid whitesmoke;">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="output" v-for="(entry , index) in entries" :key="index" :style="{color:entry.color, padding: '2px 12px'}">
                    <td>{{ entry.firstName }}</td>
                    <td>{{ entry.lastName }}</td>
                    <td>{{ entry.address }}</td>
                    <td style="display: flex;">
                        <button @click="deleteEntry(index)">Delete</button>
                        <select id="colorSelect" v-model="entry.color">
                            <option value="">Choose color</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="cyan">Cyan</option>
                            <option value="purple">Purple</option>
                            <option value="Orange">Orange</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- <input type="checkbox" class="custom-checkbox" /> -->
</template>

<style>
.customerDetails {
    display: flex;
    align-items: flex-start;
    width: 100%;
}

h2 {
    text-align: center
}
form {
    width: 100%;
    max-width: 420px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px 8px rgba(0,0,0,0.15);
    margin-right: 4rem;
}

form label {
    font-size: 1rem;
    font-weight: 600;
    display: block;
    text-align: left;
    margin-bottom: 0.5rem;
}

form input {
    padding: 0.8rem;
}

table {
    border: 1px solid;
    border-collapse: collapse;
}


table tr,
table td,
table th {
    border: 1px solid white;
    padding: 0.5rem 1rem;
}


td{
    border: 1px solid white;
}

button{
    background-color: cyan;
    color: black;
    margin-right: 1rem;
}
thead{
    order: 1px solid white;
}

select{
    padding: 0.5rem 0.8rem;
    /* display: block; */
    margin: 0.6rem 1rem;
}


.custom-checkbox {
    height: 20px;
    width: 40px;
    border: 1px solid;
    border-radius: 10px;
    appearance: none;
    position: relative;
    box-shadow: inset 0 0 2px 2px rgba(0,0,0,0.15);
    background-color: azure;
}

.custom-checkbox::after {
    position: absolute;
    content: '';
    top: 50%;
    background-color: aqua;
    height: 19px;
    width: 19px;
    transform: translateY(-50%);
    border-radius: 50%;
    left: 0;
    display: block;
    box-shadow: 0 0 5px 6px rgba(0,0,0,0.15);
}

.custom-checkbox:checked:after {
    right: 0;
    left: unset;
}


.custom-checkbox:checked {
    background-color: whitesmoke;
}

</style>