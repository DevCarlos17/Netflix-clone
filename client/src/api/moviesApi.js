import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApis = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["FavoriteMovies"],
  endpoints: (builder) => ({
    getRandomMovie: builder.query({
      query: () => "/movies/randomMovie"
    }),
    getMovies: builder.query({
      query: () => "/movies"
    }),
    favoriteMovie: builder.mutation({
      query: ({ movieId, userId }) => ({
        url: `/movies/favoriteMovies/`,
        method: "PUT",
        body: { movieId, userId }
      }),
      invalidatesTags: ["FavoriteMovies"],
    }),
    getFavoriteMovies: builder.query({
      query: (userId) => (`/movies/favoriteMovies/${userId}`),
      providesTags: ["FavoriteMovies"],
    })
  })
})


export const { useGetRandomMovieQuery, useGetMoviesQuery, useFavoriteMovieMutation, useGetFavoriteMoviesQuery } = movieApis;