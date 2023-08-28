import { PayloadAction, SagaResult, call, delay, put, takeLatest } from "@web/core/redux";
import { makeDeleteReq, makeGetReq, makePatchReq, makePostReq, request } from "@web/core/request";

import { actions } from "./slice";
import { Article, Category } from "./types";

export function* loadArticle(action: PayloadAction<string>): SagaResult {
  try {
    const url = `/api/articles/${action.payload}`;
    const response = (yield call(request, url, makeGetReq())) as Article;
    yield put(actions.loadArticleDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* updateArticle(action: PayloadAction<Article>): SagaResult {
  try {
    const { _id, ...payload } = action.payload;
    const url = `/api/articles/${_id}`;

    const categories = payload.categories.map(x => x._id);
    const response = (yield call(request, url, makePatchReq({...payload, categories}))) as Article;
    yield put(actions.updateArticleDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}


export function* removeArticle(action: PayloadAction<Article>): SagaResult {
  try {
    const _id = action.payload;
    const url = `/api/articles/${_id}`;

    const response = (yield call(request, url, makeDeleteReq())) as Article;
    yield put(actions.removeArticleDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}


export function* removeCategory(action: PayloadAction<Category>): SagaResult {
  try {
    const _id = action.payload;
    const url = `/api/categories/${_id}`;

    const response = (yield call(request, url, makeDeleteReq())) as Category;
    yield put(actions.removeCategoryDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* createArticle(action: PayloadAction<Article>): SagaResult {
  try {
    const url = `/api/articles`;
    const response = (yield call(request, url, makePostReq(action.payload))) as Article;
    yield put(actions.createArticleDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* loadArticles(): SagaResult {
  try {
    const url = `/api/articles`;
    const response = (yield call(request, url, makeGetReq())) as Array<Article>;
    yield put(actions.loadArticlesDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* loadCategory(action: PayloadAction<string>): SagaResult {
  try {
    const url = `/api/categories/${action.payload}`;
    const response = (yield call(request, url, makeGetReq())) as Category;
    yield put(actions.loadCategoryDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* loadCategories(): SagaResult {
  try {
    const url = `/api/categories`;
    const response = (yield call(request, url, makeGetReq())) as Array<Category>;
    yield put(actions.loadCategoriesDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* createCategory(action: PayloadAction<Article>): SagaResult {
  try {
    const url = `/api/categories`;
    const response = (yield call(request, url, makePostReq(action.payload))) as Category;
    yield put(actions.createCategoryDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* updateCategory(action: PayloadAction<Article>): SagaResult {
  try {
    const { _id, ...payload } = action.payload;
    const url = `/api/categories/${_id}`;

    const response = (yield call(request, url, makePatchReq({...payload}))) as Category;
    yield put(actions.updateCategoryDone(response));
  } catch (e) {
  } finally {
    yield put(actions.setLoading(false));
  }
}


export default function* repository() {
  yield takeLatest(actions.loadArticle.type, loadArticle);
  yield takeLatest(actions.loadCategory.type, loadCategory);
  yield takeLatest(actions.createArticle.type, createArticle);
  yield takeLatest(actions.createCategory.type, createCategory);
  yield takeLatest(actions.removeArticle.type, removeArticle);
  yield takeLatest(actions.removeCategory.type, removeCategory);
  yield takeLatest(actions.updateArticle.type, updateArticle);
  yield takeLatest(actions.updateCategory.type, updateCategory);
  yield takeLatest(actions.loadArticles.type, loadArticles);
  yield takeLatest(actions.loadCategories.type, loadCategories);
}
