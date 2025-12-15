import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import MovieDetailsSkeleton from "../components/MovieDetailsSkeleton";

export default function MovieDetails() {
  const { id } = useParams();
  const movieId = Number(id);
  const { movie, loading, error } = useMovieDetails(
    import.meta.env.VITE_TMDB_API_KEY,
    movieId
  );

  return (
    <div className="p-4">
      {error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : loading ? (
        <MovieDetailsSkeleton />
      ) : movie ? (
        <div className="bg-white shadow rounded p-4">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} poster`}
              className="rounded mb-4"
            />
          )}
          <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
          <p className="text-gray-700 mb-2">Rating: {movie.vote_average}</p>
          <p className="text-gray-700 mb-2">Release Date: {movie.release_date}</p>
          <p className="text-gray-800">{movie.overview}</p>
        </div>
      ) : (
        <p>No movie details found.</p>
      )}
    </div>
  );
}
