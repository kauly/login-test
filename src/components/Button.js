import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    position: "relative",
  },
  buttonProgress: {
    animation: "none !important",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const ButtonLoading = ({ loading = false, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button disabled={loading} {...props}>
        {props.children}
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          className={classes.buttonProgress}
          color="secondary"
        />
      )}
    </div>
  );
};

export default ButtonLoading;
