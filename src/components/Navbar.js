// src/components/Navbar.js
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.navbar}>
      <h2>Job Posting Platform</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        {user ? (
          <>
            {user.role === "admin" && <Link to="/create-job" style={styles.link}>Create Job</Link>}
            <button onClick={logout} style={styles.button}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#007bff",
    color: "white",
  },
  link: {
    marginRight: "15px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  button: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    fontSize: "16px",
  }
};

export default Navbar;
