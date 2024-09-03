import { CSSProperties, useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  toggleButton: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "16px 20px",
    cursor: "pointer",
    borderRadius: 10,
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownMenu: {
    display: "block",
    position: "absolute",
    backgroundColor: "#fff",
    minWidth: "200px",
    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    zIndex: 1,
    right: 0,
    top: "100%",
    marginTop: "10px",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontWeight: "500",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
    color: "#666666",
    fontSize: "14px",
    cursor: "pointer",
  },
  separator: {
    border: "none",
    borderTop: "1px solid #eee",
    margin: "10px 0",
  },
  icon: {
    marginLeft: "10px",
    fontSize: "24px",
    color: "#333",
  },
};

const FiltersDropdown = ({ selectedFilters, setSelectedFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const isSelected = prevFilters[category].includes(value);
      return {
        ...prevFilters,
        [category]: isSelected
          ? prevFilters[category].filter((item) => item !== value)
          : [...prevFilters[category], value],
      };
    });
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleDropdown} style={styles.toggleButton}>
        Filter
        {isOpen ? (
          <KeyboardArrowUp style={styles.icon} />
        ) : (
          <KeyboardArrowDown style={styles.icon} />
        )}
      </button>

      {isOpen && (
        <div style={styles.dropdownMenu}>
          <div style={styles.section}>
            <p style={styles.sectionTitle}>Status</p>
            {["All", "Active", "Upcoming", "Past"].map((status) => (
              <label key={status} style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedFilters.status.includes(status)}
                  onChange={() => handleCheckboxChange("status", status)}
                />
                {status}
              </label>
            ))}
          </div>

          <hr style={styles.separator} />

          <div style={styles.section}>
            <p style={styles.sectionTitle}>Level</p>
            {["Easy", "Medium", "Hard"].map((level) => (
              <label key={level} style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedFilters.level.includes(level)}
                  onChange={() => handleCheckboxChange("level", level)}
                />
                {level}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersDropdown;
