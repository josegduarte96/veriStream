import {
  MediaType,
  type Movie,
  type Params,
  type SearchResults,
} from '~/types'

export const apiBaseUrl = 'http://www.omdbapi.com'

async function apiFetch(params: Params = {}, mediaType: MediaType = MediaType.MOVIE): Promise<any> {
  try {
    return await $fetch(apiBaseUrl, {
      query: {
        apiKey: '94e0982f',
        type: mediaType,
        ...params,
      },
    })
  }
  catch (e) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Ooops, hubo un error en el servidor',
    })
  }
}

/*
 Buscador general de peliculas
 */
export async function getMoviesBySearch(params: Params): Promise<SearchResults> {
  return await apiFetch(params)
}

/*
 Buscador por ID
 */
export async function getMovieById(id: string): Promise<Movie> {
  return await apiFetch({ i: id })
}

/*
  Buscador por titulo
 */
export async function getMovieByTitle(title: string): Promise<Movie> {
  return await apiFetch({ t: title })
}
