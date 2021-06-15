import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

import * as api from "../api";
import { actions as uiActions } from "../store/slices/ui";
import { actionLog } from "../store/middleware/analytics";

const SubmitAnswer = (props) => {
  const experimentKey = useSelector((state) => state.ui.selectedTab);
  const [radioValue, setRadioValue] = useState("");

  useEffect(() => {
    setRadioValue("");
  }, [props.isOpen]);

  const handleClose = () => {
    props.hide();
  };

  const handleSubmit = async () => {
    await api.submit(experimentKey, actionLog);
    handleClose();
  };

  return (
    <Dialog open={props.isOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Submit Answer</DialogTitle>
      <DialogContent>
        <RadioGroup
          value={radioValue}
          onChange={(e) => setRadioValue(e.target.value)}
        >
          <FormControlLabel
            value="found"
            control={<Radio />}
            label="Search target found"
          />
          <FormControlLabel
            value="notFound"
            control={<Radio />}
            label="Search target not found"
          />
        </RadioGroup>
        {radioValue === "found" && (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Index of search target"
            type="email"
            fullWidth
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.ui.showSubmitModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => dispatch(uiActions.setShowSubmitModal(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAnswer);
