<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvas = ref<HTMLCanvasElement | undefined>()

const radius = ref(100) // 半径

onMounted(() => {

  const ctx = canvas.value?.getContext("2d")!;

  // if (!ctx) {
  //   return
  // }

  // console.log(ctx)

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
  <canvas width="900" height="900" class="canvas" ref=" canvas"></canvas>
</template>

<style scoped></style>
