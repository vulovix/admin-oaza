import { PayloadAction, SagaResult, call, delay, put, takeLatest } from "@web/core/redux";
import { makeGetReq, makePatchReq, makePostReq, request } from "@web/core/request";

import { actions } from "./slice";
import { User } from "./types";

export function* register(action: PayloadAction<any>): SagaResult {
  try {
    console.log('saga', action.payload);
    const url = `/api/accounts/register`;
    yield call(request, url, makePostReq(action.payload));
    yield info();
  } catch (e) {
    console.log(e);
    yield put(actions.setLoading(false));
  }
}
export function* update(action: PayloadAction<any>): SagaResult {
  try {
    const url = `/api/accounts/update`;
    const response = yield call(request, url, makePatchReq(action.payload));
    yield put(actions.setUser(response));
  } catch (e) {
    yield put(actions.setLoading(false));
  }
}

export function* login(action: PayloadAction<any>): SagaResult {
  try {
    const url = `/api/accounts/login`;
    yield call(request, url, makePostReq(action.payload));
    yield info();
  } catch (e) {
    yield put(actions.setLoading(false));
  }
}

export function* logout(): SagaResult {
  try {
    const url = `/api/accounts/logout`;
    console.log('logout')
    yield call(request, url, makePostReq());
  } catch (e) {
    yield put(actions.setLoading(false));
  }
}

export function* info(): SagaResult {
  try {
    const url = `/api/accounts/info`;
    const user = (yield call(request, url, makeGetReq())) as User;
    yield put(actions.setUser(user));
  } catch (e) {
    yield put(actions.setLoading(false));
  } finally {
    yield delay(1000);
    yield put(actions.checkingInfoDone());
  }
}

export default function* repository() {
  yield takeLatest(actions.register.type, register);
  yield takeLatest(actions.update.type, update);
  yield takeLatest(actions.login.type, login);
  yield takeLatest(actions.logout.type, logout);
  yield takeLatest(actions.info.type, info);
}
