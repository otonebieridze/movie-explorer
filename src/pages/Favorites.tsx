import { useFavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useFavoritesContext();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>

      {favorites.length > 0 ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : (
        <p>No favorites yet. Add some movies!</p>
      )}
    </div>
  );
}
