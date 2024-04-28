import { getMovieById, getMoviesBySearch } from '~/api'
import { useMoviesStore } from '~/store/movies'

export function useMovies() {
  const store = useMoviesStore()
  const movies = computed(() => store.movies)
  const movie = computed(() => store.movie)
  const currentPage = ref<number>(1)
  const lastSearch = computed(() => store.lastSearch)

  const findMovies = async (keyword: string, page = 1) => {
    store.isLoading = true
    const { Search: results, Error, totalResults } = await getMoviesBySearch({ s: keyword, page })
    if (Error)
      store.setError(Error)

    store.setMovies(results, keyword)
    store.numberOfPages = Number(totalResults)
    store.isLoading = false
  }

  const findMovie = async (id: string) => {
    store.isLoading = true
    const movie = await getMovieById(id)
    if (movie.Error)
      store.setError(`La película con el ID ${id} no pudo ser encontrada.`)

    store.setMovie(movie)
    store.isLoading = false
  }

  watch(currentPage, async (pageNumber) => {
    await findMovies(lastSearch.value, pageNumber)
  })

  return {
    movies,
    movie,
    currentPage,
    lastSearch,
    numberOfPages: computed(() => store.numberOfPages),
    error: computed(() => store.error),
    loading: computed(() => store.isLoading),
    findMovies,
    findMovie,
  }
}
