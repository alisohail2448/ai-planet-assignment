import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", paddingTop: 10 }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Box sx={{ width: "100%" }}>
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
          </Box>
        </div>
      </div>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 0" }}>
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
