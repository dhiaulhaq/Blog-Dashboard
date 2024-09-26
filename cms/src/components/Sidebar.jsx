import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <nav
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        id="sidebar-menu"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to={"/posts"} className="nav-link" id="nav-post">
                <span className="icon material-symbols-outlined">message</span>{" "}
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/categories"} className="nav-link" id="nav-category">
                <span className="icon material-symbols-outlined">list</span>{" "}
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-user"} className="nav-link" id="nav-category">
                <span className="icon material-symbols-outlined">person</span>{" "}
                Add User
              </Link>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
            <span>Account</span>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Link to={"/logout"} className="nav-link" id="nav-logout">
                <span className="icon material-symbols-outlined">logout</span>{" "}
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Sidebar */}
    </>
  );
}
