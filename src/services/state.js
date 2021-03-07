import produce from "immer";

export const initialState = {
  login: {
    data: null,
    loading: false,
    error: null,
  },
  recover: {
    data: null,
    loading: false,
    error: null,
  },
  snack: {
    open: false,
    variant: "success",
    msg: "",
  },
};

export const TYPES = {
  SET_LOGIN_BEGIN: "SET_LOGIN_BEGIN",
  SET_LOGIN_SUCCESS: "SET_LOGIN_SUCCESS",
  SET_LOGIN_ERROR: "SET_LOGIN_ERROR",
  SET_RECOVER_BEGIN: "SET_RECOVER_BEGIN",
  SET_RECOVER_SUCCESS: "SET_RECOVER_SUCCESS",
  SHOW_SNACK: "SHOW_SNACK",
  CLOSE_SNACK: "CLOSE_SNACK",
};

export const appState = produce((draft, { type, payload }) => {
  switch (type) {
    case TYPES.SET_LOGIN_BEGIN: {
      draft.login.loading = true;
      draft.login.error = null;
      break;
    }
    case TYPES.SET_LOGIN_SUCCESS: {
      draft.login.loading = false;
      draft.login.data = payload;
      break;
    }
    case TYPES.SET_LOGIN_ERROR: {
      draft.login.loading = false;
      draft.login.error = payload;
      break;
    }
    case TYPES.SET_RECOVER_BEGIN: {
      draft.recover.loading = true;
      break;
    }
    case TYPES.SET_RECOVER_SUCCESS: {
      draft.recover.loading = false;
      draft.recover.data = payload;
      break;
    }
    case TYPES.SHOW_SNACK: {
      draft.snack.open = true;
      draft.snack.variant = payload.variant;
      draft.snack.msg = payload.msg;
      break;
    }
    case TYPES.CLOSE_SNACK: {
      draft.snack = { ...initialState.snack };
      break;
    }
  }
});
