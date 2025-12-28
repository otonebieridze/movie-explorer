import { useEffect, useState } from "react";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MovieCard from "../components/MovieCard";
import MovieSkeleton from "../components/MovieSkeleton";
import PageSection from "../components/PageSection";

export default function Home() {
  const [page, setPage] = useState(1);
  const { movies, loading, error } = usePopularMovies(
    import.meta.env.VITE_TMDB_API_KEY,
    page
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
            Popular movies
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Browse trending titles and discover something new.
          </p>
        </header>

        {error ? (
          <div className="rounded-lg border border-red-200 dark:border-red-400 bg-red-50 dark:bg-red-900/40 p-4 text-red-700 dark:text-red-300">
            Error: {error}
          </div>
        ) : loading ? (
          <PageSection page={page} onPageChange={setPage} hasNext={page < 10}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <MovieSkeleton key={i} />
              ))}
            </ul>
          </PageSection>
        ) : movies.length > 0 ? (
          <PageSection page={page} onPageChange={setPage} hasNext={page < 10}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </PageSection>
        ) : (
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 text-center">
            <p className="text-neutral-700 dark:text-neutral-300">No movies found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
