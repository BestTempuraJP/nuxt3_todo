<template>
  <v-card class="pa-5 mb-7">
    <h4 class="subtitle-2 pb-3">
      Create Task
    </h4>
    <v-form @submit="handleSubmit">
      <v-text-field v-model="title" :error-messages="titleError" label="Title" variant="outlined" />
      <v-text-field v-model="body" :error-messages="bodyError" label="Body" variant="outlined" />
      <v-btn color="primary" type="submit">
        Submit
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  title: yup.string().required().max(10).label('Title'),
  body: yup.string().required().max(20).label('Body')
})
const { validate, resetForm } = useForm({ validationSchema: schema })
const { value: title, errorMessage: titleError } = useField<string>('title')
const { value: body, errorMessage: bodyError } = useField<string>('body')

const { createTodo } = useTodos()
const handleSubmit = async (e: Event) => {
  const result = await validate()
  if (result.valid) {
    createTodo({
      title: title.value,
      body: body.value
    })
    resetForm({
      values: {
        title: '',
        body: ''
      }
    })
    e.preventDefault()
  } else {
    return true
  }
}
</script>
