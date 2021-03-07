import * as React from "react";
import { appState, initialState } from "../services/state";

export const AppContext = React.createContext();

const wrapAsync = (dispatch) => (action) => {
  if (typeof action === "function") {
    return action(dispatch);
  }
  return dispatch(action);
};

const AppState = ({ children }) => {
  const [state, dispatch] = React.useReducer(appState, initialState);
  const asyncDispatch = React.useMemo(() => wrapAsync(dispatch), [dispatch]);
  const { login, recover, snack } = state;

  return (
    <AppContext.Provider
      value={{
        login,
        recover,
        snack,
        asyncDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
