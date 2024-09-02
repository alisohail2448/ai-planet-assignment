import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: "6px 10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "#000000" }} />
      </IconButton>
      <input
        onChange={handleInputChange}
        type="text"
        style={{
          fontSize: 18,
          color: "#858585",
          border: "none",
          width: 800,
          padding: 10,
          outline: "none",
        }}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
