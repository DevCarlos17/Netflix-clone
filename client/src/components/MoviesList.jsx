import MovieCard from "./MovieCard.jsx";

const MoviesList = ({ movies = [], title }) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 ">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
