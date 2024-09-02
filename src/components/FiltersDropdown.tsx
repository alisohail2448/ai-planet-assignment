import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";

const FiltersDropdown = ({ selectedFilters, setSelectedFilters }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      const index = newFilters[category].indexOf(value);

      if (index === -1) {
        // Add value if it's not already present
        newFilters[category] = [...newFilters[category], value];
      } else {
        // Remove value if it's already present
        newFilters[category] = newFilters[category].filter(
          (item) => item !== value
        );
      }

      return newFilters;
    });
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={toggleDropdown}
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "16px 20px",
          cursor: "pointer",
          borderRadius: 10,
          fontSize: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Filter{" "}
        {isOpen ? (
          <KeyboardArrowUp style={{ marginLeft: 10 }} />
        ) : (
          <KeyboardArrowDown style={{ marginLeft: 10 }} />
        )}
      </button>

      {isOpen && (
        <div
          style={{
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
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: "500", marginBottom: "10px" }}>Status</p>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "10px",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("All")}
                onChange={() => handleCheckboxChange("status", "All")}
              />{" "}
              All
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "10px",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("Active")}
                onChange={() => handleCheckboxChange("status", "Active")}
              />{" "}
              Active
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "10px",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("Upcoming")}
                onChange={() => handleCheckboxChange("status", "Upcoming")}
              />{" "}
              Upcoming
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "10px",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("Past")}
                onChange={() => handleCheckboxChange("status", "Past")}
              />{" "}
              Past
            </label>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #eee",
              margin: "10px 0",
            }}
          />

          <div style={{ marginBottom: "10px" }}>
            <p style={{ fontWeight: "500", marginBottom: "10px" }}>Level</p>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "10px",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedFilters.level.includes("Easy")}
                onChange={() => handleCheckboxChange("level", "Easy")}
              />{" "}
              Easy
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "10px",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedFilters.level.includes("Medium")}
                onChange={() => handleCheckboxChange("level", "Medium")}
              />{" "}
              Medium
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "10px",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              <input
                type="checkbox"
                checked={selectedFilters.level.includes("Hard")}
                onChange={() => handleCheckboxChange("level", "Hard")}
              />{" "}
              Hard
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersDropdown;
