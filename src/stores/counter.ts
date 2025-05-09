import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 在组件中调用
// import { useCounterStore } from "@/store/counter";

// const counterStore = useCounterStore();

// const addCount = () => {
//   counterStore.increment();
// };

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
