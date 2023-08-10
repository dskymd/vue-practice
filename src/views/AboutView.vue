<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      count : {{ counter.count }}
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  h1 {
    width: 100%;
  }
}
</style>
