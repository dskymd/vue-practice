<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasClock = ref<HTMLCanvasElement | undefined>()

const stage = 1000
const stageCenter = stage / 2
const radius = 500 // 半径


onMounted(() => {

  const ctx = canvasClock.value?.getContext("2d")!;

  // if (!ctx) {
  //   return
  // }

  // console.log(ctx)

  // ctx.fillStyle = "#f90";
  // ctx.fillRect(1, 1, 100, 100);

  // ctx.fillStyle = "#990";
  // ctx.fillRect(200, 220, 50, 20);


  // 外円
  // ctx.fillStyle = "#f00";
  ctx.strokeStyle = "#00f";
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, radius, Math.PI * 0, Math.PI * 2.5)
  // ctx.arc(radius.value, radius.value, radius.value, 0, Math.PI * 2)
  // * Math.PI / 180, 360 * Math.PI / 180, false )
  ctx.stroke()


  // 内円
  ctx.strokeStyle = "#f90";
  ctx.lineWidth = 16
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, radius * 0.75, Math.PI * 0, Math.PI * 2)
  ctx.stroke()




  // 内円
  const num = 36
  for (let i = 0; i < num; i++) {
    const ang = 360 / num * i //角度を3度づつ増やしていく
    const ang2 = 360 / num * i //角度を3度づつ増やしていく
    const _tmp = Math.sin(ang * (Math.PI / 180)) * (radius * 0.75 - 30)
    const _tmp2 = Math.cos(ang2 * (Math.PI / 180)) * (radius * 0.75 - 30)


    const px = stageCenter + _tmp
    const py = stageCenter + _tmp2
    ctx.fillStyle = "#000";
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(px, py, 2, Math.PI * 0, Math.PI * 2)
    ctx.fill()
    console.log(ang, px, py)
  }

  // ctx.font = '48px serif';
  // ctx.fillText('Hello world', 0, 48);

})
</script>



<template>
  <canvas width="1002" height="1002" class="canvasClock" ref="canvasClock"></canvas>
</template>

<style scoped></style>
