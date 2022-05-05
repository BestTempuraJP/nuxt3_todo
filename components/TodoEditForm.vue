<template>
  <div>
    <v-card class="pa-5 mb-7">
      <v-form @submit="handleSubmit">
        <h3 class="subtitle-2 pb-3">
          Edit Task
        </h3>
        <v-text-field v-model="title" :error-messages="titleError" label="Title" variant="outlined" />
        <v-text-field v-model="body" :error-messages="bodyError" label="Body" variant="outlined" />
        <v-btn color="warning" type="submit">
          Edit
        </v-btn>
      </v-form>
    </v-card>
    <v-alert v-show="success" type="success" class="mb-5">
      Successfully updated!
    </v-alert>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { Todo } from '~/types/todo'

type Props = {
  todo: Todo
}
const { todo } = defineProps<Props>()

const schema = yup.object({
  title: yup.string().required().max(10).label('Title'),
  body: yup.string().required().max(20).label('Body')
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

const success = ref(false)
const { updateTodo } = useTodos()
const handleSubmit = async (e: Event) => {
  const result = await validate()
  if (result.valid) {
    await updateTodo({
      id: todo.id,
      title: title.value,
      body: body.value
    })
    success.value = true
    e.preventDefault()
  } else {
    return true
  }
}
watch(success, (newVal: boolean) => {
  if (newVal === true) {
    setTimeout(() => {
      success.value = false
    }, 3000)
  }
})
</script>
