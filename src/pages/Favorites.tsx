import { useFavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";

export default function Favorites() {
  const { favorites } = useFavoritesContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Your favorites
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
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
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 text-center">
            <p className="text-neutral-700 dark:text-neutral-300">
              No favorites yet. Start adding movies!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
