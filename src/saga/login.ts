import { put, call, take, takeLeading } from "redux-saga/effects";
import { getPost } from "./service";
import { getProfileStart, getProfileSuccess } from "../action/loginContent";
const POST_START = "POST_START";

export function* getProfile() {
  yield takeLeading(getProfileStart, function* getProfileFn(action) {
    try {
      const data = yield call(getPost, action.payload);
      yield put(getProfileSuccess(data.data));
    } catch (error) {}
  });
}
