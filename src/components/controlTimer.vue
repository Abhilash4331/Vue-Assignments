<script setup>
import { ref } from 'vue';
import Timer from './timer.vue';

const list = ref([]);

const addTimer = () => {
    list.value.push(Math.random());
};

</script>

<template>
<div>
    <div>
        <button @click="addTimer" class="first-h" style="margin-bottom: 20px;">Add Timer</button>
    </div>
    <table style="border: 1px solid white;">
        <thead>
            <tr>
                <th style="font-size: 1.8rem;">Intervals</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><Timer v-for="(n,index) in list" :key="n" @delete="list.splice(index,1)"  style="margin: 8px;"/></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<style scoped>

.frist-h{
    margin-bottom: 10px;
}

</style>