<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasClock = ref<HTMLCanvasElement | undefined>()

const stage = 1000 * 2
const stageCenter = stage / 2
const radius = 360 * 2 // 半径
const angleCircle = 360
const angleHalf = angleCircle / 2


// 放射線の数
const indexNum = 360

type Point = {
  x: number
  y: number
}


const calRadialPoint = (ang: number): Point => {
  const x = Math.sin(ang * (Math.PI / angleHalf))
  const y = Math.cos(ang * (Math.PI / angleHalf))
  return { x, y }
}


const isLong = (n: number) => {
  const x = indexNum / 12
  return n % x === 0
}



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
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 8 * 2
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, radius, Math.PI * 0, Math.PI * 2.5)
  // ctx.arc(radius.value, radius.value, radius.value, 0, Math.PI * 2)
  // * Math.PI / 180, 360 * Math.PI / 180, false )
  ctx.stroke()


  // 内円
  ctx.strokeStyle = "#bbb";
  ctx.lineWidth = 32 * 2
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, radius * 0.90, Math.PI * 0, Math.PI * 2)
  ctx.stroke()


  // 内円2
  ctx.strokeStyle = "#bbb";
  ctx.lineWidth = 8 * 2
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, 8 * 2, Math.PI * 0, Math.PI * 2)
  ctx.stroke()


  // 放射線
  for (let i = 0; i < indexNum; i++) {

    const ang = angleCircle / indexNum * i // 角度を少し（=360/num）度づつ増やしていく
    const offset1 = 30 * 2
    const offset2 = 60 * 2
    const offsetBasis = radius * 0.90

    const p = calRadialPoint(ang)
    const px1 = p.x * (offsetBasis - offset1)
    const py1 = p.y * (offsetBasis - offset1)

    const px2 = p.x * (offsetBasis - (isLong(i) ? offset2 * 1.1 : offset2))
    const py2 = p.y * (offsetBasis - (isLong(i) ? offset2 * 1.1 : offset2))

    // const px = stageCenter + px1
    // const py = stageCenter + py1
    // ctx.fillStyle = "#f90";
    // ctx.lineWidth = 5
    // ctx.beginPath()
    // ctx.arc(p.x, p.y, 2, Math.PI * 0, Math.PI * 2)
    // ctx.fill()

    // const px2 = stageCenter + px2
    // const py2 = stageCenter + py2
    // ctx.fillStyle = "#999";
    // ctx.lineWidth = 5
    // ctx.beginPath()
    // ctx.arc(px2, py2, 1, Math.PI * 0, Math.PI * 2)
    // ctx.fill()

    ctx.beginPath();
    ctx.strokeStyle = isLong(i) ? "#333" : "#999";
    ctx.lineWidth = 2; // isLong(i) ? 2 : 1
    ctx.moveTo(stageCenter + px1, stageCenter + py1);
    ctx.lineTo(stageCenter + px2, stageCenter + py2);
    ctx.stroke();


    ctx.font = '16px san-serif';
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    if (isLong(i)) ctx.fillText(i.toString(10), stageCenter + px2 - (p.x * 20), stageCenter + py2 - (p.y * 20));
  }


})
</script>



<template>
  <canvas width="2000" height="2000" class="canvasClock" ref="canvasClock"
    style="width: 1000px; height: 1000px;"></canvas>
</template>

<style scoped>
.canvasClock {
  background: #fff;
}
</style>
