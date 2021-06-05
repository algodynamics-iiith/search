import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Experiment from "./Experiment";
import Instructions from "./Instructions";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const BinarySearch = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} container>
        <Instructions />
      </Grid>
      <Grid item xs={8}>
        <Experiment />
      </Grid>
    </Grid>
  );
};

export default BinarySearch;
