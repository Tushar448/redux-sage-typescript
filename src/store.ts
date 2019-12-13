import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer";
import { ICharacter } from "./constant/character";
import { fork, takeLatest, takeLeading } from "redux-saga/effects";
import { getDemo } from "./saga/service";
import { fetchDogAsync } from "./saga/demo";
import { getProfile } from "./saga/login";
function* handleClick() {
  yield takeLeading("DATA_START", getDemo);
}

function* handleDemo() {
  yield takeLatest("DEMO_START", getDemo);
}

export interface dataExport {
  data: [];
}

function* rootSaga() {
  yield fork(fetchDogAsync);
  yield fork(getProfile);
  // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
