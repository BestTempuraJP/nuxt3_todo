<template>
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
</template>
<script setup>
const todos = []

</script>