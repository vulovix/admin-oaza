import { put, takeEvery, call, SagaResult, select } from "@web/core";
import { makePostReq, request } from "@web/core/request";
import { selectDeviceId } from "@web/slices/persisted/selectors";

import { selectMessages } from "./selectors";
import { actions } from "./slice";
import { Message } from "./types";

export function* promptHandler(): SagaResult {
  try {
    const url = `/api/ai/stream`;
    const messages: Array<Message> = yield select(selectMessages);
    const deviceId: string = yield select(selectDeviceId);
    const response = yield call(
      request,
      url,
      makePostReq({
        messages: messages.map(({ content, role }) => ({ content, role })),
        deviceId,
      }),
    );
    if (response) {
      yield put(actions.promptDone(response.message));
    }
  } catch (e) {
    //
  }
}

export default function* saga(): Generator<unknown> {
  yield takeEvery(actions.prompt.type, promptHandler);
}
