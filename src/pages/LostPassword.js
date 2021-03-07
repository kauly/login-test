import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@components/Button";
import Layout from "@components/Layout";
import { Grid, Typography } from "@material-ui/core";

import { recoverAction } from "../services/actions";
import { AppContext } from "@components/AppState";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required field"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    width: "80%",
    textAlign: "center",
    "& .text": {
      marginBottom: "20px",
    },
    "& .btn": {
      marginTop: "20px",
    },
  },
}));

const LostPassword = () => {
  const classes = useStyles();
  const { recover, asyncDispatch } = React.useContext(AppContext);
  const { errors, handleSubmit, register } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const { loading } = recover;

  const _handleSubmit = (formData) => {
    asyncDispatch(recoverAction(formData));
  };

  return (
    <Layout>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          className={classes.form}
          component="form"
          onSubmit={handleSubmit(_handleSubmit)}
        >
          <Grid item xs={12} className="text">
            <Typography variant="h5">Recover Password</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              inputRef={register}
              helperText={errors.email?.message}
              error={!!errors.email}
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={12} className="btn">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
              loading={loading}
            >
              Recover
            </Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default LostPassword;
