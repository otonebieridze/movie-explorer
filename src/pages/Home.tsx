import { useEffect, useState } from "react";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MovieCard from "../components/MovieCard";
import MovieSkeleton from "../components/MovieSkeleton";
import Pagination from "../components/Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const { movies, loading, error } = usePopularMovies(
    import.meta.env.VITE_TMDB_API_KEY,
    page
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home — Popular Movies</h1>

      {error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : loading ? (
        <>
          <Pagination page={page} onPageChange={setPage} hasNext={page < 10} />
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <MovieSkeleton key={i} />
            ))}
          </ul>
          <Pagination page={page} onPageChange={setPage} hasNext={page < 10} />
        </>
      ) : movies.length > 0 ? (
        <>
          <Pagination page={page} onPageChange={setPage} hasNext={page < 10} />
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
          <Pagination page={page} onPageChange={setPage} hasNext={page < 10} />
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
