<script setup>

import { ref } from 'vue'
import Slots from './components/slots.vue';

</script>

<template>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 2fr)); gap: 25px; width: 100%;place-items: center;">
 
 <slots/>  

 <slots>
   <template #Image><img src="./assets/down.jpeg"></template>
   <template #Title><h2>head</h2></template>
   <template #Para><p>This paragraph is changed because I used the slot , which i am glad that i can understad it's usage will increase the code reuisiblity</p></template>
   <template #Button><button>change done</button></template>
 </slots>

 <slots>
   <template #Image><img src="./assets/down5.jpeg"></template>
   <template #Title><h2>heading</h2></template>
   <template #Para><p>This paragraph is changed because I used the slot , which i am glad that i can understad it's usage will increase the code reuisiblity</p></template>
   <template #Button><button>change</button></template>
 </slots>

 <Slots>
   <template #Image><img src="./assets/down3.jpeg"></template>
   <template #Title><h2>header</h2></template>
   <template #Para><p>This paragraph is changed because I used the slot , which i am glad that i can understad it's usage will increase the code reuisiblity</p></template>
   <template #Button><button>for change</button></template>
 </Slots>


 <Slots>
   <template #Image><img src="./assets/down4.jpeg"></template>
   <template #Title><h2>top</h2></template>
   <template #Para><p>This paragraph is changed because I used the slot , which i am glad that i can understad it's usage will increase the code reuisiblity</p></template>
   <template #Button><button>button</button></template>
 </Slots>

 <slots>
   <template #Image><img src="./assets/down5.jpeg"></template>
   <template #Title><h2>tttle</h2></template>
   <template #Para><p>This paragraph is changed because I used the slot , which i am glad that i can understad it's usage will increase the code reuisiblity</p></template>
   <template #Button><button>done some</button></template>
 </slots>

 <slots>
   <template #Image><img src="./assets/down6.jpeg"></template>
   <template #Title><h2>heaadd
   </h2></template>
   <template #Para><p>This paragraph is changed because I used the slot , which i am glad that i can understad it's usage will increase the code reuisiblity</p></template>
   <template #Button><button>how</button></template>
 </slots>

 <Slots>
   <template #Image><img src="./assets/down7.jpeg"></template>
   <template #Title><h2>headingg</h2></template>
   <template #Para><p>This paragraph is changed because I used the slot , which i am glad that i can understad it's usage will increase the code reuisiblity</p></template>
   <template #Button><button>should</button></template>
 </Slots>



</div>

</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
