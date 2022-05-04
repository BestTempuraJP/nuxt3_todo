<template>
  <div>
    <v-container>
      <v-form @submit="handleSubmit" class="pb-7">
        <v-text-field v-model="title" :error-messages="titleError" label="Title" />
        <v-text-field v-model="body" :error-messages="bodyError" label="Body" />
        <v-btn color="primary" type="submit">Submit</v-btn>
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
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required().label('Title'),
  body: yup.string().required().label('Body'),
});
const { validate, resetForm } = useForm({validationSchema: schema})
const {value: title, errorMessage: titleError} = useField<string>("title");
const {value: body, errorMessage: bodyError} = useField<string>("body");

interface Todo {
  id: number
  title: string
  body: string
}

let todos = reactive<Todo[]>([]);
let key = ref(0);

const handleSubmit = async (e: Event) => {
  const result = await validate();
  if (result.valid) {
    key.value++;
    todos.push({
      id: key.value,
      title: title.value,
      body: body.value
    });
    resetForm({
      values: {
        title: '',
        body: ''
      }
    })
    e.preventDefault();
  } else {
    return true
  }
}

</script>