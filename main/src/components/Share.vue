<script setup>
import { ref } from 'vue'
const count = ref(0)

const add = () => {
  count.value++
  console.log(count.value)
}
</script>

<template>
  <div class="card">
    <button type="button" @click="add">count++</button>
    <p>
      count is {{ count }}
    </p>
  </div>
</template>
