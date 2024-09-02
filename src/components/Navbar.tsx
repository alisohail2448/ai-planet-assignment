import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: 10, background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link to={"/"}>
          <img src={logo} alt="logo" width={100} />
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
