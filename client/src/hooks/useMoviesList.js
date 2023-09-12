import { useGetMoviesQuery } from "../api/moviesApi.js"

const useMoviesList = () => {

  const { data, error, isLoading, refetch } = useGetMoviesQuery();

  return { movies: data, error, isLoading, refetch }
}

export default useMoviesList
