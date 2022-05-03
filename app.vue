<template>
  <div>
    <form @submit.prevent="add">
      <label>title</label>
      <input id="title" v-model="form.title" />
      <label>body</label>
      <input id="text" v-model="form.body" />
      <button type="submit">
        Submit
      </button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <p>id: {{ todo.id }}</p>
        <p>title: {{ todo.title }}</p>
        <p>body: {{ todo.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type todoForm = {
  title: string,
  body: string
}
type todo = {
  id: number,
  title: string,
  body: string
}

let form = reactive<todoForm>({
  title: '',
  body: ''
})
let todos = reactive<todo[]>([])
let key = ref(0)

const add = () => {
  key.value++
  todos.push({
    id: key.value,
    title: form.title,
    body: form.body
  })
  form.title = ''
  form.body = ''
}
</script>