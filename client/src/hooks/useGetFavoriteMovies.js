import { useGetFavoriteMoviesQuery } from "../api/moviesApi.js"


const useGetFavoriteMovies = (userId) => {
  const { data: favoriteMovies, error: errorInFavoriteMovies, isLoading: isLoadingFavoriteMovies, refetch } = useGetFavoriteMoviesQuery(userId, { refetchOnFocus: true, refetchOnMountOrArgChange: true })



  return { favoriteMovies, errorInFavoriteMovies, isLoadingFavoriteMovies, refetch }
}

export default useGetFavoriteMovies
