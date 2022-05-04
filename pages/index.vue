<template>
  <div>
    <v-container>
      <Form as="v-form" class="pb-5" :validation-schema="schema" @submit="onSubmit">
        <Field name="title" v-slot="{ field, errors }">
          <v-text-field v-bind="field" label="Title" :error-messages="errors" />
        </Field>
        <Field name="body" v-slot="{ field, errors }">
          <v-text-field v-bind="field" label="Body" :error-messages="errors" />
        </Field>
        <v-btn color="primary" class="mr-4" type="submit"> Submit </v-btn>
      </Form>
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

<script setup>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

let todos = reactive([])
let key = ref(0)

const schema = yup.object({
  title: yup.string().required().label('Title'),
  body: yup.string().required().label('Body'),
});

const onSubmit = (values, { resetForm }) => {
  key.value++
  todos.push({
    id: key.value,
    title: values.title,
    body: values.body,
  })
  resetForm();
}

</script>