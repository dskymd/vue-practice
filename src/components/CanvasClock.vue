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


const long = radius * 0.5


onMounted(() => {

  const ctx = canvasClock.value?.getContext("2d")!;




  // // 外円
  // ctx.strokeStyle = "#ccc";
  // ctx.lineWidth = 8 * 2
  // ctx.beginPath()
  // ctx.arc(stageCenter, stageCenter, radius, Math.PI * 0, Math.PI * 2.5)
  // ctx.stroke()


  // // 内円
  // ctx.strokeStyle = "#bbb";
  // ctx.lineWidth = 32 * 2
  // ctx.beginPath()
  // ctx.arc(stageCenter, stageCenter, radius * 0.90, Math.PI * 0, Math.PI * 2)
  // ctx.stroke()



  // 放射線
  // for (let i = 0; i < indexNum; i++) {

  // ctx.beginPath();
  // ctx.strokeStyle = '#bbb'
  // ctx.lineWidth = 8
  // ctx.moveTo(stageCenter - 40, stageCenter - 40);
  // ctx.lineTo(stageCenter + long, stageCenter + long);
  // ctx.stroke();

  // // 短針
  // ctx.moveTo(stageCenter - 40, stageCenter - 40);
  // ctx.lineTo(stageCenter + long, stageCenter + long);
  // ctx.stroke();

  ctx.strokeStyle = '#bbb'
  ctx.lineWidth = 24

  const offset1 = 0 * 2
  const offset2 = 100 * 2
  const offset3 = 0 * 2
  const offsetBasis = radius * 0.8

  const dt = new Date()
  const angHour = 30 * (-1 * dt.getHours() % 12) - 180
  const angHourMinute = 30 * (dt.getHours() / 60)
  const angMinute = 360 - 360 * (dt.getMinutes() / 60) - 180
  const angSeconds = 360 - 360 * (dt.getSeconds() / 60) - 180
  console.log(angHour, angHourMinute, angMinute)

  // 短針
  const p = calRadialPoint(angHour - angHourMinute)
  const px1 = p.x * (0 - offset1)
  const py1 = p.y * (0 - offset1)
  const px2 = p.x * (offsetBasis - offset2)
  const py2 = p.y * (offsetBasis - offset2)

  ctx.beginPath();
  ctx.moveTo(stageCenter + px1, stageCenter + py1);
  ctx.lineTo(stageCenter + px2, stageCenter + py2);
  ctx.stroke();


  // 長針
  const p2 = calRadialPoint(angMinute)
  const p2x1 = p2.x * (0 - offset1)
  const p2y1 = p2.y * (0 - offset1)
  const p2x2 = p2.x * (offsetBasis - offset3)
  const p2y2 = p2.y * (offsetBasis - offset3)

  ctx.beginPath();
  ctx.moveTo(stageCenter + p2x1, stageCenter + p2y1);
  ctx.lineTo(stageCenter + p2x2, stageCenter + p2y2);
  ctx.stroke();


  // 秒針
  ctx.strokeStyle = '#D00'
  ctx.lineWidth = 8

  const p3 = calRadialPoint(angSeconds)
  const p3x1 = p3.x * (0 - 100)
  const p3y1 = p3.y * (0 - 100)
  const p3x2 = p3.x * (offsetBasis - offset3)
  const p3y2 = p3.y * (offsetBasis - offset3)

  ctx.beginPath();
  ctx.moveTo(stageCenter + p3x1, stageCenter + p3y1);
  ctx.lineTo(stageCenter + p3x2, stageCenter + p3y2);
  ctx.stroke();


  //   ctx.font = '16px san-serif';
  //   ctx.textAlign = 'center'
  //   ctx.textBaseline = 'middle'
  //   if (isLong(i)) ctx.fillText(i.toString(10), stageCenter + px2 - (p.x * 20), stageCenter + py2 - (p.y * 20));
  // }


  // 内円
  // ctx.strokeStyle = "#bbb";
  ctx.fillStyle = "#fff";
  ctx.lineWidth = 8 * 3
  ctx.beginPath()
  ctx.arc(stageCenter, stageCenter, 8 * 2, Math.PI * 0, Math.PI * 2)
  ctx.stroke()
  ctx.fill()

})
</script>



<template>
  <canvas width="2000" height="2000" class="canvasClock" ref="canvasClock"
    style="width: 1000px; height: 1000px;"></canvas>
</template>

<style scoped>
/* .canvasClock {
  background: #fff;
} */
</style>
