<script setup lang="ts">
import type { MovieSearch } from '~/types'
import Pagination from '~/components/movie/Pagination.vue'

defineProps<{ movies: MovieSearch[], title: string }>()
</script>

<template>
  <div class="p-2 flex justify-center">
    <div class="w-full xl:w-4/5">
      <Pagination />
      <UCard class="m-2 shadow-lg">
        <h1 class="text-4xl font-thin">
          {{ title }}
        </h1>
        <p class="text-md opacity-50">
          lorem impsun verterem scripserit nec dicam cum consectetuer cursus dicant condimentum dolor
        </p>

        <div class="flex flex-wrap justify-center">
          <NuxtLink v-for="(movie, i) in movies" :key="i" :to="`/movie/${movie.imdbID}`">
            <MovieCard :movie="movie" />
          </NuxtLink>
        </div>
      </UCard>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
