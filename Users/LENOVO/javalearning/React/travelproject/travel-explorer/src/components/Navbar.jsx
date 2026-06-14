import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <nav className="navbar">

      <div className="logo">
        Travel Explorer
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/destinations">
          Destinations
        </Link>

        <Link to="/favorites">
          Favorites
        </Link>

        {!user && (
          <>
            <Link to="/register">
              Register
            </Link>

            <Link to="/login">
              Login
            </Link>
          </>
        )}

        {user && (
          <Link to="/logout">
            Logout
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;