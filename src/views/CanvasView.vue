<script setup lang="ts">
// import { onErrorCaptured } from 'vue'
import MyCanvas from "../components/MyCanvas.vue";


// import { useCounterStore } from '@/stores/counter'

// const counter = useCounterStore()


// const message = 'Hi!😇'

// onErrorCaptured(() => {
//   console.log('error')
// })

</script>

<template>
  <div class="canvas">
    <header class="header">
      <h1>Canvas</h1>
    </header>

    <div class="body">
      <MyCanvas id="MyCanvas"></MyCanvas>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .canvas {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .header {
      width: 100%;
      background: #999;
    }

    .body {
      width: 100%;
      /* background: #eee; */
      /* border: 1px solid #eee; */
    }

    p {
      color: #F90;
    }
  }
}
</style>
