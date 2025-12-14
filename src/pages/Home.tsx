import { usePopularMovies } from "../hooks/usePopularMovies";
import MovieCard from "../components/MovieCard";
import MovieSkeleton from "../components/MovieSkeleton";

export default function Home() {
  const { movies, loading, error } = usePopularMovies(
    import.meta.env.VITE_TMDB_API_KEY
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home — Popular Movies</h1>

      {error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : loading ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <MovieSkeleton key={i} />
          ))}
        </ul>
      ) : movies.length > 0 ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
