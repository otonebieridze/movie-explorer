import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import type { Movie } from "../types/movie";

export function useMovieDetails(apiKey: string, id: number) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getMovieDetails(apiKey, id);
        setMovie(result);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return { movie, loading, error };
}
