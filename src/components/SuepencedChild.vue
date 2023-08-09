<script setup lang="ts">

await new Promise((res) => {
  setTimeout(res, 1000);
})

</script>

<template>
  <div class="suepencedChild">
    <h1>Suspenced Child</h1>
  </div>
</template>


<style>
.suepencedChild {
  background: #F90;
  padding: 2rem;
}
</style>