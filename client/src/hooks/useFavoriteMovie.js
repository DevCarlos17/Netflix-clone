import { useFavoriteMovieMutation } from "../api/moviesApi.js"

const useFavoriteMovie = () => {

  const [mutateFavorite, { data, error, isLoading }] = useFavoriteMovieMutation()

  return { mutateFavorite, data, error, isLoading }
}

export default useFavoriteMovie
