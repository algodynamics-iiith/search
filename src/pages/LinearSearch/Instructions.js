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
          search, linearly scan items from the list.
        </p>
      </div>
      <div>
        <h3>Experiment Setup</h3>
        <p>
          The Linear Search experiment consists of a list of numbers which are
          hidden. The 'Increment' control allows you to iterate through the
          list, starting from index 0 going upto the last element. You can scan
          all the items in succession.
        </p>
        <p>
          On clicking increment once, the index will be incremented, associated
          number will be shown, and the background will indicate whether the
          number is the search target
        </p>
      </div>
      <div>
        <h3>Procedure</h3>
        <p>Follow the given steps to perform the experiment.</p>
        <p>Step 1: Click Increment, to visit the leftmost unknown item.</p>
        <p>
          Step 2: Check if the number is the search Target.If not, then repeat
          step 1 and 2 again.
        </p>
      </div>
    </div>
  );
};

export default Instructions;
