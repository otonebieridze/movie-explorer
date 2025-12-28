import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600 tracking-tight"
        >
          🎬 MovieApp
        </NavLink>

        <div className="space-x-4">
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
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-neutral-700 hover:text-blue-500 transition-colors"
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
