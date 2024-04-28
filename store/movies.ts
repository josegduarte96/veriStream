import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Movie, MovieSearch } from '~/types'

export const useMoviesStore = defineStore('movies', () => {
  // State
  const movies = ref<MovieSearch[]>([])
  const movie = ref<Movie>()
  const error = ref<unknown>()
  const isLoading = ref<boolean>(false)
  const numberOfPages = ref<number>()
  const lastSearch = ref<string>('')

  // Getters

  // Actions
  function setMovies(data: MovieSearch[], keyword: string) {
    if (Array.isArray(data) && data.length > 0) {
      error.value = null
      movies.value = data
      lastSearch.value = keyword
    }
  }

  function setMovie(data: Movie) {
    error.value = null
    movie.value = data
  }

  function setError(e: unknown) {
    error.value = e
  }

  return { movies, movie, error, isLoading, numberOfPages, lastSearch, setMovies, setError, setMovie }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMoviesStore, import.meta.hot))
