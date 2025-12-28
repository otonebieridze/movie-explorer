import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { favorites } = useFavoritesContext();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white shadow-md dark:bg-neutral-900 fixed top-0 left-0 right-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight"
        >
          🎬 MovieApp
        </NavLink>

        <div className="space-x-6 text-base font-medium flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                : "text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                : "text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1 flex items-center gap-1"
                : "text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
            }
          >
            Favorites
            {favorites.length > 0 && (
              <span className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-xs px-2 py-0.5">
                {favorites.length}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 rounded-full p-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-yellow-400">☀️</span>
            ) : (
              <span className="text-blue-600">🌙</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
