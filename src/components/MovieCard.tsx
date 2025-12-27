import type { Movie } from "../types/movie";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();
  const favorite = isFavorite(movie.id);

  return (
    <li className="relative rounded-xl bg-white shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <Link to={`/movie/${movie.id}`}>
        <div className="bg-neutral-100">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "/placeholder.png"
            }
            alt={`${movie.title} poster`}
            className="h-full w-full"
            loading="lazy"
          />
          <div className="absolute top-2 left-2 rounded-full bg-black/70 text-white text-xs px-2 py-1 backdrop-blur">
            ★ {movie.vote_average?.toFixed(1) ?? "N/A"}
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-neutral-900">
            {movie.title}
          </h3>
          <p className="mt-1 text-xs text-neutral-600">
            {movie.release_date?.slice(0, 4) ?? "—"}
          </p>
        </div>
      </Link>

      <div className="p-3 pt-0">
        <button
          onClick={() =>
            favorite ? removeFavorite(movie.id) : addFavorite(movie)
          }
          className={`w-full rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            favorite
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {favorite ? "Remove favorite" : "Add to favorites"}
        </button>
      </div>
    </li>
  );
}
