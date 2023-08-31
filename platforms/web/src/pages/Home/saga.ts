import { put, takeEvery, call, SagaResult, delay, PayloadAction } from "@web/core/redux";
import { makeGetReq, request } from "@web/core/request";

import { actions } from "./slice";

export function* loadArticles(): SagaResult {
  try {
    const url = `/api/articles/public`;
    const response = yield call(
      request,
      url,
      makeGetReq(),
    );
    // yield delay(2000);
    yield put(actions.loadArticlesDone(response));
  } catch (e) {
    yield put(actions.loadArticlesFailed());
  }
}

export function* loadCategories(): SagaResult {
  try {
    const url = `/api/categories/public`;
    const response = yield call(
      request,
      url,
      makeGetReq(),
    );
    yield put(actions.loadCategoriesDone(response));
  } catch (e) {
    yield put(actions.loadCategoriesFailed());
  }
}

export function* loadArticlesByCategoryId(action: PayloadAction<string>): SagaResult {
  try {
    const url = `/api/articles/public/categories/${action.payload}`;
    const response = yield call(
      request,
      url,
      makeGetReq(),
    );
    yield put(actions.loadArticlesByCategoryIdDone(response));
  } catch (e) {
    yield put(actions.loadArticlesByCategoryIdFailed());
  }
}

export function* loadArticleById(action: PayloadAction<string>): SagaResult {
  try {
    const url = `/api/articles/public/${action.payload}`;
    const response = yield call(
      request,
      url,
      makeGetReq(),
    );
    yield put(actions.loadArticleByIdDone(response));
  } catch (e) {
    yield put(actions.loadArticleByIdFailed());
  }
}



export default function* saga(): Generator<unknown> {
  yield takeEvery(actions.loadArticles.type, loadArticles);
  yield takeEvery(actions.loadCategories.type, loadCategories);
  yield takeEvery(actions.loadArticlesByCategoryId.type, loadArticlesByCategoryId);
  yield takeEvery(actions.loadArticleById.type, loadArticleById);

}
