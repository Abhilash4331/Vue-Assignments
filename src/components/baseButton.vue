<script setup>
// defineProps({
//     color: String,
//     backgroundColor: String
// })
defineProps(['color', 'backgroundColor', 'value'])
</script>

<template>
    <button :style="{color, backgroundColor }">{{value || 'Click Here'}}</button>
</template>

