import { AppStatus } from "./constants";

export interface User {
  username: string;
  gender: string;
  avatar: string;
  coins: number;
  authority: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthState {
  loading: boolean;
  user: null | User;
  appStatus: AppStatus;
  error: null | Error;
}
