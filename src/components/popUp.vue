<!-- Popup.vue -->
<template>
    <div class="popup">
        <div class="popup-content">
            <h2>Choose Image and Title</h2>
            <input type="file" @change="handleImageSelect" accept="file/*" />
            <input type="text" v-model="title" placeholder="Enter Title" />
            <div class="btn-container">
                <button @click="confirmSelection">
                    {{ active == -1 ? 'Create' : 'Update' }}
                </button>
                <button @click="cancelSelection">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useAnimalStore } from '../../store/AnimalStore';

const title = ref('');
let selectedImage = null;
let filetype = 'image';

const props = defineProps(['active'])

const emit = defineEmits(['cancel', 'confirm'])

const handleImageSelect = (event) => {
    const file = event.target.files[0];
    filetype =  file.type.split("/")[0]; // image-video
    if (file) {
        selectedImage = URL.createObjectURL(file);
    }
};

const confirmSelection = () => {
    // Emit an event or call a method to pass data to the parent component
    const data = {
        title: title.value,
        image: props.active == -1 ? selectedImage : useAnimalStore().list[props.active].image,
        type: filetype
    };

    if (!data.title)
        alert("Please enter a title");
    else if(!data.image)  
        alert("Please select an image");
    else
        emit('confirm', data)
};

const cancelSelection = () => {
    // Reset selectedImage and title
    selectedImage = null;
    title.value = '';
    emit('cancel')
};

watch(props, () => {
    if (props.active != -1){
        // const data = useAnimalStore().list[props.active]
        console.log(useAnimalStore().list[props.active])
    }
})

// for keyup .enter event listener
// const onKeyup = (e) => {
//   if ( e.key == 'Enter') {
//     confirmSelection();
//   } else if (e.code === "Escape"){
//     cancelSelection()
//   }
// }

// window.addEventListener("keyup", onKeyup)
// onUnmounted(() => {
//     window.removeEventListener("keyup", onKeyup)
// })

</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}

.btn-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>