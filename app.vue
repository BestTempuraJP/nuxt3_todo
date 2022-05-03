<template>
  <div>
    <p>{{ number }}</p>
    <button @click="inc()">
      Inc
    </button>
    <button @click="dec()">
      Dec
    </button>
  </div>
</template>

<script setup lang="ts">
let number = ref(1)

const inc = () => {
  number.value++
}
const dec = () => {
  number.value--
}

</script>