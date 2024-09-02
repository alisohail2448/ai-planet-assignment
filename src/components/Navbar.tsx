import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="#fff" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"}>
            <img src={logo} alt="logo" width={100} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
