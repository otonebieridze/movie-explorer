import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
}
