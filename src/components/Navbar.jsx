import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Student Portal
        </Link>

        <div className="navbar-nav ms-auto flex-row">

          <Link className="nav-link px-3 text-black" to="/">
            Register
          </Link>

          <Link className="nav-link px-3 text-black" to="/login">
            Login
          </Link>

          <Link className="nav-link px-3 text-black" to="/student">
            Dashboard
          </Link>

          <Link className="nav-link px-3 text-black" to="/students">
            Students
          </Link>

          <Link className="nav-link px-3 text-black" to="/teacher">
            Teacher
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;