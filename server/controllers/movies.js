import Movie from "../models/Movie.js"
import User from "../models/User.js"

export const getMovies = async (req, res) => {
  const movies = await Movie.find();

  return res.status(200).json(movies)

}

export const getRandomMovies = async (req, res) => {
  const movies = await Movie.find()

  const randomIndex = Math.floor(Math.random() * movies.length)

  return res.status(200).json(movies[randomIndex])
}

export const favoriteMovie = async (req, res) => {
  const { userId, movieId } = req.body;
  console.log(userId, movieId)
  const user = await User.findById(userId)

  const isFavorite = user.favoriteIds.includes(movieId)


  if (!isFavorite) {
    user.favoriteIds.push(movieId)
  } else {
    const indexMovie = user.favoriteIds.indexOf(movieId)
    user.favoriteIds.splice(indexMovie, 1)
  }
  user.save();
  console.log(user)


  return res.status(200).json(user.favoriteIds)
}

export const getFavoriteMovies = async (req, res) => {

  const { userId } = req.params;
  console.log("entro en favoritos")
  const user = await User.findById(userId);
  const favoriteMovieIds = user.favoriteIds;

  const favoriteMovies = await Movie.find({ _id: { $in: favoriteMovieIds } });

  return res.status(200).json(favoriteMovies)
}