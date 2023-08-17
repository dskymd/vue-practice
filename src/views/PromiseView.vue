<script setup lang="ts">
import { ref } from 'vue'
// import { onErrorCaptured } from 'vue'
// import SuspencedChild from "../components/SuepencedChild.vue";


// import { useCounterStore } from '@/stores/counter'

// const counter = useCounterStore()

const result = ref(1)

// const p = await Promise.all([1, 2, 3])
// console.log(p)
// result.value = p
// const message = 'Hi!😇'

// onErrorCaptured(() => {
//   console.log('error')
// })
</script>

<template>
  <div class="promise">
    <header class="header">
      <h1>Promise</h1>
    </header>

    <div class="body">

      <div class="resultArea">
        Result : {{ result }}
      </div>
      <!-- <p>
        Double Counter : {{ counter.doubleCount }}
      </p>

      <Suspense>
        <SuspencedChild :messsage="message" />
        <template #fallback>
          Loading...
        </template>
      </Suspense> -->
    </div>

  </div>
</template>

<style>
.resultArea {
  padding: 20px;
  color: #333;
  background-color: #eee;
}

/* @media (min-width: 1024px) {
  .suspence {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .header {
    width: 100%;
    background: #999;
  }

  .body {
    width: 100%;
    background: #eee;
  }

  p {
    color: #F90;
  }
} */
</style>
