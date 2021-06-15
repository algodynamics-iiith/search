import React from "react";
import { AppBar, Tab, makeStyles } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";

import BinarySearch from "../pages/BinarySearch";
import Home from "../pages/Home";
import LinearSearch from "../pages/LinearSearch";
import RandomSearchWithoutReplacement from "../pages/RandomSearchWithoutReplacement";
import RandomSearchWithReplacement from "../pages/RandomSearchWithReplacement";
import { actions as uiActions } from "../store/slices/ui";

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
  const dispatch = useDispatch();

  const selectedTab = useSelector((state) => state.ui.selectedTab);

  const setSelectedTab = (event, newValue) => {
    dispatch(
      uiActions.setSelectedTab({
        tabKey: newValue,
      })
    );
  };

  return (
    <TabContext value={selectedTab}>
      <AppBar position="relative" color="secondary">
        <TabList onChange={setSelectedTab}>
          <Tab className={classes.tab} label="Home" value="home" />
          <Tab
            className={classes.tab}
            label="Random Search With Replacement"
            value="randomSearchWithReplacement"
          />
          <Tab
            className={classes.tab}
            label="Random Search Without Replacement"
            value="randomSearchWithoutReplacement"
          />
          <Tab
            className={classes.tab}
            label="Linear Search"
            value="linearSearch"
          />
          <Tab
            className={classes.tab}
            label="Binary Search"
            value="binarySearch"
          />
        </TabList>
      </AppBar>
      <div className={classes.tabContainer}>
        <TabPanel value="home">
          <Home />
        </TabPanel>
        <TabPanel value="randomSearchWithReplacement">
          <RandomSearchWithReplacement />
        </TabPanel>
        <TabPanel value="randomSearchWithoutReplacement">
          <RandomSearchWithoutReplacement />
        </TabPanel>
        <TabPanel value="linearSearch">
          <LinearSearch />
        </TabPanel>
        <TabPanel value="binarySearch">
          <BinarySearch />
        </TabPanel>
      </div>
    </TabContext>
  );
}
