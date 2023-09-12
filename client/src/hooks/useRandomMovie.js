
import { useEffect } from 'react'
import { useGetRandomMovieQuery } from '../api/moviesApi.js'

const useRandomMovie = () => {

  const { data, error, isLoading, refetch } = useGetRandomMovieQuery(undefined, { refetchOnMountOrArgChange: true })

  return { randomMovie: data, error, isLoading, refetch }
}

export default useRandomMovie
