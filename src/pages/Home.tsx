import { usePopularMovies } from "../hooks/usePopularMovies";

export default function Home() {
  const { movies, loading, error } = usePopularMovies(
    import.meta.env.VITE_TMDB_API_KEY
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home — Popular Movies</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {movies.length > 0 ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <li key={movie.id} className="bg-white shadow rounded p-2">
              <div className="font-semibold">{movie.title}</div>
              <div className="text-sm">Rating: {movie.vote_average}</div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            </li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>No movies found.</p>
      )}
    </div>
  );
}
