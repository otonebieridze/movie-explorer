import { NavLink } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";

export default function Navbar() {
  const { favorites } = useFavoritesContext();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600 tracking-tight"
        >
          🎬 MovieApp
        </NavLink>

        <div className="space-x-6 text-base font-medium flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-neutral-700 hover:text-blue-500 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-neutral-700 hover:text-blue-500 transition-colors"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1 flex items-center gap-1"
                : "text-neutral-700 hover:text-blue-500 transition-colors flex items-center gap-1"
            }
          >
            Favorites
            {favorites.length > 0 && (
              <span className="ml-1 inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-xs px-2 py-0.5">
                {favorites.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
