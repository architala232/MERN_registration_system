import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>

      <Link to="/">Register</Link>

      {" | "}

      <Link to="/login">Login</Link>

      {" | "}

      <Link to="/student">Student</Link>

      {" | "}

      <Link to="/teacher">Teacher</Link>

    </div>
  );
}

export default Navbar;