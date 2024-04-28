<script setup lang="ts">
const { movies, findMovies } = useMovies()

definePageMeta({
  middleware: 'auth',
})

onMounted(async () => await findMovies('toy story'))
useHead({
  title: 'VeriStream',
})
</script>

<template>
  <MovieList :movies="movies" title="Películas aclamadas" />
</template>
