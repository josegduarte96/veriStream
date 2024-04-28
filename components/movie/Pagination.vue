<script setup lang="ts">
const { numberOfPages, currentPage } = useMovies()
</script>

<template>
  <UPagination
    v-if="numberOfPages > 0"
    v-model="currentPage" :active-button="{ color: 'violet' }" size="md" class="justify-center p-5"
    :total="numberOfPages"
  />
</template>

<style scoped>

</style>
