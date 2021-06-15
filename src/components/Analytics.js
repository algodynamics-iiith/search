import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Divider,
} from "@material-ui/core";
import lodash from "lodash";

import * as api from "../api";
import { actions as uiActions } from "../store/slices/ui";

const useStyles = makeStyles({
  divider: {
    margin: "20px 0",
  },
  submissionTitle: {
    marginBottom: "20px",
  },
});

const Analytics = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const experimentKey = useSelector((state) => state.ui.selectedTab);
  const isOpen = useSelector((state) => state.ui.showAnalyticsModal);
  const [submissions, setSubmissions] = useState([
    { k1: "v1", k2: "v2", time: Date.now() },
  ]);

  useEffect(() => {
    (async () => {
      const data = await api.fetch(experimentKey);
      setSubmissions(data);
    })();
  }, [isOpen]);

  const handleClose = () => {
    dispatch(uiActions.setShowAnalyticsModal(false));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Analytics</DialogTitle>
      <DialogContent>
        {submissions.map((s, idx) => (
          <>
            <Grid
              container
              justify="space-between"
              className={classes.submissionTitle}
            >
              <Grid md={6}>Submission #{idx + 1}</Grid>
              <Grid>{s.time}</Grid>
            </Grid>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {Object.entries(s)
                    .filter(([k, v]) => k !== "time")
                    .map(([k, v]) => (
                      <TableRow>
                        <TableCell>{lodash.startCase(k)}</TableCell>
                        <TableCell>{v}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Divider className={classes.divider} />
          </>
        ))}
        {submissions.length === 0 && <p>No submissions found</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Analytics;
