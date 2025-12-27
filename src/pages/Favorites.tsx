import { useFavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useFavoritesContext();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Your favorites
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Movies you’ve saved to watch later.
          </p>
        </header>

        {favorites.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        ) : (
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <p className="text-neutral-700">
              No favorites yet. Start adding movies!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
