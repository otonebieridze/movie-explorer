import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          MovieApp
        </Link>

        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/search" className="hover:text-blue-500">Search</Link>
          <Link to="/favorites" className="hover:text-blue-500">Favorites</Link>
        </div>
      </div>
    </nav>
  )
}
