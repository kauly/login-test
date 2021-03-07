import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Snack from "./Snack";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  main: {
    background: "transparent",
    display: "grid",
    gridTemplateColumns: "38% auto",
    width: "85%",
    height: "80%",
    zIndex: 2,
    "& .item": {
      width: "100%",
      height: "100%",
    },
  },
  square: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "40%",
    height: "100%",
    background: theme.palette.primary.main,
    zIndex: 1,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.square} />
      <Paper className={classes.main} elevation={3}>
        <div className="item">teste</div>
        <div className="item">{children}</div>
      </Paper>
      <Snack />
    </div>
  );
};

export default Layout;
