<template>
  <div class="bg-grey-lighten-4 minh-100vh">
    <v-container>
      <h2 class="title pb-5">
        Todo App
      </h2>
      <slot />
    </v-container>
  </div>
</template>
<style lang="sass" scoped>
.minh-100vh
  min-height: 100vh
</style>
