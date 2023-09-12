import { Router } from "express";
import { getRandomMovies, getMovies, favoriteMovie, getFavoriteMovies } from "../controllers/movies.js";

const router = Router();
router.get("/movies", getMovies)
router.get("/movies/randomMovie", getRandomMovies)
router.put('/movies/favoriteMovies', favoriteMovie)
router.get('/movies/favoriteMovies/:userId', getFavoriteMovies)


export default router