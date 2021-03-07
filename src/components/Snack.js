import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";

import { AppContext } from "./AppState";
import { closeSnack } from "../services/actions";

const Snack = () => {
  const { snack, asyncDispatch } = React.useContext(AppContext);
  const { open, variant, msg } = snack;

  const _handleClose = () => asyncDispatch(closeSnack());

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={_handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        severity={variant}
        style={{
          minWidth: 250,
        }}
      >
        <AlertTitle
          style={{
            textTransform: "capitalize",
          }}
        >
          {variant}
        </AlertTitle>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Snack;
