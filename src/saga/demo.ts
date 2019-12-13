import { put, call, take, takeLeading } from "redux-saga/effects";
import { getLoginDetail } from "./service";
import { requestDataSuccess, requestDataFailure } from "../action/demoContent";
export function* fetchDogAsync() {
  try {
    yield take("DATA_START");
    const data1 = yield call(getLoginDetail);
    yield put(requestDataSuccess(data1));
  } catch (error) {
    yield put(requestDataFailure(error));
  }
}
