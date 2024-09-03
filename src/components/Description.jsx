import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import {useState } from "react";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const styles = {
  container: {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  innerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  tabBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  tabLabel: {
    textTransform: "capitalize",
    fontWeight: "600",
    color: "#000",
    fontSize: "18px",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    margin: "6px 0",
  },
  editButton: {
    backgroundColor: "#44924C",
    padding: "8px 40px",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  editButtonText: {
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
  },
  deleteButton: {
    backgroundColor: "transparent",
    padding: "8px 30px",
    border: "2px solid #DC1414",
    borderRadius: 8,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  deleteButtonText: {
    color: "#DC1414",
    fontSize: "14px",
    fontWeight: "600",
  },
  descriptionText: {
    color: "#64607D",
    fontSize: "18px",
    fontWeight: "500",
  },
};

const Description = ({ challenge }) => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <Box sx={styles.tabBox}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              inkBarStyles={{ color: "#44924C" }}
              TabIndicatorProps={{ sx: { backgroundColor: "#44924C", height: 4 } }}
            >
              <Tab style={styles.tabLabel} label="Overview" {...a11yProps(0)} />
            </Tabs>
            <div style={styles.buttonContainer}>
              <button
                onClick={() => navigate(`/edit/${challenge?.id}`)}
                style={styles.editButton}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#218838")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#44924C")
                }
              >
                <p style={styles.editButtonText}>Edit</p>
              </button>
              <button style={styles.deleteButton}>
                <p style={styles.deleteButtonText}>Delete</p>
              </button>
            </div>
          </Box>
        </div>
      </div>
      <div style={{ ...styles.innerContainer, padding: "40px 0" }}>
        <CustomTabPanel value={value} index={0}>
          <p style={styles.descriptionText}>{challenge?.description}</p>
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default Description;
