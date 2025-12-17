import { useEffect, useState } from "react";
import { searchMovies } from "../api/tmdb";
import type { Movie } from "../types/movie";

export function useSearchMovies(apiKey: string, query: string, page: number) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const controller = new AbortController();
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await searchMovies(apiKey, query, page);
        setTotalPages(result.total_pages);
        setMovies(result.results);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [query, page]);

  return { movies, loading, error, totalPages };
}
