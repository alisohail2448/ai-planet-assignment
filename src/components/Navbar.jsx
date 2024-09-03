import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const styles = {
  navbarContainer: {
    padding: "10px",
    backgroundColor: "#fff",
  },
  navbarContent: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    width: "100px",
  },
};

function Navbar() {
  return (
    <div style={styles.navbarContainer}>
      <div style={styles.navbarContent}>
        <Link to={"/"}>
          <img src={logo} alt="logo" style={styles.logo} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
