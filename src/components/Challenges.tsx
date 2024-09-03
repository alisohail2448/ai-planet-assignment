import { CSSProperties, useState } from "react";
import { challengesData } from "../constants/constants";
import Card from "./Card";
import FiltersDropdown from "./FiltersDropdown";
import SearchBar from "./SearchBar";
import { Cancel } from "@mui/icons-material";

const styles: { [key: string]: CSSProperties } = {
  container: {
    background: "#003145",
    height: "100%",
  },
  header: {
    background: "#002a3b",
    padding: "50px 0px",
  },
  contentWrapper: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "32px",
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    paddingBottom: 60,
  },
  searchFiltersWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  filtersContainer: {
    display: "flex",
    gap: 10,
    marginTop: 20,
  },
  filterChip: {
    background: "#798f9a",
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "6px 12px",
    borderRadius: 18,
  },
  filterText: {
    fontSize: "14px",
    color: "#fff",
    fontWeight: "500",
  },
  cardContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "100px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "60px",
  },
  noChallengesText: {
    color: "#fff",
    textAlign: "center",
    gridColumn: "span 3",
  },
  cancelIcon: {
    fill: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

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
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.contentWrapper}>
          <p style={styles.title}>Explore Challenges</p>
          <div style={styles.searchFiltersWrapper}>
            <SearchBar setSearchQuery={setSearchQuery} />
            <FiltersDropdown
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          <div>
            <div style={styles.filtersContainer}>
              {Object.keys(selectedFilters).map((filterType) =>
                selectedFilters[filterType].map((filterValue) => (
                  <div
                    key={`${filterType}-${filterValue}`}
                    style={styles.filterChip}
                  >
                    <p style={styles.filterText}>{filterValue}</p>
                    <Cancel
                      style={styles.cancelIcon}
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
      <div style={styles.cardContainer}>
        <div style={styles.cardGrid}>
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((card) => <Card key={card.id} {...card} />)
          ) : (
            <p style={styles.noChallengesText}>No challenges found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
