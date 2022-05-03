<template>
  <div>
    <v-container>
      <v-form @submit.prevent="add" class="pb-5">
        <v-text-field label="Title" v-model="form.title" />
        <v-text-field label="Body" v-model="form.body" />
        <v-btn color="primary" type="submit"><b>Submit</b></v-btn>
      </v-form>
      <v-row>
        <v-col  v-for="(todo, index) in todos" :key="index" cols="12" md="4">
          <v-card>
            <v-card-title>
              <p>title: {{ todo.title }}</p>
            </v-card-title>
            <v-card-text>
              <p>id: {{ todo.id }}</p>
              <p>body: {{ todo.body }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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