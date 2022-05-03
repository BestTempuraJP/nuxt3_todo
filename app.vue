<template>
  <div>
    <form @submit.prevent="add">
      <input
        v-model="todo"
      />
      <button type="submit">
        Inc
      </button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
let todo = ref('')
let todos = ref<string[]>([])

const add = () => {
  todos.value.push(todo.value)
  todo.value = ''
}
</script>