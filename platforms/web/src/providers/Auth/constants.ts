import { AuthState } from "./types";

export const AUTH_SCOPE = "auth";
export const enum AppStatus {
  NotReady,
  Ready,
}
export const initialState: AuthState = {
  loading: false,
  appStatus: AppStatus.NotReady,
  user: null,
  error: null,
};
