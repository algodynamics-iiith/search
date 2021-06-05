import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import { actions } from "../../store/slices/binarySearch";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 20px",
    width: "100%",
    textAlign: "center",
    height: "100%",
  },
  message: {},
  targetBox: {
    margin: "0 auto",
    padding: "15px 0",
    width: "200px",
    fontSize: "20px",
    backgroundColor: "rgb(213, 250, 252)",
  },
  list: {
    marginBottom: "20%",
    width: "100%",
  },
  node: {
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    position: "relative",
    marginRight: "25px",
  },
  numberContainer: {
    position: "relative",
    display: "inline-block",
    width: "90px",
    height: "90px",
    textAlign: "center",
    verticalAlign: "center",
    borderRadius: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  activeNumberContainer: {
    border: "3px solid black",
    width: "84px",
    height: "84px",
    backgroundColor: "rgb(243, 131, 106)",
  },
  blockedNumberContainer: {
    backgroundColor: "rgb(243, 131, 106)",
  },
  targetNumberContainer: {
    backgroundColor: "rgb(174, 213, 129)",
  },
  number: {
    visibility: "hidden",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "30px",
  },
  activeNumber: {
    visibility: "visible",
  },
  indexContainer: {
    borderRadius: "100%",
    width: "40px",
    height: "40px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "-60px",
    textAlign: "center",
  },
  activeIndexContainer: {
    border: "3px solid black",
  },
  index: {
    padding: "10px",
  },
}));

const Experiment = (props) => {
  const classes = useStyles();
  const experiment = props.experiment;

  const found = experiment.activeIndices.includes(
    experiment.list.indexOf(experiment.target)
  );

  useEffect(() => {
    props.reset();
  }, []);

  const handleSelect = (index) => {
    props.select(index);
  };

  const handleShowAll = () => {
    props.showAll();
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      justify="space-between"
    >
      <Grid item>
        <div className={classes.message}>{experiment.message}</div>
      </Grid>
      <Grid item>
        <div className={classes.targetBox}>
          Search Target: {experiment.target}
        </div>
      </Grid>
      <Grid item container>
        <div className={classes.list}>
          {experiment.list.map((number, index) => (
            <div className={classes.node} onClick={() => handleSelect(index)}>
              <div
                className={clsx(
                  classes.numberContainer,
                  experiment.activeIndices.includes(index) &&
                    classes.activeNumberContainer,
                  experiment.blockedIndices.includes(index) &&
                    classes.blockedNumberContainer,
                  experiment.activeIndices.includes(index) &&
                    number === experiment.target &&
                    classes.targetNumberContainer
                )}
              >
                <span
                  className={clsx(
                    classes.number,
                    experiment.activeIndices.includes(index) &&
                      classes.activeNumber
                  )}
                >
                  {number}
                </span>
              </div>
              <div
                className={clsx(
                  classes.indexContainer,
                  experiment.activeIndices.includes(index) &&
                    classes.activeIndexContainer
                )}
              >
                <div className={classes.index}>{index}</div>
              </div>
            </div>
          ))}
        </div>
        <Grid container>
          <Grid item xs={6} container alignItems="center" spacing={3}>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={handleShowAll}
                disabled={!found}
              >
                Show All
              </Button>
            </Grid>
            <Grid item>
              {found ? "Target found, See all hidden numbers to verify." : ""}
            </Grid>
          </Grid>
          <Grid item xs={6} container spacing={2} direction="row-reverse">
            <Grid item>
              <Button variant="contained" color="primary">
                Submit Answer
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={props.reset}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    experiment: state.binarySearch,
  };
};

const mapDispatchToProps = {
  select: actions.select,
  showAll: actions.showAll,
  reset: actions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Experiment);
