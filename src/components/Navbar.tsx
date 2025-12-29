import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { favorites } = useFavoritesContext();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-neutral-900 fixed top-0 left-0 right-0 shadow-md z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight"
        >
          🎬 MovieApp
        </NavLink>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
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
              <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold shadow-sm">
                {favorites.length}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 rounded-full p-2 transition-colors bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-yellow-400">☀️</span>
            ) : (
              <span className="text-blue-600">🌙</span>
            )}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 shadow-md px-6 py-4 flex justify-between items-center">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1 flex items-center gap-1"
                : "text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
            }
          >
            Favorites
            {favorites.length > 0 && (
              <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold shadow-sm">
                {favorites.length}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 transition-colors bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-yellow-400">☀️</span>
            ) : (
              <span className="text-blue-600">🌙</span>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
