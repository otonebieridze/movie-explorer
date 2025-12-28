import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import MovieDetailsSkeleton from "../components/MovieDetailsSkeleton";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useEffect } from "react";

export default function MovieDetails() {
  const { id } = useParams();
  const movieId = Number(id);
  const { movie, loading, error } = useMovieDetails(
    import.meta.env.VITE_TMDB_API_KEY,
    movieId
  );

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();
  const favorite = movie ? isFavorite(movie.id) : false;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        {error ? (
          <div className="rounded-lg border border-red-200 dark:border-red-400 bg-red-50 dark:bg-red-900/40 p-8 text-center">
            <p className="text-red-700 dark:text-red-300">Error: {error}</p>
          </div>
        ) : loading ? (
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 text-center">
            <MovieDetailsSkeleton />
          </div>
        ) : movie ? (
          <div className="rounded-xl bg-white dark:bg-neutral-800 shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "/placeholder.png"
                  }
                  alt={`${movie.title} poster`}
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {movie.title}
                </h1>
                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                  Release Date: {movie.release_date}
                </p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Rating: {movie.vote_average}
                </p>
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                  {movie.overview}
                </p>
                <button
                  onClick={() =>
                    favorite ? removeFavorite(movie.id) : addFavorite(movie)
                  }
                  className={`mt-6 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    favorite
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {favorite ? "Remove favorite" : "Add to favorites"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 text-center">
            <p className="text-neutral-700 dark:text-neutral-300">
              No movie found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
