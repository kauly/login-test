import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as RouterProvider } from "react-router-dom";

import theme from "@assets/theme";
import Router from "@assets/routes";
import AppProvider from "@components/AppState";

const App = () => (
  <RouterProvider>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ThemeProvider>
  </RouterProvider>
);

export default App;
