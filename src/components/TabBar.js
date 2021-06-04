import React from "react";
import { AppBar, Tab, makeStyles } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

import BinarySearch from "../pages/BinarySearch";
import Home from "../pages/Home";
import LinearSearch from "../pages/LinearSearch";
import RandomSearchWithoutReplacement from "../pages/RandomSearchWithoutReplacement";
import RandomSearchWithReplacement from "../pages/RandomSearchWithReplacement";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    maxWidth: "500px",
    "&.Mui-selected": {
      color: "black",
      backgroundColor: "rgb(207, 216, 220)",
    },
  },
  tabContainer: {
    height: "calc(100% - (88px + 48px))",
    display: "flex",
  },
}));

export default function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <AppBar position="relative" color="secondary">
        <TabList onChange={handleChange}>
          <Tab className={classes.tab} label="Home" value="0" />
          <Tab
            className={classes.tab}
            label="Random Search With Replacement"
            value="1"
          />
          <Tab
            className={classes.tab}
            label="Random Search Without Replacement"
            value="2"
          />
          <Tab className={classes.tab} label="Linear Search" value="3" />
          <Tab className={classes.tab} label="Binary Search" value="4" />
        </TabList>
      </AppBar>
      <div className={classes.tabContainer}>
        <TabPanel value="0">
          <Home />
        </TabPanel>
        <TabPanel value="1">
          <RandomSearchWithReplacement />
        </TabPanel>
        <TabPanel value="2">
          <RandomSearchWithoutReplacement />
        </TabPanel>
        <TabPanel value="3">
          <LinearSearch />
        </TabPanel>
        <TabPanel value="4">
          <BinarySearch />
        </TabPanel>
      </div>
    </TabContext>
  );
}
