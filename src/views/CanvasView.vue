<script setup lang="ts">
// import { onErrorCaptured } from 'vue'
import CanvasPlot from "../components/CanvasPlot.vue";
import CanvasClock from "../components/CanvasClock.vue";
import CanvasClockBase from "../components/CanvasClockBase.vue";
import MyCanvas from "../components/MyCanvas.vue";


// import { useCounterStore } from '@/stores/counter'

// const counter = useCounterStore()


// const message = 'Hi!😇'

// onErrorCaptured(() => {
//   console.log('error')
// })

</script>

<template>
  <div class="canvasView">
    <header class="header">
      <h1>Canvas</h1>
    </header>

    <div class="body">


      <div class="clockWrapper">
        <CanvasClockBase></CanvasClockBase>
        <CanvasClock></CanvasClock>

      </div>
      <div class="plot">
        <CanvasPlot></CanvasPlot>
      </div>
    </div>

  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .canvasView {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .header {
      width: 100%;
      padding: 2em;
    }

    .body {
      width: 1000px;
      margin: auto;
      /* background: #eee; */
      /* border: 1px solid #eee; */
    }

    p {
      color: #F90;
    }
  }

  .clockWrapper {
    position: relative;
    height: 1000px;
  }

  .clockWrapper canvas {
    position: absolute;
    left: 0;
    top: 0;
  }

  /* .plot { 
    
  } */
}
</style>
