export interface AuthPayload {
  email: string
  password: string
}

export enum AuthType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export interface Params {
  [key: string]: string | number | boolean | undefined
}

export interface ErrorAuth {
  [key: string]: string
}

export interface SearchResults {
  Search: MovieSearch[]
  totalResults: string
  Response: string
  Error?: string
}

export interface MovieSearch {
  Title: string
  Year: string
  imdbID: string
  Type: MediaType
  Poster: string
}

export interface Movie {
  Error?: string
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  ImdbVotes: string
  ImdbId: string
  Type: string
  Dvd: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

export enum MediaType {
  MOVIE = 'movie',
  SERIE = 'serie',
  EPISODE = 'episode',
}

export interface validQueryParams {
  s?: string // NOTE: para realizar busquedas
  i?: string // NOTE: para busquedas por ID
  t?: string // NOTE: para busquedas por titulo
  page?: number
}
