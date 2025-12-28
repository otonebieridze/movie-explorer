import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <header>
        <Navbar />
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-20">
        <Outlet />
      </main>
    </div>
  );
}
