<script setup>
import { onMounted, ref } from "vue";

defineProps(["animal"]);
defineEmits(["delete","update"]);
</script>

<template>
  <div class="card">
    <div style="position: relative">
      <!-- <video class="capture" :src="animal.image" loop autoplay muted volume="0.2"/> -->
      <img class="capture" :src="animal.image" />
      <div class="close" @click="$emit('delete')">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
        >
          <title>cross-circle</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            sketch:type="MSPage"
          >
            <g
              id="Icon-Set"
              sketch:type="MSLayerGroup"
              transform="translate(-568.000000, -1087.000000)"
              fill="#000000"
            >
              <path
                d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z"
                id="cross-circle"
                sketch:type="MSShapeGroup"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="close1" @click="$emit('update')">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4721 16.7023C17.3398 18.2608 15.6831 19.3584 13.8064 19.7934C11.9297 20.2284 9.95909 19.9716 8.25656 19.0701C6.55404 18.1687 5.23397 16.6832 4.53889 14.8865C3.84381 13.0898 3.82039 11.1027 4.47295 9.29011C5.12551 7.47756 6.41021 5.96135 8.09103 5.02005C9.77184 4.07875 11.7359 3.77558 13.6223 4.16623C15.5087 4.55689 17.1908 5.61514 18.3596 7.14656C19.5283 8.67797 20.1052 10.5797 19.9842 12.5023M19.9842 12.5023L21.4842 11.0023M19.9842 12.5023L18.4842 11.0023"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 8V12L15 15"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div>
      <h1>{{ animal.title }}</h1>
    </div>
  </div>
</template>

<style>
.card {
  width: 100%;
  /* height:17rem; */
  border: 1px solid black;
  max-width: 15rem;
}

.capture {
  /* height: 12rem;  */
  width: 100%;
  max-width: 15rem;
  aspect-ratio: 1.6 / 1;
}

h1 {
  text-align: center;
}

.close {
  position: absolute;
  top: 5px;
  right: 5px;
  visibility: hidden;
}

.close1 {
  position: absolute;
  bottom: 5px;
  left: 5px;
  visibility: hidden;
  color: aliceblue;
}

.card:hover .close  {
  visibility: visible;
}

.card:hover .close1 {
  visibility: visible;
}
</style>
