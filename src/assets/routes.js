import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import LostPassword from "../pages/LostPassword";

export const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/login",
  },
  {
    path: "/lost-password",
    exact: true,
    component: LostPassword,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];

const Router = () => (
  <Switch>
    {routes.map((route) =>
      route.redirect ? (
        <Redirect
          from={route.path}
          to={route.redirect}
          exact
          key={route.path}
        />
      ) : (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      )
    )}
  </Switch>
);

export default Router;
