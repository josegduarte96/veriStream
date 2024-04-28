<script setup lang="ts">
const { error, movies, findMovies, currentPage } = useMovies()
const route = useRoute()
const currentSearch = computed(() => (route.query.s || ''))

const throttledSearch = useDebounceFn(findMovies, 500)
const title = computed(() => `Resultados para la búsqueda: ${currentSearch.value}`)
useHead({
  title: computed(() => `Busqueda: ${currentSearch.value}`),
})

watch(currentSearch, () => {
  throttledSearch(currentSearch.value.toString(), currentPage.value)
}, { immediate: true })
</script>

<template>
  <div v-if="error" class="flex flex-col items-center p-10">
    <h1 class="font-sans text-3xl">
      No se encontraron películas para tu búsqueda: {{ currentSearch }}
    </h1>
    <div class="p-2">
      <UButton
        size="lg"
        icon="i-heroicons-arrow-left-16-solid"
        color="violet"
        label="Volver"
        to="/"
      />
    </div>
  </div>
  <div v-else>
    <UButton
      size="lg"
      color="violet"
      label="Volver"
      icon="i-heroicons-arrow-left-16-solid"
      class="m-3"
      to="/"
    />
    <MovieList :movies="movies" :title="title" />
  </div>
</template>

<style scoped>

</style>
