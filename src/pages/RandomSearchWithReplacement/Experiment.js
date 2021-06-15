import { Button, Grid, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import * as api from "../../api";

import { actions } from "../../store/slices/randomSearchWithReplacement";
import { actions as uiActions } from "../../store/slices/ui";
import { actionLog } from "../../store/middleware/analytics";
import * as utils from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 20px",
    width: "100%",
    textAlign: "center",
    height: "100%",
  },
  message: {
    margin: "0 auto",
    width: "70%",
    fontSize: "20px",
  },
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

const Experiment = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const experimentKey = useSelector((state) => state.ui.selectedTab);
  const experiment = useSelector((state) => state[experimentKey]);

  useEffect(() => {
    const data = utils.generateRandomListAndTarget();
    dispatch(
      actions.init({
        list: data[0],
        target: data[1],
      })
    );
  }, []);

  const handleSelect = (index) => {
    dispatch(actions.select(index));
  };

  const handleAnalytics = () => {
    dispatch(uiActions.setShowAnalyticsModal(true));
  };

  const handleReset = () => {
    dispatch(actions.reset());
  };

  const handleSubmit = async () => {
    await api.submit(experimentKey, actionLog);
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      justify="space-between"
    >
      <Grid item>
        <Alert
          className={classes.message}
          variant="filled"
          severity="warning"
          icon={<></>}
        >
          {experiment.message}
        </Alert>
      </Grid>
      <Grid item>
        <div className={classes.targetBox}>
          Search Target: {experiment.target}
        </div>
      </Grid>
      <Grid item container>
        <div className={classes.list}>
          {experiment.list.map((number, index) => (
            <div
              key={index}
              className={classes.node}
              onClick={() => handleSelect(index)}
            >
              <div
                className={clsx(
                  classes.numberContainer,
                  index === experiment.activeIndex &&
                    classes.activeNumberContainer,
                  index === experiment.activeIndex &&
                    number === experiment.target &&
                    classes.targetNumberContainer
                )}
              >
                <span
                  className={clsx(
                    classes.number,
                    index === experiment.activeIndex && classes.activeNumber
                  )}
                >
                  {number}
                </span>
              </div>
              <div
                className={clsx(
                  classes.indexContainer,
                  index === experiment.activeIndex &&
                    classes.activeIndexContainer
                )}
              >
                <div className={classes.index}>{index}</div>
              </div>
            </div>
          ))}
        </div>
        <Grid container justify="space-between">
          <Grid item>
            <Button variant="contained" onClick={handleAnalytics}>
              Analytics
            </Button>
          </Grid>
          <Grid item md={6} container spacing={2} direction="row-reverse">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experiment;
