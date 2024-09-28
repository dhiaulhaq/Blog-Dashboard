import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header
        id="header"
        className="bg-white w-full px-6 py-5 z-50 fixed top-0 shadow-md transition-all transform ease-in-out duration-500"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to={"/"} className="flex items-center cursor-pointer">
              <span className="text-xl text-orange-500 font-bold self-center">
                Hacktiv Blog
              </span>
            </Link>
          </div>

          {/* Navbar Links */}
          <nav id="menu" className="flex items-center">
            <Link
              to={"https://hacktivblog-dashboard.vercel.app/login"}
              target="_blank"
              className="font-medium text-neutral-900 hover:text-orange-400 text-base cursor-pointer"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
