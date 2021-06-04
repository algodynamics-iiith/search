import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: "12px 24px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Search</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
