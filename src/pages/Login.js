import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@components/Button";
import Layout from "@components/Layout";
import { Grid, Typography } from "@material-ui/core";

import { loginAction } from "../services/actions";
import { AppContext } from "@components/AppState";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required field"),
  password: yup.string().required("Required field"),
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
  help: {
    display: "inline",
    position: "absolute",
    top: 10,
    right: 20,
    fontWeight: 500,
    fontFamily: "Roboto",
    fontSize: 15,
    "& a": {
      color: "#000",
      textDecoration: "none",
      "&:visited, &:active": {
        color: "#000 !important",
      },
      "&:hover": {
        textDecoration: "underline",
      },
    },
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
    "& .forgot": {
      display: "flex",
      justifyContent: "flex-end",
      fontWeight: 500,
      fontFamily: "Roboto",
      fontSize: 15,
      paddingTop: 4,
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const hst = useHistory();
  const { login, asyncDispatch } = React.useContext(AppContext);
  const { errors, handleSubmit, register } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const { loading } = login;

  const _handleSubmit = (formData) => {
    asyncDispatch(loginAction(formData));
  };

  const _handleRecover = () => hst.push("/lost-password");

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.help}>
          <a
            href="https://click.pstmrk.it/2s/www.lipsum.com%2Ffeed%2Fhtml/wmxJTyAN/Gc9Q/H5vxf8qJfE"
            target="_blank"
          >
            Need help?
          </a>
        </div>
        <Grid
          container
          spacing={3}
          className={classes.form}
          component="form"
          onSubmit={handleSubmit(_handleSubmit)}
        >
          <Grid item xs={12} className="text">
            <Typography variant="h5">Log in</Typography>
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
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              inputRef={register}
              helperText={errors.password?.message}
              error={!!errors.password}
              fullWidth
            />
            <div className="forgot" onClick={_handleRecover}>
              forgot password?
            </div>
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
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Login;
