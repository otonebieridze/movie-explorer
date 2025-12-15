import { useEffect, useState } from "react";
import { searchMovies } from "../api/tmdb";
import type { Movie } from "../types/movie";

export function useSearchMovies(apiKey: string, query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        const result = await searchMovies(apiKey, query);
        setMovies(result.results);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [query]);

  return { movies, loading, error };
}
