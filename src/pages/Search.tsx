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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Movies</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        placeholder="Search for a movie..."
        className="border rounded p-2 w-full mb-4"
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
        <p>No movies found for "{query}".</p>
      ) : (
        <p>Start typing to search for movies.</p>
      )}
    </div>
  );
}
