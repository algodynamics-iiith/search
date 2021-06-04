import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    paddingRight: "20px",
    overflowY: "scroll",
    borderRight: "1px solid black",
  },
});

const Instructions = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>Objective</h3>
        <p>
          Search for the target element in the list, which might be present. To
          search, randomly pick one item at a time from the list.
        </p>
      </div>
      <div>
        <h3>Experiment Setup</h3>
        <p>
          The Random Search Without Replacement experiment consists of a list of
          numbers which are hidden. You can click on any item/index to select
          it. You can not deselect any number. You can select all the items in
          succession.
        </p>
        <p>
          On selecting one item, you will be shown the number, and the
          background will indicate whether the number is the search target
        </p>
      </div>
      <div>
        <h3>Procedure</h3>
        <p>Follow the given steps to perform the experiment.</p>
        <p>Step 1: Select an item randomly from grey items.</p>
        <p>
          Step 2: Check if the number is the search Target.If not, then repeat
          step 1 and 2 again.
        </p>
      </div>
    </div>
  );
};

export default Instructions;
