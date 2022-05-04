<template>
  <div>
    <Head>
      <Title>Todo App - Edit</Title>
    </Head>
    <h3 class="subtitle-1 mb-5">
      Edit Page
    </h3>
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
