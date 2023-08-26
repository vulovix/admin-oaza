import { PayloadAction, createSlice } from "@web/core";

import { AUTH_SCOPE, initialState, AppStatus } from "./constants";
import { User } from "./types";

const slice = createSlice({
  name: AUTH_SCOPE,
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      state.error = null;
      state.loading = true;
    },
    logout(state) {
      state.error = null;
      state.user = null;
    },
    register(state, action: PayloadAction<any>) {
      // state.loading = true;
    },
    update(state, action: PayloadAction<any>) {
      // state.loading = true;
    },
    info(state) {
      state.appStatus = AppStatus.NotReady;
      state.loading = true;
    },
    checkingInfoDone(state) {
      state.appStatus = AppStatus.Ready;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.error = null;
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
