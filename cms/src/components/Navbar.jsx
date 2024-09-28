import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className="navbar sticky-top bg-white flex-md-nowrap p-0 shadow"
        id="navbar"
      >
        <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          DASHBOARD
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          aria-controls="sidebar-menu"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon" />
        </button>
      </header>
      {/* End Navbar */}

      {/* Sidebar Menu */}
      <div
        className={`sidebar d-md-none ${isCollapsed ? "d-none" : "d-block"}`}
        id="sidebar-menu"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1000 }}
      >
        <div className="list-group list-group-flush">
          <Link to="/" className="list-group-item list-group-item-action">
            Posts
          </Link>
          <Link
            to="/categories"
            className="list-group-item list-group-item-action"
          >
            Categories
          </Link>
          <Link
            to="/add-user"
            className="list-group-item list-group-item-action"
          >
            Add User
          </Link>
          <button
            onClick={handleLogout}
            className="list-group-item list-group-item-action"
          >
            Logout
          </button>
        </div>
      </div>
      {/* End Sidebar Menu */}
    </>
  );
}
