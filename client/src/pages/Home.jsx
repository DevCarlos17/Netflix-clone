import MoviesList from "../components/MoviesList.jsx";
import Navbar from "../components/Navbar.jsx";
import useGetFavoriteMovies from "../hooks/useGetFavoriteMovies.js";
import useMoviesList from "../hooks/useMoviesList.js";
import useUser from "../hooks/useUser.js";
import { Billboard } from "./Billboard.jsx";

const Home = () => {
  const { user } = useUser();
  const { movies } = useMoviesList();
  const { favoriteMovies } = useGetFavoriteMovies(user._id);

  return (
    <>
      <Navbar />
      <Billboard />
      <MoviesList title="Trending" movies={movies} />
      <MoviesList title="My List" movies={favoriteMovies} />
    </>
  );
};

export default Home;
