<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { movie, findMovie } = useMovies()
const popularity = computed(
  () => movie.value && Math.round(Number(movie.value?.imdbRating) / 2),
)

onMounted(async () => await findMovie(route.params.id as string))

function getGenres(genres: string): string[] {
  return genres.split(',')
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="w-full flex justify-center">
    <UCard v-if="movie" class="w-full lg:w-4/6 m-3">
      <div class="flex flex-col sm:flex-row">
        <img
          :src="movie.Poster"
          class="rounded-lg cursor-pointer w-[350px] h-[500px] md:mr-10"
          loading="lazy"
          :alt="`movie-${movie.Title}`"
        >
        <div class="my-2">
          <UButton
            class="mb-3"
            color="violet"
            icon="i-heroicons-arrow-left-16-solid"
            size="xl"
            square
            variant="solid"
            @click="goBack()"
          />
          <div class="md:flex flex-col justify-center self-center">
            <div>
              <p class="text-2xl md:text-4xl italic">
                {{ movie.Title }}
              </p>
              <p class="text-md md:text-2xl">
                Rating: {{ movie.imdbRating }}
              </p>
            </div>
            <div class="my-3">
              <UBadge
                v-for="genre in getGenres(movie.Genre)"
                :key="genre"
                class="m-1"
                :ui="{ rounded: 'rounded-full' }"
                color="violet"
                variant="solid"
              >
                {{ genre }}
              </UBadge>
            </div>
            <div class="my-3">
              <Star :length="popularity" />
            </div>
            <p class="py-1 mb-5">
              {{ movie.Plot }}
            </p>
            <p>Release date: {{ movie.Released }}</p>
            <p>Awards: {{ movie.Awards }}</p>
            <p>Actors: {{ movie.Actors }}</p>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<style scoped>
img {
  view-transition-name: selected-film;
}
</style>
