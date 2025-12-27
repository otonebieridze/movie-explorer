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
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-neutral-900">
            Popular movies
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Browse trending titles and discover something new.
          </p>
        </header>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            Error: {error}
          </div>
        ) : loading ? (
          <PageSection page={page} onPageChange={setPage} hasNext={page < 10}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <MovieSkeleton key={i} />
              ))}
            </ul>
          </PageSection>
        ) : movies.length > 0 ? (
          <PageSection page={page} onPageChange={setPage} hasNext={page < 10}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </PageSection>
        ) : (
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <p className="text-neutral-700">No movies found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
