import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <header
        className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
        id="navbar"
      >
        <Link
          to={"/posts"}
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
        >
          DASHBOARD
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-menu"
          aria-controls="sidebar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </header>
      {/* End Navbar */}
    </>
  );
}
