<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import SuspencedChild from "../components/SuepencedChild.vue";


import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()


const message = 'Hi!😇'

onErrorCaptured(() => {
  console.log('error')
})

</script>

<template>
  <div class="suspence">
    <header class="header">
      <h1>This is an suspence page</h1>
    </header>

    <div class="body">

      <p>
        Double Counter : {{ counter.doubleCount }}
      </p>

      <Suspense>
        <SuspencedChild :messsage="message" />
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .suspence {
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
      background: #eee;
    }

    p {
      color: #F90;
    }
  }
}
</style>
