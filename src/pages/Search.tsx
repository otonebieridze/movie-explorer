import { useEffect, useState } from "react";
import { useSearchMovies } from "../hooks/useSearchMovies";
import MovieCard from "../components/MovieCard";
import MovieSkeleton from "../components/MovieSkeleton";
import PageSection from "../components/PageSection";

export default function Search() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { movies, loading, error, totalPages } = useSearchMovies(
    import.meta.env.VITE_TMDB_API_KEY,
    query,
    page
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Search movies
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Find your favorite titles and explore new ones.
          </p>
        </header>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search for a movie..."
          className="w-full rounded-lg border border-neutral-300 px-4 py-2 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error ? (
          <p className="text-red-600">Error: {error}</p>
        ) : loading ? (
          <PageSection
            page={page}
            onPageChange={setPage}
            hasNext={page < totalPages}
          >
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <MovieSkeleton key={i} />
              ))}
            </ul>
          </PageSection>
        ) : movies.length > 0 ? (
          <PageSection
            page={page}
            onPageChange={setPage}
            hasNext={page < totalPages}
          >
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </PageSection>
        ) : query ? (
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <p className="text-neutral-700">No movies found for "{query}".</p>
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <p className="text-neutral-700">
              Start typing to search for movies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
