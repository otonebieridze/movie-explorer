import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";
import type { Movie } from "../types/movie";

export function usePopularMovies(apiKey: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getPopularMovies(apiKey);
        setMovies(result.results);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
}
