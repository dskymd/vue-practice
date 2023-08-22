<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvas = ref<HTMLCanvasElement | undefined>()

const radius = ref(100) // 半径
const stg = ref(1000)
const center = ref(stg.value / 2)
const strokeColor = ref('#ccc')

onMounted(() => {

  const ctx = canvas.value?.getContext("2d")!;
  // if (!ctx) {
  //   return
  // }
  // ctx.scale(0.5,0.5);


  ctx.beginPath();
  ctx.strokeStyle = strokeColor.value
  ctx.moveTo(0, center.value);
  ctx.lineTo(stg.value, center.value);
  ctx.stroke();



  ctx.beginPath();
  ctx.strokeStyle = strokeColor.value
  ctx.moveTo(center.value, 0);
  ctx.lineTo(center.value, stg.value);
  ctx.stroke();



  // ctx.fillStyle = "#f90";
  // ctx.fillRect(1, 1, 100, 100);

  // ctx.fillStyle = "#990";
  // ctx.fillRect(200, 220, 50, 20);

  // console.log(ctx)


  // ctx.fillStyle = "#f00";
  // ctx.beginPath()
  // // ctx.clearRect(0, 0, 200, 200)
  // ctx.arc(400, 400, radius.value, 0, Math.PI * 2)
  // ctx.stroke()


  // ctx.font = '48px serif';
  // ctx.fillText('Hello world', 0, 48);

})
</script>



<template>
  <canvas :width="stg" :height="stg" class="canvasPlot" id="canvasPlot" ref="canvas"></canvas>
</template>


<style scoped>
.canvasPlot {
  border: 1px solid #eee;
}
</style>