import { useState } from "react";
import { challengesData } from "../constants/constants";
import Card from "./Card";
import FiltersDropdown from "./FiltersDropdown";
import SearchBar from "./SearchBar";
import { Cancel } from "@mui/icons-material";

const Challenges = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    level: [],
  });

  const handleRemoveFilter = (filterType, filterValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].filter(
        (item) => item !== filterValue
      ),
    }));
  };

  const filteredChallenges = challengesData
    .filter(
      (card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((card) => {
      const statusMatch =
        selectedFilters.status.length === 0 ||
        selectedFilters.status.includes(card.status);
      const levelMatch =
        selectedFilters.level.length === 0 ||
        selectedFilters.level.includes(card.level);
      return statusMatch && levelMatch;
    });

  return (
    <div
      style={{
        background: "#003145",
        height: "100%",
      }}
    >
      <div
        style={{
          background: "#002a3b",
          padding: "50px 0px",
        }}
      >
        <div
          style={{
            padding: "30px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "32px",
              color: "#fff",
              fontWeight: "600",
              textAlign: "center",
              paddingBottom: 60,
            }}
          >
            Explore Challenges
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <SearchBar setSearchQuery={setSearchQuery} />
            <FiltersDropdown
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          <div>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {Object.keys(selectedFilters).map((filterType) =>
                selectedFilters[filterType].map((filterValue) => (
                  <div
                    key={`${filterType}-${filterValue}`}
                    style={{
                      background: "#798f9a",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "6px 12px",
                      borderRadius: 18,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#fff",
                        fontWeight: "500",
                      }}
                    >
                      {filterValue}
                    </p>
                    <Cancel
                      style={{
                        fill: "#fff",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleRemoveFilter(filterType, filterValue)
                      }
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "60px",
          }}
        >
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((card) => <Card key={card.id} {...card} />)
          ) : (
            <p
              style={{
                color: "#fff",
                textAlign: "center",
                gridColumn: "span 3",
              }}
            >
              No challenges found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
