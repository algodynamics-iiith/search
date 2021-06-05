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
          Search for the target element in the sorted/ordered list, which might
          be present. To search, use binary search strategy.
        </p>
      </div>
      <div>
        <h3>Experiment Setup</h3>
        <p>
          The Binary Search experiment consists of a list of numbers which are
          hidden. The selectable items are in "GREY". You can select atmost
          log(N) items from the list in succession. At the end of the process,
          you will be able to verify the process using the "Show All" control
          button.
        </p>
        <p>
          On clicking one item, the selectable array will be changed according
          to the chosen index, associated number will be shown. The elements
          Left/Right to the chosen index will become non selectable. Non
          selectable items will be shown in "RED" and the background will
          indicate whether the number is the search target.
        </p>
      </div>
      <div>
        <h3>Procedure</h3>
        <p>Follow the given steps to perform the experiment.</p>
        <p>Step 1: Select an item from the grey items.</p>
        <p>
          Step 2: Check if the number is the search Target.If not, then repeat
          step 1 and 2 again.
        </p>
      </div>
    </div>
  );
};

export default Instructions;
