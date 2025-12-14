import type { Movie } from "../types/movie";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
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
    </li>
  );
}
