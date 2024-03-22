<script setup>

</script> 

<template>
    <div class="card">
        <slot name="Image"><img src="../assets/download.jpeg"></slot>
        <div class="hero" style=" padding: 10px; background-color: white;  color: black;">
            <div><slot name="Title"><h2>Card Title</h2></slot></div>
            <div><slot name="Para"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo enim deleniti obcaecati fugit. Quod ducimus quidem .</p></slot></div>
            <div><slot name="Button"><button>Do Something</button></slot></div>
        </div>
    </div>
</template>

<style>

.card{
    /* display: flex; */
    /* flex-direction: ; */
    border: 1px solid white;
    max-width: 300px;
    /* min-width: 300px; */
    /* padding: 0.6rem; */
    /* max-height: 400px; */
    /* min-height: 400px; */
    border-radius: 6px;
    /* position: relative; */
    background:white;
}

img {
    width: 100%;
    aspect-ratio: 3 / 2;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: white;
    /* position: absolute; */
}

h2{
    /* display: block; */
    font-family: Arial, Helvetica, sans-serif;
    /* margin-right: 10.5rem; */
    text-align: left;
}
p{
  text-align: left;  
}

button{
    display: flex; 
    justify-content: flex-start;
}
</style>