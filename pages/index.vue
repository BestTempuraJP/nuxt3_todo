<template>
  <div>
    <Head>
      <Title>Todo App</Title>
    </Head>
    <TodoForm  class="pb-7" />
    <TodoList />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});
</script>