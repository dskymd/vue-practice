import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  // state: () => ({ count: 0 })
  const count = ref(0)

  // getters: { doubleCount(state) { return state.count * 2 } }
  const doubleCount = computed(() => count.value * 2)
  const doubleCountPlusOne = computed(() => doubleCount.value + 1)

  // action
  const increment = () => {
    count.value++
  }

  return { count, doubleCount, doubleCountPlusOne, increment }
})
