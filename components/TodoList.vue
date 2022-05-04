<template>
  <div>
    <v-row>
      <v-col v-for="(todo, index) in todoList" :key="index" cols="12" md="4">
        <v-card class="wordbreak-all">
          <v-card-title>
            <p>{{ todo.title }}</p>
          </v-card-title>
          <v-card-text>
            <v-chip class="mb-2" label color="cyan">
              id: {{ todo.id }}
            </v-chip>
            <p>{{ todo.body }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn :to="{name: 'id', params: {id: todo.id}}" color="warning">
              EDIT
            </v-btn>
            <v-btn color="error" @click="drop(todo.id)">
              DELETE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
const { todoList, deleteTodo } = useTodos()

const drop = (id: number) => {
  deleteTodo(id)
}
</script>
<style lang="sass" scoped>
.wordbreak-all
  wordbreak: break-all
</style>
