import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: "16px 160px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1>Introduction</h1>
        <p>
          Understanding algorithms, even simple ones, can be challenging.
          Reading through the pseudo-code or actual code written in some
          programming language and tracing the execution line-by-line makes it
          difficult to grasp the core concepts of the algorithm.
        </p>
        <p>
          Therefore, we are presenting an alternate way to learn algorithms.
          Using the example of Search, we will demonstrate a systematic way of
          learning algorithms using transition systems.
        </p>
        <p>
          The Binary Search algorithm is introduced gradually through four
          different experiments. Each experiment introduces just one new
          concept, and lets you interactively learn that concept while
          performing the given task. By the time you reach the final stage, you
          will be presented with the final algorithm, which you can step through
          at your own pace, visualising each every step involved.
        </p>
      </div>
      <div>
        <h1>Interactive Abstract Machines for Search</h1>
        <ol>
          <li>Random Search With Replacement</li>
          <li>Random Search Without Replacement</li>
          <li>Linear Search</li>
          <li>Binary Search</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
