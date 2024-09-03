import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  searchBarContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "6px 10px",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    fill: "#000000",
  },
  inputField: {
    fontSize: "18px",
    color: "#858585",
    border: "none",
    width: "800px",
    padding: "10px",
    outline: "none",
  },
};

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={styles.searchBarContainer}>
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={styles.searchIcon} />
      </IconButton>
      <input
        onChange={handleInputChange}
        type="text"
        style={styles.inputField}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
