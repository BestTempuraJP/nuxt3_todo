<template>
  <div>
    <Head>
      <Title>Todo App - Edit</Title>
    </Head>
    <TodoEditForm
      :todo="todo"
      class="pb-5"
    />
    <NuxtLink to="/">
      TOP PAGE
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to) {
      if (typeof to.params.id !== 'string' || !/^\d+$/.test(to.params.id)) {
        return abortNavigation('Page not found')
      }
    }
  ]
})

const route = useRoute()
const { getTodo } = useTodos()
const todo = getTodo(Number(route.params.id))
</script>
