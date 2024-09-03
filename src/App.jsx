import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Details from "./pages/Details";
import CreateChallenge from "./pages/CreateChallenge";
import Navbar from "./components/Navbar";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/create" element={<CreateChallenge />} />
            <Route path="/edit/:id" element={<CreateChallenge />} />
          </Routes>
        </div>
      </Router>
      <Toaster />
    </LocalizationProvider>
  );
}

export default App;
