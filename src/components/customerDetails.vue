<script setup>

import {computed, ref} from 'vue'
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const date = ref('')
    const entries = ref([])    
    const addEntry = () => {
        entries.value.push({
            firstName : firstName.value,
            lastName : lastName.value,
            email : email.value,
            date: date.value,
            color: ref('')
        });
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        date.value = '';
    }    
    const deleteEntry = (index) => {
        entries.value.splice(index, 1);
        if(page.value !=1  && Math.ceil(entries.value.length / ROW_COUNT) < page.value){
            page.value--;
        }
    };

    // Current active page
    const ROW_COUNT = 6;
    const page = ref(1);

    const data = computed(() => {
        const start = (page.value-1) * ROW_COUNT;
        return entries.value.sort((a,b) => a.date.localeCompare(b.date)).slice(start, start + ROW_COUNT);
    }) 

    const onFirstNameChange = (e) => {
        firstName.value = e.target.value.replace(/[^a-zA-Z]/g, '');
        e.target.value = firstName.value;
    }


    const onLastNameChange = (e) => {
        lastName.value = e.target.value.replace(/[^a-zA-Z]/g, '');
        e.target.value = lastName.value;
    }

    const onEmailChange = (event) => {
        const regex = /^[a-zA-Z]{3,}[0-9]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/; // Custom regular expression for email validation
        if (regex.test(event.target.value)) {
            email.value = event.target.value;
        } else {
            event.target.value = email.value = '';
        }
    }


</script>

<template>
    <div class="customerDetails">
        <form @submit.prevent="addEntry" style="min-width: 350px;">
            <h2>Create a new entry</h2>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" :value="firstName" @input="onFirstNameChange" required><br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" :value="lastName"  @input="onLastNameChange" required ><br>
            <label for="address">Email:</label>
            <input type="text" id="email" :value="email" @change="onEmailChange" required><br>
            <label for="date">Date Of Birth :</label>
            <input type="date" id="date" v-model="date" required><br>
            <button type="submit">Add</button>
        </form>
        <div style="display: flex; flex-direction: column;">
            <div>
                <table style=" border: 1px solid wheat; margin: 5px;">
                    <!-- <h2>Entries</h2> -->
                    <thead>
                        <tr>
                            <th style="border: 1px solid whitesmoke;">FirstName</th>
                            <th style="border: 1px solid whitesmoke;">LastName</th>
                            <th style="border: 1px solid whitesmoke;">Email</th>
                            <th style="border: 1px solid whitesmoke">D.O.B</th>
                            <th style="border: 1px solid whitesmoke;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="output" v-for="(entry , index) in data" :key="index" :style="{color:entry.color, padding: '2px 12px'}">
                            <td>{{ entry.firstName }}</td>
                            <td>{{ entry.lastName }}</td>
                            <td>{{ entry.email }}</td>
                            <td style="min-width: 150px;">{{ entry.date }}</td>
                            <td style="display: flex;">
                                <button @click="deleteEntry(index)">Delete</button>
                                <select id="colorSelect" v-model="entry.color">
                                    <option value="">choose color</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="cyan">Cyan</option>
                                    <option value="purple">Purple</option>
                                    <option value="Orange">Orange</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="#FA8072">Salmon</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="margin-top: 2rem; display: flex;justify-content: center;" v-if="entries.length">
                <button @click="page--" :disabled="page == 1">Prev</button>
                <h2 style="margin: 0 1rem">Page: {{page }} </h2>
                <button @click="page++" :disabled="Math.ceil(entries.length/ROW_COUNT) == page">Next</button>
            </div>
            
            <p v-else>No entries found</p>
        </div>
    </div>

    <input type="checkbox" class="custom-checkbox" />
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

:disabled {
    opacity: 0.4;
}

</style>