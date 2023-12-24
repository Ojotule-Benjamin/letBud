import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const PropertyTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          textColor: "yellow",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className=" text-yellow-700"
          textColor="secondary"
        >
          <Tab label="Unit Details" />
          <Tab label="Amenities" />
          <Tab label="Policies" />
          <Tab label="Bill structure" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Unit Details
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Amenities
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Policies
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Bill structure
      </CustomTabPanel>
    </Box>
  );
};

export default PropertyTab;
