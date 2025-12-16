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
    <li className="bg-white shadow rounded p-2">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={`${movie.title} poster`}
          className="rounded mb-2"
          loading="lazy"
        />
        <div className="font-semibold">{movie.title}</div>
        <div className="text-sm text-gray-600">
          Rating: {movie.vote_average}
        </div>
      </Link>

      <button
        onClick={() =>
          favorite ? removeFavorite(movie.id) : addFavorite(movie)
        }
        className={`mt-2 px-3 py-1 rounded ${
          favorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {favorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </li>
  );
}
