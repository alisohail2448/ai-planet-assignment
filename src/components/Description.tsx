import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Description = ({ challenge }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              inkBarStyles={{
                color: "#44924C",
              }}
              TabIndicatorProps={{
                sx: {
                  backgroundColor: "#44924C",
                  height: 4,
                },
              }}
            >
              <Tab
                style={{
                  textTransform: "capitalize",
                  fontWeight: "600",
                  color: "#000",
                  fontSize: "18px",
                }}
                label="Overview"
                {...a11yProps(0)}
              />
            </Tabs>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                margin: "6px 0",
              }}
            >
              <button
                onClick={() => navigate(`/edit/${challenge?.id}`)}
                style={{
                  backgroundColor: "#44924C",
                  padding: "8px 40px",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#218838")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#28a745")
                }
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Edit
                </p>
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  padding: "8px 30px",
                  border: "2px solid #DC1414",
                  borderRadius: 8,
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                <p
                  style={{
                    color: "#DC1414",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Delete
                </p>
              </button>
            </div>
          </Box>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 0" }}>
        <CustomTabPanel value={value} index={0}>
          <p style={{ color: "#64607D", fontSize: "18px", fontWeight: "500" }}>
            {challenge?.description}
          </p>
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default Description;
