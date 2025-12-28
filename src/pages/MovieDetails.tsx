import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import MovieDetailsSkeleton from "../components/MovieDetailsSkeleton";
import { useFavoritesContext } from "../context/FavoritesContext";

export default function MovieDetails() {
  const { id } = useParams();
  const movieId = Number(id);
  const { movie, loading, error } = useMovieDetails(
    import.meta.env.VITE_TMDB_API_KEY,
    movieId
  );

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();
  const favorite = movie ? isFavorite(movie.id) : false;

  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
            <p className="text-red-700">Error: {error}</p>
          </div>
        ) : loading ? (
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <MovieDetailsSkeleton />
          </div>
        ) : movie ? (
          <div className="rounded-xl bg-white shadow-sm overflow-hidden">
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
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
                  {movie.title}
                </h1>
                <p className="mt-2 text-base text-neutral-600">
                  Release Date: {movie.release_date}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Rating: {movie.vote_average}
                </p>
                <p className="mt-4 text-neutral-700">{movie.overview}</p>
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
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <p className="text-neutral-700">No movie found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
