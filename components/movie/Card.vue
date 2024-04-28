<script setup lang="ts">
import type { MovieSearch } from '~/types'

const props = defineProps<{
  movie: MovieSearch
}>()
const ui = {
  base: '',
  background: 'bg-white dark:bg-transparent',
  divide: '',
  ring: '',
  rounded: 'rounded-lg',
  shadow: '',
  body: {
    padding: 'px-1 py-1 sm:px-2',
  },
  footer: {
    padding: 'px-0 py-0 sm:px-2',

  },
}

const active = useState()
const isActive = computed(() => active.value === props.movie.imdbID)
</script>

<template>
  <UCard :ui="ui" @click="active = movie.imdbID">
    <NuxtImg
      :src="movie.Poster" class="rounded-lg cursor-pointer h-[340px] w-[220px] shadow"
      loading="lazy"
      :alt="`movie-${movie.Title}`"
      :class="{ active: isActive }"
    />
    <template #footer>
      <div class="w-[200px]">
        <div class="text-sm font-semibold text-ellipsis overflow-hidden">
          {{ movie.Title }}
        </div>
      </div>
    </template>
  </UCard>
</template>

<style scoped>
img.active {
  view-transition-name: selected-film;
  contain: layout;
}
</style>
