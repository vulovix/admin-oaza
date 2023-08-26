import { IRootState, createSelector } from "@web/core/redux";

import { initialState, AUTH_SCOPE } from "./constants";
import { AuthState } from "./types";

export const getAuthState = (state: IRootState): AuthState => state?.[AUTH_SCOPE] || initialState;

export const selectAuthUser = createSelector(getAuthState, (state: AuthState) => state.user);

export const selectAuthLoading = createSelector(getAuthState, (state: AuthState) => state.loading);

export const selectIsLoggedIn = createSelector(getAuthState, (state: AuthState) => !!state.user);

export const selectAppStatus = createSelector(getAuthState, (state: AuthState) => state.appStatus);

export const selectAuthError = createSelector(getAuthState, (state: AuthState) => state.error);
