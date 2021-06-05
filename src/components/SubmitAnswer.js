import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
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
import { actions as uiActions } from "../store/slices/ui";

const SubmitAnswer = (props) => {
  const [radioValue, setRadioValue] = useState("");

  useEffect(() => {
    setRadioValue("");
  }, [props.isOpen]);

  const handleClose = () => {
    props.hide();
  };

  return (
    <Dialog open={props.isOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Submit Answer</DialogTitle>
      <DialogContent>
        <RadioGroup
          value={radioValue}
          onChange={(e) => setRadioValue(e.target.value)}
        >
          <FormControlLabel value="found" control={<Radio />} label="Found" />
          <FormControlLabel
            value="notFound"
            control={<Radio />}
            label="Not Found"
          />
        </RadioGroup>
        {radioValue === "found" && (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Index of element"
            type="email"
            fullWidth
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
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
