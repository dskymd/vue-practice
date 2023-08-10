<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  messsage?: string
}>()

const displayMessage = ref(props.messsage)

await new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
}).catch((error) => {
  console.log('catched error')
  displayMessage.value = 'error occurd 😫'
})

</script>

<template>
  <div class="suepencedChild">
    <h1>Suspenced Child</h1>
    <p>
      messsage : {{ displayMessage }}
    </p>
  </div>
</template>


<style>
.suepencedChild {
  background: #F90;
  padding: 2rem;
}
</style>