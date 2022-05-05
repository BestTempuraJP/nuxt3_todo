<template>
  <div>
    <v-table v-if="todoList.length">
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Body
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in todoList"
          :key="index"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td class="text-right whitespace-nowrap">
            <v-btn :to="{name: 'id', params: {id: item.id}}" size="small" color="warning" class="mr-5">
              <v-icon>mdi-square-edit-outline</v-icon>
            </v-btn>
            <v-btn color="error" size="small" @click="drop(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-alert v-else type="warning">
      Task does not exist.
    </v-alert>
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
.whitespace-nowrap
  white-space: nowrap
</style>
