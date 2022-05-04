<template>
  <v-form @submit="handleSubmit">
    <v-text-field v-model="title" :error-messages="titleError" label="Title" />
    <v-text-field v-model="body" :error-messages="bodyError" label="Body" />
    <v-btn color="primary" type="submit">
      Edit
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

type Props = {
  todo: {
    id: number,
    title: string,
    body: string
  }
}
const { todo } = defineProps<Props>()

const schema = yup.object({
  title: yup.string().required().label('Title'),
  body: yup.string().required().label('Body')
})
const { validate, resetForm } = useForm({ validationSchema: schema })
const { value: title, errorMessage: titleError } = useField<string>('title')
const { value: body, errorMessage: bodyError } = useField<string>('body')
resetForm({
  values: {
    title: todo.title,
    body: todo.body
  }
})

const { updateTodo } = useTodos()
const handleSubmit = async (e: Event) => {
  const result = await validate()
  if (result.valid) {
    updateTodo({
      id: todo.id,
      title: title.value,
      body: body.value
    })
    e.preventDefault()
  } else {
    return true
  }
}
</script>
