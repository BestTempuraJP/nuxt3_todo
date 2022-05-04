<template>
  <v-form @submit="handleSubmit">
    <v-text-field v-model="title" :error-messages="titleError" label="Title" />
    <v-text-field v-model="body" :error-messages="bodyError" label="Body" />
    <v-btn color="primary" type="submit">Submit</v-btn>
  </v-form>
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

const { createTodo } = useTodos()
const handleSubmit = async (e: Event) => {
  const result = await validate();
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
    e.preventDefault();
  } else {
    return true
  }
}
</script>