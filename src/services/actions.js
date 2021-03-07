import { handleLogin, handleRecover } from "./api";
import { TYPES } from "./state";

export const showSnack = (payload) => ({ type: TYPES.SHOW_SNACK, payload });
export const closeSnack = () => ({ type: TYPES.CLOSE_SNACK });

export const loginAction = (creds) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOGIN_BEGIN });
    const { success, data } = await handleLogin(creds);

    dispatch({ type: TYPES.SET_LOGIN_SUCCESS, payload: data });
    dispatch(
      showSnack({
        variant: success ? "success" : "error",
        msg: data,
      })
    );
  } catch (err) {
    console.error("Error login: ", err);
    dispatch({ type: TYPES.SET_LOGIN_ERROR, payload: err });
  }
};

export const recoverAction = (creds) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_RECOVER_BEGIN });
    const { success, data } = await handleRecover(creds);

    dispatch({ type: TYPES.SET_RECOVER_SUCCESS, payload: data });
    dispatch(
      showSnack({
        variant: success ? "success" : "error",
        msg: data,
      })
    );
  } catch (err) {
    console.error("Error recover: ", err);
    dispatch({ type: TYPES.SET_LOGIN_ERROR, payload: err });
  }
};
