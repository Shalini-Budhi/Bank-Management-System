import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function CustomTabsUi({ tabs }) {
  const [value, setValue] = React.useState("0"); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.name}
                value={index.toString()}
              />
            ))}
          </TabList>
        </Box>

        {tabs.map((tabComponent, index) => (
          <TabPanel key={index} value={index.toString()}>
            {tabComponent.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
